import { Box, Heading, Image,Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/noteh.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Navbar />
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={16} textAlign={"start"} size={"x1"}>
        Note App
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Do you need a simple and effective way to organize your thoughts, tasks,
        and ideas? Do you want to access your notes anytime, anywhere, and on
        any device? Do you want to customize your notes with different colors,
        fonts, and formats? If you answered yes to any of these questions, then
        you need NoteApp, the ultimate note-taking application for everyone.
        NoteApp is a web-based application that lets you create, edit, and
        manage your notes with ease. You can use NoteApp to: Write down anything
        you want, from shopping lists and reminders to personal journals and
        creative projects. Sync your notes across all your devices, so you can
        access them whenever and wherever you need them. Organize your notes
        into categories, folders, and tags, so you can find them quickly and
        easily. Share your notes with others, either privately or publicly, and
        collaborate on them in real time. Customize your notes with different
        colors, fonts, and formats,
      </Text>
    </Box>
  );
}
