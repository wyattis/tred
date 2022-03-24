type TredConfig = {
  clientId: string
  userAgent: string
  clientSecret: string
  refreshToken?: string
  username?: string
  password?: string
}

interface Store {
  get<T> (key: string): Promise<T | undefined>
  set<T> (key: string, val: T): Promise<void>
  del(key: string): Promise<void>
}