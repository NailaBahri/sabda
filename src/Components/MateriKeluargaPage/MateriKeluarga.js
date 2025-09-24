import React, {useRef, useState} from 'react';
import { Wrapper, Button1, PopupContent, CloseButton, PopupOverlay, Button, LetterCard, Button2, ButtonArea, Home,  BackgroundContainer, ButtonImage, Title, CardGrid, Card, CardLabel, CardImage, CardVideo } from './MateriKeluargaElements';
import { Link, useNavigate} from 'react-router-dom';

const cardData = [
    { title: 'keluarga', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692791/isyaratkeluarga_rpmrsl.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/keluarga_wgkzmv.png', label: '/images/keluarga/labelkeluarga.png',
            // Keluarga
        letters: [
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "G", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513284/G_dsxws9.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        ],},
    { title: 'ayah', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692794/isyaratayah_okfwsg.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515298/ayah_ym9wwz.png', label:'/images/keluarga/labelayah.png',
                letters: [
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "Y", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758700230/WhatsApp_Video_2025-09-19_at_08.09.33_2a1ef62f_su0ygc.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "H", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513297/H_mfr6xt.mp4" },
        ],
    },
    { title: 'ibu',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692790/isyaratibu_e9iund.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/ibu_q5rtcu.png', label:'/images/keluarga/labelibu.png',
                // Ibu
        letters: [
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        ],
    },
    { title: 'adik',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692789/isyaratadik_qxi4a7.mp4', image:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515292/adik_trpftt.png', label:'/images/keluarga/labeladik.png',
                // Adik
        letters: [
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "D", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513281/D_b2xclh.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        ],
    },
    { title: 'kakak',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692788/isyaratkakak_esfspe.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/kakak_hfwm9e.png', label: '/images/keluarga/labelkakak.png',
                // Kakak
        letters: [
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        ],
    },
    { title: 'bermain bola',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692791/isyaratbermainbola_omkx4i.mp4', image: 'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515294/bermainbola_pfejj2.png', label: '/images/keluarga/labelbermainbola.png',
                // Bermain Bola
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "O", video: "/videos/huruf/O.mp4" },
        { letter: "L", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513304/L_yzsrw1.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        ],
    },
    { title: 'berkebun', video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692790/isyaratberkebun_xavkrn.mp4', image:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515293/berkebun_ozgzog.png', label:'/images/keluarga/labelberkebun.png',
                // Berkebun
        letters: [
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "B", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513271/B_qao3nh.mp4" },
        { letter: "U", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513329/U_pynxyg.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        ],
    },
    { title: 'memasak',  video:'https://res.cloudinary.com/dnaf6s355/video/upload/v1758692794/isyaratmemasak_oxui94.mp4', image:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515296/memasak_pvr5im.png', label: '/images/keluarga/labelmemasak.png',
                // Memasak
        letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "S", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513316/S_auwvnm.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "K", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513293/K_cyeesk.mp4" },
        ],
    },
    { title: 'menari',  video:'/videos/keluarga/isyaratmenari.mp4', image:'https://res.cloudinary.com/dnaf6s355/image/upload/v1758515316/menari_ncjgac.png', label: '/images/keluarga/labelmenari.png',
            letters: [
        { letter: "M", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/M_xdnnwr.mp4" },
        { letter: "E", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513282/E_rpsnca.mp4" },
        { letter: "N", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513308/N_yfm95q.mp4" },
        { letter: "A", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513265/A_xtc2y1.mp4" },
        { letter: "R", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513314/R_gmlio5.mp4" },
        { letter: "I", video: "https://res.cloudinary.com/dnaf6s355/video/upload/v1758513296/I_o0kjif.mp4" },
        ],}
]

const CARDS_PER_PAGE = 4;
const MateriKeluarga = () => {
    const navigate = useNavigate();
    const videoRefs = useRef([]);
    const [selectedCard, setSelectedCard]= useState(null);

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
                <Button1 to="/flashcardkeluarga">
                       <img src="https://res.cloudinary.com/dnaf6s355/image/upload/v1758514585/flashcards_xpfahw.png" alt="flashcards"></img>             
                </Button1>
                <Button2 to="/keluarga">
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
                        style={{width: "300px", height: "auto", borderRadius:"12px"}}
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
                        <Button onClick={() => setSelectedCard(card)}><span>Lihat Huruf</span></Button>
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

export default MateriKeluarga;

