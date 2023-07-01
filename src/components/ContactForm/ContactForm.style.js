import styled from 'styled-components';
import phone from '../../phone-book.png';

export const Form = styled.form`
  background-image: url(${phone});
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 200px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 25px;
  padding-top: 30px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.set1}60;
`;

export const InputName = styled.label`
  margin-left: auto;

  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;

export const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  border-bottom: 3px solid ${({ theme }) => theme.colors.set1};
  background-color: ${({ theme }) => theme.colors.set4}80;
  border-radius: 3px 3px 0 0;

  margin-bottom: 25px;
  margin-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${({ theme }) => theme.colors.set1};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  letter-spacing: 0.72px;
`;

export const ButtonSubmit = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.set1};
  border: none;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.set2};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.11;
  letter-spacing: 0.72px;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.set3};
    color: ${({ theme }) => theme.colors.set1};
  }
`;
