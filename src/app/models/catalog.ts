import { SubCatalog } from "./subCatalog";

export interface Catalog {
  id?: number;
  name?: string;
  description?: string;
  status?: boolean;
  createDate?: Date;
  lastUpdateDate?: Date;
  subCatalogs?: Array<SubCatalog>;
}
