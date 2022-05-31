export interface IProduct {
  productId: string;
  productCategoryId: string;
  name: string;
  description: string;
  ean: string;
  price: number;
  quantity: number;
}

export type NewProduct = Omit<IProduct, 'productId'>;
