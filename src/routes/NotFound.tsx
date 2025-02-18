import { VStack,Text,Heading,Button, Link } from "@chakra-ui/react";

export default function NotFound(){
    return <VStack bg={"gray.100"} justifyContent={"center"} minH={"100vh"}>
        <Heading>Page Not Found</Heading>
        <Text>It seems that you are lost.</Text>
        
        <Link href="/">
            <Button colorScheme="facebook" variant={"outline"}>Go home &rarr;</Button>
        </Link>
    </VStack>
}