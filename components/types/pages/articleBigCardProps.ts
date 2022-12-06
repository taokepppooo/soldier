interface ArticleImg {
  width: string | number
  height: string | number
  source?: string
}

export interface ArticleCardContentOptions {
  img?: ArticleImg
  title?: string
  articleInfo?: string
}
