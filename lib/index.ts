import axios from 'axios'
import qs from 'qs'

export async function login(username: string, password: string, client_id: string) {
  const response = await axios.post("https://api.kinvo.com.br/auth/token", qs.stringify({
    username,
    password,
    client_id,
    grant_type: "password",
  }), {
    headers: {
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded",
        "Pragma": "App",
        "api-version": "6"
    },
  });
  return response.data
}

