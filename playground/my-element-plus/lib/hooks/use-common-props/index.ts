import { buildProp } from '~/utils';
import { ComponentSize, componentSizes } from '~/constant';
import type { MaybeRef } from '@vueuse/core';
import { useProp } from '../use-prop';
import { computed } from 'vue';

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: true,
} as const);

export const useSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>> = {}
) => {
  const size = useProp<ComponentSize>('size');

  return computed((): ComponentSize => size.value || '');
};
