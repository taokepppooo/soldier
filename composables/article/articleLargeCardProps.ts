import type { CSSProperties } from 'vue'

export interface ArticleImg {
  width?: string | number
  height?: string | number
  source?: string
}

export interface Article {
  width?: string | number
  label?: string
  content?: string
}

export interface ArticleInfo {
  tag: string
  headSource: string
  username: string
  publishTime: string
  tagStyle?: CSSProperties
}

export interface ArticleCardContentOptions {
  img?: ArticleImg
  article?: Article
  info?: ArticleInfo
}
