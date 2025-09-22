import styled from 'styled-components'
import { Link

 } from 'react-router-dom'
import { motion } from "framer-motion";

export const Wrapper = styled.div`
position: relative;
overflow-y: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px;
  margin-top: 0px;
  flex-wrap: wrap; /* tombol bisa turun ke bawah kalau sempit */

  @media (max-width: 768px) {
    flex-direction: column; /* di tablet/HP jadi bertumpuk */
    align-items: center;
    gap: 0px;
  }
`;


/* CardWrapper: responsive dengan menjaga rasio 700x350 (2:1) */
export const CardWrapper = styled.div`
  width: min(700px, 95%);        /* max 700px, otherwise 95% of viewport */
  max-width: 700px;
  aspect-ratio: 2 / 1;           /* menjaga rasio (700 / 350 = 2) */
  perspective: 1000px;
  text-align: center;
  margin: 120px auto 40px;       /* center horizontally, beri top spacing */
  position: relative;            /* penting untuk anak absolute */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 80px;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 40px;
    width: 90%;
  }
`;

export const CardFace = styled.div`
 width: 100%;
 height: 100%;
 position: absolute;
 backface-visibility: hidden;
 border-radius: 20px;
 overflow: hidden;
`
export const CardInner = styled.div`
 width: 100%;
 height: 100%;
 position: relative;
 transition: transform 0.8s ease;
 transform-style: preserve-3d;
 ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
`
export const CardButton = styled.div`
 width: 100%;
 height: 100%;
 position: relative;
`  
export const CardArea = styled.div`
  width: min(700px, 95%);
  max-width: 700px;
  aspect-ratio: 2 / 1;
  margin: 120px auto 40px;
  position: relative; /* penting supaya tombol absolute ngikut ke sini */
`

export const ReverseHint = styled.img`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  opacity: 0.7;
  pointer-events: none; // agar tidak bisa diklik
  z-index: 10;
`;

export const Front = styled(CardFace)`
 background: #C75C14;
 z-index: 5;
`

export const Back = styled(CardFace)`
  background: #C75C14;
  transform: rotateY(180deg);
  width: auto;         /* ikut lebar video */
  height: auto;        /* ikut tinggi video */
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    display: block;
  }
`;


export const Controls = styled.div`
 display: flex;
 gap: 10px;
 flex-wrap: wrap;
 justify-content: center;

 @media (max-width: 480px) {
    gap: 0px;
    flex-direction: column;
    align-items: center;}
`

export const BackgroundContainer = styled.div`
 background-image: url('/images/background.png');
 background-size: cover; 
 background-position: center;
 background-repeat: no-repeat;
 height: 100vh;
 width: 100%;
 position: relative;
 z-index: 0;
 overflow-y: auto;
`
export const Controls2 = styled.div`
 display: flex;
 gap: 10px;
 margin-top: 10px;
`
/* letakkan ini di file FlashcardsWajahElements.js, ganti versi lama */
export const PopupContainer = styled.div`
  /* absolute supaya mengikuti Wrapper (yang relative) */
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* ukuran dinamis: minimal, ideal 50% viewport, maksimal */
  width: clamp(500px, 50vw, 900px);

  padding: 24px 20px;
  border-radius: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  /* penting: PopupContainer sendiri adalah reference untuk anak absolute di dalamnya */
  z-index: 1000;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 768px) {
    width: 86%;
    padding: 16px;
  }
  @media (max-width: 480px) {
    width: 92%;
    padding: 12px;
  }
`;

/* PopupButton: di atas popup, center, skala sesuai lebar popup */
export const PopupButton = styled.div`
  position: absolute;
  top: 75%;                        /* referensi: tepi atas PopupContainer */
  left: 50%;
  transform: translate(-50%, -56%); /* angkat setengah tinggi kontainer tombol */
  display: flex;
  align-items: center;
  justify-content: center;

   gap: clamp(8px, 1.2vw, 20px);
  width: 70%;           /* <-- PENTING: relatif ke PopupContainer */
  padding: 6px;
  z-index: 1100;

  /* set tombol anak supaya mengikuti lebar PopupButton */
  & > a {
    flex: 1 1 48%;
    max-width: 100%;
    display: inline-block;
    text-decoration: none;
  }

  /* Tablet */
  @media (max-width: 768px) {
    transform: translate(-50%, -60%);
    width: 80%;
  }

  /* HP kecil: susun vertikal supaya tidak kepres */
  @media (max-width: 480px) {
    flex-direction: column;
    transform: translate(-50%, -70%);
    width: 86%;
    & > a {
      max-width: 100%;
      width: 100%;
    }
  }

`;



/* tombol (Link) - width akan berdasar persentase PopupButton */
export const Button3 = styled(Link)`
  position: relative;
  display: inline-block;
  width: 50%;            /* dua tombol -> masing-masing hampir setengah PopupButton */
  text-decoration: none;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.18s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
}
 
  @media (max-width: 480px) {
    width: 48%;
  }
`;

/* tombol kanan */
export const Button4 = styled(Link)`
  position: relative;
  display: inline-block;
  width: 48%;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.18s ease;
  }

  @media (max-width: 480px) {
    width: 48%;
  }
`;



export const Button1 = styled(Link)`
    cursor: pointer;
    margin-top: 0px;
    text-decoration: none;
    display: inline-block;
    z-index: 5; /* Ensures text stays on top */


    img{
       max-width: 400px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 300px;
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
       max-width: 400px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 300px;
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