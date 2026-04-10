import type { PostalAddressType } from 'i18n-postal-address'

const objectInitialState: PostalAddressType.AddressObject = {
  additionalName: '',
  address1: '',
  address2: '',
  addressNum: '',
  careOf: '',
  city: '',
  companyName: '',
  country: '',
  countryAlpha2: '',
  do: '',
  dong: '',
  familyName: '',
  firstFamilyName: '',
  givenName: '',
  gu: '',
  honorificPrefix: '',
  honorificSuffix: '',
  jobTitle: '',
  postalCode: '',
  prefecture: '',
  province: '',
  region: '',
  republic: '',
  secondFamilyName: '',
  si: '',
  state: '',
  title: '',
}

/**
 * Example:
 * Ms. Alice Smith Apartment 1c 213 Derrick Street Boston, MA 02130 USA
 */

const defaultState: PostalAddressType.AddressObject = {
  ...objectInitialState,
  address1: 'Apartment 1c',
  address2: '213 Derrick Street',
  city: 'Boston',
  country: 'USA',
  countryAlpha2: 'US',
  givenName: 'Alice',
  honorificPrefix: 'Ms.',
  familyName: 'Smith',
  postalCode: '02130',
  state: 'MA',
}

export default defaultState
