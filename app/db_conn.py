
import psycopg2
from psycopg2.extras import RealDictCursor

#try:
#    conn = psycopg2.connect(dbname="postgres", user="postgres", host="192.168.70.134", port="9876", password="postgres")
#    print(conn)
#except Exception as e:
#    print ("\n no f**kin' connection! \n what else can i say?")
#    print(e)

lastname = 'Doe'
name = 'John'
insurance_nr = 'A12345'
insurance_name = 'ABC'

#conn_str = psycopg2.connect(dbname='postgres', user='postgres', host='192.168.70.134', port='54322', password='postgres')"

def insertIntoDB(function = "insert_patientdata", params=(lastname, name, insurance_nr, insurance_name)):
    connect = psycopg2.connect(dbname='otm', user='postgres', host='163.172.133.143', port='9876', password='postgres')
    cur = connect.cursor()
    cur.execute("select insert_patientdata(%s,%s,%s,%s)", params)
    connect.commit()
    connect.close()
    print (params)

def getDatafromDB():
    connect = psycopg2.connect(dbname='otm', user='postgres', host='163.172.133.143', port='9876', password='postgres')
    cur = connect.cursor(cursor_factory = RealDictCursor)
    cur.execute("select id, name, vorname from patienten")
    data = cur.fetchall()
    connect.commit()
    connect.close()
    return data
    #print(data)

def getInsurData():
    connect = psycopg2.connect(dbname='otm', user='postgres', host='163.172.133.143', port='9876', password='postgres')
    cur = connect.cursor(cursor_factory = RealDictCursor)
    cur.execute("select count(*) as sum, versicherung from patienten group by versicherung")
    insurdata = cur.fetchall()
    connect.commit()
    connect.close()
    return insurdata


def resetMap(function = "landbook.reset_rawdata"):
    connect = psycopg2.connect(dbname='postgres', user='postgres', host='163.172.133.143', port='54329', password='postgres')
    cur = connect.cursor()
    cur.execute("select landbook.reset_rawdata()")
    connect.commit()
    connect.close()
    print ("start by zero")

