import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;
  font-size: 28px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-transform: capitalize;
  text-align: center;
`;

export const Wrap = styled.div`
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.set1}60;
`;
