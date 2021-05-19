interface ItemType {
  id: string | undefined;
  title: string;
  amount: number;
  createdAt: string | Date;
  type: string;
}

export type {
  ItemType
}
