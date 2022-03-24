import { OAuthFetch } from "./fetch"
import { LocalStore } from "./store"

export class Tred {

  private fetch: OAuthFetch

  constructor(private config: TredConfig) {
    this.fetch = new OAuthFetch({
      baseUrl: 'https://www.reddit.com/api/v1/',
      query: {
        raw_json: '1',
      },
      headers: {
        'User-Agent': config.userAgent,
      },
    }, new LocalStore())
  }

  async top(): Promise<Listing<Link>> {
    const res = await this.fetch.get('/top.json')
    return res.json()
  }

  async best(): Promise<Listing<Link>> {
    const res = await this.fetch.get('/best.json')
    return res.json()
  }

}