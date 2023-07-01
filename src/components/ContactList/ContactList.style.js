import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;

export const TextWrap = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;

  padding-left: 20px;
  border: 1px solid transparent;

  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.set1};

  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;

  text-transform: capitalize;

  transition: all 300ms ease-in-out;

  &:hover {
    border: 1px solid black;
    background-color: ${({ theme }) => theme.colors.set3};
  }
  &:hover p {
    color: ${({ theme }) => theme.colors.set1};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.set2};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.set1};
  border: none;

  transition: all 300ms ease-in-out;

  & > svg {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.set2};
  }

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
