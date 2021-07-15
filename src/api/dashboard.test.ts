/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-undef
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { getDashboard } from './dashboard'

describe('Dashboard', () => {
  it('Return dashboard when dashboard is called', () => {
    const mock = new MockAdapter(axios)
    mock.onGet(getDashboard()).reply(200)
  })
})
