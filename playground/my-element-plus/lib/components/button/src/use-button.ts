import { ref, SetupContext } from 'vue';
import { useSize } from '~/hooks';
import { ButtonEmits, ButtonProps } from './button';

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  const globalConfig = ref(null);
  const form = undefined;
  const _size = useSize();
};
