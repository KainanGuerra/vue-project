import type { ESneakersBrands } from "@/shared/enums/products-brands.enum";
import type { EProductsTypes } from "@/shared/enums/produtcs-types.enum";

export interface IProdutcsEntity {
    id: string;
    name: string;
    value: number;
    type: EProductsTypes;  
    brand: ESneakersBrands;
    color: string;
  
}