export interface Item {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
}

export interface CartItem extends Item {
  count: number;
  selected: boolean;
}

export interface Coupon {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
  selected?: boolean;
}
