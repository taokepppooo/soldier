import { SCard } from '@@/components/types'
import { cardProps } from '@@/components/types/cardProps'

// 使用vue中的defineComponent会报错
const RenderCard = defineNuxtComponent({
  props: cardProps,
  setup(props) {
    return () => <SCard options={props.options}> </SCard>
  },
})

export type RenderCardInstance = InstanceType<typeof RenderCard>
export default RenderCard
