import React from 'react';
import { Wrapper, Home} from "./ARKeluargaElements"
import { useNavigate } from 'react-router-dom';

const ARKeluarga = () => {
    const navigate=useNavigate();
    return (
        <Wrapper>
             <Home onClick={() => navigate('/daftarcerita')}>
                          <img src='/images/home.png' alt="home" />
                          </Home>
            <img src="/images/keluargaqr.png" alt="keluarga"/>
        </Wrapper>
    )
}

export default ARKeluarga;