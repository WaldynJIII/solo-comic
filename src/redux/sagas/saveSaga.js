import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
function* yeetPit(action) {
    try {
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
        const response = yield axios.get('api/template/pit', {
            params: {
                title: action.payload.title,
                id: action.payload.id
            }
        })

        yield put({ type: "CREATE", payload: response.data })
    }
    catch (err) {
        console.log(err)
       
    }
}
function* removeImage(action) {
    console.log(action.payload)
    try {
        yield axios.delete(`api/template/pit/${action.payload.imageId}`)

        yield put({ type: 'IGOR', payload: {id: action.payload.id, title: action.payload.title} })
    } catch (error) {
        console.log('DELETE ', error)
        alert('it didnt')
    }

}
function* saveSaga() {
    yield takeLatest('TO_THE_PIT', yeetPit);
    yield takeLatest('IGOR', graveRob);
    yield takeLatest('REMOVE', removeImage)
}
export default saveSaga