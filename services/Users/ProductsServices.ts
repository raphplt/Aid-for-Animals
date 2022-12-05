import { api } from '../ServiceHelper'

export const fetchProducts = async (pid: any) => {
  return await api.get(`/product/${pid}`).then((response) => response.data)
}
