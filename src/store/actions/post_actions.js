import * as actionTypes from '../_shared/actionTypes' 
import Api from '../_shared/constants';
import axios from 'axios'
export const getListStart = () => ({
    type: actionTypes.GET_POST_START
  });
  
  export const getListSuccess = res => ({
    type: actionTypes.GET_POST_SUCCESS,
    post:res
  });
  
  export const getListFail = err => ({
    type: actionTypes.GET_POST_FAIL,
    error: err
  });

  export const editListStart = () => ({
    type: actionTypes.EDIT_POST_START
  });
  
  export const editListSuccess = res => ({
    type: actionTypes.EDIT_POST_SUCCESS,
    post:res
  });
  
  export const editListFail = err => ({
    type: actionTypes.EDIT_POST_FAIL,
    error: err
  });

  export const delListStart = () => ({
    type: actionTypes.DELETE_POST_START
  });
  
  export const delListSuccess = res => ({
    type: actionTypes.DELETE_POST_SUCCESS,
    post:res
  });
  
  export const delListFail = err => ({
    type: actionTypes.DELETE_POST_FAIL,
    error: err
  });

  export const getPostList = (  ) => {
  
    return dispatch => {
      dispatch(getListStart());
      axios.get(Api.url).then(res=>{
          dispatch(getListSuccess(res.data))
      })
    .catch(err=>{
        dispatch(getListFail(err))
    })
    };
  };

  export const editPostList = ( body ) => {
  
    return dispatch => {
      dispatch(editListStart());
      axios.get(Api.url,body).then(res=>{
          dispatch(editListSuccess(res.data))
      })
    .catch(err=>{
        dispatch(editListFail(err))
    })
    };
  };

  export const delPostList = ( body ) => {
  
    return dispatch => {
      dispatch(delListStart());
      axios.get(Api.url,body).then(res=>{
          dispatch(delListSuccess(res.data))
      })
    .catch(err=>{
        dispatch(delListFail(err))
    })
    };
  };