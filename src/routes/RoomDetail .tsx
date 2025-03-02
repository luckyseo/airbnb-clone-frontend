import { useQueries } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";
import { useQuery } from "@tanstack/react-query";
import { IRoomDetail } from "../types";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";

export default function RoomDetail() {
  const { roomPk } = useParams(); //receives url :roomPK parameter
  const { isLoading, data } = useQuery<IRoomDetail>({
    //how to get data from url and how to send fetch & function
    queryKey: [`rooms`, roomPk],
    queryFn: getRoom,
  });
  //console.log(data); -> reactdevtool will do this
  return (
    <Box marginTop={7} px={{ base: 8, lg: 10 }}>
      <Skeleton height={"43px"} width="25%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt="4"
        rounded={"lg"} //make img border rounded
        overflow={"hidden"}
        gap={2}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4,1fr)"}
        height="60vh"
      >
        {[0, 1, 2, 3, 4].map((photo, index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow="hidden"
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
              <Image
                objectFit="cover"
                w="100%"
                h="100%"
                src={data?.photos[index] ? data?.photos[index].file : undefined}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
