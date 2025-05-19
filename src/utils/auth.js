
import { jwtDecode } from 'jwt-decode'

// Checks if a token is present and not expired
export function isTokenValid(token) {
  try {
    const { exp } = jwtDecode(token)
    return Date.now() < exp * 1000
  } catch (e) {
    return false
  }
}
