import { connect } from "./config";
import { User } from "./entity/User";

export const getUser = async (userEmail: string) => {
  const connection = await connect();
  const userRepo = connection.getRepository(User);

  const allUsers = await userRepo.find({ where: { email: userEmail } });

  return allUsers;
};
