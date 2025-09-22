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

export const Title = styled.div`
  position: absolute;
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;

  img {
    height: 250px;
    z-index: 1;
  }

  /* Tablet besar (landscape, sekitar iPad Pro) */
  @media screen and (max-width: 1024px) {
    top: 25%;
    img {
      height: 220px;
    }
  }

  /* Tablet sedang (iPad biasa, Galaxy Tab) */
  @media screen and (max-width: 768px) {
    top: 30%;
    img {
      height: 180px;
    }
  }

  /* Mobile besar (HP layar lebar, 600px kebawah) */
  @media screen and (max-width: 600px) {
    top: 35%;
    img {
      height: 140px;
    }
  }

  /* Mobile kecil (HP compact 480px) */
  @media screen and (max-width: 480px) {
    top: 40%;
    img {
      height: 100px;
    }
  }

  /* Mobile super kecil (HP lama 360px kebawah) */
  @media screen and (max-width: 360px) {
    top: 45%;
    img {
      height: 80px;
    }
  }
`;

export const CoconutRight = styled.div`
    right: 0;
    position: absolute;
    z-index: 1;
    top: 0;

    img {
        height: 400px;
        display: block;
        z-index: 1;
         }
    @media screen and (max-width: 768px) {
        img {
            height: 250px;
            z-index: 1;
            }  
    }
    @media screen and (max-width: 480px) {
        img {
            heightL 200px;
            z-index: 1;
        }
    }
`;

export const CoconutLeft = styled.div`
    left: 0;
    position: absolute;
    z-index: 1;
    top: 0;

    img {
        height: 400px;
        display: block;
        z-index: 1;
         }
    @media screen and (max-width: 768px) {
        img {
            height: 250px;
            z-index: 1;
            }  
    }
    @media screen and (max-width: 480px) {
        img {
            heightL 200px;
            z-index: 1;
        }
    }
`;