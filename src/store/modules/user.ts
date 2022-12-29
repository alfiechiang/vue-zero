import { defineStore } from 'pinia';
import { loginApi } from '@/api/auth';
import type { LoginData } from '@/api/auth/types';


export const useUserStore = defineStore('user', () => {

    // 登录
    function login(loginData: LoginData) {
        return new Promise<void>((resolve, reject) => {
            loginApi(loginData)
                .then(response => {
                    const accessToken  = response.data.accessToken;
                    console.log(accessToken)
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        });
    }




    return {

        login,

    };



});
