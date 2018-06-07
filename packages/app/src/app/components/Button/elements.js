import styled, { css } from 'styled-components';
import Link from 'react-router-dom/Link';
import theme from 'common/theme';

const getBackgroundColor = ({ disabled, red, secondary, danger }) => {
  if (danger) return `background-color: ${theme.dangerBackground()}`;
  if (disabled) return `background: ${theme.background2.darken(0.1)()}`;
  if (secondary) return `background: #3A4B5D`;
  if (red)
    return `background-image: linear-gradient(270deg, #F27777, #400000);`;
  return `background-color: #40A9F3;`;
};

const getBackgroundHoverColor = ({ disabled, red, secondary, danger }) => {
  if (danger) return `background-color: #E25D6A`;
  if (disabled) return `background: ${theme.background2.darken(0.1)()}`;
  if (secondary) return `background: #3A4B5D`;
  if (red)
    return `background-image: linear-gradient(270deg, #F27777, #400000);`;
  return `background-color: #66b9f4;`;
};

const getColor = ({ disabled, secondary }) => {
  if (disabled) return theme.background2.lighten(1.5)();
  if (secondary) return `#56a0d6`;
  return 'white';
};

const getBorder = ({ secondary, danger, red, disabled }) => {
  if (secondary) return `1px solid #56a0d6`;
  if (red) return '2px solid #F27777';
  if (danger) return '2px solid #E25D6A';
  if (disabled) return '161A1C';
  return '2px solid #66B9F4';
};

const styles = css`
  transition: 0.3s ease all;

  border: none;
  outline: none;
  ${props => getBackgroundColor(props)};
  background-size: 720%;

  border: ${props => getBorder(props)};
  border-radius: 4px;

  box-sizing: border-box;
  font-size: 1.125em;
  text-align: center;
  color: ${props => getColor(props)};
  font-weight: 400;
  width: ${props => (props.block ? '100%' : 'inherit')};

  user-select: none;
  text-decoration: none;
  font-weight: 600;

  ${props =>
    !props.disabled &&
    `
  cursor: pointer;
  `};

  &:hover {
    ${props => getBackgroundHoverColor(props)};
  }
`;

export const LinkButton = styled(Link)`
  ${styles};
`;
export const AButton = styled.a`
  ${styles};
`;
export const Button = styled.button`
  ${styles};
`;
