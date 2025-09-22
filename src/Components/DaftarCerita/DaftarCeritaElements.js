import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from "styled-components";


// Responsive styled-components for card layout
// Goal: keep shapes/proportions identical across different laptop sizes
// only make the general size smaller (gaps may appear larger, that's ok)

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  min-height: 100vh;
  width: 100vw;
`

export const BackgroundContainer = styled.div`
  /* basic */
  width: 100%;
  min-height: 100vh;
  z-index: -1;
  pointer-events: none;


  /* default (mobile-first) use the tall image and let it scroll with content */
  background-image: url('/images/bg.png');
  background-repeat: no-repeat;
  background-position: top center;
  /* make the image fit the width so its height will be large (and create scroll) */
  background-size: 101% 101%;
  position: relative;
  background-attachment: scroll;

  /* On medium/desktop, switch to the desktop image and fix it */
  @media (min-width: 900px) {
    background-image: url('/images/background.png');
    /* desktop image usually cover full viewport and stay fixed */
    background-size: cover;
    background-position: center;
    position: fixed;     /* full-bleed fixed background */
    inset: 0;            /* top:0; right:0; bottom:0; left:0; */
    background-attachment: fixed; /* optional; on desktop it's fine */
  }

  /* optional: on very small screens you may want a different scale */
  @media (max-width: 360px) {
    background-size: 100% auto;
    background-position: center top;
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
  }

  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin: 12px 0;
  }
`;


export const CardScrollWrapper = styled.div`
  position: absolute;
  top: 17%;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;

  /* KUNCI: wadahnya tidak menerima event,
     tapi anak yang interaktif diaktifkan lagi */
  pointer-events: none;
  & a, & button, & [role="button"] {
    pointer-events: auto;
  }

  @media (max-width: 900px) {
    position: static;
    flex-direction: column;
    overflow-x: visible;
    pointer-events: auto; /* pada mobile, biarkan normal */
  }
`;


export const Flashcard = styled(Link)`
  display: inline-block;
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
  }
`;

export const ActionsWrapper = styled.div`A
  display: flex;
  flex-wrap: wrap;      /* kalau sempit otomatis turun */
  gap: 12px;
  margin-top: 12px;
  justify-content: center;
  align-items: center;  /* biar kolomnya rapih ke tengah */
  position: relative;   /* penting buat layering */
  z-index: 2;           
  pointer-events: auto;

  /* HP kecil */
  @media (max-width: 480px) {
    flex-direction: column;   /* jadi kolom */
    gap: 10px;
    margin-top: 16px;
  }

  /* Tablet */
  @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: row;      /* masih row tapi bisa wrap */
    gap: 12px;
  }

  /* Laptop ke atas */
  @media (min-width: 769px) {
    flex-direction: row;
    gap: 15px;
  }
`;



export const Materi = styled(Link)`
  display: inline-block;
  img { height: 50px; width: 50px; object-fit: contain; }
`;
export const Game = styled(Link)`
  display: inline-block;
  img { height: 50px; width: 50px; object-fit: contain; }
`;
export const Story = styled(Link)`
  display: inline-block;
  img { height: 50px; width: 50px; object-fit: contain; }
`;
export const AR = styled(Link)`
  display: inline-block;
  img { height: 50px; width: 50px; object-fit: contain; }
