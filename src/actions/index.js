import { ADD_COMMENT, DELETE_COMMENT} from './types';

export function addComent(comment) {
  return {
    type: ADD_COMMENT,
    payload: { comment}
  };
}
export function deleteComent(commentID) {
  return {
    type: ADD_COMMENT,
    payload: { commentID}
  };
}