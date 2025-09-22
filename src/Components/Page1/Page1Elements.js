import styled, {css} from 'styled-components';
import React from 'react';


export const Wrapper = styled.div`
position: relative;
`

export const BackgroundContainer = styled.div`
 background-image: url('/images/sky.png');
 background-size: cover; 
 background-position: center;
 background-repeat: no-repeat;
 height: 100vh;
 width: 100%;
 position: relative;
 z-index: 0;
`

export const DogPoseOpen = styled.div`
    img {
        width: auto;
        transition: width 0.3s ease;
    }
    
    ${({size}) =>
        size === 'center' &&
        css`
        img {
        position: absolute;
        text-align: center;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        height: 400pageXOffset;}
        
        @media screen and (max-width: 768px) {
            top: 20%;
            img {
                height: 400px;
                z-index: 1;
            }
        }

        @media screen and (max-width: 480px) {
            img {
                top: 70%;
                height: 100px;
                z-index: 1;
            }
        `}

        
    ${({size}) =>
        size === 'ship' &&
        css`
        img {
        position: absolute;
        text-align: center;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        height: 400pageXOffset;}
        
        @media screen and (max-width: 768px) {
            top: 20%;
            img {
                height: 400px;
                z-index: 1;
            }
        }

        @media screen and (max-width: 480px) {
            img {
                top: 70%;
                height: 100px;
                z-index: 1;
            }
        `}


    ${({size}) =>
        size === 'left' &&
        css`
        position: absolute;
        top: 20%;
        left: 4%;

        img {
            height: 500px;
            width: auto;
        }

        @media screen and (max-width: 768px) {
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            img {
                height: 400px;
                z-index: 1;
            }
        }

        @media screen and (max-width: 480px) {
            img {
                top: 70%;
                height: 100px;
                z-index: 1;
            }
        `}
    }
`
export const Chat = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px;
  z-index: 5;
  overflow: hidden;

  background-image: url('/images/chat.png');
  background-size: cover;           /* isi penuh dan potong kelebihannya */
  background-repeat: no-repeat;
  background-position: top;

  @media screen and (max-width: 768px) {
    bottom: 0;
    height: 400px;
    background-image: url('/images/chatbesar.png');
  }

  @media screen and (max-width: 480px) {
    top: 70%;
    height: 400px;
  }
`;

export const ChatBox = styled.div`
  position: absolute;
  top: 30%;
  width: 80%;
  height: auto;
  max-height: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.0);
  z-index: 6;
  overflow: hidden;
  left: 50%;
  transform: translateX(-50%);

  p {
    margin: 0;
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;
    color: #a76a54;
    line-height: 95%;
  }

  @media screen and (max-width: 768px) {
    bottom: 20px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    top: 70%;
    height: auto;
  }
`;

export const Arrow = styled.div`
    position: absolute;
    text-align: right;
    top: 90%;
    right: 25%;
    z-index: 15;

    img{
        height: 70px;
        width: auto;
    }
    @media screen and (max-width: 768px) {
        top: 90%;
        img {
            height: 70px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            top: 70%;
            height: 70px;
            z-index: 15;
        }
    }
`

export const ArrowBack= styled.div`
    position: absolute;
    text-align: right;
    top: 90%;
    left: 25%;
    z-index: 15;

    img{
        height: 70px;
        width: auto;
    }
    @media screen and (max-width: 768px) {
        top: 90%;
        img {
            height: 70px;
            z-index: 15;
        }
    }

    @media screen and (max-width: 480px) {
        img {
            top: 70%;
            height: 70px;
            z-index: 15;
        }
    }
`



