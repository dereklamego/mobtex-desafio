import React from 'react';
import { StyledTypography } from './styles';

interface TitleProps {
  text: string;
}

export function Title({ text, ...props }: TitleProps) {
  return (
    <StyledTypography {...props} variant='h1'>
      {text}
    </StyledTypography>
  );
}