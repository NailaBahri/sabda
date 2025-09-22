import styled from 'styled-components'

export const Wrapper = styled.div`
position: relative;
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
`

export const Video = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 30px solid #c75c14;
  border-radius: 20px;

  width: 90vw;              /* lebih besar dari 100% parent */
  max-width: 1000px;        /* batas maksimal agar tidak terlalu besar di desktop */
  height: auto;

  @media (max-width: 768px) {
    width: 95vw;
    border-width: 20px;
  }

  @media (max-width: 480px) {
    width: 98vw;
    border-width: 15px;
  }

  video {
    width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
    object-fit: contain;     /* jaga proporsi video */
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

