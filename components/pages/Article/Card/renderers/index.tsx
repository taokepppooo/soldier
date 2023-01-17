import { cardProps } from '@@/composables/cardProps'
import { SCard } from '@/components/global/SCard/types'
import { setStyles } from '../hooks/useStyle'

// 使用vue中的defineComponent会报错
const RenderCard = defineNuxtComponent({
  props: cardProps,
  setup(props, { slots }) {
    const styles = setStyles(props.options!)

    return () => (
      <SCard options={props.options} style={styles}>
        {slots}
      </SCard>
    )
  },
})

export type RenderCardInstance = InstanceType<typeof RenderCard>
export default RenderCard
