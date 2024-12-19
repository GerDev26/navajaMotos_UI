const API_URL = {
  production: '',
  local: 'http://127.0.0.1:8000',
  localNetwork: 'http://192.168.100.143:8000'
}

const API = API_URL.localNetwork

export const MODELS = `${API}/vehicle/model`
