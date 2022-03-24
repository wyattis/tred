type RequestMiddleware = (next: RequestMiddleware, uri: RequestInfo, opts?: RequestInit) => Response | Promise<Response>
type ResponseMiddleware = (next: ResponseMiddleware, uri: RequestInfo, res: Response) => Response | Promise<Response>

type FetchInit = Omit<RequestInit, 'method'> & {
  query?: Record<string, string|string[]>,
  baseUrl?: string
}

export class Fetch {

  public before: RequestMiddleware[] = []
  public after: ResponseMiddleware[] = []

  constructor (private opts = {} as FetchInit) {}

  async do(uri: string, method: string, init?: FetchInit & RequestInit) {
    const { url, opts } = this.merge(uri, method, init)
    const res = await fetch(url.href, opts)
    return res
  }

  private merge (uri: string, method: string, opts?: FetchInit & RequestInit) {
    const url = new URL(uri, this.opts?.baseUrl)
    if (this.opts.query) {
      url.searchParams.set
      url.search = this.opts.query.toString()
    }
    opts = Object.assign({ method }, this.opts, opts)
    if (opts.query) {
      for (const key in opts.query) {
        if (Array.isArray(opts.query[key])) {
          for (const val of opts.query[key]) {
            url.searchParams.append(key, val)
          }
        } else {
          url.searchParams.set(key, opts.query[key] as string)
        }
      }
    }
    delete opts.query
    delete opts.baseUrl
    return { url, opts }
  }

  async get(uri: string, opts = {} as FetchInit) {
    return this.do(uri, 'GET', opts)
  }

  async post(uri: string, opts = {} as FetchInit) {
    return this.do(uri, 'POST', opts)
  }

  async put(uri: string, opts = {} as FetchInit) {
    return this.do(uri, 'PUT', opts)
  }

  async delete(uri: string, opts = {} as FetchInit) {
    return this.do(uri, 'DELETE', opts)
  }
}

export class OAuthFetch extends Fetch {

  constructor(opts = {} as FetchInit, private store: Store) {
    super(opts)
  }

}