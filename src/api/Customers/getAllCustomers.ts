import Axios from 'axios'
import { Customer } from '../../types/Customer'

export default (url: string) =>
  Axios.get(url).then(response => {
    if (response.data) return response.data as Customer[]
    else return []
  })
