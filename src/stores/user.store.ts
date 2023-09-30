import { TUserStore } from '@/shared/types/user/state-user-store.type';
import {defineStore} from 'pinia';

import { UserService } from '@/services/user/user.service';

export const useUserStore = defineStore('user',{
    state: (): TUserStore => ({
        token: '',
        user: {},
    }),
    getters:{
        isUserAutheticated: (state) => {
            const token = state.token;
            return token.starts.startsWith('Bearer');
        },
    },
    actions:{
        async getUser(){
            try{
                const response = UserService.
            }catch(err){
                console.error('Login Failed due to: ', err)
            }
        },
    }
})