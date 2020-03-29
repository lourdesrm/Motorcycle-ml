import os
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

app = Flask(__name__)

def load_model():
    global model
    with open('../../model/model.pkl', 'rb') as f:
        model = pickle.load(f)
        print("model loaded")

def process_input(data):
    
    # add empty keys for dummy-encoded property areas
    data['Male'] = 0
    data['Female']=0
    data['Gender Neutral'] = 0
    data['January'] = 0
    data['February'] = 0
    data['March'] = 0
    data['April'] = 0
    data['May'] = 0
    data['June'] = 0
    data['July'] = 0
    data['August'] = 0
    data['September'] = 0
    data['October'] = 0
    data['November'] = 0
    data['December'] = 0
    data['Sunday'] = 0
    data['Monday'] = 0
    data['Tuesday'] = 0
    data['Wednesday'] = 0
    data['Thursday'] = 0
    data['Friday'] = 0
    data['Saturday'] = 0
    data['No Drugs'] = 0
    data['Drug Use Reported'] = 0
    data['No Drinking'] = 0
    data['Drinking Reported'] = 0
    data['Clear Weather'] = 0
    data['Rainy Weather'] = 0
    data['Foggy Weather'] = 0
    data['Severly Windy Weather'] = 0
    data['Blowing Sand Weather'] = 0
    data['Other Weather'] = 0
    data['Cloudy Weather'] = 0

    # convert to dataframe for easy processing
    df = pd.DataFrame([data])

    # create mapping dictionaries
    helmet_value = {'Yes' : 0, 'No' : 1}

    # perform mapping of values
    df.replace({'Helmet Use': helmet_value, inplace=True)

    # map the dummy variables to the appropriate encoded column
    gender_value = df['Gender']
    drugs_value = df['Drugs']
    alcohol_value = df['Alcohol']
    month_value = df['Month']
    weekday_value = df['Weekday']
    weather_value = df['Weather']

    df[gender_value] = 1
    df[drugs_value] = 1
    df[alcohol_value] = 1
    df[month_value] = 1
    df[weekday_value] = 1
    df[weather_value] = 1

    # drop the dummy variable fields
    df = df.drop('Gender','Drugs','Alcohol','Month','Weekday','Weather' axis=1)

    return df

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        input_data = request.form.to_dict()
        data = process_input(input_data)
        value = model.predict(data)
        return render_template('index.html', result=value)

    return render_template('index.html')

if __name__ == "__main__":
    load_model()
    app.run(debug=True)