`;

export const Card = styled.div`
  width: 350px;
  height: 620px;
  padding: 20px 0px;
  border-radius: 10px;
  background-color: #C75C14;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  overflow: hidden;

  &:hover { transform: scale(1.03); }

  /* stepwise reduction for different laptop widths (keeps proportions) */
  @media (max-width: 1400px) {
    width: 320px;
    height: 540px;
    padding: 18px 0;
  }
  @media (max-width: 1200px) {
    width: 300px;
    height: 520px;
    padding: 16px 0;
  }
  @media (max-width: 1024px) {
    width: 280px;
    height: 480px;
    padding: 14px 0;
  }

  /* mobile / small tablets */
  @media (max-width: 900px) {
    width: 250px;
    height: 380px;
    padding: 8px 0px;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 200px;
  margin-top: 10px;

  @media (max-width: 1400px) { width: 180px; gap: 8px; }
  @media (max-width: 1200px) { width: 160px; gap: 7px; }
  @media (max-width: 900px) { width: 120px; gap: 6px; }
`;

export const Star = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 1400px) { width: 36px; height: 36px; }
  @media (max-width: 1200px) { width: 32px; height: 32px; }
  @media (max-width: 900px) { width: 20px; height: 20px; }
`;

export const CardImage = styled.img`
  width: 280px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 10px;
  z-index: 99;

  @media (max-width: 1400px) { width: 250px; height: 400px; }
  @media (max-width: 1200px) { width: 230px; height: 360px; }
  @media (max-width: 1024px) { width: 210px; height: 340px; }
  @media (max-width: 900px) { height: 180px; width: 90%; }
  @media (max-width: 600px) { height: 120px; width: 90%; }
`;

export const CardLabel = styled.img`
  width: auto;
  height: 50px;

  @media (max-width: 1400px) { height: 44px; }
  @media (max-width: 1200px) { height: 38px; }
  @media (max-width: 900px) { height: 30px; }
  @media (max-width: 600px) { height: 24px; }
`;
export const ArrowBack = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  z-index: 4;
  pointer-events: auto;

  &:hover {
    transform: scale(1.05);
    transition: transform ease(0.3s);
  }

  img { height: clamp(40px, 15vh, 100px); width: auto; display: block; }
  @media (max-width: 768px) {
    top: 7%;
  }
`;

export const ButtonArea = styled.div`
  position: absolute;
  display: flex;
  top: 20px;            /* jarak dari atas */
  right: 20px;          /* jarak dari kanan */
  gap: 0px;
  margin-top: 0px;
  flex-wrap: wrap; /* tombol bisa turun ke bawah kalau sempit */

  @media (max-width: 800px) {
    flex-direction: column; /* di tablet/HP jadi bertumpuk */
    gap: 0px;
    top: 120px;            /* jarak dari atas */
    right: 30px;  
  }

  @media (min-width: 801)(max-width: 1000px) {
    flex-direction: column; /* di tablet/HP jadi bertumpuk */
    gap: 0px;
    top: 5px;            /* jarak dari atas */
    right: 30px;  
  }
`;


export const Button1 = styled.div`
    cursor: pointer;
    margin-top: 0px;
    text-decoration: none;
    display: inline-block;
    z-index: 5; /* Ensures text stays on top */
    pointer-events: auto;


    img{
       max-width: 80px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 80px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            max-width: 60px;
            z-index: 15;
        }
    }
    
    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;}
`;


export const Button2 = styled.div`
    cursor: pointer;
    margin-top: 0px;
    text-decoration: none;
    display: inline-block;
    z-index: 5; /* Ensures text stays on top */
     pointer-events: auto;


    img{
       max-width: 80px;
       height: auto;
    }
    @media screen and (max-width: 768px) {
        img {
            max-width: 80px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            max-width: 60px;
            z-index: 15;
        }
    }

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;}
`;


export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 2px 0;
  position: relative;
  overflow-y: hidden;

  @media (max-width: 1400px) { gap: 20px; }
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

export const ArrowButton = styled.button `
position: absolute; top: 50%; transform: translateY(-50%); ${(props) => (props.direction === 'left' ? 'left: 50px;' : 'right: 50px;')} background-color: rgba(255, 255, 255, 0.7); border: none; font-size: 2rem; z-index: 2; cursor: pointer; border-radius: 50%; width: 40px; height: 40px; &:hover { background-color: rgba(255, 255, 255, 0.9); } @media (max-width: 1400px) { width: 36px; height: 36px; font-size: 1.6rem; } @media (max-width: 900px) { width: 28px; height: 28px; font-size: 1.2rem; ${(props) => (props.direction === 'left' ? 'left: 4px;' : 'right: 4px;')} } ;`