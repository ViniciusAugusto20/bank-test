import React from 'react';
import { HeaderBar } from '../..';

import { PageDefaultProps } from './types';

import * as S from './style';

const PageDefault = ({ children, title }: PageDefaultProps): JSX.Element => {
  return (
    <S.Container>
      <HeaderBar title={title} />
      <section>
        <S.MainContent>
          <main>{children}</main>
        </S.MainContent>
      </section>
    </S.Container>
  );
};

export default PageDefault;
