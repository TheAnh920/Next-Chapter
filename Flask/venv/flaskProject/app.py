from flask import Flask, render_template ,request, jsonify
import pickle 
import numpy as np
import pandas as pd
from flask_cors import CORS
import requests
from fuzzywuzzy import process

app = Flask(__name__,template_folder="templates") 
CORS(app)

pop_df = pickle.load(open('pickle/popular.pkl','rb'))
pt = pickle.load(open('pickle/pt.pkl','rb'))
book = pickle.load(open('pickle/book.pkl','rb'))
ss = pickle.load(open('pickle/similarity_score.pkl','rb'))

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html")

@app.route('/books_by_ratings', methods=['post'])
def books_by_ratings():
    book_matrix = []
    book_name = list(pop_df['Book-Title'].values)
    author = list(pop_df['Book-Author'].values)
    image = list(pop_df['Image-URL-M'].values)
    publisher = list(pop_df['Publisher'].values)
    votes = list(pop_df['num_rating'].values)
    rating = list(pop_df['avg_rating'].values)

    votes_preprocessed = [int(value) for value in votes]
    rating_preprocessed = [int(value) for value in rating]

    book_matrix.append(book_name)
    book_matrix.append(author)
    book_matrix.append(image)
    book_matrix.append(publisher)
    book_matrix.append(votes_preprocessed)
    book_matrix.append(rating_preprocessed)
    
    return jsonify({"success" : True, "bookData" : book_matrix})

@app.route('/ml_search',methods=['post'])
def ml_search():
    user_input = request.json.get('flaskSearchTerm')

    # Perform fuzzy matching to find similar values in the index
    matches = process.extract(user_input, pt.index, limit=5)  # Find top 5 matches

    data = []
    for match, score in matches:
        index = pt.index.get_loc(match)  # Get the index of the matched value
        similar_item = sorted(list(enumerate(ss[index])), key=lambda x: x[1], reverse=True)[1:5]
        for i in similar_item:
            item = []
            temp_df = book[book['Book-Title'] == pt.index[i[0]]]
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))
            data.append(item)
    
    return jsonify({"success": True, "bookData": data})

if __name__ == '__main__':
    from waitress import serve
    serve(app, host="127.0.0.1", port=5000)
    # app.run(debug=True)