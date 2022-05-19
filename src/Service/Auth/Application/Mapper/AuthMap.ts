import { User } from '../../../../Entity/User';
import AuthDTO from '../DTO/AuthDTO';
import UserMap from './UserMap';

export default class AuthMap {
  public static toDTO(auth: { user: User; token: string }): AuthDTO {
    return {
      user: UserMap.toDTO(auth.user),
      token: auth.token,
    };
  }
}
