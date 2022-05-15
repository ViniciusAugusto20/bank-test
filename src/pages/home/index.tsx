import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '../../context/toast';

import { transactionEnumTransform } from '../../models/enums/transactionEnum';

import { getAllTransactions } from '../../services/balance/balanceService';

import { formatterMoney } from '../../utils';
import { formatDateText, formatDateTextResume } from '../../utils/fomatDate';

import { PageDefault } from '../../components';

import {
  ResumeTransactionProps,
  TransactionProps,
} from '../../models/transaction';

import * as S from './style';

const Home = (): JSX.Element => {
  const { addToast } = useToast();
  const [transactions, setTransactions] = useState<ResumeTransactionProps[]>();
  const [currentSelectedFilter, setCurrentSelectedFilter] = useState('ALL');
  const [searchValue, setSearchValue] = useState<string>();
  const [filteredOptions, setFilteredOptions] = useState<TransactionProps[]>(
    [],
  );

  const filterItemsOnTransactions = (
    transactionValues: TransactionProps[],
    filterByActor?: string,
  ): TransactionProps[] => {
    if (filterByActor) {
      return transactionValues.filter((item: TransactionProps) =>
        item.actor.toLowerCase().startsWith(filterByActor.toLowerCase()),
      );
    }

    if (currentSelectedFilter === 'SCHEDULED') {
      return transactionValues.filter(
        (item: TransactionProps) => item.scheduled === true,
      );
    }
    const filtredTransactions = transactionValues.filter(
      (item: TransactionProps) => item.entry === currentSelectedFilter,
    );

    const results = filtredTransactions.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
      return false;
    });

    return results;
  };

  const handleGetAllTransactions = async (): Promise<void> => {
    try {
      const findedTransactions = await getAllTransactions();

      if (currentSelectedFilter !== 'ALL') {
        const filtredTransactions = findedTransactions.map(
          (currentTransaction): ResumeTransactionProps => {
            const filtredTransactionsItems = filterItemsOnTransactions(
              currentTransaction.items,
            );

            const filtredValues = {
              ...currentTransaction,
              items: filtredTransactionsItems,
            };

            return filtredValues;
          },
        );
        setTransactions(filtredTransactions);
      } else {
        setTransactions(findedTransactions);
      }
    } catch (error) {
      addToast({
        type: 'error',
        content: 'Erro ao listar as transações',
      });
    }
  };

  const findTransactionByActorName = (valueToSearch: string): void => {
    handleGetAllTransactions();
    if (transactions) {
      const filtredActors = transactions.map(
        (currentTransaction): TransactionProps[] => {
          return filterItemsOnTransactions(
            currentTransaction.items,
            valueToSearch,
          );
        },
      );
      const removedEmptyValuesOnActors = filtredActors.filter(
        (obj) => !(Object.keys(obj).length === 0),
      );

      const valuesToActors = removedEmptyValuesOnActors.reduce((acc, item) => {
        acc.push(...item);
        return acc;
      }, []);

      setFilteredOptions(valuesToActors);
    }
  };

  const handleChange = (value: string): void => {
    setSearchValue(value);
    if (value.length >= 3) {
      findTransactionByActorName(value);
    } else {
      setFilteredOptions([]);
    }
  };

  useEffect(() => {
    handleGetAllTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSelectedFilter]);

  return (
    <PageDefault title="Extrato">
      <S.ContainerFilters>
        <S.ContainerButtonsFilter>
          <S.ButtonFilter
            active={currentSelectedFilter === 'ALL'}
            onClick={() => setCurrentSelectedFilter('ALL')}
          >
            Tudo
          </S.ButtonFilter>
          <S.ButtonFilter
            active={currentSelectedFilter === 'CREDIT'}
            onClick={() => setCurrentSelectedFilter('CREDIT')}
          >
            Entrada
          </S.ButtonFilter>
          <S.ButtonFilter
            active={currentSelectedFilter === 'DEBIT'}
            onClick={() => setCurrentSelectedFilter('DEBIT')}
          >
            Saída
          </S.ButtonFilter>
          <S.ButtonFilter
            id="qa-scheduler-button"
            active={currentSelectedFilter === 'SCHEDULED'}
            onClick={() => setCurrentSelectedFilter('SCHEDULED')}
          >
            Futuro
          </S.ButtonFilter>
        </S.ContainerButtonsFilter>
        <S.ContainerComplate>
          <S.ContainerSearchInput>
            <S.IconSearch />
            <S.Selector
              id="qa-search-item"
              placeholder="Pesquisar"
              value={searchValue || ''}
              onChange={(event) => handleChange(event.target.value)}
            />
          </S.ContainerSearchInput>
          <S.ContainerOptions show={true}>
            {searchValue &&
              searchValue.length >= 3 &&
              filteredOptions?.map((currentProduct) => (
                <S.Row key={currentProduct.dateEvent}>
                  <p> {currentProduct.actor.toLowerCase()}</p>
                </S.Row>
              ))}

            {searchValue &&
              searchValue.length >= 3 &&
              filteredOptions.length === 0 && (
                <S.Row id="qa-row-not-found-item">
                  <p>Nenhum resultado encontrado.</p>
                </S.Row>
              )}
          </S.ContainerOptions>
        </S.ContainerComplate>
      </S.ContainerFilters>
      <S.ContainerBalanceTable>
        <S.BalanceTableHead>
          <span />
          <span className="default">Tipo de transação</span>
          <span className="custom">Data</span>
          <span className="default">Valor</span>
        </S.BalanceTableHead>

        {transactions?.map(
          (transaction) =>
            transaction.items.length > 0 && (
              <S.ContainerBalanceTableBody key={uuidv4()}>
                <S.DayContainer>
                  <span>{formatDateText(transaction.date)}</span>
                </S.DayContainer>
                <S.MarkDetailStart>|</S.MarkDetailStart>
                <S.BalanceTableBody>
                  {transaction.items.map((item) => (
                    <S.BalanceTableRows key={uuidv4()}>
                      <span>
                        <S.IconContainer>
                          <S.IconOperation
                            className={`icon${item.status.toLowerCase()}`}
                          />
                          {item.actor}
                        </S.IconContainer>
                      </span>
                      <span>
                        {transactionEnumTransform(
                          item.status,
                          item.source,
                          item.entry,
                        )}
                      </span>
                      <span className="capitalizedRow">
                        {formatDateTextResume(item.dateEvent)}
                      </span>
                      <span>
                        <S.MoneyRow
                          enumOfTransaction={transactionEnumTransform(
                            item.status,
                            item.source,
                            item.entry,
                          )}
                        >
                          {item.entry === 'DEBIT'
                            ? `- ${formatterMoney(item.amount)}`
                            : formatterMoney(item.amount)}
                        </S.MoneyRow>
                      </span>
                    </S.BalanceTableRows>
                  ))}
                </S.BalanceTableBody>
                <S.MarkDetailEnd>|</S.MarkDetailEnd>
                <S.DayBalance>
                  <span>{formatterMoney(transaction.amountTotal)}</span>
                  <span> Saldo do dia</span>
                </S.DayBalance>
              </S.ContainerBalanceTableBody>
            ),
        )}
      </S.ContainerBalanceTable>
    </PageDefault>
  );
};

export default Home;
