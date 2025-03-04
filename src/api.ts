import { QueryFunction, QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});
export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [, roomPk] = queryKey; //queryKey is array / it extracts second item of the array :roomPk
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
  // get(`rooms/${queryKey[1]`}) will also do
};
