import { call, put, takeEvery, select, takeLatest, take, delay } from 'redux-saga/effects';
import {SEARCH_BOOKING, GET_BOOKING_DETAIL} from '../utils/constants/ActionConstants';
import {GetBookingDetailSuccess, SearchBookingSuccess} from '../../Application/redux/actions/BookingAction';
import {ShowLoading, HideLoading} from '../../Application/redux/actions/LoadingAction';


const SeedData = [
    {
        id: 'f09eb40b-f5a7-44d0-b671-7ddaeb8a13dc',
        bookingCode: 'BC1707202111230003',
        bookingDate: '17/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn A',
        bookingReceive: 'Lê Thị Tư',
        status: 3
    },
    {
        id: '8dfef7cd-3e54-496f-96d6-d9b8abb88f22',
        bookingCode: 'BC1707202111230002',
        bookingDate: '17/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn A',
        bookingReceive: 'Lê Thị Tư',
        status: 2
    },
    {
        id: '5ee8e2d8-bf52-49ae-82d3-e179f8c69470',
        bookingCode: 'BC1707202111230001',
        bookingDate: '18/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn A',
        bookingReceive: 'Lê Thị Tư',
        status: 1
    },
    {
        id: '74f805ac-ca23-4615-a094-e5c2bb0ad491',
        bookingCode: 'BC1707202111230005',
        bookingDate: '21/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn A',
        bookingReceive: 'Lê Thị Bảy',
        status: 4
    },
    {
        id: 'def14d68-42ba-4d06-94aa-cf573ec8d7da',
        bookingCode: 'BC1707202111230003',
        bookingDate: '22/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn B',
        bookingReceive: 'Lê Thị Hai',
        status: 5
    },
    {
        id: 'd2940ce8-4eb5-40a2-b4fe-97e47cb445dd',
        bookingCode: 'BC1707202111230003',
        bookingDate: '25/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn C',
        bookingReceive: 'Lê Thị Sáu',
        status: 1
    },
    {
        id: '79914962-16b5-46d4-817f-767e7e79f7b4',
        bookingCode: 'BC1707202111230003',
        bookingDate: '26/07/2021',
        bookingRangeTime: '11:23 - 14:30', 
        bookingBy: 'Trần Văn D',
        bookingReceive: 'Lê Thị Năm',
        status: 2
    }
]


function* SearchBookingSaga({payload}) {
    yield put(ShowLoading());
    console.log(payload);

    yield put(SearchBookingSuccess(SeedData, SeedData.length));

    yield delay(1000);
    yield put(HideLoading());
}

function* GetBookingDetail({payload}) {
    yield put(ShowLoading());
    console.log(payload.id);
    yield delay(1000);
    yield put(HideLoading());

}

export default function* BookingSaga() {
    yield takeEvery(SEARCH_BOOKING, SearchBookingSaga);
    yield takeEvery(GET_BOOKING_DETAIL, GetBookingDetail);
}
