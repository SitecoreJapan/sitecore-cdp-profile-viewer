export interface OrderItem {
  href: string;
}

export interface OrdersResponse {
  href: string;
  offset: number;
  limit: number;
  items: OrderItem[];
}
