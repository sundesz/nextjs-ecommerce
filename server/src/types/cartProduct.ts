export interface ICartProduct {
  cartProductsId: string;
  cartId: string;
  productId: string;
  price: number;
  quantity: number;
}

export type NewCartProduct = Omit<ICartProduct, 'cartProductId'>;
