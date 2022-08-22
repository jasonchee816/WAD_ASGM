import sqlite3
import os

full_sql_file_path = os.getcwd() + '\database\initializeDatabase.sql'

try:
    db = sqlite3.connect('FoodOrderingApp.db') #Database name
    cursor = db.cursor()
    print("Database created and Successfully Connected to SQLite")
	
    with open(full_sql_file_path, 'r') as sqlite_file:
        sql_script = sqlite_file.read()
    cursor.executescript(sql_script) # Execute all sql statements at once

    print("SQLite script executed successfully")
    cursor.close()
    db.commit()
    db.close()

except sqlite3.Error as error:
    print("Error while connecting to sqlite", error)

finally:
    if db:
        db.close()
        print("The SQLite connection is closed.")
