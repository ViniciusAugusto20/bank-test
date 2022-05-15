import React from 'react';

import { HeaderBarProps } from './types';

import * as S from './style';

const HeaderBar = ({ title }: HeaderBarProps): JSX.Element => {
  return (
    <S.Container>
      <S.TextTitle>{title}</S.TextTitle>
    </S.Container>
  );
};

export default HeaderBar;
