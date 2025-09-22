import React from 'react';
import { ImageContainerDogLeft, ImageContainerDogRight, Title, Wrapper, CoconutLeft, CoconutRight, BackgroundContainer } from './StartElements';
import { Button1, ButtonWrapper, Button2, IsyaratButton } from '../ButtonElements';
import { Link, useNavigate} from 'react-router-dom';
import { loginWithGoogle } from '../../auth';

const Start = () => {
    const navigate = useNavigate();

    const handleGuest = () => {
        sessionStorage.setItem("guest", "true");
        navigate('/daftarcerita');
    };

    const handleLogin = async () =>{
        const user = await loginWithGoogle();
        if (user) {

            sessionStorage.removeItem("guest");
            navigate('/daftarcerita');
        }
    }
    return (
        <Wrapper>
            <ButtonWrapper>
        <Button1 onClick={handleGuest}
        ><span>Sebagai Tamu</span></Button1>
        <Button2 onClick={handleLogin}
        ><span>Signin/Login</span></Button2>
        </ButtonWrapper>
        <BackgroundContainer>
        <Title>
            <img src="/images/tulisan.png" alt="judul"></img>
        </Title>
        </BackgroundContainer>
        </Wrapper>
    );
};

export default Start;