<template>
  <renderCards></renderCards>
</template>

<script setup lang="tsx">
import RenderCard from './renderers'

const renderCards = () => {
  return (
    <div>
      <RenderCard></RenderCard>
    </div>
  )
}
</script>
<style lang="less" scoped></style>
