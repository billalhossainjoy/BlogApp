import { Account, Client, ID } from "appwrite";
import appwrite from "../config/config";

class Auth {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(appwrite.url).setProject(appwrite.projectID);
    this.account = new Account(this.client);
  }

  createAccount = async ({ email, password, name }) => {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      this.LoginAccount({ email, password });
      return user;
    } catch (error) {
      console.log(error);
      console.log(error);
    }
  };
  LoginAccount = async ({ email, password }) => {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  getCurrentUser = async () => {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  UserLogout = async () => {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  };
}

const auth = new Auth();

export default auth;
