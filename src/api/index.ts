import GetAllCustomers from './Customers/getAllCustomers'

const ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getAllCustomers = () =>
  GetAllCustomers(ENDPOINT + '/customer/getCustomers')
