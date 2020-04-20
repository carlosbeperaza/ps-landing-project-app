import { Role } from './role';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  registrationDate?: Date;
  lastUpdateDate?: Date;
  status?: boolean;
  username?: string;
  roles?: Array<Role>;
}
