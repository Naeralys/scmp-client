import GetAllCustomers from './Customers/getAllCustomers'

const { ENDPOINT = 'http://localhost:3000' } = process.env

export const getAllCustomers = () =>
  GetAllCustomers(ENDPOINT + '/customer/getCustomers')
