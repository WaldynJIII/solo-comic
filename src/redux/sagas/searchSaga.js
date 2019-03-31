import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* sendSearch(action){
    if(action.payload.part == 'costume'){
    try{
 
    console.log(action.payload)
     const response = yield axios.get(`api/template/costume`, {
     params:{
        title: action.payload.title,
       
     }
      } );
     yield put({type: "SET_IMAGES", payload: response.data })
    }
    catch (err) {
       
    }
}
    if (action.payload.part == 'head') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/head`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
           
        }
    }
    if (action.payload.part == 'l-arm') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/l-arm`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
           
        }
    }
    if (action.payload.part == 'r-arm') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/r-arm`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
           
        }
    }
    if (action.payload.part == 'chest') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/chest`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
           
        }
    }
    if (action.payload.part == 'l-leg') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/l-leg`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
            
        }
    }
    if (action.payload.part == 'r-leg') {
        try {

            console.log(action.payload)
            const response = yield axios.get(`api/template/r-leg`, {
                params: {
                    title: action.payload.title,

                }
            });
            yield put({ type: "SET_IMAGES", payload: response.data })
        }
        catch (err) {
            console.log('in plantplant (get)', err)
            
        }
    }
}
function* searchSaga() {
    yield takeLatest('SEND_SEARCH', sendSearch);
}
export default searchSaga