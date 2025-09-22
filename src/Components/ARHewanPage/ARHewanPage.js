import React from 'react';
import { Wrapper, Home } from "./ARHewanElements";
import { useNavigate } from 'react-router-dom';

const ARHewan = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src='/images/home.png' alt="home" />
                          </Home>
            <img src="/images/hewanqr.png" alt="hewan"/>
        </Wrapper>
    )
}

export default ARHewan;