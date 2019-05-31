from flask import Flask, render_template, request, Response, jsonify
from db_conn import insert_into_db, resetMap, getDatafromDB
import json

app = Flask(__name__)
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/save/")
def submit():
#    sub = {"id":"2"}
#    sub = ["What am", "I doing?"]
    sub = insert_into_db()
    return Response(json.dumps(sub), mimetype = "application/json")

@app.route("/save/<lastname>/<name>/<insurNr>/<insurName>/")
def saveData(name,lastname,insurNr,insurName):
    dat = insert_into_db("insert_patientdata", (lastname,name,insurNr,insurName))
    #return Response(json.dumps(dat), mimetype = "application/json")
    return jsonify("data submitted!")

@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      result = request.form
      return render_template("result.html",result = result)





@app.route("/getData/")
def getTableData():
    dat = getDatafromDB()
    return Response(json.dumps(dat), mimetype = "application/json")
    print("dat")

@app.route("/reset/")
def reset():
#    res = {"id":"3"}
    res = resetMap()
    return jsonify("map reseted!")
#    return Response(json.dumps(res), mimetype = "application/json")

if __name__ == "__main__":
    app.run(debug = True)
    app.run(host='0.0.0.0', port=80)