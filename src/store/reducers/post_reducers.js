import * as actionTypes from '../_shared/actionTypes';
import { updateObject } from '../_shared/utility';

const initialState = {
    postList:[]
  };

  const getPostsStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  const getPostsSuccess = (state, action) => {
    return updateObject(state, {
        postList: action.post
    });
  };
  const getPostsFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const editPostsStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  const editPostsSuccess = (state, action) => {
    return updateObject(state, {
        postList: action.post
    });
  };
  const editPostsFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const delPostsStart = (state, action) => {
    return updateObject(state, {
      error: null,
      loading: true
    });
  };
  const delPostsSuccess = (state, action) => {
    return updateObject(state, {
        postList: action.post
    });
  };
  const delPostsFail = (state, action) => {
    return updateObject(state, {
      error: action.error,
      loading: false
    });
  };

  const posts = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_POST_START:
        return getPostsStart(state, action);
  
      case actionTypes.GET_POST_SUCCESS:
        return getPostsSuccess(state, action);
  
      case actionTypes.GET_POST_FAIL:
        return getPostsFail(state, action);
  
        case actionTypes.EDIT_POST_START:
        return editPostsStart(state, action);
  
      case actionTypes.EDIT_POST_SUCCESS:
        return editPostsSuccess(state, action);
  
      case actionTypes.EDIT_POST_FAIL:
        return editPostsFail(state, action);
  
        case actionTypes.DELETE_POST_START:
        return delPostsStart(state, action);
  
      case actionTypes.DELETE_POST_SUCCESS:
        return delPostsSuccess(state, action);
  
      case actionTypes.DELETE_POST_FAIL:
        return delPostsFail(state, action);
  
     
      default:
        return state;
    }
  };
  
  export default posts;