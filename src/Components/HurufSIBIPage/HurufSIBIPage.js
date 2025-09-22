import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, BackgroundContainer, Title, CardLabel, LetterCard, Card, CardGrid, CardVideo, Home } from './HurufSIBIElements';
import { useRef } from 'react';

const cardData = [
  { title: 'A', video: '/videos/huruf/A.mp4', letter: 'A' },
  { title: 'B', video: '/videos/huruf/B.mp4', letter: 'B' },
  { title: 'C', video: '/videos/huruf/C.mp4', letter: 'C' },
  { title: 'D', video: '/videos/huruf/D.mp4', letter: 'D' },
  { title: 'E', video: '/videos/huruf/E.mp4', letter: 'E' },
  { title: 'F', video: '/videos/huruf/F.mp4', letter: 'F' },
  { title: 'G', video: '/videos/huruf/G.mp4', letter: 'G' },
  { title: 'H', video: '/videos/huruf/H.mp4', letter: 'H' },
  { title: 'I', video: '/videos/huruf/I.mp4', letter: 'I' },
  { title: 'J', video: '/videos/huruf/J.mp4', letter: 'J' },
  { title: 'K', video: '/videos/huruf/K.mp4', letter: 'K' },
  { title: 'L', video: '/videos/huruf/L.mp4', letter: 'L' },
  { title: 'M', video: '/videos/huruf/M.mp4', letter: 'M' },
  { title: 'N', video: '/videos/huruf/N.mp4', letter: 'N' },
  { title: 'O', video: '/videos/huruf/O.mp4', letter: 'O' },
  { title: 'P', video: '/videos/huruf/P.mp4', letter: 'P' },
  { title: 'Q', video: '/videos/huruf/Q.mp4', letter: 'Q' },
  { title: 'R', video: '/videos/huruf/R.mp4', letter: 'R' },
  { title: 'S', video: '/videos/huruf/S.mp4', letter: 'S' },
  { title: 'T', video: '/videos/huruf/T.mp4', letter: 'T' },
  { title: 'U', video: '/videos/huruf/U.mp4', letter: 'U' },
  { title: 'V', video: '/videos/huruf/V.mp4', letter: 'V' },
  { title: 'W', video: '/videos/huruf/W.mp4', letter: 'W' },
  { title: 'X', video: '/videos/huruf/X.mp4', letter: 'X' },
  { title: 'Y', video: '/videos/huruf/Y.mp4', letter: 'Y' },
  { title: 'Z', video: '/videos/huruf/Z.mp4', letter: 'Z' }
];


const HurufSIBI=()=>{
    const navigate=useNavigate();
    const videoRefs=useRef([]);

    return (
    <Wrapper>
        <BackgroundContainer>
            <Home onClick={()=> navigate('/daftarcerita')}>
                <img src='/images/home.png' alt='home'/>
            </Home>
            <Title>
                <img src='/images/hurufSIBI.png'/>
            </Title>
            <CardGrid>
                {cardData.map((card)=>(
                   <LetterCard>
                        <video
                        useRef={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{width: "300px", height: "auto", borderRadius: "12px"}}
                        onEnded={()=> {
                            const vid= videoRefs.current[card.title];
                            if (vid) {
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}/>
                            <span>{card.letter}</span>
                        </LetterCard>))}
            </CardGrid>
        </BackgroundContainer>
    </Wrapper>)
}

export default HurufSIBI;