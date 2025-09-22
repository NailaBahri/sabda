import React from 'react';
import { Wrapper, Home } from "./ARPerasaanElements";
import { useNavigate} from 'react-router-dom';

const ARPerasaan = () => {
    const navigate=useNavigate();

    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src='/images/home.png' alt="home" />
                          </Home>
            <img src="/images/perasaanqr.png" alt="perasaan"/>
        </Wrapper>
    )
}

export default ARPerasaan;