import { api } from '../services/api'

export const getVeiculos = () => api.get('/veiculos')
