import type { ESneakersBrands } from "../enums/products-brands.enum";
import type { EProductsTypes } from "../enums/produtcs-types.enum";
import type { TFilterProductsPriceRange } from "../types/products/price-range.type";

export interface IFilterProductsByParams {
    type?: EProductsTypes;
    brand?: ESneakersBrands;
    color?: string;
    priceRange?: TFilterProductsPriceRange;
    limit?: number;
    page?: number;
  }
  