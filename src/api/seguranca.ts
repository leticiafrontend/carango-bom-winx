import { api } from '../services/api'

export const postAutenticacao = () => api.post('/autenticacao')

export const getUsuarios = () => api.get('/usuarios')

export const postUsuario = () => api.post('/usuarios')

export const getUsuarioName = (name: string) => api.get(`/usuarios/${name}`)

export const deleteUsuario = (name: string) => api.delete(`/usuarios/${name}`)

export const putAlterarSenha = (name: string) =>
  api.put(`/usuarios/${name}/senha`)
