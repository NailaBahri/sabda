import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;   /* penuh tinggi layar */
  width: 100vw;    /* penuh lebar layar */
  display: flex;   /* aktifkan flexbox */
  justify-content: center; /* horizontal center */
  align-items: center;     /* vertical center */
  overflow: hidden;        /* opsional: cegah scroll horizontal */
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
