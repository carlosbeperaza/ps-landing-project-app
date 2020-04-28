import { SubModule } from './SubModule';


export interface Module {
    id?: number;
  name?: string;
  description?: string;
  url?: string;
  icon?: string;
  status?: boolean;
  createDate?: Date;
  lastUpdateDate?: Date;
  subModules?: Array<SubModule>;
}

