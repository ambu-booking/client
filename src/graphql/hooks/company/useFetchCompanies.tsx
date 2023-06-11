import { useQuery, gql } from "@apollo/client";
import { Companies } from "../../types/company";

const FETCH_COMPANIES = gql`
  query FetchCompanies {
    fetchCompanies {
      id
      name
      location {
        id
        address
        city
        post_code
      }
    }
  }
`;

export default function useFetchCompanies() {
  const { loading, error, data } = useQuery<Companies>(FETCH_COMPANIES);

  return {
    loading,
    error,
    companies: data ? data.fetchCompanies : [],
  };
}
