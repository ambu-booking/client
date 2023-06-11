import { Location } from "./location";

export interface Company {
  id: string;
  name: string;
  location: Location;
}
export interface Companies {
  fetchCompanies: Company[];
}
