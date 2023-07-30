import React from 'react'
import styled from 'styled-components'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';


function Footer() {
  return (
    <>
   
    <Container>
        
        <div className="parent">
        <div className="f-icons"> 
            <a href="https://www.linkedin.com/in/hariom510/"><Linkedin color='#00283C' size='3rem' /></a>
            {/* <a href="https://github.com/Hariom510"><Github color='white' size='3rem' /></a> */}
            <a href="https://www.instagram.com/"><Instagram color='#00283C' size='3rem' /></a>
        </div>
        
    <strong>Copyright &#169; 2023 Hariom Kumar</strong>
    </div>
    </Container>
    </>
  )
}

export default Footer

const Container = styled.div`

    margin-top: 5%;
    height: 30vh;
    background-color: #FFFFE0;
    /* background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%); */
    /* background: #092540; */
    color: #00283C;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    border-top: 1px solid #00283C;
    /* margin-bottom: -5rem; */
    .parent{
        margin-top: 2.5rem;
        /* margin-bottom: .5rem; */
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .f-icons{
        display: flex;
        justify-content: center;
        color: #00283C;
        gap: 2rem;
    }
    
`;