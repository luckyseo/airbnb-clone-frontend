import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Stack,
  useColorMode,
  useColorModePreference,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200"); //status when (light,dark)
  const Icon = useColorModeValue(FaMoon, FaSun); //component should be start with uppercase
  return (
    <Stack
      py={5}
      px={10}
      borderBottomWidth={1}
      justifyContent={"space-between"}
      direction={{ sm: "column", md: "row" }}
      alignItems={"center"}
      spacing={{ sm: 3, md: 0 }}
    >
      <Box color={logoColor}>
        <FaAirbnb size={48}></FaAirbnb>
      </Box>
      <HStack spacing="2">
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<Icon />}
        ></IconButton>
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log In</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme="red">
                  Sign Up
                </Button>
              </LightMode>
            </>
          ) : (
            <Avatar name={user.name} src={user.avatar} size={"md"} />
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  );
}
