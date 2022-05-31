export interface IProductCategory {
  productCategoryId: string;
  categoryName: string;
}

export type NewProductCategory = Omit<IProductCategory, 'productCategoryId'>;
