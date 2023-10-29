import { AxiosInstance } from '@/shared/utils/services/axios-instance';

export type TPurchaseProductsPayload = {
    products: number[];
    discount?: number;
    deliveryAddress: string;
}

export const purchasesService =  {
    async findAll(authToken: string){
        return await AxiosInstance.get('purchases',{
            headers: {
              'Authorization': `Bearer ${authToken}`,
            }}
            )
        
    },
    async findMany(authToken: string){
        return await AxiosInstance.get('purchases/find-many',{
            headers: {
              'Authorization': `Bearer ${authToken}`,
            }}
            )
    },
    async createPurchase(payload: TPurchaseProductsPayload ){
        return await AxiosInstance.post('purchases',payload)
    }
}