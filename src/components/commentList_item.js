import React from 'react';
import timeStampHelper from '../helpers/timeStampHelper';

const style = {
  'border': 'solid #f7f7f9',
  'padding': '1em',
  'marginTop': 0
}
const CommentItem = (props) => {
  
  return (
    <div className="media" style={style}>
      <div className="media-body">
        <div><small>{'Posted ' + timeStampHelper(props.commentDate) }</small></div>
        {props.commentContent}
        <div><small><a style={{'color':'red'}} href="#" onClick={props.onDelete}>Delete</a></small></div>
      </div>
    </div>
  );
};

export default CommentItem;
