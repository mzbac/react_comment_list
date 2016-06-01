import { ADD_COMMENT, DELETE_COMMENT} from './types';

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        payload: {comment}
    };
}
export function deleteComment(commentID) {
    return {
        type: DELETE_COMMENT,
        payload: {commentID}
    };
}