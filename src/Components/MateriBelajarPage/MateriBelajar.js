import React, {useRef, useState} from 'react';
import { Wrapper, Home, Button, CloseButton, PopupContent, PopupOverlay, LetterCard, BackgroundContainer, Button1, Button2, ButtonArea, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriBelajarElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'belajar', video:'/videos/belajar/isyaratbelajar.mp4', image: '/images/belajar/belajar.png', label: '/images/belajar/labelbelajar.png',  
        letters: [
      { letter: "B", video: "/videos/huruf/B.mp4" },
      { letter: "E", video: "/videos/huruf/E.mp4" },
      { letter: "L", video: "/videos/huruf/L.mp4" },
      { letter: "A", video: "/videos/huruf/A.mp4" },
      { letter: "J", video: "/videos/huruf/J.mp4" },
      { letter: "A", video: "/videos/huruf/A.mp4" },
      { letter: "R", video: "/videos/huruf/R.mp4" },
    ],},
    { title: 'membaca', video:'/videos/belajar/isyaratmembaca.mp4', image: '/images/belajar/membaca.png', label:'/images/belajar/labelmembaca.png',
        letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "C", video: "/videos/huruf/C.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        ],
    },
    { title: 'menulis', video:'/videos/belajar/isyaratmenulis.mp4', image: '/images/belajar/menulis.png', label:'/images/belajar/labelmenulis.png',
                letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        { letter: "L", video: "/videos/huruf/L.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "S", video: "/videos/huruf/S.mp4" },
        ],
    },
    { title: 'teman-teman', video:'/videos/belajar/isyarattemanteman.mp4', image: '/images/belajar/temanteman.png', label: '/images/belajar/labeltemanteman.png',
        // Teman-teman
        letters: [
        { letter: "T", video: "/videos/huruf/T.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
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
                 <img src="/images/home.png" alt="daftar cerita"/>
                </Home>
                <Title>
                    <img src="/images/katahariini.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                <Button1 to="/flashcardbelajar">
                       <img src="/images/flashcards.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/belajar">
                       <img src="/images/cerita.png" alt="cerita"></img>             
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

