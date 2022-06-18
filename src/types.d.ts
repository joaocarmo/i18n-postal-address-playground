export type AddressParts =
  | 'address1'
  | 'address2'
  | 'addressNum'
  | 'city'
  | 'companyName'
  | 'country'
  | 'countryAlpha2'
  | 'do'
  | 'dong'
  | 'firstLastName'
  | 'firstName'
  | 'gu'
  | 'honorific'
  | 'jobTitle'
  | 'lastName'
  | 'postalCode'
  | 'prefecture'
  | 'province'
  | 'region'
  | 'republic'
  | 'secondLastName'
  | 'secondName'
  | 'si'
  | 'state'
  | 'title'

export interface AddressObject extends Address {
  [key: string]: string
}
