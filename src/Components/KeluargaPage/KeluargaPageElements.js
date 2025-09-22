// WajahPageElements.js
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1920px;
  height: 1080px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center center;
  overflow: hidden;
`;

/* Arrow kanan */
export const Arrow = styled.div`
  position: absolute;
  top: 90%;
  right: 25%;
  z-index: 999;
  transform: translateY(-50%);
  transform-origin: center;

  img {
    height: 70px;
    width: auto;
    display: block;
    pointer-events: auto;
    transform-origin: center;
  }

  @media (max-width: 1024px) {
    img { height: 64px; }
    right: 20%;
  }

  /* NOTE: hapus aturan yang memutar balik gambar di portrait.
     Ini supaya saat Wrapper di-rotate(90deg), panah ikut berputar. */
  @media (max-width: 420px) {
    img { height: 50px; }
  }
`;

/* Arrow kiri */
export const ArrowBack = styled(Arrow)`
  left: 25%;
  right: auto;

  @media (max-width: 1024px) {
    left: 20%;
  }
`;
