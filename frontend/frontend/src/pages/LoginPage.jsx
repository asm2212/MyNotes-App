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
import { useNavigate } from "react-router";

export default function LoginPage() {
    const nav  = useNavigate()
  const { auth, token, loading, error } = useSelector((state) => state.userReducer);

  console.log(auth,token)
  if(auth){
    nav("/notes")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const bgColor = useColorModeValue("gray.50", "gray.800");

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };

  const loadingComponent = <h1 style={{ margin: "80px" }}>loading...</h1>;
  const errorComponent = <h1 style={{ margin: "80px" }}>error</h1>;

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
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool <Text color={"blue.400"}>features</Text>{" "}
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
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
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
                    onClick={handleLogin}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
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
