import { createConnection, Connection } from 'typeorm';

export default async (): Promise<Connection | undefined> => {
  try {
    return await createConnection();
  } catch (error) {
    return undefined;
  }
};
