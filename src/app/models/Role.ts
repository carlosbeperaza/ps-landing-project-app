import {Module} from './Module';
export interface Role {
  id?: number;
  name?: string;
  description?: string;
  status?: boolean;
  createDate?: Date;
  lastUpdateDate?: Date;
  modules?: Array<Module>;
}
