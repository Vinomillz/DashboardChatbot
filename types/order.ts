export interface Order {
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
  };
  status: 'pending' | 'assigned' | 'in transit' | 'delivered';
}
