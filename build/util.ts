export const isDev = (): boolean => {
  return process.env.VITE_ENV === 'development'
}
