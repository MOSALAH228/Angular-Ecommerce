import { BasicData } from "./basicData.model";
import { categorie } from "./categorie.model";
import { paymentType } from "./payment-type.model";
import { Tag } from "./tag.model";

export interface product {
  id?: number;
  price?: number;
  paymentTypeMethods: paymentType[];
  category?: categorie;
  basicData: BasicData[];
  tag?: Tag[];
  discount?: number;
  imgUrls: string[];
  relatedProductsIds?: number[];
}
