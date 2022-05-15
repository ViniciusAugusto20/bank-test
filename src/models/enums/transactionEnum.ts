export enum TransactionEnum {
  COMPLETED_PAYMENT_DEBIT = 1,
  COMPLETED_TRANSFER_DEBIT = 2,
  COMPLETED_PAYMENT_CREDIT = 3,
  COMPLETED_TRANSFER_CREDIT = 4,
  REFUNDED_PAYMENT_CREDIT = 5,
  REFUNDED_TRANSFER_CREDIT = 6,
  PENDING_PAYMENT_DEBIT = 7,
  PENDING_TRANSFER_DEBIT = 8,
}

export const transactionEnumFormat = (
  transactionStatus: string,
  transactionSource: string,
  transactionEntry: string,
): string => {
  const formattedOperation = `${transactionStatus}_${transactionSource}_${transactionEntry}`;
  return formattedOperation;
};

export const TransactionEnumMap: Record<TransactionEnum, string> = {
  [TransactionEnum.COMPLETED_PAYMENT_DEBIT]: 'Pagamento Realizado',
  [TransactionEnum.COMPLETED_TRANSFER_DEBIT]: 'Transferência Realizada',
  [TransactionEnum.COMPLETED_PAYMENT_CREDIT]: 'Pagamento Recebido',
  [TransactionEnum.COMPLETED_TRANSFER_CREDIT]: 'Transferência Recebida',
  [TransactionEnum.REFUNDED_PAYMENT_CREDIT]: 'Pagamento Estornado',
  [TransactionEnum.REFUNDED_TRANSFER_CREDIT]: 'Transferência Estornada',
  [TransactionEnum.PENDING_PAYMENT_DEBIT]: 'Pagamento Agendado',
  [TransactionEnum.PENDING_TRANSFER_DEBIT]: 'Transferência Agendado',
};

export const transactionEnumTransform = (
  transactionStatus: string,
  transactionSource: string,
  transactionEntry: string,
): string => {
  return TransactionEnumMap[
    TransactionEnum[
      transactionEnumFormat(
        transactionStatus,
        transactionSource,
        transactionEntry,
      )
    ]
  ];
};
