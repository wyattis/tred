type Thing<T> = {
  id: string
  name: string
  kind: string
  data: T
}

type Listing<T> = {
  after: string
  before: string
  modhash: string
  children: Thing<T>[]
}

type ListingParameters = {
  after?: string
  before?: string
  count?: number
  show?: 'all'
}

type Votable = {
  ups: number
  downs: number
  likes: boolean
}

type Created = {
  created: number
  created_utc: number
}

type Comment = Votable & Created & {
  approved_by?: string
  author: string
  author_flair_css_class: string
  author_flair_text: string
  banned_by?: string
  body: string
  body_html: string
  edited: boolean | number
  gilded: number
  link_author?: string
  link_id: string
  link_title?: string
  link_url?: string
  num_reports?: number
  parent_id: string
  replies: Comment[]
  saved: boolean
  score: number
  score_hidden: boolean
  subreddit: string
  subreddit_id: string
  distinguished?: string
}

type Link = Votable & Created & {
  author: string
  author_flair_css_class: string
  author_flair_text: string
  clicked: boolean
  domain: string
  hidden: boolean
  is_self: boolean
  likes?: boolean
  link_flair_css_class: string
  link_flai_text: string
  locked: boolean
  media?: Media
  media_embed?: MediaEmbed
  num_comments: number
  over_18: boolean
  permalink: string
  saved: boolean
  score: number
  selftext: string
  selftext_html: string
  subreddit: string
  subreddit_id: string
  thumbnail: string
  title: string
  url: string
  edited: boolean | number
  distinguished?: string
  stickied: boolean
}

type Subreddit = {
  accounts_active: number
  comment_score_hide_mins: number
  description: string
  description_html: string
  display_name: string
  header_img: string
  header_size: number[]
  header_title: string
  over18: boolean
  public_description: string
  public_traffic: boolean
  subscribers: number
  submission_type: 'any' | 'link' | 'self'
  submit_link_label?: string
  submit_text_label?: string
  subreddit_type: 'public' | 'private' | 'restricted' | 'gold_restricted' | 'archived'
  title: string
  url: string
  user_is_banned: boolean
  user_is_contributor: boolean
  user_is_moderator: boolean
  user_is_subscriber: boolean
}

type Message = Created & {
  author: string
  body: string
  body_html: string
  context: string
  first_message?: number
  first_message_name: string
  likes?: boolean
  link_title?: string
  name: string
  new: boolean
  parent_id?: string
  replies?: string
  subject: string
  subreddit?: string
  was_comment: boolean
}

type Account = OtherAccount & Partial<OwnedAccount>

type OwnedAccount = Created & {
  has_mail: boolean
  has_mod_mail: boolean
  has_verified_email: boolean
  inbox_count: number
  modhash: string
}

type OtherAccount = Created & {
  comment_karma: number
  id: string
  is_friend: boolean
  is_gold: boolean
  is_mod: boolean
  link_karma: number
  name: string
  over_18: boolean
}