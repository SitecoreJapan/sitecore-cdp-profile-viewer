interface OrderItem {
  href: string;
}

interface OrdersResponse {
  href: string;
  offset: number;
  limit: number;
  items: OrderItem[];
}
