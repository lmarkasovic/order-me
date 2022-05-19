import _ from 'lodash';
import { User } from '../../../../Entity/User';

const JWT_SECRET = 'xlkfgnl$%&dklfjgh';

function GenerateToken(user: User): string {
  const token: string = this.encode(_.pick(user, ['id', 'fname', 'lname', 'username', 'roleId']), JWT_SECRET);
  return token;
}

export default GenerateToken;
