import UserDTO from './UserDTO';

export default interface AuthDTO {
  user: UserDTO;
  token: string;
}
