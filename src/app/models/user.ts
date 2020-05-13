import { Role } from './role';

export interface User {
  id?: number;
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  registrationDate?: Date;
  updateDate?: Date;
  status?: boolean;
  username?: string;
  roles?: Array<Role>;
}
