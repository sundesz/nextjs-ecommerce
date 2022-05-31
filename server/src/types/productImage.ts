export interface IProductImage {
  productImagesId: string;
  productId: string;
  image: string;
}

export type NewProductImage = Omit<IProductImage, 'productImagesId'>;
