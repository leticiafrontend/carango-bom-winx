import { api } from '../services/api'

export const getVeiculos = () => api.get('/veiculos')

export const postVeiculos = () => api.post('/veiculos')

export const getVeiculoId = (id: number) => api.get(`/veiculos/${id}`)

export const putVeiculoId = (id: number) => api.put(`/veiculos/${id}`)

export const deleteVeiculo = (id: number) => api.delete(`/veiculos/${id}`)
