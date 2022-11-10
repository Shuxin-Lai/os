<template>
  <i :class="[ns.b()]" v-bind="$attrs" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@element-plus/hooks'
import { addUnit, isUndefined } from '@element-plus/utils'
import { computed, CSSProperties } from 'vue'

defineOptions({
  name: 'ElIcon',
})


const ns = useNamespace('icon')
const props = defineProps({
  size: String,
  color: String,
})
const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>

<style scoped></style>
