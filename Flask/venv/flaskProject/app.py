from flask import Flask, render_template ,request
import pickle 
import numpy as np
import pandas as pd
import requests


app = Flask(__name__,template_folder="templates") 


# @app.route('/model', methods=['POST'])
# def hello_world():  # put application's code here
#     return 'Hello World!'




pop_df = pickle.load(open('pickle/popular.pkl','rb'))
pt = pickle.load(open('pickle/pt.pkl','rb'))
book = pickle.load(open('pickle/book.pkl','rb'))
ss = pickle.load(open('pickle/similarity_score.pkl','rb'))

@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html")

# Books Recommended System
@app.route('/books')
def books():
    return render_template('books.html',
                           book_name = list(pop_df['Book-Title'].values),
                           author = list(pop_df['Book-Author'].values),
                           image = list(pop_df['Image-URL-M'].values),
                           publisher = list(pop_df['Publisher'].values),
                           votes = list(pop_df['num_rating'].values),
                           rating = list(pop_df['avg_rating'].values),
                           )



@app.route('/recommended')
def recommended():
    return render_template('recommended.html')

@app.route('/recommended_books',methods=['post'])
def recommended_b():
    user_input = request.form.get('user_input')
    index = np.where(pt.index==user_input)[0][0]
    similar_item = sorted(list(enumerate(ss[index])),key=lambda x:x[1],reverse=True)[1:5]
    data = []
    for i in similar_item:
        item = []
        temp_df = book[book['Book-Title']==pt.index[i[0]]]
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
        item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))
        data.append(item)
    print(data)
    return render_template('recommended.html',data=data)


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080) 