import { ComponentSize } from '@element-plus/constants'
import { PropType } from 'vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  '',
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  size: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
  nativeType: {
    type: String,
    default: '',
  },
  loading: Boolean,
  loadingIcon: Object,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  disabled: Boolean,
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
