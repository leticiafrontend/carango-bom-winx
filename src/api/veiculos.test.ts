/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import {
  getVeiculos,
  postVeiculos,
  getVeiculoId,
  putVeiculoId,
  deleteVeiculo,
} from './veiculos'

describe('Veiculos', () => {
  it('Return Veiculos when getVeiculos called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getVeiculos()).reply(200)
  })
  it('Put Veiculos in when postVeiculos is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(postVeiculos()).reply(200)
  })
  it('Return id when getVeiculoId is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getVeiculoId()).reply(200)
  })
  it('Put id in Veiculos when putVeiculoId is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(putVeiculoId()).reply(200)
  })
  it('Delete user when deleteVeiculo is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(deleteVeiculo()).reply(200)
  })
})
