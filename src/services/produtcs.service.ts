import { AxiosInstance } from '@/shared/utils/services/axios-instance'
import { type IFilterProductsByParams } from '@/shared/interface/filter-products-by-params.interface';

export const productsService = {
    async find(){
        const response = await AxiosInstance.get('products');
        return response.data
    },
    async filter(params: IFilterProductsByParams){
        return await AxiosInstance.get('products/filter', {params});
    }, 
    async findById(id: number){
        const response = await AxiosInstance.get('products/id', {params: {id}})
        return response.data;
    }
}