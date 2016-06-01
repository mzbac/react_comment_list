import React from 'react';
import _ from 'lodash';
import CommentItem from './commentList_item';
import CommentInput from './commentList_input';

import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentList extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Comments (2) </h3>
        </div>
        <div className="panel-body no-padding">
          <CommentItem />
          <CommentItem />
          <CommentInput />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, actions)(CommentList);