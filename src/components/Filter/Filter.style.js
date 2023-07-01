import styled from 'styled-components';

export const InputName = styled.label``;

export const Input = styled.input`
  margin-bottom: 25px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;

  appearance: none;
  border: none;
  outline: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.set1};
  background-color: ${({ theme }) => theme.colors.set4}80;
  border-radius: 3px 3px 0 0;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;
