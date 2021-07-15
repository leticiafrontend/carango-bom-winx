/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  getMarcas,
  postMarcas,
  getMarcaId,
  putMarcaId,
  deleteMarca,
} from './marcas'

describe('Marcas', () => {
  it('Return Marcas when getMarcas is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getMarcas()).reply(200)
  })
  it('Return new marcas when postMarcas is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(postMarcas()).reply(200)
  })
  it('Return ID marcas when getMarcaId is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getMarcaId()).reply(200)
  })
  it('Return new ID marcas when putMarcaId is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(putMarcaId()).reply(200)
  })
  it('Delete marca when deleteMarca is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(deleteMarca()).reply(200)
  })
})
