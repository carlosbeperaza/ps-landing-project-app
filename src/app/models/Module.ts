export interface Module {
    name?: string;
    description?: string;
    url?: string;
    icon?: string;
    status?: boolean;
    createDate?: Date;
    lastUpdateDate?: Date;
    subModule: number[];
  }
