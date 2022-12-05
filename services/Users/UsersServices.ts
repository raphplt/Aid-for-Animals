import { api } from '../ServiceHelper'

export const FetchUsersData = async () => {
  return await api.get('/product/').then((response) => response.data)
}

export const FetchAuth = async (Username: string, Password: string) => {
  return await api.post('/auth/', { username: Username, passWord: Password }).then((response) => response.data)
}
