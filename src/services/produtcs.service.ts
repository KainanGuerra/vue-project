import { AxiosInstance, AxiosUpload } from '@/shared/utils/services/axios-instance'
import { type IFilterProductsByParams } from '@/shared/interface/filter-products-by-params.interface';
import { type TCreateProduct } from '@/shared/types/products/create-product-type'
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
    },
    async createProduct(body: TCreateProduct, token: string | null){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          };
        const response = await AxiosInstance.post('products', body, config);
        return response.data;
    },
    async uploadImage(id: number, image: File, token: string | null){
        const formData = new FormData() as any;
        formData.append('file', image);
        const config = {
            headers: {
              'Authorization': `Bearer ${token}`, 
              'Content-Type': `multipart/form-data; 
              boundary=${formData._boundary}`
            },
          };
        const response = await AxiosUpload.patch(`http://localhost:3000/api/v1/products/upload/${id}`, formData, config);
        return response.data;
    },
}