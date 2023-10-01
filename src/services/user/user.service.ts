import { AxiosInstance } from '@/shared/utils/services/axios-instance';

import { type TUserSignInPayload } from '@/stores/user.store';
import { type TCreateUserBodyRequest } from '@/shared/types/user/create-user-body.type';
import axios from 'axios';
import type { IReturnUserTokenMapped } from '@/shared/interface/return-user-validate-token.interface';

export const UserService = {
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
        const response = await axios.post('users', payload)
        return response.data
    }
};