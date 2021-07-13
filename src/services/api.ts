import axios from 'axios'

// Servidor local:
// https://localhost:3001
// Servidor online:
// 'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake'
const url =
  'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake'

export const api = axios.create({
  baseURL: url,
})
