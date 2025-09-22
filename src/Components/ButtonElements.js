import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

/* Wrapper untuk Button1 dan Button2 */
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 52%; /* geser sesuai kebutuhan agar pas di bawah tulisan */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    top: 55%;
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    top: 50%;
    gap: 10px;
  }
`;

/* Button utama yang tetap absolute */
export const Button = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  background: #fadb5e;
  padding: 20px 50px;
  border: 4px solid #c75c14;
  font-weight: bold;
  border-radius: 999px;
  color: #c75c14;
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  display: inline-block;
  z-index: 1;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f3b10bff;
    border-radius: 999px;
    z-index: 0;
  }

  &:hover::after {
    width: 100%;
  }

  & > span {
    position: relative;
    z-index: 2;
  }
`;

/* Button1 dan Button2 sekarang ikut wrapper */
export const Button1 = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  background: #fadb5e;
  padding: 20px 50px;
  border: 4px solid #c75c14;
  font-weight: bold;
  border-radius: 999px;
  color: #c75c14;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f3b10bff;
    border-radius: 999px;
    z-index: 0;
  }

  &:hover::after {
    width: 100%;
  }

  & > span {
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    padding: 15px 40px;
  }
`;

export const Button2 = styled(Link)`
  text-align: center;
  font-size: 1.5rem;
  background: #fadb5e;
  padding: 20px 50px;
  border: 4px solid #c75c14;
  font-weight: bold;
  border-radius: 999px;
  color: #c75c14;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:hover {
    color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #f3b10bff;
    border-radius: 999px;
    z-index: 0;
  }

  &:hover::after {
    width: 100%;
  }

  & > span {
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    padding: 15px 40px;
  }
`;

export const IsyaratButton = styled(Link)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 20;
  transition: transform 0.2s ease;

  &:hover,
  &:active {
    transform: scale(1.05);
  }

  img {
    width: 120px;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 80px;
    }
  }

  @media screen and (max-width: 480px) {
    img {
      width: 60px;
    }
  }
`;
