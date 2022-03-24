export class LocalStore implements Store {

  async get<T>(key: string) {
    const res = localStorage.getItem(key)
    if (res) {
      return JSON.parse(res) as T
    }
  }

  async set<T>(key: string, val: T) {
    return localStorage.setItem(key, JSON.stringify(val))
  }

  async del(key: string) {
    return localStorage.removeItem(key)
  }
}