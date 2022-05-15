import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { color } from '../../../assets/css/color';
import { sizes } from '../../../assets/css/devices';
import { typography } from '../../../assets/css/typography';

const customMedia = generateMedia({
  ...sizes,
});

export const Container = styled.header`
  display: flex;
  min-height: 80px;
  align-items: center;
  color: ${color.white};
  border-bottom: 1px solid ${color.gray};
`;

export const TextTitle = styled.h1`
  color: ${color.mediumBlack};
  font-family: ${typography.type.primary};
  font-size: ${typography.size.l1}px;
  font-weight: ${typography.weight.bold};
  height: fit-content;
  margin: 0px 205px;

  ${customMedia.lessThan('laptop')`
      align-items: center;
      margin-left: calc(100vw - 90vw);
    }
  `}
`;
