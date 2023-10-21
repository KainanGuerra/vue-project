import { productsService } from '@/services/produtcs.service';
import { defineStore } from 'pinia';
import { type IFilterProductsByParams } from '@/shared/interface/filter-products-by-params.interface';
export const defineProductsStore = defineStore('produtcs',{
    state: () => ({
        searchParams: undefined,
        products: undefined,
        sneakers: undefined,
        acessorios: undefined,
        headgears: undefined,
        listProductsPageTermDefined: '',
        productPage: {},
    }),
    actions:{
        async find(){
            try{
                const data = await productsService.find();
                const productsGroupedByType = data.reduce((groups: any, item: any) => {
                    const { type } = item;
                  
                    if (!groups[type]) {
                      groups[type] = [];
                    }
                  
                    groups[type].push(item);
                  
                    return groups;
                  }, {});
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
        async findById(id: number){
            try {
                const response = await productsService.findById(id);
                const clonedResponse = {
                    id: response.id,
                    name: response.name,
                    img: response.photo,
                    value: response.value, 
                }
                this.productPage = clonedResponse;
            
                return response;
              } catch(err: any){
                console.error(err)
                alert(`Um erro aconteceu ao buscar o produto: ${err.message}`)
            }  
        }
    },
})