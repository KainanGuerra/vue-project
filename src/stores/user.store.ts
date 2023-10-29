import { userService } from '@/services/user.service';
import { TUserStore } from '@/shared/types/user/state-user-store.type';
import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';
import { type ICreateUserPayload } from '@/shared/interface/create-user-payload.interface';
import { useRouter } from 'vue-router';
import { TAddress } from '@/shared/types/user/address-definition-type'

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
        isUserAuthenticated(){
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
            const router = useRouter();
            try{
                const response = await userService.validate(token);
                return response.data
            }catch(err:any){
                console.error(err.response);
                alert('Token is expired');
                await router.push({name: 'login'});
                this.$state.token = '';
                this.$state.user = {};
                LocalStorage.remove('token');
                LocalStorage.remove('user');           
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
            return await userService.register(body)
        },
        async listDeliveryAddress(){
            const response = await userService.listDeliveryAddress(this.$state.token as string);
            console.log(response);
            return response;
        },
        async addDeliveryAddress(body: TAddress){
            const response = await userService.addDeliveryAddress(body, this.$state.token as string);
            console.log(response);
            return response;
        }
    }
})