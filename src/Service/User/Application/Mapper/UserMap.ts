import { User } from '../../../../Entity/User';
import UserDTO from '../DTO/UserDTO';

export default class UserMap {
  public static toDTO(user: User): UserDTO {
    return {
      id: user.id,
      customerId: user.customerInfo.customerId,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      username: user.username,
      role: user.role?.des,
      language: UserMap.formatLanguage(user.language),
    };
  }

  public static toDTOs(users: User[]): UserDTO[] {
    return users.map((u) => this.toDTO(u));
  }

  private static formatLanguage(language: string): string {
    if (language === 'Hrvatski') return 'hr';
    if (language === 'Engleski') return 'en';
    return 'en';
  }
}
