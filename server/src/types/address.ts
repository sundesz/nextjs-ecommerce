export interface IAddress {
  addressId: string;
  userId: string;
  email: string;
  address: string;
  city: string;
  postcode: number;
}

export type NewAddress = Omit<IAddress, 'addressId'>;
