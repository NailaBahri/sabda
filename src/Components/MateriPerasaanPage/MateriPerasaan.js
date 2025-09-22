import React, {useRef, useState} from 'react';
import { Wrapper, PopupContent, PopupOverlay, Button, LetterCard, Home, BackgroundContainer, Title, CardGrid, Card, CardLabel, CardImage, CardVideo, Button1, Button2, ButtonArea, CloseButton } from './MateriPerasaanElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'sedih', video:'/videos/perasaan/isyaratsedih.mp4', image: '/images/perasaan/sedih.png', label: '/images/perasaan/labelsedih.png',
                // Sedih
        letters: [
        { letter: "S", video: "/videos/huruf/S.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "D", video: "/videos/huruf/D.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "H", video: "/videos/huruf/H.mp4" },
        ],
    },
    { title: 'marah', video:'/videos/perasaan/isyaratmarah.mp4',image: '/images/perasaan/marah.png', label: '/images/perasaan/labelmarah.png',
                // Marah
        letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "H", video: "/videos/huruf/H.mp4" },
        ],
    },
    { title: 'bingung', video:'/videos/perasaan/isyaratbingung.mp4', image: '/images/perasaan/bingung.png', label: '/images/perasaan/labelbingung.png',
                // Bingung
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        ],
    },
    { title: 'malu', video:'/videos/perasaan/isyaratmalu.mp4', image: '/images/perasaan/malu.png', label: '/images/perasaan/labelmalu.png',
                // Malu
        letters: [
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "L", video: "/videos/huruf/L.mp4" },
        { letter: "U", video: "/videos/huruf/U.mp4" },
        ],
    },
    { title: 'bahagia', video:'/videos/perasaan/isyaratbahagia.mp4', image: '/images/perasaan/bahagia.png', label: '/images/perasaan/labelbahagia.png',
                // Bahagia
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "H", video: "/videos/huruf/H.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        ],
    }
]

const CARDS_PER_PAGE = 4;
const MateriPerasaan = () => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);
    const videoRefs = useRef([]);
    return (
        <Wrapper>
            <Home onClick={()=> navigate('/daftarcerita')}>
                    <img src="/images/home.png" alt="daftar cerita"/>
                </Home>
            <BackgroundContainer>
                <Title>
                    <img src="/images/katahariini.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                                <Button1 to="/flashcardperasaan">
                                       <img src="/images/flashcards.png" alt="flashcards"></img>             
                                </Button1>
                                <Button2 to="/perasaan">
                                       <img src="/images/cerita.png" alt="cerita"></img>             
                                </Button2>
                                </ButtonArea>
                
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card>
                        <video
                        ref={el => videoRefs.current[card.title] = el}
                        src={card.video} 
                        controls
                        style={{ width: "300px", height: "auto", borderRadius:"12px"}}
                        alt={card.title}
                        onEnded={() => {
                            const vid = videoRefs.current[card.title];
                            if(vid){
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}/>
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <Button onClick={()=>setSelectedCard(card)}><span>Lihat Huruf</span></Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
            {selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={() => setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item, idx) => (
                        <LetterCard key={idx}>
                            <video src={item.video} controls />
                            <span>{item.letter}</span>
                        </LetterCard>
                        ))}
                    </PopupContent>

                </PopupOverlay>
            )};
        </Wrapper>);
    };

export default MateriPerasaan;

