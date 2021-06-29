import SCSaga from './SCSaga';



function* RootSaga() {
    console.log('This Is Root Sagas');
    yield SCSaga();
}


export default RootSaga;