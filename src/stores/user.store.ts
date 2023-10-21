import { userService } from '@/services/user.service';
import type { TUserStore } from '@/shared/types/user/state-user-store.type';
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { type ICreateUserPayload } from '@/shared/interface/create-user-payload.interface';


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
    },
    actions:{
        isUserAutheticated(){
            if (this.token == null || this.token == ''){
                return false;
            }
            return true;
        },
        async login({email, password}: TUserSignInPayload){
            try{
                const response = await userService.singin({email, password});
                this.$state.token = response.token;
                this.$state.user = response.user;
                LocalStorage.set('token', response.token);
                LocalStorage.set('user', response.user);
            }catch(err){
                console.error(err)
            }
            
        },
        async validateToken(token: any){
            try{
                const response = await userService.validate(token);
                return response.data
            }catch(err){
                console.error(err);
                return null;
            }
        },
        async logout(){
            this.$state.token = '';
            this.$state.user = {};
            LocalStorage.remove('token');
            LocalStorage.remove('user');
        },
        async createUser(body: ICreateUserPayload){
            await userService.register(body)
        }
    }
})