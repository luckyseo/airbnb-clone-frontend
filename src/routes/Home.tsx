import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  useSafeLayoutEffect,
  VStack,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Room from "../components/Room";
import RoomSkeleton from "../components/RootSkeleton";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import { Link } from "react-router-dom";
import { IRoomList } from "../types";
interface IPhoto {
  //Interface -> I(nterface)Photo
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Home() {
  const { isLoading, data } = useQuery<IRoomList[]>({
    queryKey: ["rooms"],
    queryFn: getRooms,
  }); //key needs to be array
  return (
    <Grid
      marginTop={7}
      px={{ base: 8, lg: 10 }}
      columnGap={10}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(2,1fr)",
        lx: "repeat(4,1fr)",
        "2xl": "repeat(5,1fr)",
      }}
    >
      {isLoading ? (
        <>
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      <Link to="/asasa">404</Link>
      {data?.map((room) => (
        <Room
          imgURL={room.photos[0].file}
          pk={room.pk}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}
