import { Box, Button, Divider, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaAirbnb, FaComment, FaEnvelope, FaGift, FaGithub, FaLock, FaMoon, FaUser} from "react-icons/fa";
interface SignUpModalProps{
    isOpen:boolean,
    onClose:()=>void
}
export default function SignUpModal({isOpen,onClose}:SignUpModalProps){
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody>
            <Box marginBottom={4}>
                    <VStack>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.600"}> <FaUser></FaUser></Box>
                                }/>
                            <Input variant ={"filled"} placeholder="Frist Name"></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.600"}> <FaUser></FaUser></Box>
                                }/>
                            <Input variant ={"filled"} placeholder="Last Name"></Input>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement children={
                                <Box color={"gray.600"}> <FaEnvelope></FaEnvelope></Box>
                                }/>
                            <Input variant ={"filled"} placeholder="Email"></Input>
                        </InputGroup>
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
                        <Button w="100%" colorScheme={"red"}>Create</Button>
                    </VStack>
             
                    <HStack my={"6"}>
                        <Divider></Divider>
                        <Text textTransform={"uppercase"} color={"grey.500"} fontSize={"xs"} as={"b"}>Or</Text>
                        <Divider></Divider>
                    </HStack>
                    <VStack>
                        <Button w="100%" leftIcon={<FaGithub/>} colorScheme="telegram">Sign Up with Github</Button>
                        <Button  w="100%" leftIcon={<FaComment/>} colorScheme="yellow">Sign Up with Kakao</Button>
                    </VStack>
                    </Box>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}