import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const nav = useNavigate();

  const navigateToApp = () => {
    nav("/notes");
  };

  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Note App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
    
      </Text>
      <Button
        mt={6}
        colorScheme="blue"
        onClick={navigateToApp}
      >
        Explore the App
      </Button>
    </Box>
  );
}
