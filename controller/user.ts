import { IUser } from "../model/user.ts";

let users: Array<IUser> = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@gmail.com",
    created_at: new Date("2002-05-13"),
    updated_at: new Date("2002-05-13"),
  },
  {
    id: "2",
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    created_at: new Date("2002-05-13"),
    updated_at: new Date("2002-05-13"),
  },
];

const getUsers = ({ response }: { response: any }) => {
    response.body = users;
}

export { getUsers };