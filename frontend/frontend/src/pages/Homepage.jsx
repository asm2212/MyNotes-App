import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"4xl"}>
        Note App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        A note application is a software program that allows users to create,
        organize, and manage their digital notes. It is an essential tool for
        anyone looking to streamline their daily tasks, increase productivity,
        and stay organized. With its user-friendly interface and powerful
        features, a note application is perfect for students, professionals, and
        anyone who needs to keep track of their ideas, tasks, and goals. One of
        the main features of a note application is its ability to create and
        edit notes. Users can easily create notes, add text, images, and even
        voice memos. They can organize their notes using tags or categories,
        making it easier to find and access specific notes later on.
        Additionally, a note application often includes powerful search
        functionality, allowing users to quickly find the information they need.
        Another useful feature of a note application is the ability to share
        notes. Users can share their notes with colleagues, friends, or family
        members, making collaboration on projects or ideas seamless. This is
        especially useful for professionals who need to work on team projects or
        students who want to collaborate on group assignments. Many note
        applications also include advanced features like syncing across multiple
        devices, making it easy to access and edit notes from anywhere. This
        ensures that users always have access to their notes, no matter where
        they are. Overall, a note application is an essential tool for anyone
        looking to stay organized and productive. With its powerful features and
        user-friendly interface, it is the perfect solution for anyone looking
        to streamline their daily tasks and stay on top of their game.
         
      </Text>
    </Box>
  );
}