import React, {useRef, useState} from 'react';
import { Wrapper, Home, PopupContent, PopupOverlay, Button, CloseButton, LetterCard, BackgroundContainer, Button1, Button2, ButtonArea, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriHewanElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'hewan', video:'/videos/hewan/isyarathewan.mp4', image: '/images/hewan/hewan.png', label: '/images/hewan/labelhewan.png',
            // Hewan
        letters: [
        { letter: "H", video: "/videos/huruf/H.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "W", video: "/videos/huruf/W.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        ],},
    { title: 'ayam',  video:'/videos/hewan/isyaratayam.mp4', image: '/images/hewan/ayam.png', label:'/images/hewan/labelayam.png',
                // Ayam
        letters: [
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "Y", video: "/videos/huruf/Y.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        ],
    },
    { title: 'kambing',  video:'/videos/hewan/isyaratkambing.mp4', image: '/images/hewan/kambing.png', label:'/images/hewan/labelkambing.png',
                // Kambing
        letters: [
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "M", video: "/videos/huruf/M.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "I", video: "/videos/huruf/I.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        ],
    },
    { title: 'bebek',  video:'/videos/hewan/isyaratbebek.mp4', image: '/images/hewan/bebek.png', label:'/images/hewan/labelbebek.png',
                // Bebek
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        ],
    },
    { title: 'peternakan',  video:'/videos/hewan/isyaratpeternakan.mp4', image: '/images/hewan/peternakan.png', label:'/images/hewan/labelpeternakan.png',
                // Peternakan
        letters: [
        { letter: "P", video: "/videos/huruf/P.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "T", video: "/videos/huruf/T.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "K", video: "/videos/huruf/K.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        ],
    },
    { title: 'berenang',  video:'/videos/hewan/isyaratberenang.mp4', image: '/images/hewan/berenang.png', label: '/images/hewan/labelberenang.png',
                // Berenang
        letters: [
        { letter: "B", video: "/videos/huruf/B.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "R", video: "/videos/huruf/R.mp4" },
        { letter: "E", video: "/videos/huruf/E.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "A", video: "/videos/huruf/A.mp4" },
        { letter: "N", video: "/videos/huruf/N.mp4" },
        { letter: "G", video: "/videos/huruf/G.mp4" },
        ],
    }
]

const CARDS_PER_PAGE = 4;
const MateriHewan = () => {
    const navigate = useNavigate();
    const videoRefs = useRef([]);
    const [selectedCard, setSelectedCard] = useState(null);

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
                <Button1 to="/flashcardhewan">
                       <img src="/images/flashcards.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/hewan">
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
                        <Button onClick={()=> setSelectedCard(card)}><span>Lihat Huruf</span></Button>
                    </Card>
                    ))}
                </CardGrid>
                </div>
            </BackgroundContainer>
            {selectedCard && (
                <PopupOverlay onClick={()=> setSelectedCard(null)}>
                    <PopupContent onClick={(e)=> e.stopPropagation()}>
                        <CloseButton onClick={()=> setSelectedCard(null)}>X</CloseButton>
                        {selectedCard.letters.map((item,idx) => (
                            <LetterCard key={idx}>
                                <video src={item.video} controls />
                                <span>{item.letter}</span>
                            </LetterCard>
                        ))}
                    </PopupContent>
                </PopupOverlay>)}
        </Wrapper>);
    };

export default MateriHewan;

