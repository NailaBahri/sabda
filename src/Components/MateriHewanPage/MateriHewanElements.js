import styled from 'styled-components'
import { Link

 } from 'react-router-dom'

export const Wrapper = styled.div`
position: relative;
min-height: 100vh;
overflow-y: auto;
`

export const BackgroundContainer = styled.div`
 background-image: url('/images/bg.png');
 background-size: cover; 
 background-position: center;
 background-repeat: no-repeat;
 min-height: 100vh;
 width: 100%;
 position: relative;
 z-index: 0;
`

export const ButtonImage = styled(Link)`
  position: absolute;
  text-align: center;
  top: clamp(100px, 8vh, 160px);
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 999;

  img {
    height: clamp(120px, 12vh, 180px);
    max-width: 90vw;
    transition: transform 0.25s ease;
  }

 &:hover img {
    transform: scale(1.03);
    }
  
 @media (min-width: 1024px) {
  top: 135px;
 }

`;

export const Title = styled.div`
  position: absolute;
  top: clamp(20px, 2%, 40px);
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  pointer-events: none; /* biar nggak nutup area di bawahnya */

  img {
    height: clamp(100px, 10vh, 200px);
    max-width: 90vw;
    object-fit: contain;
    pointer-events: none;
    padding: 10px;
  }

  @media (max-width: 900px) {
    padding-top: 50px;
    position: static;
    transform: none;
    margin: 12px 0;
  }
`;


export const CardScrollWrapper = styled.div`
  position: absolute;
  top: 19%;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;


export const Card = styled(Link)`
    width: 350px;
    height: 600px;
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

export const CardImage = styled.img`
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 0px;
        overflow-y: auto;
`
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


export const Button1 = styled(Link)`
    cursor: pointer;
    margin-top: 0px;
    text-decoration: none;
    display: inline-block;
    z-index: 5; /* Ensures text stays on top */


    img{
       max-width: 280px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 200px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            max-width: 150px;
            z-index: 15;
        }
    }
    
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;}
`;

export const Button2 = styled(Link)`
    cursor: pointer;
    margin-top: 0px;
    text-decoration: none;
    display: inline-block;
    z-index: 5; /* Ensures text stays on top */


    img{
       max-width: 280px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 200px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            max-width: 150px;
            z-index: 15;
        }
    }

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;}
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* tombol bisa turun kalau sempit */
  gap: 8px;
  margin-top: 12px;

  /* HP kecil */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
    margin-top: 20px;
  }

  /* Laptop sedang */
  @media (min-width: 769px) and (max-width: 900px) {
    flex-direction: row;
    gap: 15px;
    padding-top: 20px;
  }

  
  /* Laptop sedang */
  @media (min-width: 901px) and (max-width: 1024px) {
    flex-direction: row;
    gap: 15px;
    padding-top: 150px;
  }

  /* Desktop lebar */
  @media (min-width: 1025px) {
    flex-direction: row;
    gap: 20px;
    padding-top: 180px; /* biar agak turun */
  }
`;


/* Button1 dan Button2 sekarang ikut wrapper */
export const Button = styled(Link)`
  text-align: center;
  font-size: 1rem;
  background: #fadb5e;
  padding: 10px 40px;
  border: 4px solid #c75c14;
  font-weight: bold;
  border-radius: 999px;
  color: #c75c14;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  position: relative;
  overflow: hidden;
  
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

export const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* biar mulai dari atas */
  overflow-y: auto;        /* <-- biar bisa scroll */
  padding: 40px 20px;      /* kasih ruang buat scroll */
  z-index: 1000;
`;

export const PopupContent = styled.div`
 background: #ffde59;
 border-radius: 12px;
 padding: 20px;
 width: 90%;
 max-width: 700px;
 display: flex;
 flex-wrap: wrap;
 gap: 16px;
 justify-content: center;

 @media (max-width: 600px) {
  flex-direction: column;
  align-items: center;
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

export const CloseButton = styled.button`
 position: absolute;
 top: 16px;
 right: 16px;
 background: #c75c14;
 border: none;
 color: white;
 font-size: 20px;
 font-weigth: bold;
 padding: 6px 12px;
 border-radius: 8px;
 cursor: pointer;
`