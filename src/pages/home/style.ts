import styled, { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { color } from '../../assets/css/color';
import { sizes } from '../../assets/css/devices';
import { typography } from '../../assets/css/typography';

import { AutoCompleteProps, ButtonFilterProps, MoneyRowProps } from './types';

import IcoSearch from '../../assets/icons/icon-search.svg';
import IcoRefound from '../../assets/icons/icon-refound.svg';
import IcoEntry from '../../assets/icons/icon-entry.svg';
import IcoSchedule from '../../assets/icons/icon-schedule.svg';

const customMedia = generateMedia({
  ...sizes,
});

export const ContainerFilters = styled.div`
  margin: 40px 205px;
  display: grid;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-template-columns: 45% 55%;
  position: relative;
  ${customMedia.lessThan('laptop')`
      grid-template-columns: 1fr;
      margin-left: calc(100vw - 90vw);
      margin-right: calc(100vw - 90vw);
    }
  `}
`;

export const ContainerButtonsFilter = styled.div``;

export const ButtonFilter = styled.button<ButtonFilterProps>`
  border: 1px solid transparent;
  border-radius: 32px;
  height: 32px;
  color: ${({ active }) => (active ? color.white : color.pink)};
  background-color: ${({ active }) => (active ? color.pink : 'transparent')};
  min-width: 60px;
  margin: 0px 20px;
  :first-child {
    margin-left: 0px;
    ${customMedia.lessThan('laptop')`
      margin: 10px 20px;
    }
  `}
  }
  :hover {
    pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
    cursor: ${({ active }) => (active ? 'default' : 'pointer')};
    background-color: ${({ active }) => (active ? color.pink : color.softBlue)};
  }
`;

export const ContainerSearchInput = styled.div`
  display: flex;
  width: 100%;
  border-radius: 16px;
  background-color: ${color.gray};
  align-self: flex-start;
  height: 64px;
  align-items: center;
  justify-content: left;
  align-content: center;
  border: 1px solid ${color.gray};

  ${customMedia.lessThan('laptop')`
      margin: 0px 20px;
    }
  `}
`;

export const Row = styled.div`
  right: 0;
  margin: 0px !important;
  background-color: ${color.gray};
  height: 37px;
  cursor: pointer;
  text-align: center;
  flex-direction: row;

  p {
    padding-top: 8px;
    text-align: left;
    margin: 0px 20px;
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s1}px;
    font-weight: ${typography.weight.regular};
    color: ${color.mediumBlack};
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }
  &:hover {
    background-color: #f8fafc;
  }
`;

export const ContainerOptions = styled.div<AutoCompleteProps>`
  overflow-x: hidden;
  width: 100%;
  max-width: 500px;
  overflow-y: initial;
  z-index: 102;
  position: absolute;
  display: inline-block;
  flex-direction: column;
  margin-left: calc(100vw - 98vw);
  margin-top: 2px;
  ${customMedia.lessThan('laptop')`
      min-width: 150px;
      margin-left: calc(100vw - 93vw);
    }
  `}
  ${customMedia.lessThan('tablet')`
      max-width: 300px;
      min-width: 150px;
      margin-left: calc(100vw - 88vw);
    }
  `}
`;

export const IconSearch = styled.i`
  mask: url(${IcoSearch});
  mask-size: cover;
  margin: 0px 20px;
  width: 16px;
  height: 16px;
  background-color: ${color.mediumBlack};
`;

export const Selector = styled.input`
  appearance: none;
  width: 100%;
  height: 64px;
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  border: none;
  color: ${color.black};
  background: none;
  text-align: left;
  letter-spacing: 0px;
  line-height: 24px;
  ::placeholder {
    color: ${color.softGray};
    font-family: ${typography.type.primary};
  }
  &:-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
    border: none;
    color: ${color.black};
    background: none;
    opacity: 1;
  }
`;

export const ContainerComplate = styled.div``;

export const ContainerBalanceTable = styled.div`
  display: grid;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  grid-template-columns: 1fr;
  margin: 0px 205px;
  ${customMedia.lessThan('laptop')`
      margin-left: calc(100vw - 87vw);
      margin-right: calc(100vw - 92vw);
    }
  `}
`;

export const BalanceTableHead = styled.div`
  color: black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 0px 35px 0px 16px;
  .default {
    color: ${color.softGray};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    font-weight: ${typography.weight.regular};
  }
  .custom {
    color: ${color.pink};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    font-weight: ${typography.weight.bold};
  }
`;

export const BalanceTableRows = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  span {
    justify-content: center;
    align-items: center;
    margin: 20px 15px 20px 0px;
    color: ${color.softGray};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s3}px;
    font-weight: ${typography.weight.regular};
  }
  .capitalizedRow {
    text-transform: capitalize;
  }
`;

export const IconOperation = styled.i`
  mask-size: cover;
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 15px;
  margin-top: -8px;
`;

export const IconContainer = styled.div`
  display: flex;
  ${customMedia.lessThan('laptop')`
      display: block;
    }
  `}
  .iconcompleted {
    background-image: url(${IcoEntry});
  }
  .iconrefunded {
    background-image: url(${IcoRefound});
  }
  .iconpending {
    background-image: url(${IcoSchedule});
  }
`;

const containerMoneyRowModifiers = {
  'Pagamento Realizado': () => css`
    color: ${color.pink};
  `,

  'Transferência Realizada': () => css`
    color: ${color.pink};
  `,

  'Pagamento Recebido': () => css`
    color: ${color.blue};
  `,

  'Transferência Recebida': () => css`
    color: ${color.blue};
  `,
  'Pagamento Estornado': () => css`
    color: ${color.mediumBlack};
    text-decoration: line-through;
  `,

  'Transferência Estornada': () => css`
    color: ${color.mediumBlack};
    text-decoration: line-through;
  `,

  'Pagamento Agendado': () => css`
    color: ${color.pink};
  `,

  'Transferência Agendada': () => css`
    color: ${color.pink};
  `,
};

export const MoneyRow = styled.em<MoneyRowProps>`
  ${({ enumOfTransaction }) => css`
    font-style: normal;
    ${!!enumOfTransaction && containerMoneyRowModifiers[enumOfTransaction]}
  `};
`;

export const DayContainer = styled.div`
  margin-left: 21px;
  margin-top: -14px;
  position: relative;
  text-transform: capitalize;
  color: ${color.mediumBlack};

  font-size: ${typography.size.s1}px;
  span {
    font-weight: ${typography.weight.bold};
  }
`;

export const DayBalance = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.s1}px;
  color: ${color.mediumBlack};
  margin-top: 12px;
  span:first-child {
    margin-left: 5px;
    font-weight: ${typography.weight.bold};
  }
`;

export const ContainerBalanceTableBody = styled.div``;

export const BalanceTableBody = styled.div`
  color: ${color.black};
  border: 1px solid ${color.mediumGray};
  border-radius: 16px;
  padding: 20px 35px 20px 16px;
`;

export const MarkDetailStart = styled.div`
  color: ${color.mediumGray};
  margin-top: 10px;
  margin-left: 32px;
  margin-bottom: -2px;
`;

export const MarkDetailEnd = styled.div`
  color: ${color.mediumGray};
  margin-left: 32px;
  margin-top: -4px;
  margin-bottom: 10px;
`;
