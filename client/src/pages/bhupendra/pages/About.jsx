import React from 'react'
import {
    Box,
    
    Container,
    
    SimpleGrid,
    Stack,
    VStack
  } from '@chakra-ui/react';
import Card from '../components/Card';


let first=[{
  image:"https://media.licdn.com/dms/image/D4D03AQGYf0px6j_L7Q/profile-displayphoto-shrink_800_800/0/1664741436592?e=1689206400&v=beta&t=_MEx1Y3V34LANqjkijHXCoazkzizV4qMD3ioXj2h9Js",
  desc:"Full Stack Developer",
  title:"Bhupendra",
  portfolio:"https://github.com/Bhupendra2414",
  github:"https://github.com/Bhupendra2414",
  linkedin:"https://www.linkedin.com/in/bhupendra-singh-sis0diya/"
},
{
  linkedin:"https://www.linkedin.com/in/bhupendra-singh-sis0diya/",
  github:"https://github.com/Bhupendra2414",
  title:"Bhavini",
  desc:"Backend Expert",
  portfolio:"https://github.com/Bhupendra2414",
  image:"https://media.licdn.com/dms/image/D4D35AQFSFj5gBiLkDg/profile-framedphoto-shrink_800_800/0/1663191416511?e=1684256400&v=beta&t=xl4KViF6gg0HzkKYvMPeu4cLQwZt_SuUSXI3Wqh47OE"   
},
  {
    image:"https://media.licdn.com/dms/image/D4D35AQFSFj5gBiLkDg/profile-framedphoto-shrink_800_800/0/1663191416511?e=1684256400&v=beta&t=xl4KViF6gg0HzkKYvMPeu4cLQwZt_SuUSXI3Wqh47OE",
    desc:"UI Expert",
    title:"Mruganki",
    portfolio:"https://github.com/Bhupendra2414",
    github:"https://github.com/Bhupendra2414",
    linkedin:"https://www.linkedin.com/in/mruganki-gupta-00aaa91b4/"
  },

]

const About = () => {
  return (
   <VStack
   justify="center"
   p={5}
   margin={"auto"}
   bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)" maxW="full" minH={{base:"100%", md:"", lg:"70vh", xl:"70vh"}}>
       <SimpleGrid
       spacing={10}
       maxW={"1400px"}
      
       columns={[1,1,2,3,5]}  
        >
           {
           first.map((el)=><Card image={el.image} title={el.title} key={el.image} portfolio={el.portfolio}  desc={el.desc} github={el.github}  linkedin={el.linkedin} />)
           } 
      </SimpleGrid>
      {/* <Stack direction={["column","column","row","row"]} spacing="10" w={["50%","50%","80%","55%"]} mt="10" mb="10">
           {
           second.map((el)=><Card image={el.image} title={el.title} key={el.image} portfolio={el.portfolio}   github={el.github}  linkedin={el.linkedin} />)
           } 
      </Stack> */}
    
 {/* <SimpleGrid columns={[1,2,3,5]} w={["50%","70%","80%","90%"]}  mb="10">
           {
           first.map((el)=><ProfileCard image={el.image} title={el.title} key={el.image} facebook={el.facebook}  twitter={el.twitter} github={el.github} />)
           } 
  </SimpleGrid> */}

   </VStack>
  )
}

export default About