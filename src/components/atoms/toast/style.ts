import styled, { css, keyframes } from 'styled-components';

import { color } from '../../../assets/css/color';

import { ToastContainerProps } from './types';

const FadeInAnimation = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const toastContainerModifiers = {
  success: () => css`
    background-color: ${color.green};
    color: #ffffff;
  `,
  error: () => css`
    background-color: ${color.red};
    color: #ffffff;
  `,
  warning: () => css`
    background-color: ${color.warning};
    color: #0b5964;
  `,
  default: () => css`
    background-color: ${color.lightGray};
    color: #ffffff;
  `,
};

export const Container = styled.div<ToastContainerProps>`
  ${({ fadeOut, type }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    animation: ${FadeInAnimation} 0.5s ease-out;
    padding: 16px;
    border-radius: 5px;
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
    opacity: 1;
    box-shadow: 2px 2px 5px ${color.lightGray};

    & + & {
      margin-top: 30px;
    }

    ${toastContainerModifiers[type]}

    ${!!fadeOut &&
    css`
      transform: translateX(-120%);
      opacity: 0;
    `}
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    letter-spacing: 0.22px;
    margin: 0 10px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  opacity: 0.6;

  svg {
    stroke-width: 1px;
  }
`;
