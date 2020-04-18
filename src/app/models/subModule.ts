export interface SubModule {
  id?: number;
  name?: string;
  description?: string;
  parent?: number;
  url?: string;
  icon?: string;
  status?: boolean;
  creationDate?: Date;
  lastUpdateDate?: Date;
}
