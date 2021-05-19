interface ItemType {
  id: string | undefined;
  title: string;
  amount: number;
  createdAt: Date;
  type: string;
}

export type {
  ItemType
}
