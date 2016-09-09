import React from 'react';
import { render } from 'react-dom';
import CommentBox from './CommentBox.jsx';


const data = [
  {id: 1, author: 'my hant', text: 'hello, my hant'},
  {id: 2, author: 'another hant', text: 'hello, another hant'}
];

render(<CommentBox _url="http://localhost:3000/api/comments" pollInterval={2000}  />, document.querySelector("#app"));
