import axios from 'axios';

import {BaseUrl} from '../../enviroment';
import {METHOD, API_VERSION} from '../utils/constants/HttpConstant';

export const ApiGetNoParameters = async (endpoint) => {
    return await axios.get(
        BaseUrl.WebApi + API_VERSION.API_V1 + endpoint
    )
}

export const ApiGet = async (endpoint, parameters) => {
    return await axios({
        method: METHOD.GET,
        url: BaseUrl.WebApi + API_VERSION.API_V1 + endpoint,
        params: parameters 
    });
}

export const ApiDelete = async (endpoint, parameters) => {
    return await axios({
        method: METHOD.DELETE,
        url: BaseUrl.WebApi + API_VERSION.API_V1 + endpoint,
        params: parameters 
    });
}

export const ApiPost = async (endpoint, body) => {
    return await axios({
        method: METHOD.POST,
        url: BaseUrl.WebApi + API_VERSION.API_V1 + endpoint,
        data: body 
    });
}

export const ApiPutWithBody = async (endpoint, parameters) => {
    return await axios({
        method: METHOD.PUT,
        url: BaseUrl.WebApi + API_VERSION.API_V1 + endpoint,
        data: parameters
    });
}

export const ApiPutWithQuery = async (endpoint, parameters) => {
    return await axios({
        method: METHOD.PUT,
        url: BaseUrl.WebApi + API_VERSION.API_V1 + endpoint,
        params: parameters
    });
}

