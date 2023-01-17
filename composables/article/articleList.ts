export interface Img {
  src: string
}

export interface Article {
  title: string
  info: ArticleInfo
}

export interface ArticleInfo {
  tag: string
}

export interface ArticleListOptions {
  img?: Img
  article: Article
}

export default {}
