import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Laptop from '@iconscout/react-unicons/icons/uil-laptop'


function Header() {
  return (
    <>
      <Headers>
        <Left>
        <Link to='/'><Laptop color='#00283C' size='2.4rem' /></Link>
        {/* <img src="https://www.clipartmax.com/png/middle/32-328856_job-search-icon-job.png" alt="CareerClimb" /> */}
       <Text >CareerClimb</Text>
        </Left>
        <Right>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
        </Right>
      </Headers>
    </>
  );
}

export default Header;

const Headers = styled.div`
    /* background: linear-gradient(180deg, #FFFFE0 26.71%, #e9e98a 99.36%); */
    /* box-shadow: 0px 20px 24px 3px rgba(251, 161,40, 0.42); */

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFE0;
    color: #00283C;
    border-bottom: 1px solid #4c565b;
    @media(max-width: 460px){
      min-height: 8vh;
        }
    /* box-shadow: rgba(45, 40, 13, 0.808) 0px 3px 2px 0px; */
    
    
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    margin-left: 19px;
    padding: 6px 10px;
    @media(max-width: 460px){
          margin-left: 12px;
        }
  }
  /* img{
        
        width: 95px;
        height: 60px;
    } */
`
const Right = styled.div`
  margin-right: 34px;
  a{
        font-weight: 660;
        font-size: 20px;
        text-transform: uppercase;
        margin-right: 11px;
        text-decoration:none;
        color: #00283c;
        @media(max-width: 460px){
          font-size: 15;
          font-weight: 520;
        }
        
    }
    a:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    @media(max-width: 460px){
          margin-right: 10px;
        }

  /* Link{
    text-decoration: none;
    margin-left: 10px;
    color: red;
  } */
`

const Text = styled.div`
    font-size: 26px;
    font-weight: bold;
    @media(max-width: 460px){
      font-size: 20px;
        }
    
`
