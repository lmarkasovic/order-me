import { Errors, Context } from 'moleculer';
import { getCustomRepository } from 'typeorm';
import { User } from '../../../../Entity/User';
import UserRepository from '../../Infrastructure/Repository/UserRepository';
import AuthDTO from '../DTO/AuthDTO';
import AuthMap from '../Mapper/AuthMap';
import AuthSchema from '../Schema/AuthSchema';

const Auth: unknown = {
  rest: {
    method: 'POST',
    path: '/',
  },
  params: AuthSchema,
  async handler(ctx: Context<{ username: string; password: string }>): Promise<AuthDTO> {
    const userRepository = getCustomRepository(UserRepository);
    const user: User = await userRepository.authUser(ctx.params.username, ctx.params.password);
    if (user) {
      return this.GenerateToken(user).then((token: string) =>
        AuthMap.toDTO({
          user,
          token,
        }),
      );
    }
    return Promise.reject(new Errors.MoleculerError('Invalid credentials', 401));
  },
};

export default Auth;
