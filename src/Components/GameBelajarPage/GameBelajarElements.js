import styled from 'styled-components'
import { Link

 } from 'react-router-dom'
import { motion } from "framer-motion";

export const Wrapper = styled.div`
position: relative;
overflow-y: auto;
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
export const PopupContainer = styled.div`
 position: absolute;
 top: 45%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: clamp(500px, 70vw, 1000px);

 padding: 24px 20px;
 border-radius: 16px;
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 16px;
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

 @media(max-width: 480px) {
  widthL 92%;
  padding: 12px;
 }
`

export const VideoWrapper = styled.div`
  width: min(700px, 95%);
  max-width: 700px;
  aspect-ratio: 2 / 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  margin: 100px auto 20px; /* jarak atas 120px */
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 70px;
    width: 100%;
  }

  @media (max-width: 480px) {
    margin-top: 150px;
    width: 100%;
  }
`;

export const VideoQuestion = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    max-width: 700px;
    height: auto;
    border-radius: 20px;
    display: block;
  }

@media (max-width: 480px) {
 video {
 }
}
`;


export const Card = styled(Link)`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    background-color: #C75C14;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0; 
    transition: transform 0.2s ease;
    overflow-y: hidden;

    &:hover {
        transform: scale(1.03);
    }

    @media (max-width: 480px) {
      width: 100%;
      height: auto;}
`
export const FloatingStar = ({index}) => {
  return (
    <motion.img 
    src="/images/star.png"
    alt="bintang"
    initial={{ scale: 0.5, y: 20, opacity: 0}}
    animate={{ scale: 1, y: 0, opacity: 1}}
    transition={{
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
        }}
      style={{
        width: "clamp(40px, 6vw, 70px)",
        height: "clamp(40px, 6vw, 70px)",
        marginRight: "8px",
        filter: "drop-shadow( 0 0 6px gold)"
      }}
    />
  )
  
}

export const StarsWrapper = styled.div`
  position: absolute;
  top: -90px;   /* posisi default (laptop/desktop) */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 999;

  @media (max-width: 768px) {
    top: -60px;  /* tablet */
  }

  @media (max-width: 480px) {
    top: -60px;  /* HP */
  }
`;

export const ImageAnswer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
  gap: 16px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 12px; 
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.05);
  }
`;

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