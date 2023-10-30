import { productsService } from '@/services/produtcs.service';
import { defineStore } from 'pinia';
import { type IFilterProductsByParams } from '@/shared/interface/filter-products-by-params.interface';
import { type TCreateProduct } from '@/shared/types/products/create-product-type'
import { useQuasar } from 'quasar';



export const defineProductsStore = defineStore('produtcs',{
    state: () => ({
        searchParams: undefined,
        products: undefined,
        sneakers: [],
        accessories: [],
        headgears: [],
        allProducts: [],
        listProductsPageTermDefined: '',
        productPage: {} as any,
    }),
    actions:{
        async find(){
            try{
                const data = await productsService.find();
                this.allProducts = data;
                const productsGroupedByType = data.reduce((groups: any, item: any) => {
                    const { type } = item;
                  
                    if (!groups[type]) {
                      groups[type] = [];
                    }
                  
                    groups[type].push(item);
                  
                    return groups;
                  }, {});
                  console.log(productsGroupedByType);
                  this.$state.sneakers = productsGroupedByType.SNEAKER;
                  this.$state.headgears = productsGroupedByType.CAP;
                  this.$state.accessories = productsGroupedByType.ACCESSORIES;
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
        async findById(searchId: number){
            const $q = useQuasar();
            try {
                const { id, name, photo, value, brand, type, color, size } = await productsService.findById(searchId)
                const clonedResponse = { id, name, photo, value: 'R$ ' + value, brand, type, color, size}
                this.productPage = clonedResponse;
                return clonedResponse;
              } catch(err: any){
                console.error(err)
                $q.notify({color: 'negative', message: `Um erro aconteceu ao buscar o produto: ${err.message}`})
            }  
        },
        async createProduct(body: TCreateProduct, token: string | null ){
            return await productsService.createProduct(body, token);
        },
        async uploadImage(id: number, img: File, token: string | null){
            return await productsService.uploadImage(id, img, token);
        }
    },
})