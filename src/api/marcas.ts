import { api } from '../services/api'

const headers = { 'Content-Type': 'application/json' }

export const getMarcas = () => api.get('/marcas')

export const postMarcas = (data: any) => api.post('/marcas', data, { headers })

export const getMarcaId = (id: number) => api.get(`/marcas/${id}`)

export const putMarcaId = (data: any, id: number) =>
  api.put(`/marcas/${id}`, data, { headers })

export const deleteMarca = (id: number) => api.delete(`/marcas/${id}`)
