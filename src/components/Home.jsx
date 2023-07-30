import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { baseURL } from "../Api";



function Home() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    useEffect(() => {
      const fun = async () => { 
        const response = await fetch(`${baseURL}/getcontent`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
       
        const json = await response.json();
        if (json) {
          setItems(json);
          setLoading(false);
        }
      };
  
       fun();
    }, []);

   console.log("items is: "+ JSON.stringify(items, undefined, "\t"));


  return (
    <>
    <Container>
        <Wrap>
        <video  autoPlay ={true} loop ={true} playsInline ={true} muted>
            <source src = "/videos/yellow.mp4" type ="video/mp4" />
        </video>
        <VideoText><h1>Help us </h1> <h1>&nbsp; &nbsp; &nbsp;keep business </h1>
         <h1>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  flowing </h1>
         <h1>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; brilliantly </h1>
         </VideoText>
        </Wrap>
        <Text>
        <InnerText>
          <h2>About CareerClimb</h2> <br /> 
         <p>CareerClimb is a space for the world's creative people to come together, grow, have fun, and make an impact. We put our people at the heart of everything we do, and champion curiosity and connectivity to deliver the best experiences.</p>
         <p>By focusing on representation, recruitment, engagement, culture, accountability, and education, we're committed to being a workplace where everyone can grow.</p>
         </InnerText>
         <img style={{marginLeft:"25px"}} src="https://www.careerclimb.in/images/mascot_02.png" alt="" />
        </Text>
        
        <IMG>
            <img src="images/leftimage.jpg" alt="" />
            <img src="images/rightimage.jpg" alt="" />
        </IMG>

        <Text>
        <img style={{marginRight:"35px"}} src="https://www.careerclimb.in/images/mascot_03.png" alt="" /> 
            <InnerText>
              <h2>Join CareerClimb Today</h2> <br />
         <p>Whether you're an aspiring chef or an architect, a web developer or an interior designer, a housekeeper, or a gardener.</p>
         <p>If you're passionate about what you do, we'd love you to get in touch.</p>
         </InnerText>
        </Text>

        <Text>
          <InnerText >
             <h2>Job Openings</h2>
          </InnerText>
        </Text>

        <Content>
          {loading === false ? <>
            {
                      items &&  items.map((val)=>{
                        return (
                        <Box key={val._id}>
                            {/* <p>{val.imageLink}</p> */}
                            <Link to='/jobs'>
                            <img src={val.imageLink} alt="" />
                            <p>{val.textData} Jobs</p>
                            </Link>
                          </Box>
                        )
                      })
                   }
           </>: <h3>Loading Jobs..</h3> }


        </Content>




    </Container>
    
    </>
  )
}

export default Home

const Container = styled.div`
  background-color: #FFFFE0;
     margin: 0px auto;
     width: 100%;
     height: auto;
     text-align: center;
`
const Wrap = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    video{
        width: 100%;
        height: auto;
    }

`;
const VideoText = styled.div`
   position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1{
  /* font-size: 24px; */
  /* font-weight: bold; */
  /* color: #00283c; */
    font-family: Mdsystem, sans-serif;
    letter-spacing: -.1625rem;
    font-size: 6.5rem;
    font-weight: 600;
    line-height: 7.25rem;
    @media(max-width: 1100px){
      letter-spacing: -.1625rem;
    font-size: 4.5rem;
    font-weight: 550;
    line-height: 6.25rem;
    }
    @media(max-width: 850px){
      letter-spacing: -.1625rem;
    font-size: 3.5rem;
    font-weight: 550;
    line-height: 4.25rem;
    }
    @media(max-width: 600px){
      letter-spacing: -.1625rem;
    font-size: 2.5rem;
    font-weight: 550;
    line-height: 3.25rem;
    }
    @media(max-width: 460px){
      letter-spacing: -.1625rem;
    font-size: 2.5rem;
    font-weight: 520;
    line-height: 2.25rem;
    }
  }
  /* @media(max-width: 1100px){
    h1{
      letter-spacing: -.1625rem;
    font-size: 4.5rem;
    font-weight: 550;
    line-height: 6.25rem;
    }
} */
`
const Text = styled.div`
    font-size: 18px;
    width: 85%;
    margin: 5% auto;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-weight: 500;
    }
   
`
const InnerText = styled.div`
    
`
const IMG = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        width: 49.5%;
        height: auto;
    }
`
const Content = styled.div`
  padding: 10px;
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns: repeat(4, minmax(0, 1fr));

 @media(max-width: 768px){
     grid-template-columns: repeat(2, minmax(0, 1fr));
 }
 `;
 const Box = styled.div`
    padding-top: 56.25% ;

 border-radius: 10px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 cursor: pointer;
 overflow: hidden;
 position: relative;
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 /* border: 3px solid #0e6656; */
    img {
   inset: 0px;
   display: block;
   height: 100%;
   object-fit: cover;
   opacity: 1;
   position: absolute;
   transition: opacity 500ms ease-in-out 0s;
   width: 100%;
   z-index: 1;
   top: 0;
 }
 p{
    font-weight: 750;
    color: #00283C;
    position: absolute;
    object-fit: cover;
    margin-top: 25%;
    inset: 0px;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0;
    
 }

 &:hover {
    p{
        opacity: 1;
    }
    img{
      opacity: 0.4;
    }
    /* opacity: 0.3; */
   box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
     rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   /* transform: scale(1.05); */
   /* border-color: rgba(249, 249, 249, 0.8); */
 }
 `
