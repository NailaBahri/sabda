import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, BackgroundContainer, Title, CardLabel, LetterCard, Card, CardGrid, CardVideo, Home } from './HurufSIBIElements';
import { useRef } from 'react';

const cardData = [
  { title: 'A', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4', letter: 'A' },
  { title: 'B', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4', letter: 'B' },
  { title: 'C', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513275/C_hmzw0r.mp4', letter: 'C' },
  { title: 'D', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513281/D_b2xclh.mp4', letter: 'D' },
  { title: 'E', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4', letter: 'E' },
  { title: 'F', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513283/F_re8chu.mp4', letter: 'F' },
  { title: 'G', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4', letter: 'G' },
  { title: 'H', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4', letter: 'H' },
  { title: 'I', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4', letter: 'I' },
  { title: 'J', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513305/J_iaodhm.mp4', letter: 'J' },
  { title: 'K', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4', letter: 'K' },
  { title: 'L', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4', letter: 'L' },
  { title: 'M', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4', letter: 'M' },
  { title: 'N', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4', letter: 'N' },
  { title: 'O', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513306/O_retstm.mp4', letter: 'O' },
  { title: 'P', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513322/P_dxkuck.mp4', letter: 'P' },
  { title: 'Q', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513316/Q_gdqtef.mp4', letter: 'Q' },
  { title: 'R', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4', letter: 'R' },
  { title: 'S', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513316/S_auwvnm.mp4', letter: 'S' },
  { title: 'T', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4', letter: 'T' },
  { title: 'U', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4', letter: 'U' },
  { title: 'V', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513323/V_ub9lu1.mp4', letter: 'V' },
  { title: 'W', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513331/W_lrhkc2.mp4', letter: 'W' },
  { title: 'X', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513335/X_sljvvs.mp4', letter: 'X' },
  { title: 'Y', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758700230/WhatsApp_Video_2025-09-19_at_08.09.33_2a1ef62f_su0ygc.mp4', letter: 'Y' },
  { title: 'Z', video: 'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513331/Z_h7oymn.mp4', letter: 'Z' }
];


const HurufSIBI=()=>{
    const navigate=useNavigate();
    const videoRefs=useRef([]);

    return (
    <Wrapper>
        <BackgroundContainer>
            <Home onClick={()=> navigate('/daftarcerita')}>
                <img src='https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png' alt='home'/>
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