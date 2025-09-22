import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
position: relative;
`

export const BackgroundContainer = styled.div`
 background-image: url('/images/bg.png');
 background-size: cover; 
 background-position: center;
 background-repeat: no-repeat;
 height: 100%;
 width: 100%;
 position: relative;
 z-index: 0;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 20px;
  text-align: center;
  z-index: 10;

  img {
    height: clamp(100px, 10vh, 200px);
    max-width: 90vw;
    object-fit: contain;
    padding: 10px;
  }
`;


export const CardVideo = styled.img`
        width: 280px;
        height: 280px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 10px;
        overflow-y: auto;
`

export const CardLabel = styled.img`
    width: auto;
    height: 100px;
`

export const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  min-height: 100vh;

  /* Default HP (paling kecil) */
  padding: 0px 12px 20px;

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 0px 16px 30px;
  }

  /* Laptop sedang */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0px 20px 40px;
  }

  /* Desktop lebar */
  @media (min-width: 1025px) {
    padding: 0px 23px 60px;
  }
`;

export const LetterCard = styled.div`
 background: #c75c14;
 border-radius: 10px;
 padding: 12px;
 text-align: center;
 width: 300px;

 video {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
 }

 span {
  font-size: 60px;
  color: #ffde59;
  font-weight: bold;
  display: block;
 }
`;

export const Home = styled.div`
  position: absolute;
  top: 15px;   /* posisi default (laptop/desktop) */
  left: 4%;
  display: flex;
  height: 70px;
  width: 70px;
  z-index: 999;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    top: 15px;  /* tablet */
    height: 50px;
    width:50px;
  }

  @media (max-width: 480px) {
    top: px;  /* HP */
  }
`;


export const Card = styled(Link)`
    width: 350px;
    height: 500px;
    border-radius: 10px;
    background-color: #C75C14;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0; 
    transition: transform 0.2s ease;
    overflow-y: auto;
    &:hover {
        transform: scale(1.03);
    }
`
