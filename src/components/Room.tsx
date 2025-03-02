import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
interface IRoomProps {
  imgURL: string;
  name: string;
  rating: number;
  city: string;
  price: number;
  country: string;
  pk: number;
}

export default function Room({
  pk,
  imgURL,
  name,
  rating,
  city,
  price,
  country,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <Link to={`/rooms/${pk}`}>
      <VStack alignItems={"flex-start"} spacing={-1}>
        <Box>
          <Box position={"relative"} overflow={"hidden"} rounded={"3xl"}>
            <Image minH="280" mb="2" src={imgURL} />
            <Button
              variant={"unstyled"}
              position={"absolute"}
              top={1}
              right={0.7}
              color={"white"}
            >
              <FaRegHeart size={"20px"} />
            </Button>
          </Box>
        </Box>
        <Grid gap="2" templateColumns={"5fr 1fr"}>
          <Heading fontSize={"s"} noOfLines={1}>
            {name}
          </Heading>
          <HStack spacing={1}>
            <FaStar />
            <Text fontSize={"sm"}>{rating}</Text>
          </HStack>
        </Grid>

        <Text fontSize={"sm"} color={gray}>
          {city},{country}
        </Text>
        <Text fontSize={"sm"} color={gray}>
          23-28 Feb
        </Text>
        <Text marginTop={"1"} fontSize="sm" textDecoration={"underline"}>
          <Text as="b">${price} AUD</Text> total
        </Text>
      </VStack>
    </Link>
  );
}
