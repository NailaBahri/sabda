import React, {useRef, useState} from 'react';
import { Wrapper, Home, Button, CloseButton, PopupContent, PopupOverlay, LetterCard, BackgroundContainer, Button1, Button2, ButtonArea, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriBelajarElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'belajar', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513239/isyaratbelajar_m5nnvb.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514128/belajar_qm9nep.png', label: '/images/belajar/labelbelajar.png',  
        letters: [
      { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
      { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
      { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
      { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
      { letter: "J", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513305/J_iaodhm.mp4" },
      { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
      { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
    ],},
    { title: 'membaca', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513232/isyaratmembaca_tae97v.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514129/membaca_dlg3mk.png', label:'/images/belajar/labelmembaca.png',
        letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "C", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513275/C_hmzw0r.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        ],
    },
    { title: 'menulis', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513236/isyaratmenulis_eebkuo.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514136/menulis_p75s4f.png', label:'/images/belajar/labelmenulis.png',
                letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "S", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513316/S_auwvnm.mp4" },
        ],
    },
    { title: 'teman-teman', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758513234/isyarattemanteman_trvlnr.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758514129/temanteman_vhjbek.png', label: '/images/belajar/labeltemanteman.png',
        // Teman-teman
        letters: [
        { letter: "T", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513324/T_mbkm3s.mp4.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        ]
    },
]

const CARDS_PER_PAGE = 4;
const MateriBelajar = () => {
    const navigate = useNavigate();
    const videoRefs = useRef([])
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <Wrapper>
            <BackgroundContainer>
                <Home onClick={()=> navigate('/daftarcerita')}>
                 <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png" alt="daftar cerita"/>
                </Home>
                <Title>
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/katahariini_qycvok.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                <Button1 to="/flashcardbelajar">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514585/flashcards_xpfahw.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/belajar">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758701887/cerita_e3c9wy.png" alt="cerita"></img>             
                </Button2>
                </ButtonArea>
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card>
                     <video
                        useRef={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{width: "300px", height:"auto", borderRadius:"12px"}}
                        onEnded={() => {
                            const vid= videoRefs.current[card.title];
                            if (vid){
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}
                        />
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <Button onClick={()=>setSelectedCard(card)}>Lihat Huruf</Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
            {selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={()=>setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item, idx) => (
                        <LetterCard key={idx}>
                            <video src={item.video} controls />
                            <span>{item.letter}</span>
                        </LetterCard>))}
                    </PopupContent>
                </PopupOverlay>
            )}
        </Wrapper>);
    };

export default MateriBelajar;

