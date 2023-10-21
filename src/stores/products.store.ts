import { productsService } from '@/services/produtcs.service';
import { defineStore } from 'pinia';
import { type IFilterProductsByParams } from '@/shared/interface/filter-products-by-params.interface';
import { EProductsTypes } from '@/shared/enums/produtcs-types.enum';
export const defineProductsStore = defineStore('produtcs',{
    state: () => ({
        searchParams: undefined,
        products: undefined,
        sneakers: undefined,
        acessorios: undefined,
        headgears: undefined,
        listProductsPageTermDefined: '',
    }),
    actions:{
        async find(){
            try{
                const data = await productsService.find();
                console.log('data:' ,data);
                const productsGroupedByType = data.reduce((groups: any, item: any) => {
                    const { type } = item;
                  
                    // Create a new group for the type if it doesn't exist
                    if (!groups[type]) {
                      groups[type] = [];
                    }
                  
                    // Push the item into the corresponding group
                    groups[type].push(item);
                  
                    return groups;
                  }, {});
                  // 'groupedByType' is now an object where each property represents a type
                  console.log(typeof productsGroupedByType)
                  console.log(productsGroupedByType)
                  this.sneakers = productsGroupedByType.SNEAKER;
                  this.headgears = productsGroupedByType.HEADGEAR;
                  this.acessorios = productsGroupedByType.ACESSORIOS;
                  
                return data;
            }catch(err){
                return []
            }
        },
        async filter(params: IFilterProductsByParams){
            try{
                const response = await productsService.filter(params);
                return response.data
            }catch(err){
                console.error(err)
                return []
            }
        },
        // async populateProductsOnStore(){
        //     try{
        //         const response = 
        //     }catch(err){
        //         console.error(err);
        //         return err
        //     }
        // }
        async getFilterByInput(term: string){
            //supposed to return all products that contain the term on its name
            try{
                // const response = await productsService.
            }catch(err){
                console.error(err);
                return err
            }
        }
    },
})