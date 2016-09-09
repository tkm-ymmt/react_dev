import styles from './index.scss';
import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {author: '', text:'' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAuthorChange(e){
    this.setState({author: e.target.value });
  }

  handleTextChange(e){
    this.setState({text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if (!author || !text) return;
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({ author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" action="post" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" onChange={this.handleAuthorChange} />
        <input type="text" placeholder="Say something..."  onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
