interface ArticleImg {
  width: string | number
  height: string | number
}

export interface ArticleCardContentOptions {
  img?: ArticleImg
  title?: string
  articleInfo?: string
}
