import { api } from '../services/api'

export const getMarcas = () => api.get('/marcas')

export const postMarcas = () => api.post('/marcas')

export const getMarcaId = (id: number) => api.get(`/marcas/${id}`)

export const putMarcaId = (id: number) => api.put(`/marcas/${id}`)

export const deleteMarca = (id: number) => api.delete(`/marcas/${id}`)
