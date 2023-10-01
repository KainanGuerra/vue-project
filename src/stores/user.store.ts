import { UserService } from '@/services/user/user.service';
import type { IReturnUserTokenMapped } from '@/shared/interface/return-user-validate-token.interface';
import type { TUserStore } from '@/shared/types/user/state-user-store.type';
import axios from 'axios';
import {defineStore} from 'pinia';
import { LocalStorage } from 'quasar';

export type TUserSignInPayload = {
    email: string;
    password: string;
}

export const defineUserStore = defineStore('user',{
    state: (): TUserStore => ({
        token: LocalStorage.getItem('token'),
        user: LocalStorage.getItem('user'),
    }),
    getters:{
        isUserAutheticated: () => {
            // const token = state.token;
            
            // if(token){
            //     const validate = await validateToken(token)
            //     return 
            // } 
            return false;
        },
    },
    actions:{
        async login({email, password}: TUserSignInPayload){
            try{
                const response = await UserService.singin({email, password});
                // this.$state.token = response.token;
                // this.$state.user = response.user;
                LocalStorage.set('token', response.token);
                LocalStorage.set('user', response.user);
            }catch(err){
                console.error(err)
            }
            
        },
        async validateToken(token: any){
            try{
                const response = await UserService.validate(token);
                console.log(response)
                return response.data
            }catch(err){
                console.error(err);
                return null;
            }
        }
    }
})