import type { IFilterProductsByParams } from "@/shared/interface/filter-products-by-params.interface";
import type { IProdutcsEntity } from "@/shared/interface/products/products-entity.interface";

export type TStateUserStore = {
    searchParams?: IFilterProductsByParams;
    products?: IProdutcsEntity[];
}