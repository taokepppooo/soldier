import { SCard } from '~~/components/types'

const getCardOptions = () => {
  return {
    width: 330,
    height: 80,
    backgroundImage: 'linear-gradient(45deg,#a682e4,#c1a7e9)',
    transition: 'all 0.3s ease-in-out',
  }
}

const renderCard = () => {
  return <SCard options={getCardOptions()}> </SCard>
}

export default renderCard
