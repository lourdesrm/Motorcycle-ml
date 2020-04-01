import os
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

app = Flask(__name__)

def load_model():
    global month_model
    with open('../model/month_model.pkl', 'rb') as f:
        month_model = pickle.load(f)
        print("month_model loaded")

    global weekday_model
    with open('../model/weekday_model.pkl', 'rb') as f:
        weekday_model = pickle.load(f)
        print("weekday_model loaded")

def process_input(data, date_type):
    
    if date_type=='month':
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

    else:

        data['Sunday'] = 0
        data['Monday'] = 0
        data['Tuesday'] = 0
        data['Wednesday'] = 0
        data['Thursday'] = 0
        data['Friday'] = 0
        data['Saturday'] = 0

    # add empty keys for dummy-encoded property areas
    data['Male'] = 0
    data['Female']=0
    data['Gender Neutral'] = 0
    data['No Drugs'] = 0
    data['Drug Use Reported'] = 0
    data['No Drinking'] = 0
    data['Drinking Reported'] = 0
    data['Clear Weather'] = 0
    data['Rainy Weather'] = 0
    data['Foggy Weather'] = 0
    data['Severly Windy Weather'] = 0
    data['Blowing Sand Weather'] = 0

    # convert to dataframe for easy processing
    df = pd.DataFrame([data])

    # create mapping dictionaries
    helmet_value = {'Yes' : 0, 'No' : 1}

    # perform mapping of values
    df.replace({'Helmet Use': helmet_value}, inplace=True)

    # map the dummy variables to the appropriate encoded column
    gender_value = df['Gender']
    drugs_value = df['Drugs']
    alcohol_value = df['Alcohol']
    # month_value = df['Month']
    #weekday_value = df['Weekday']
    weather_value = df['Weather']

    df[gender_value] = 1
    df[drugs_value] = 1
    df[alcohol_value] = 1
    # df[month_value] = 1
    #df[weekday_value] = 1
    df[weather_value] = 1

    # drop the dummy variable fields
    df = df.drop(['Gender','Drugs','Alcohol','Weather'], axis=1)

    return df

# # create route that renders index.html template
# @app.route("/")
# def home():
#     return render_template("index.html")

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        input_data = request.form.to_dict()
        month_list = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August','September','October','November','December']
        weekday_list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
        
        
        # add the type of model
        data_month = process_input(data = input_data, date_type="month")

        day_inj_rtgs = []
        day_dth_rtgs = []
        day_safe_rtgs = []

        month_inj_rtgs = []
        month_dth_rtgs = []
        month_safe_rtgs = []


        # MONTHLY RESULTS
        for month in month_list :
            data_month[month_list] = 0
            data_month[month] = 1
            results = month_model.predict_proba(data_month)
            month_safe_rtgs.append({month:results[0][0]})
            month_inj_rtgs.append({month:results[0][1]})
            month_dth_rtgs.append({month:results[0][2]})

        # DAILY RESULTS
        input_data = request.form.to_dict()
        data_daily = process_input(data = input_data, date_type="daily")
        for wkd in weekday_list :
            data_daily[weekday_list] = 0
            data_daily[wkd] = 1
            results = weekday_model.predict_proba(data_daily)
            day_safe_rtgs.append({wkd:results[0][0]})
            day_inj_rtgs.append({wkd:results[0][1]})
            day_dth_rtgs.append({wkd:results[0][2]})

        return jsonify({"daily":{"Injury": day_inj_rtgs, "Death": day_dth_rtgs, "Safe": day_safe_rtgs},
                        "monthly":{"Injury": month_inj_rtgs, "Death": month_dth_rtgs, "Safe": month_safe_rtgs}}
        )

    return render_template('index.html')

if __name__ == "__main__":
    load_model()
    app.run(debug=True)