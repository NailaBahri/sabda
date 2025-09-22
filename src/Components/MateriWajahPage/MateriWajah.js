import React, {useRef, useState} from 'react';
import { Wrapper, Home, BackgroundContainer, Button, PopupContent, LetterCard, CloseButton, ButtonImage, Title, CardGrid, Card, CardLabel, CardImage, CardVideo, Button1, Button2, ButtonArea, PopupOverlay} from './MateriWajahElements';
import { Link, useNavigate} from 'react-router-dom';


const cardData = [
    { title: 'mata', video:'/videos/tubuh/isyaratmata.mp4', image: '/images/tubuh/mata.png', label: '/images/tubuh/labelmata.png',
        letters: [
      { letter: "M", video: "/videos/huruf/M.mp4" },
      { letter: "A", video: "/videos/huruf/A.mp4" },
      { letter: "T", video: "/videos/huruf/T.mp4" },
      { letter: "A", video: "/videos/huruf/A.mp4" },
    ],
    },
    { title: 'hidung', video:'/videos/tubuh/isyarathidung.mp4', image: '/images/tubuh/hidung.png', label:'/images/tubuh/labelhidung.png',
            letters: [
    { letter: "H", video: "/videos/huruf/H.mp4" },
    { letter: "I", video: "/videos/huruf/I.mp4" },
    { letter: "D", video: "/videos/huruf/D.mp4" },
    { letter: "U", video: "/videos/huruf/U.mp4" },
    { letter: "N", video: "/videos/huruf/N.mp4" },
    { letter: "G", video: "/videos/huruf/G.mp4" },
    ],
    },
    { title: 'mulut', video:'/videos/tubuh/isyaratmulut.mp4', image: '/images/tubuh/mulut.png', label:'/images/tubuh/labelmulut.png',
            // Mulut
    letters: [
    { letter: "M", video: "/videos/huruf/M.mp4" },
    { letter: "U", video: "/videos/huruf/U.mp4" },
    { letter: "L", video: "/videos/huruf/L.mp4" },
    { letter: "U", video: "/videos/huruf/U.mp4" },
    { letter: "T", video: "/videos/huruf/T.mp4" },
    ],
    },
    { title: 'tangan', video:'/videos/tubuh/isyarattangan.mp4', image: '/images/tubuh/tangan.png', label:'/images/tubuh/labeltangan.png',
            // Tangan
    letters: [
    { letter: "T", video: "/videos/huruf/T.mp4" },
    { letter: "A", video: "/videos/huruf/A.mp4" },
    { letter: "N", video: "/videos/huruf/N.mp4" },
    { letter: "G", video: "/videos/huruf/G.mp4" },
    { letter: "A", video: "/videos/huruf/A.mp4" },
    { letter: "N", video: "/videos/huruf/N.mp4" },
    ],
    },
    { title: 'kaki', video:'/videos/tubuh/isyaratkaki.mp4', image: '/images/tubuh/kaki.png', label:'/images/tubuh/labelkaki.png',
            // Kaki
    letters: [
    { letter: "K", video: "/videos/huruf/K.mp4" },
    { letter: "A", video: "/videos/huruf/A.mp4" },
    { letter: "K", video: "/videos/huruf/K.mp4" },
    { letter: "I", video: "/videos/huruf/I.mp4" },
    ],
    },
    { title: 'telinga', video:'/videos/tubuh/isyarattelinga.mp4', image: '/images/tubuh/telinga.png', label:'/images/tubuh/labeltelinga.png',
            // Telinga
    letters: [
    { letter: "T", video: "/videos/huruf/T.mp4" },
    { letter: "E", video: "/videos/huruf/E.mp4" },
    { letter: "L", video: "/videos/huruf/L.mp4" },
    { letter: "I", video: "/videos/huruf/I.mp4" },
    { letter: "N", video: "/videos/huruf/N.mp4" },
    { letter: "G", video: "/videos/huruf/G.mp4" },
    { letter: "A", video: "/videos/huruf/A.mp4" },
    ],
    },
    { title: 'tubuh', video:'/videos/tubuh/isyarattubuh.mp4', image: '/images/tubuh/tubuh.png', label: '/images/tubuh/labeltubuh.png',
            letters: [
    { letter: "T", video: "/videos/huruf/T.mp4" },
    { letter: "U", video: "/videos/huruf/U.mp4" },
    { letter: "B", video: "/videos/huruf/B.mp4" },
    { letter: "U", video: "/videos/huruf/U.mp4" },
    { letter: "H", video: "/videos/huruf/H.mp4" },
    ],
    }
]

const CARDS_PER_PAGE = 4;
const MateriWajah = () => {
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
                <Button1 to="/flashcardtubuh">
                       <img src="/images/flashcards.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/tubuh">
                       <img src="/images/cerita.png" alt="cerita"></img>             
                </Button2>
                </ButtonArea>
                <div className="flex flex-wrap gap-4">
                    <CardGrid>
                {cardData.map((card) => (
                    <Card key={card.title}>
                        <video
                        ref={el => videoRefs.current[card.title] = el}
                        src={card.video}
                        controls
                        style={{ width: "300px", height: "auto", borderRadius: "12px" }}
                        alt={card.title} 
                        onEnded={() => {
                            const vid = videoRefs.current[card.title];
                            if (vid) {
                                vid.currentTime = 0;
                                vid.pause();
                            }
                        }}/>
                        <CardImage src={card.image} alt={card.title} />
                        <CardLabel src={card.label} alt={card.title} />
                        <Button onClick={() => setSelectedCard(card)}><span>Lihat Huruf</span> </Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
            {selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={()=> setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item, idx) => (
                            <LetterCard key={idx}>
                                <video src={item.video} controls />
                                <span>{item.letter}</span>
                            </LetterCard>
                        ))}
                    </PopupContent>

                </PopupOverlay>
            )}
        </Wrapper>);
    };

export default MateriWajah;

