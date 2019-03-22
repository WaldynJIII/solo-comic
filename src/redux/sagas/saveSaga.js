import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* yeetPit (action) {
    try{
        yield axios.post('api/template/pit', action.payload)

        // yield put({type: "IGOR"})
    }
    catch (err) {
        console.log('in plantplant (get)', err)
        alert("It did not")
    }
}
function* graveRob(action) {
    try {
        yield axios.post('api/template/pit', action.payload)

        yield put({ type: "IGOR" })
    }
    catch (err) {
        console.log('in plantplant (get)', err)
        alert("It did not")
    }
}
function* saveSaga() {
    yield takeLatest('TO_THE_PIT', yeetPit);
    yield takeLatest('IGOR', graveRob);
}
export default saveSaga