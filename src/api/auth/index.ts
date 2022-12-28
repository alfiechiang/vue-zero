
import request from '@/utils/request';
import type { AxiosPromise } from 'axios';
import type { LoginData, TokenResult } from './types';


export function loginApi(data: LoginData): AxiosPromise<TokenResult> {
    return request({
        url: '/admin/user/login',
        method: 'post',
        params: data
    });
}