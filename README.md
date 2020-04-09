# Motorcycle Safety Genius

![motorcycle](https://cdn.shopify.com/s/files/1/1871/9501/articles/back-pain-and-riding-a-motorcycle-1200x800_1200x.jpeg?v=1537286927)

This app was deployed using Heroku: [Motorcycle Safety Genius](https://motorcycle-ml.herokuapp.com/)

## ABOUT THIS PROJECT

Riding a motorcycle is about freedom, passion, and enjoying life: however, it is also about taking calculated risks using educational decision making! We want to answer the question: "how risky is riding a motorcycle?".

## WHAT WE DO?
We created Classification Machine Learning Models with the Random Decision Forest method to predict the injury severity of the a motorcyclists given controllable variables.

We assembled plots for the given inputs of Age, Gender, Previous Accidents, Previous Speeding Violations, Previous DWI Violations, Drug Use, Alcohol Use, Helmet Use and Desired Weather Conditions.

## OUR PROCESS

- We searched for a well versed dataset and decided to use the Fatal Accident Report System (FARS) from the National Highway Traffic Safety Administration.
- Looking through the data, we chose to focus on motorcyle accidents in Texas from 2014-2018. We cleaned our data using Python and Pandas, saving the new data frames out as CSV files.
- Reading in the output from the CSV files created above, we create a Classification Machine Learning model using SKLearn, utilizing the RandomForestClassifier to make predictions based off previous accidents.
- We also created seperate month and weekday models the strictly focused on either the day of the week or which month, to determine if there were higher risk factors associated the date. These are presented once the form is submitted.
- After utilizing our models to make educated predictions, we then created an webpage that allows the user to look through our data and test their own scenarios to determine how risky future rides will be.
We then chose to plot out many of our risk factors to show the user how they contribute to our model. We used Plotly and D3 to make our plots.



### Contributors:
- [Lourdes Milano](https://github.com/lourdesrm)
- [Ben Bastedo](https://github.com/bbastedo)
- [Luis Santana](https://github.com/lasantanag)
- [Luis Casas](https://github.com/cosamagrande)
