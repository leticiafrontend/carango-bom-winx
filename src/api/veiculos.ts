import { api } from '../services/api'

const headers = { 'Content-type': 'application/json' }

export const getVeiculos = () => api.get('/veiculos')

export const postVeiculos = () => api.post('/veiculos', headers)

export const getVeiculoId = (id: number) => api.get(`/veiculos/${id}`)

export const putVeiculoId = (id: number) => api.put(`/veiculos/${id}`, headers)

export const deleteVeiculo = (id: number) => api.delete(`/veiculos/${id}`)
