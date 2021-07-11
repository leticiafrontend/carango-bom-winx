import { api } from '../services/api'

export const getDashboard = () => api.get('/dashboard')
