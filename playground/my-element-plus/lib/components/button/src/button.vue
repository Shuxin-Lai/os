<template>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '~/hooks';
import { buttonEmits, buttonProps } from './button';

defineOptions({ name: 'ElButton' });
const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);

const ns = useNamespace('button');

defineProps();
</script>

<style scoped></style>
