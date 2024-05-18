from flask import Flask, request, jsonify
from flask import Flask,render_template,request
import pickle 
import numpy as np
import pandas as pd

import json

import urllib.request
import pickle
import requests
from datetime import date, datetime



app = Flask(__name__)

origins = [
    "http://localhost:5173",
]



@app.route('/model', methods=['POST'])
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run(port=4000, debug=True)


pop_df = pickle.load(open('popular.pkl','rb'))
pt = pickle.load(open('pt.pkl','rb'))
book = pickle.load(open('book.pkl','rb'))
ss = pickle.load(open('similarity_score.pkl','rb'))


app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template("Home.jsx")

@app.route('/books')
def books():
    return render_template('templates/Books.html',
                           book_name = list(pop_df['Book-Title'].values),
                           author = list(pop_df['Book-Author'].values),
                           image = list(pop_df['Image-URL-M'].values),
                           publisher = list(pop_df['Publisher'].values),
                           votes = list(pop_df['num_rating'].values),
                           rating = list(pop_df['avg_rating'].values),
                           )



