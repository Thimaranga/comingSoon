import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import './ComingSoon.css';

const ComingSoonPage: React.FC = () => {
  return (
    <Box className="landing-page" h="100vh" pos="relative">
      {/* Video Background */}
      <video className="video-bg" autoPlay muted loop>
        <source src="./videos/primary.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <Box className="content-container" display="flex" flexDirection="column"
       mt={200} alignItems="center" justifyContent="center" h={300}>

        {/* Subtext */}
        <Box alignSelf="center" h={"20%"}>
          <Text className="subtext" fontSize={["3em", "1.5em"]} color="white">Our new Space is</Text>
        </Box>

        {/* Large Header */}
        <Box h={["20%", "10%"]} mt={[-30, 0]}>
          <Text className="large-header" fontSize={["5em", "3em"]} color="white">Launching Soon!</Text> 
        </Box>

      </Box>

      {/* Company Logo */}
      <Box className="logo-container" mt={-70}>
        <Image src="./logo_white.png" alt="Company Logo" className="logo" />
      </Box>
    </Box>
  );
};

export default ComingSoonPage;
