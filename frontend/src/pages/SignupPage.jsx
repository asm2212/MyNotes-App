import React from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link as ChakraLink,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/config";
import { getUser } from "../Redux/users/user.actions";

export default function SignupPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      let data = await axios.post(BASE_URL + "/user/register", {
        name,
        email,
        password,
      });
      let { message, status } = data.data;
      if (status === 200) {
        alert(message);
        nav("/login");
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex padding={4} w="100%">
      <Image
        wi={"50%"}
        src={
          "https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1676630553~exp=1676631153~hmac=6cbdb020ef439ca463660edbc265da0d05f487d529f69f814ee3f5de6e0f54cc"
        }
      ></Image>
      <VStack w={"50%"}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign up with Notes App</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <ChakraLink as={ReactRouterLink} to="/login" color={"blue.400"}>
                  features
                </ChakraLink>{" "}
                ✌️
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
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  />
                </FormControl>
                <Stack spacing={2} direction="row" align="center">
                  <Checkbox
                    onChange={() => setShowPassword(!showPassword)}
                    isChecked={showPassword}
                  >
                    Show Password
                  </Checkbox>
                </Stack>
                <Stack spacing={10}>
                  <Button
                    onClick={handleSignup}
                    isLoading={loading}
                    loadingText="Signing up..."
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign up
                  </Button>
                  <Text>
                    Already have an Account?{" "}
                    <ReactRouterLink
                      to="/login"
                      className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                      Login
                    </ReactRouterLink>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
}
