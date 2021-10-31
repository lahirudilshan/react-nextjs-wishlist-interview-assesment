import Axios from "axios";
import { IFetchOptions } from '../interfaces/http.interface';

// default axios settings
Axios.defaults.headers.get['Content-Type'] = 'application/json';

/**
 * 
 * @param url: api url
 * @param method: GET | POST | PATCH | DELETE
 * @param headers: custom header
 * @param requestCancelToken: token for cancel request
 * @returns 
 */
export const fetch = ({ url, data = null, params = null, method = 'GET', headers = null, requestCancelToken = null }: IFetchOptions) => {
    let config: any = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    if (requestCancelToken) {
        config.cancelToken = requestCancelToken
    }

    if (params) {
        config = { ...config, params }
    }

    if (headers) {
        config = { ...config, headers }
    }

    switch (method) {
        case 'GET': return Axios.get(url, data);
        case 'POST': return Axios.post(url, data, config);
        case 'PATCH': return Axios.patch(url, data, config);
        case 'DELETE': return Axios.delete(url, data);
        default: throw Error('Invalid http method');
    }
}