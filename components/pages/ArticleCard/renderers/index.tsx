import { SCard } from '@@/components/types'
import { cardProps } from '@@/components/types/cardProps'
import { setStyles } from '../hooks/useStyle'

// 使用vue中的defineComponent会报错
const RenderCard = defineNuxtComponent({
  props: cardProps,
  setup(props) {
    const styles = setStyles(props.options!)

    return () => <SCard options={props.options} style={styles}></SCard>
  },
})

export type RenderCardInstance = InstanceType<typeof RenderCard>
export default RenderCard
