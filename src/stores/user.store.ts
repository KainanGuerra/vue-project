import { userService } from '@/services/user.service';
import { TUserStore } from '@/shared/types/user/state-user-store.type';
import { defineStore } from 'pinia';
import { LocalStorage, useQuasar } from 'quasar';
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
        clients: [],
        shopCar: [],
        productsOnShopCar: [],
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
                const response = await userService.singIn({email, password});
                this.$state.token = response.data.token;
                this.$state.user = response.data.user;
                LocalStorage.set('token', response.data.token);
                LocalStorage.set('user', response.data.user);
                return response;               
        },
        async validateToken(token: any){
            const router = useRouter();
            const $q = useQuasar();
            try{
                const response = await userService.validate(token);
                return response.data
            }catch(err:any){
                console.error(err.response);
                $q.notify({ color: 'negative', message: 'Token has expired'});
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
            return response;
        },
        async addDeliveryAddress(body: TAddress){
            const response = await userService.addDeliveryAddress(body, this.$state.token as string);
            return response;
        },
        async fetchClients(){
            const response = await userService.fetchClients(this.$state.token as string);
            this.clients = response;
            return response;
        },
        async getShopCar(){
            const response = await userService.getShopCar(this.$state.token as string);
            this.$state.shopCar = response;
            console.log(response)
            return response
        },
        async getProductsFromShopCar(){
            const response = await userService.getProducts(this.$state.token as string);
            this.$state.productsOnShopCar = response;
            return response
        }, 
        async deleteItem(id: any){
            return await userService.removeItem(id, this.$state.token as string)
        },
        async deleteClient(id: string){
            return await userService.deleteClient(id, this.$state.token as string);
        }
    }
})