import {HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';
import {BaseUrl} from '../../enviroment';
import {LoadAccountInfo} from '../utils/storage/AuthStorage';
import {AmountBookingHub} from '../api/ApiEndpoint';

export const ConnectToHub = (accessToken, hubUrl) => {
    let url = BaseUrl.WebApi + hubUrl
    const connect = new HubConnectionBuilder()
        .withUrl(url, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
            accessTokenFactory : () => accessToken
        })
        .withAutomaticReconnect()
        .build();
    return connect;
}

export const BookingHubConnection = () => {
    let accessToken = LoadAccountInfo().access_token;
    let hubConnection = ConnectToHub(accessToken,AmountBookingHub);

    hubConnection.start().then(() => {
        console.log(hubConnection);
      }).catch((err) => {
        console.log(err);
      });
    
    return hubConnection;
}