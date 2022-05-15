import { BASE_URL } from '../../config/env';
import { getData } from '../defaultServices';
import { ResumeTransactionProps } from '../../models/transaction';

export const getAllTransactions = async (): Promise<
  ResumeTransactionProps[]
> => {
  const response = await getData(`${BASE_URL}/results`);
  return response;
};
