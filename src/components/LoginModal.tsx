import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
interface LoginModalProps{
    isOpen:boolean,
    onClose:()=>void
}
export default function LoginModal({isOpen,onClose}:LoginModalProps){
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalBody>
            <SocialLogin/>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}