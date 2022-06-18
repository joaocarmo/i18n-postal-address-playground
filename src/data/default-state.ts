import type { AddressObject } from '../types'

const objectInitialState: AddressObject = {
  address1: '',
  address2: '',
  addressNum: '',
  city: '',
  companyName: '',
  country: '',
  countryAlpha2: '',
  do: '',
  dong: '',
  firstLastName: '',
  firstName: '',
  gu: '',
  honorific: '',
  jobTitle: '',
  lastName: '',
  postalCode: '',
  prefecture: '',
  province: '',
  region: '',
  republic: '',
  secondLastName: '',
  secondName: '',
  si: '',
  state: '',
  title: '',
}

/**
 * Example:
 * Ms. Alice Smith Apartment 1c 213 Derrick Street Boston, MA 02130 USA
 */

const defaultState: AddressObject = {
  ...objectInitialState,
  address1: 'Apartment 1c',
  address2: '213 Derrick Street',
  city: 'Boston',
  country: 'USA',
  countryAlpha2: 'US',
  firstName: 'Alice',
  honorific: 'Ms.',
  lastName: 'Smith',
  postalCode: '02130',
  state: 'MA',
}

export default defaultState
