import { purchasesService } from "@/services/purchases.service";
import { defineStore } from "pinia";
import { TPurchaseProductsPayload } from "@/services/purchases.service";
export const definePurchaseStore = defineStore('purchase',{
    actions:{
        async findUserPurchases(token: string){
            const response = await purchasesService.findMany(token);
            return response.data;
        },
        async findAllPurchases(token: string){
            const response = await purchasesService.findAll(token);
            return response.data;
        },
        async createPurchase(payload: TPurchaseProductsPayload){
            const response = await purchasesService.createPurchase(payload);
            return response.data;
        }
    }
})