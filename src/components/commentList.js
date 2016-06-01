import React from 'react';
import _ from 'lodash';
import CommentItem from './commentList_item';
import CommentInput from './commentList_input';

import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newComent: '' }
  }
  renderListItem(comment) {
    return (
      <CommentItem {...comment} key={comment.id} onDelete={this.props.deleteComent.bind(this, comment.id) } />
    );
  }
  renderList() {
    return _.map(this.props.commentList, this.renderListItem.bind(this));
  }
  comentOnchange(evt) {
    this.setState({ newComent: evt.target.value });
  }
  subComent() {
    if (this.state.newComent) {
      this.props.addComent(this.state.newComent);
      this.setState({ newComent: '' });
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.commentList.length > 0 ? `Comments (${this.props.commentList.length})` : 'Comments' } </h3>
        </div>
        <div className="panel-body no-padding">
          {this.renderList() }
          <CommentInput value={this.state.newComent} onSubmit={this.subComent.bind(this) } onChange={this.comentOnchange.bind(this) } />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { commentList: state.commentList };
}

export default connect(mapStateToProps, actions)(CommentList);