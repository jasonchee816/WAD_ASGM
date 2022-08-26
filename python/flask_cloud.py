import sqlite3
from flask import Flask, jsonify, request, abort
from argparse import ArgumentParser
from datetime import date


DB = 'LMEO.sqlite'

def get_order_row_as_dict(row):
    row_dict = {
        'id': row[0],
        'order_datetime': row[1],
        'member_id': row[2],
        'total_price': '{:.2f}'.format(row[3])
    }

    return row_dict

def get_items_row_as_dict(row):
    row_dict = {
        'item_name': row[0],
        'quantity': row[1],
        'price': '{:.2f}'.format(row[2])
    }

    return row_dict

def get_cart_row_as_dict(row):
    row_dict = {
        'item_id': row[0],
        'quantity': row[1],
    }

    return row_dict

def get_member_as_dict(row):
    row_dict = {
        'user_id': row[0],
        'email': row[1],
    }

    return row_dict

    


app = Flask(__name__)

@app.route('/api/memberCP', methods=['PUT'])
def changePassword():

    if not request.json:
        abort(404)

    member_info = (
        request.json['password'],
        request.json['user_id'],   
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()
    cursor.execute('UPDATE members SET password = ? WHERE user_id =?', member_info)

    
    db.commit()
    response = {
        'affected': db.total_changes,
    }
    db.close()

    return jsonify(response), 201


@app.route('/api/orders/<int:member>', methods=['GET'])
def show(member):
    db = sqlite3.connect(DB)
    cursor = db.cursor()
    cursor.execute('SELECT * FROM orders WHERE member_id=?', (str(member),))
    rows = cursor.fetchall()
    db.close()

    if rows:
        rows_as_dict = []
        for row in rows:
            row_as_dict = get_order_row_as_dict(row)
            rows_as_dict.append(row_as_dict)
        return jsonify(rows_as_dict), 200
    else: 
        return jsonify(None), 200

@app.route('/api/member', methods=['POST'])
def checkMemberValid():

    if not request.json:
        abort(404)

    member_info = (
        request.json['email'],
        request.json['password'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()
    cursor.execute('SELECT user_id, email FROM members WHERE email=? AND password =?', member_info)
    row = cursor.fetchone()
    db.close()

    if row:
        row_as_dict = get_member_as_dict(row)
        return jsonify(row_as_dict), 200
    else:
        return jsonify(None), 200

@app.route('/api/Insertmember', methods=['POST'])
def add_user():
    if not request.json:
        abort(404)

    member_info = (
        request.json['email'],
        request.json['password'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        INSERT INTO members(email, password)
        VALUES(?,?)
    ''', member_info)

    user_id = cursor.lastrowid
    db.commit()

    response = {
        'id': user_id,
        'affected': db.total_changes,

    }

    db.close()

    return jsonify(response), 201

@app.route('/api/order/<int:order_id>', methods=['GET'])
def getOrderDetail(order_id):
    db = sqlite3.connect(DB)
    cursor = db.cursor()
    cursor.execute('SELECT item_name, quantity, price FROM order_item WHERE order_id=?', (str(order_id),))
    rows = cursor.fetchall()
    db.close()

    if rows:
        rows_as_dict = []
        for row in rows:
            row_as_dict = get_items_row_as_dict(row)
            rows_as_dict.append(row_as_dict)
        return jsonify(rows_as_dict), 200
    else: 
        return jsonify(None), 200

@app.route('/api/cart/<int:user_id>', methods=['GET'])
def getCartDetail(user_id):
    db = sqlite3.connect(DB)
    cursor = db.cursor()
    cursor.execute('SELECT item_id, quantity FROM cart_items WHERE user_id=?', (str(user_id),))
    rows = cursor.fetchall()
    db.close()

    if rows:
        rows_as_dict = []
        for row in rows:
            row_as_dict = get_cart_row_as_dict(row)
            rows_as_dict.append(row_as_dict)
        return jsonify(rows_as_dict), 200
    else: 
        return jsonify(None), 200

@app.route('/api/deleteCart', methods=['DELETE'])
def delete():
    if not request.json:
        abort(400)

    if 'user_id' not in request.json:
        abort(400)

    if 'item_id' not in request.json:
        abort(400)

    delete_item = (
        request.json['user_id'],
        request.json['item_id'],
    )
    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('DELETE FROM cart_items WHERE user_id=? AND item_id=?', delete_item)

    db.commit()

    response = {
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201

@app.route('/api/updateQty', methods=['PUT'])
def update():
    if not request.json:
        abort(400)

    if 'user_id' not in request.json:
        abort(400)

    if 'quantity' not in request.json:
        abort(400)

    if 'item_id' not in request.json:
        abort(400)

    update_quantity = (
        request.json['quantity'],
        request.json['user_id'],
        request.json['item_id'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        UPDATE cart_items SET
            quantity=?
        WHERE user_id=? AND item_id=?
    ''', update_quantity)

    db.commit()

    response = {
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201


@app.route('/api/orders', methods=['POST'])
def add_order():
    if not request.json:
        abort(404)

    new_order = (
        request.json['order_datetime'],
        request.json['member_id'],
        request.json['total_price'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        INSERT INTO orders(order_datetime, member_id, total_price)
        VALUES(?,?,?)
    ''', new_order)

    order_id = cursor.lastrowid

    db.commit()

    response = {
        'id': order_id,
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201

@app.route('/api/addCart', methods=['POST'])
def add_cart():
    if not request.json:
        abort(404)

    new_cart = (
        request.json['user_id'],
        request.json['item_id'],
        request.json['item_name'],
        request.json['price'],
        request.json['quantity'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        INSERT INTO cart_items(user_id, item_id, quantity)
        VALUES(?,?,?)
    ''', new_cart)

    item_id = cursor.lastrowid

    db.commit()

    response = {
        'id': item_id,
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201


@app.route('/api/addOrder', methods=['POST'])
def add_orderPrice():
    if not request.json:
        abort(404)

    today = date.today()

    new_order = (
        today,
        request.json['member_id'],
        request.json['total_price'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        INSERT INTO orders(order_datetime, member_id, total_price)
        VALUES(?,?,?)
    ''', new_order)

    order_id = cursor.lastrowid

    db.commit()

    response = {
        'id': order_id,
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201


@app.route('/api/addOrderItem', methods=['POST'])
def add_orderItem():
    if not request.json:
        abort(404)

    new_orderItem = (
        request.json['order_id'],
        request.json['item_id'],
        request.json['quantity'],
    )

    db = sqlite3.connect(DB)
    cursor = db.cursor()

    cursor.execute('''
        INSERT INTO order_item(order_id, item_id, quantity)
        VALUES(?,?,?)
    ''', new_orderItem)

    db.commit()

    response = {
        'affected': db.total_changes,
    }

    db.close()

    return jsonify(response), 201
# @app.route('/api/members/<int:member>', methods=['PUT'])
# def update(member):
#     if not request.json:
#         abort(400)

#     if 'id' not in request.json:
#         abort(400)

#     if int(request.json['id']) != member:
#         abort(400)

#     update_member = (
#         request.json['name'],
#         request.json['email'],
#         request.json['phone'],
#         request.json['address'],
#         request.json['postcode'],
#         request.json['city'],
#         request.json['state'],
#         str(member),
#     )

#     db = sqlite3.connect(DB)
#     cursor = db.cursor()

#     cursor.execute('''
#         UPDATE members SET
#             name=?,email=?,phone=?,address=?,postcode=?,city=?,state=?
#         WHERE id=?
#     ''', update_member)

#     db.commit()

#     response = {
#         'id': member,
#         'affected': db.total_changes,
#     }

#     db.close()

#     return jsonify(response), 201


# @app.route('/api/members/<int:member>', methods=['DELETE'])
# def delete(member):
#     if not request.json:
#         abort(400)

#     if 'id' not in request.json:
#         abort(400)

#     if int(request.json['id']) != member:
#         abort(400)

#     db = sqlite3.connect(DB)
#     cursor = db.cursor()

#     cursor.execute('DELETE FROM members WHERE id=?', (str(member),))

#     db.commit()

#     response = {
#         'id': member,
#         'affected': db.total_changes,
#     }

#     db.close()

#     return jsonify(response), 201


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=5000, type=int, help='port to listen on')
    args = parser.parse_args()
    port = args.port

    app.run(host='0.0.0.0', port=port)