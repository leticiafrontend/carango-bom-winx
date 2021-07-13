/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Services', () => {
  it('Return Services when Services is called', () => {
    const mock = new MockAdapter(axios)
    mock
      .onGet(
        'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake',
      )
      .reply(200)
  })
})
