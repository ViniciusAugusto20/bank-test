import { ReactText } from 'react';

export const formatterMoney = (
  value: string | number | ReactText | undefined | null,
): string => {
  if (!value) return 'R$ ---';
  const newValue = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  });
  return newValue.format(Number(value));
};
