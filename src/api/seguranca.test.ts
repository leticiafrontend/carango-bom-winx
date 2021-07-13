/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  postAutenticacao,
  getUsuarios,
  postUsuario,
  getUsuarioName,
  deleteUsuario,
  putAlterarSenha,
} from './seguranca'

describe('Seguranca', () => {
  it('Return Autenticacao when postAutenticacaois called', () => {
    const mock = new MockAdapter(axios)
    mock.onPost(postAutenticacao()).reply(200)
  })
  it('Return user when getUsuarios is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getUsuarios()).reply(200)
  })
  it('Put user in Usuario when postUsuario is called', () => {
    const mock = new MockAdapter(axios)
    mock.onPost(postUsuario()).reply(200)
  })
  it('Take user when getUsuarioName is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getUsuarioName()).reply(200)
  })
  it('Delete user when deleteUsuario is called', () => {
    const mock = new MockAdapter(axios)
    mock.onDelete(deleteUsuario()).reply(200)
  })
  it('Change pass when putAlterarSenha is called', () => {
    const mock = new MockAdapter(axios)
    mock.onPut(putAlterarSenha()).reply(200)
  })
})
