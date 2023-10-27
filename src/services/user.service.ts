import { AxiosInstance } from '@/shared/utils/services/axios-instance';

import { type TUserSignInPayload } from '@/stores/user.store';
import { type TCreateUserBodyRequest } from '@/shared/types/user/create-user-body.type';

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
        return await AxiosInstance.get('/users/address', payload)

    }
};