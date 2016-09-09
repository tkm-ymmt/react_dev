import styles from './index.scss';
import React from 'react';
import request from 'superagent';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default class CommentBox extends React.Component {

  constructor (props){
    super(props);
    this.state = {data: []};

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  loadCommentsFromServer(){
    request.get(this.props._url)
      .end((err, res)=>{
        if(err) console.log(err);
        this.setState({data: res.body});
      });
  }

  componentDidMount(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }

  handleCommentSubmit(comment){
    console.log(comment)
    const comments = this.state.data;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    request.post(this.props._url)
      .send(comment)
      .end((err, res)=>{
        this.setState({data: res.body});
      });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    )
  }
}
