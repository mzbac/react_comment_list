import moment from 'moment';
import _ from 'lodash';
import { ADD_COMMENT, DELETE_COMMENT } from '../actions/types';
import initialState from '../initialState';
import guid from '../helpers/guidHelper';

export default function (state = initialState.commentList, action) {
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
