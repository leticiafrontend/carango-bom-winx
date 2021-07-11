import axios from 'axios'

// Servidor local:
// https://localhost:3000
const url =
  'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake'

export const api = axios.create({
  baseURL: url,
})
