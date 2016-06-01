import moment from 'moment';
import { ADD_COMMENT, DELETE_COMMENT } from '../actions/types';
import initalState from '../initalState';
import guid from '../helpers/guidHelper';

export default function (state = initalState.commentList, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, {
                id: guid(),
                commentDate: moment().toISOString(),
                commentContent: action.payload.comment
            }];
        case DELETE_COMMENT:
            return _.filter(state, function (comment) {
                return comment.id !== action.payload.commentID
            });
    }

    return state;
}
