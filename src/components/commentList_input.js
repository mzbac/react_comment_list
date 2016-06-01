import React from 'react';

const inputStyle={
    'marginLeft':'-1px'
}
const iconStyle={
    'borderRight':'0px'
}
const CommentInput = (props) => {
    return (
        <div className="input-group">
            <input type="text" style={inputStyle} className="form-control no-border-radius" value={props.value } onChange={props.onChange}
                   placeholder="Type a comment" aria-describedby="basic-addon2"/>
            <span className="input-group-addon no-border-radius" style={iconStyle}  onClick={props.onSubmit}><i
                className="fa fa-paper-plane" aria-hidden="true"></i></span>
        </div>
    );
};
CommentInput.propTypes = {
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
};
export default CommentInput;