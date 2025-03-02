import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import {
  FaAirbnb,
  FaComment,
  FaGift,
  FaGithub,
  FaLock,
  FaMoon,
  FaUser,
} from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import LoginModal from "./LoginModal";
import Header from "./Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//outlet will be replaced to router's childeren elements
export default function Roots() {
  return (
    <Box>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
