interface ArticleImg {
  width: string | number
  height: string | number
  source?: string
}

interface ArticleTitle {
  width?: string | number
  label?: string
  content: string
}

export interface ArticleInfo {
  tag: string
  headSource: string
  username: string
  publishTime: string
}

export interface ArticleCardContentOptions {
  img?: ArticleImg
  title?: ArticleTitle
  info?: ArticleInfo
}
