export interface ILogin {
  mobile: string;
  password: string;
}

export interface IRegisterUser extends ILogin {
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
}
