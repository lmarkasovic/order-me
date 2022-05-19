import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity()
export class UserPublic {
  @ViewColumn()
  id: number;

  @ViewColumn({
    name: 'public_key',
  })
  publicKey: string;
}
