import mysql.connector
connection = mysql.connector.connect(
    host ='localhost',
    user='root',
    password='',
    database='asagohan'
)

cursor = connection.cursor()

username =input("name :")
password =input("password :")

cursor.execute('INSERT INTO profile (name,password) VALUES (%s,%s)',(username,password))

connection.commit()

connection.close()