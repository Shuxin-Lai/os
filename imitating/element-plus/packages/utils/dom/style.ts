import { isNumber, isString } from 'lodash-es'
import { debugWarn } from '../errors'
import { isStringNumber } from '../types'

const SCOPE = 'utils/style'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`
  if (isString(value)) return value
  debugWarn(SCOPE, 'invalid value')
}
