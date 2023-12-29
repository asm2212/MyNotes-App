import { Flex, VStack, Image } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/users/user.actions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Add email state
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const bgColor = useColorModeValue("gray.50", "gray.800");

  const handleSignup = async () => {
    try {
      // Define email here
      const emailValue = email;


      let data = await axios.post("http://localhost:5001/user/register", {
        name,
        email, // Use the email state
        password,
      });
      let { message, status } = data.data;
      if (status === 1) {
        alert(message);
        navigate("/login");
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  

  return (
    <Flex padding={4} w="100%">
      <Image w="50%" src="https://img.freepik.com/free-vector/online-registration-concept-background_23-2147984851.jpg?w=740&t=st=1703773654~exp=1703774254~hmac=6e36f5221d3efe9ef9baf2a91d547cb747dbabaaf137e62519d3f2476cb38ca0" />
      <VStack>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={bgColor}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Create an Account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Sign up to access all our cool <Text color={"blue.400"}>features</Text> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Text color={"blue.400"}>Forgot password?</Text>
                  </Stack>
                  <Button
                    onClick={handleSignup}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
}
