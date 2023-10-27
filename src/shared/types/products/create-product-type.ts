import { ESneakersBrands } from '@/shared/enums/products-brands.enum';
import { EProductsTypes } from '@/shared/enums/produtcs-types.enum';

export type TCreateProduct = {
    name: string;
    value: number;
    type: EProductsTypes;
    brand?: ESneakersBrands;
    color: string;
    size: string;
}