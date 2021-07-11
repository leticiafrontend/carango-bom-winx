import { api } from '../services/api'

export const getMarcas = () => api.get('/marcas')
