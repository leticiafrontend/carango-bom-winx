import { api } from '../services/api'

const headers = { 'Content-Type': 'application/json' }

export const getVeiculos = () => api.get('/veiculos?_expand=marca')

export const postVeiculos = (data: any) =>
  api.post('/veiculos', data, { headers })

export const getVeiculoId = (id: number) => api.get(`/veiculos/${id}`)

export const putVeiculoId = (data: any, id: number) =>
  api.put(`/veiculos/${id}`, data, { headers })

export const deleteVeiculo = (id: number) => api.delete(`/veiculos/${id}`)

export const ordenacaoVeiculo = (value: string, order: string) =>
  api.get(`/veiculos?_expand=marca&_sort=${value}&_order=${order}`)
