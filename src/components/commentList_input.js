
import React from 'react';
const CommentInput = (props) => {
  return (
    <div className="input-group">
      <input type="text" className="form-control no-border-radius" placeholder="Type a comment" aria-describedby="basic-addon2" />
      <span className="input-group-addon no-border-radius"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
    </div>
  );
};

export default CommentInput;