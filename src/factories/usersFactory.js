import { datatype, image } from "faker";
import { name } from "faker/locale/en";
import { lorem } from "faker/locale/en_GB";
import { Factory } from "fishery";

const usersFactory = Factory.define(({ sequence }) => ({
  id: sequence,
  username: name.lastName(),
  password: lorem.word(10),
  name: name.firstName(),
  image: image.imageUrl(),
  age: datatype.number({
    min: 14,
    max: 130,
  }),
}));

export const getUser = () => usersFactory.build();
export const getUsers = (total = 3) => usersFactory.buildList(total);
