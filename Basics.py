import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import plotly.express as px
import pandas as pd
import pickle




df=pd.read_csv("C:/Users/asus/Desktop/castfore/preprocessed_data.csv")

option=[ 'Cereals and products', 'Meat and fish',
       'Egg', 'Milk and products', 'Oils and fats', 'Fruits', 'Vegetables',
       'Pulses and products', 'Sugar and Confectionery', 'Spices',
       'Non-alcoholic beverages', 'Prepared meals, snacks, sweets etc.',
       'Food and beverages', 'Pan, tobacco and intoxicants', 'Clothing',
       'Footwear', 'Clothing and footwear', 'Housing', 'Fuel and light',
       'Household goods and services', 'Health', 'Transport and communication',
       'Recreation and amusement', 'Education', 'Personal care and effects',
       'Miscellaneous', 'General index']
def select_and_display_column(df):
    print("Select a column from the following options:")
    for col in option:
        print(col)
    global selected_column
    selected_column = input("Enter the name of the column you want to display: ")

    if selected_column in option:
        selected_df = df[[selected_column]]
        return selected_df
    else:
        print("Invalid column name. Please select from the provided options.")

new_df = select_and_display_column(df)
#model fit
import statsmodels.api as sm
split_date = '2020-12-01'
model=sm.tsa.statespace.SARIMAX(new_df[selected_column].loc[:split_date],order=(1,1,3),seasonal_order=(1,1,3,12))
results=model.fit()
a=results.predict(start=83,end=92)
new_df['forecast']=a
#forecast
from pandas.tseries.offsets import DateOffset
future_dates=[new_df.index[-1]+DateOffset(months=x)for x in range(0,24)]
future_datest_df=pd.DataFrame(index=future_dates[1:],columns=new_df.columns)
future_df=pd.concat([new_df,future_datest_df])
model=sm.tsa.statespace.SARIMAX(future_df[selected_column],order=(1,1,3),seasonal_order=(1,1,3,12))
results=model.fit()
b=results.predict(start=100,end=144)
future_df['forecast']=results.predict(start=100,end=144)
'''print(future_df["forecast"].tail(16))'''
pickle.dump(model,open('model.pkl','wb'))
model=pickle.load(open('model.pkl','rb'))