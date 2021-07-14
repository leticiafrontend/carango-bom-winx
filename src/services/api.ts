import axios from 'axios'

// Servidor local:
// http://localhost:3001
// Servidor online:
// 'https://my-json-server.typicode.com/levelup-rchlo/carango-bom-api-fake'
const url = 'http://localhost:3001'

export const api = axios.create({
  baseURL: url,
})
