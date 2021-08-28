import {HubConnectionBuilder, HttpTransportType, LogLevel } from '@microsoft/signalr';
import {BaseUrl} from '../../enviroment';
import {LoadAccountInfo} from '../utils/storage/AuthStorage';
import {AmountBookingHub} from '../api/ApiEndpoint';
import {FeatchAmountOfBooking} from '../../Application/redux/actions/FetchDataAction';
import ApplicationStore from '../../Application/redux/stores/ApplicationStore';


export const ConnectToHub = (accessToken, hubUrl) => {
    let url = BaseUrl.WebApi + hubUrl
    const connect = new HubConnectionBuilder()
        .withUrl(url, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
            accessTokenFactory : () => accessToken
        })
        .configureLogging(LogLevel.Information)
        .withAutomaticReconnect()
        .build();
    return connect;
}


export const BookingHubMiddleware = (accessToken) => {
    let hubConnection = ConnectToHub(accessToken,AmountBookingHub);    

    hubConnection.start().then(() => {
        console.log(hubConnection);
      }).catch((err) => {
        console.log(err);
    });

    hubConnection.on("GetAmountOfBookingInDay", (data) => {
        ApplicationStore.dispatch(FeatchAmountOfBooking(data));
    });
}