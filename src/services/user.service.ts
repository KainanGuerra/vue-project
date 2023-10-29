import { AxiosInstance } from '@/shared/utils/services/axios-instance';

import { type TUserSignInPayload } from '@/stores/user.store';
import { type TCreateUserBodyRequest } from '@/shared/types/user/create-user-body.type';
import { TAddress } from '@/shared/types/user/address-definition-type'
export const userService = {
    async singin({email, password}: TUserSignInPayload){
        const payload = {
            email,
            password,
        } 
        const response = await AxiosInstance.post('/auth', payload)
        return response.data;
    },
    async validate(token: any){
        const payload = { 
            headers: {
                Authorization: `Bearer ${token}`,
            }        
        }
        return await AxiosInstance.get('/users/token', payload)
    },
    async register({name, email, password, document}: TCreateUserBodyRequest){
        const payload = {
            name,
            email,
            password,
            document,
        }
        await AxiosInstance.post('/users', payload)
    },
    async listDeliveryAddress(token: string){
        const payload = { 
            headers: {
                Authorization: `Bearer ${token}`,
            }        
        }
        const {data} = await AxiosInstance.get('/users/address', payload)
        return data;
    },
    async addDeliveryAddress(body: TAddress, token: string){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }        
        }
            const {data} = await AxiosInstance.post('/users/address', body, config);
        return data;
    },
    async deleteAddress(id: number, token: string){
        const payload = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        const { data } = await AxiosInstance.patch(`/users/address/${id}`, payload);
        return data;
    },
    async fetchClients(token: string){
        const payload = { 
            headers: {
                'inner-authorization': `Bearer ${token}`,
            }        
        }
        const { data } = await AxiosInstance.get('/users', payload);
        return data;
    }
};