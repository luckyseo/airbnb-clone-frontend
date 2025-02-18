import {Box, Button, Divider, HStack, Input, InputGroup, InputLeftElement, Text, VStack} from "@chakra-ui/react"
import { FaComment, FaGithub, FaLock, FaUser } from "react-icons/fa"

export default function SocialLogin(){
    return(
        <Box marginBottom={4}>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.600"}> <FaUser></FaUser></Box>
                                }/>
                            <Input variant ={"filled"} placeholder="Username"></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={<Box color={"gray.600"}><FaLock></FaLock></Box>}/> 
                            <Input variant={"filled"} placeholder="Password"></Input>
                        </InputGroup>
                        <Button w="100%" colorScheme={"red"}>Log In</Button>
                    </VStack>
             
                    <HStack my={"6"}>
                        <Divider></Divider>
                        <Text textTransform={"uppercase"} color={"grey.500"} fontSize={"xs"} as={"b"}>Or</Text>
                        <Divider></Divider>
                    </HStack>
                    <VStack>
                        <Button w="100%" leftIcon={<FaGithub/>} colorScheme="telegram">Continue with Github</Button>
                        <Button  w="100%" leftIcon={<FaComment/>} colorScheme="yellow">Continue with Kakao</Button>
                    </VStack>
                    </Box>
    )
}