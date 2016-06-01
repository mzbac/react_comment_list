import React from 'react';

const style = {
  'border': 'solid #f7f7f9',
  'padding': '1em',
  'marginTop': 0
}
const CommentItem = (props) => {
  return (
    <div className="media" style={style}>
      <div className="media-body">
        <div><small>5 days ago</small></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <div><small><a href="">Delete</a></small></div>
      </div>
    </div>
  );
};

export default CommentItem;
