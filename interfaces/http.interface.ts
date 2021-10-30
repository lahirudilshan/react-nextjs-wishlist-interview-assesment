export interface IFetchOptions {
    url: string;
    data?: any;
    params?: any;
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    headers?: any;
    requestCancelToken?: string | null;
}