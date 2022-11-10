<template>
  <button
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('disabled', disabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@element-plus/hooks'
import { ref } from 'vue'
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'ElButton',
})

const _ref = ref<HTMLButtonElement>()
const emits = defineEmits(buttonEmits)
const props = defineProps(buttonProps)
defineExpose({
  ref: _ref,
})

const ns = useNamespace('button')
</script>

<style scoped></style>
