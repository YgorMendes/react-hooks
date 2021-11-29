import { AccounModel } from "../account-model";

type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccounModel>;
}
