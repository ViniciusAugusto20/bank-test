export type TransactionProps = {
  status: string;
  actor: string;
  amount: number;
  source: string;
  type: string;
  entry: string;
  scheduled: boolean;
  dateEvent: string;
};

export type ResumeTransactionProps = {
  date: string;
  amountTotal: number;
  items: TransactionProps[];
};
