<template>
  <button>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '../../../hooks/use-namespace';

defineOptions({ name: 'ElButton' });

const ns = useNamespace('button');

defineProps();
</script>

<style scoped></style>
