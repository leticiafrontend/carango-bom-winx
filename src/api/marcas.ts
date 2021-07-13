import { api } from '../services/api'

const headers = { 'Content-type': 'application/json' }

export const getMarcas = () => api.get('/marcas')

export const postMarcas = () => api.post('/marcas', headers)

export const getMarcaId = (id: number) => api.get(`/marcas/${id}`)

export const putMarcaId = (id: number) => api.put(`/marcas/${id}`, headers)

export const deleteMarca = (id: number) => api.delete(`/marcas/${id}`)
