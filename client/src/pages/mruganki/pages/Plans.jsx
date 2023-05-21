import banner from "../assets/img1.png";
import wave from "../assets/wave2.png";
// import wave from "../assets/wave.png";


import {
  VStack,
  chakra,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbLink,
  Stack,
  Heading,
  BreadcrumbItem,
  Box,
  Flex,
  Image,
  
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
// import axios from "axios";
// const getData = async () => {
//   let { data } = await axios.get("http://localhost:8080/products");
//   console.log(data.length);
//   return data;
// };

const Plans = () => {
  // const [data, setData] = useState([]);
  let data = [
    {
      name: "BLUEPRINT TO SIZE",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-blueprint-to-size.jpg",
      desc:"Get ready to sweat and challenge your body with our invigorating workouts. Our expert-designed sessions combine cardiovascular exercises, strength training, and flexibility exercises to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our workouts cater to all levels of fitness. ",
      type:"Transform",
      gender: "Female, Male",
      duration:"4 weeks",
     
    },
    {
      name: "3 WEEKS 2 SIZE",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-3weeks2size.jpg",
      desc:"During this intense three-week program, you'll engage in focused strength training exercises, progressive overload techniques, and targeted muscle-building workouts. We'll guide you through a variety of compound movements, isolation exercises, and intensity techniques to maximize muscle growth and sculpt your desired physique.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
      
    },
    {
      name: "SHORTCUT TO SHRED",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-shortcuttoshred.jpg",
      desc:"Join our community of dedicated individuals who are on their own transformation journey. Connect with others, share experiences, and find the support and motivation you need to stay focused and committed. Together, we'll celebrate milestones and achieve greatness.",
      type:"Transform",
      gender: "Female, Male",
      duration:"3 weeks",
     
    },
    {
      name: "ULTIMATE 30-DAY FITNESS",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ultimate-30day-fitness.jpg",
      desc:"Are you ready to transform your life in just 30 days? Join us now and embark on a thrilling journey towards a stronger, fitter, and more confident you. Don't wait another day to take the first step. Let's embrace the challenge and redefine what you're capable of achieving.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
    
    },
    {
      name: "IRON EVERY DAY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
      desc:"Unlock the Power of Iron: Embrace the Strength of an Iron Body. Welcome to our Iron Body program, where we celebrate the incredible strength, resilience, and determination that comes with forging an iron physique.",
      type:"Build Muscle",
      gender: "Male",
      duration:"4 weeks",
     
    },
    {
      name: "STRONGER THAN YESTERDAY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-stronger-than-yesterday-2.jpg",
      desc:"Are you ready to take control of your health and lose fat? Start your journey with us today and discover the transformative power of a balanced lifestyle. Let's work together to create lasting changes that will empower you to live a healthier, happier life.",
      type:"Lose Fat ",
      gender: "Male",
      duration:"5 weeks",
    
    },
    {
      name: "POWER BODYBUILDING",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-power-bodybuilding.jpg",
      desc:"Welcome to our Power Building Program! Are you ready to unleash your strength, build muscle mass, and develop the raw power you've always desired? Our Power Building Program is designed to take your fitness journey to the next level by combining strength training and muscle-building techniques.",
      type:"Build Muscle",
      gender: "Female, Male",
      duration:"3 weeks",
   
    },
    {
      name: "START HERE YOUR NEW YEAR",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-start-here-your-new-year.jpg",
      desc:"Embrace a New Beginning: Make Your New Year Resolutions Count. Welcome to a new year, a fresh chapter in your life filled with endless possibilities. It's time to reflect on the past, set new goals, and make resolutions that will shape your future. Our program is designed to help you embrace this new beginning, stay committed to your resolutions, and turn them into meaningful and lasting changes.",
      type:"Lose Fat",
      gender: "Female",
      duration:"1 weeks",
      
    },
    {
      name: "LEAN BODY",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-leanbody.jpg",
      desc:"A lean body represents the perfect balance of strength, agility, and aesthetics. It is a reflection of dedication, discipline, and a commitment to a healthy lifestyle. Our program focuses on sustainable approaches to nutrition, effective workouts, and mindset shifts that will empower you to transform your body.",
      type:"Lose Fat",
      gender: "Female",
      duration:"4 weeks",
     
    },
    {
      name: "GLOW UP",
      image: "https://themes.oitentaecinco.com/winner/wp-content/uploads/2017/12/workoutplan-thumbnail-ironeveryday.jpg",
      desc:"A glow up is more than just a physical makeover—it's a holistic journey of self-discovery, self-love, and self-improvement. It's about embracing your unique beauty, nurturing your body and mind, and radiating confidence from within.",
      type:"Fit Body",
      gender: "Male",
      duration:"4 weeks",
     
    },
    
  ];

  console.log(data);
  // useEffect(() => {
  //   getData()
  //     .then((res) => setData([...res]))
  //     .catch((er) => console.log(er.message));
  // }, []);

  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
    >
      <Box maxW="1500px" m="auto">
        {/* Products  Tag*/}
        <Stack
          bgGradient={
            "linear-gradient(0deg, rgba(0,0,0,1) 14%, rgba(64,64,64,1) 100%)"
          }
          position={"relative"}
          overflow={"hidden"}
          justify={"center"}
          align={"center"}
          spacing={5}
          w="100%"
          // bg="#0078ff"
          minH={"70vh"}
        >
          <Heading
            color={"white"}
            mt={50}
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight={"110%"}
          >
            Plans
          </Heading>

          <Breadcrumb color={"white"}>
            <BreadcrumbItem
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.08)" }}
            >
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                transition={"all .3s ease"}
                _hover={{ transform: "scale(1.08)" }}
                href="/our-services"
              >
                Plans
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Image
            overflow={"hidden"}
            position={"absolute"}
            src={banner}
            // src="https://i.ibb.co/94BnTpt/product-2.png"
           w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            right={0}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
           // top="20px"
          />
          <Image
            overflow={"hidden"}
            position={"absolute"}
            src={wave}
            // src="https://i.ibb.co/94BnTpt/product-2.png"
          // w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            top={-400}
            opacity=".2"
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
           // top="20px"
          />
          <Image
            overflow={"hidden"}
            position={"absolute"}
            src={banner}
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            left={0}
           
            transform={"scaleX(-1)"}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
           // top="20px"
          />

          {/* <Image
          overflow={"hidden"}
          position={"absolute"}
          src={wave}
          //  w={{ base: "200px", md: "300px" }}
          bottom={0}
          
          
          height="50%"
          //left={{ base: "-150px", md: "-15", lg: "-10" }}
          // top="20px"
          backgroundImage="repeat-Y"
        /> */}
        </Stack>
        <Box>
          {/* products crouser */}

          <VStack maxW="1400px" m="auto">
            <SimpleGrid
              p={5}
              w="100%"
              spacing={10}
              columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
            >
              {data?.map((item, index) => (
                <Box
                  key={index}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  borderRadius="10px"
                  pb={5}
                  maxW="xs"
                  mx="auto"
                  bg="whiteAlpha.300"
                  // _dark={{
                  //   bg: "gray.800",
                  // }}
                  shadow="lg"
                  rounded="lg"
                  z-index={-1}
                >
                  <Box w="100%" h="200px" m="auto">
                    <Image
                      h="100%"
                      w="100%"
                      fit="cover"
                      borderRadius="10px"
                      mt={0}
                      // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                      src={item.image}
                      alt="NIKE AIR"
                    />
                  </Box>
                  <Box width={"90%"} margin={"auto"} textAlign={"center"} px={0} py={-50}>
                    <chakra.h1
                      color="white"
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize="14.56px"
                      textTransform="uppercase"
                    >
                      {item.name}
                    </chakra.h1>
                    <chakra.p
                      mt={-1}
                      fontSize="sm"
                      color="#cb1313"
                      _dark={{
                        color: "gray.400",
                      }}
                      key={2}
                      
                      z-index={2}
                    >
                      Workout Plan
                    </chakra.p>
                    <chakra.p
                    key={1}
                      mt={2}
                      mb={2}
                      fontSize="12.35"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                      z-index={2}
                    >
                      {item.desc}
                    </chakra.p>
                   
                  </Box>
                  
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    // bg="gray.900"
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontSize="sm" >
                    <i class="fa-solid fa-trophy"> </i> {item.type}
                    </chakra.h1>
                    <chakra.h1 color="white"  fontSize="sm">
                    <i class="fa-solid fa-person-half-dress"> </i> {item.gender}
                    </chakra.h1>
                    <chakra.h1 color="white"  fontSize="sm">
                    <i class="fa-regular fa-clock"> </i>  {item.duration}
                    </chakra.h1>
                    
                  </Flex>
                  <Box   align={"center"}>
                    <Link to={`/plans/${item.name}`}>
                    <chakra.button
                     
                      px={4}
                      py={3}
                      // bg="white"
                      fontSize="xs"
                      color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#cb1313"
                      alignSelf={"center"}
                    >
                      {"VIEW DETAILS"}
                    </chakra.button></Link>
                  
                  </Box>
                
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Plans;

