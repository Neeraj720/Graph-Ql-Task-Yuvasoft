import { gql } from "@apollo/client";

export const getCuntryList = gql`
query Countries {
  countries {
    currency
    currencyName
    currencySymbol
    id
    name
    phoneCode
  }
}`;

export const getStateList = gql`query States($statesId: ID!) {
  states(id: $statesId) {
    id
    name
  }
}`;

export const getCityList = gql`query Cities($citiesId: ID!) {
  cities(id: $citiesId) {
    id
    name
  }
}`