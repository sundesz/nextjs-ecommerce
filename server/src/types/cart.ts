export type cartStatus = 'sold' | 'pending' | 'cancelled';

export interface ICart {
  cartId?: string;
  sessionId?: string;
  userId?: string;
  addressId: string;
  email?: string;
  userAgent: string;
  ipAddress: string;
  status: cartStatus;
}
