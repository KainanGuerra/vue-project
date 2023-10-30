import { purchasesService } from '@/services/purchases.service';
import { defineStore } from 'pinia';
import { TPurchaseProductsPayload } from '@/services/purchases.service';
export const definePurchaseStore = defineStore('purchase',{
    state: () => ({
        productsToBePurchased: [],
    }),
    actions:{
        async findUserPurchases(token: string){
            const {data} = await purchasesService.findMany(token);
            return data;
        },
        async findAllPurchases(token: string){
            const {data} = await purchasesService.findAll(token);
            return data;
        },
        async createPurchase(payload: TPurchaseProductsPayload){
            const {data} = await purchasesService.createPurchase(payload);
            return data;
        },
        async updateShopCar(id: any, token: any){
            const { data }= await purchasesService.addToShopCar(id, token);
            return data;
        }
    }
})