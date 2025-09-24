import React, {useRef, useState} from 'react';
import { Wrapper, PopupContent, PopupOverlay, Button, LetterCard, Home, BackgroundContainer, Title, CardGrid, Card, CardLabel, CardImage, CardVideo, Button1, Button2, ButtonArea, CloseButton } from './MateriPerasaanElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'sedih', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694846/isyaratsedih_yluz97.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694916/sedih_xpjajr.png', label: '/images/perasaan/labelsedih.png',
                // Sedih
        letters: [
        { letter: "S", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513316/S_auwvnm.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "D", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513281/D_b2xclh.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
        ],
    },
    { title: 'marah', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694845/isyaratmarah_gjyxqm.mp4',image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694912/marah_bpls6g.png', label: '/images/perasaan/labelmarah.png',
                // Marah
        letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
        ],
    },
    { title: 'bingung', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694857/isyaratbingung_micwym.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694913/bingung_haisgv.png', label: '/images/perasaan/labelbingung.png',
                // Bingung
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        ],
    },
    { title: 'malu', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694847/isyaratmalu_gqqtcw.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694918/malu_atcodg.png', label: '/images/perasaan/labelmalu.png',
                // Malu
        letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        ],
    },
    { title: 'bahagia', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758694852/isyaratbahagia_s1jrwq.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758694903/bahagia_fmehhy.png', label: '/images/perasaan/labelbahagia.png',
                // Bahagia
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
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
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758681683/home_g4ct7v.png" alt="daftar cerita"/>
                </Home>
            <BackgroundContainer>
                <Title>
                    <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/katahariini_qycvok.png" alt="katahariini"></img>
                </Title>
                <ButtonArea>
                                <Button1 to="/flashcardperasaan">
                                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514585/flashcards_xpfahw.png" alt="flashcards"></img>             
                                </Button1>
                                <Button2 to="/perasaan">
                                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758701887/cerita_e3c9wy.png" alt="cerita"></img>             
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

