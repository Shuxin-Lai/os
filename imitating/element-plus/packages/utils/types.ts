export {
  isNumber,
  isFunction,
  isBoolean,
  isArray,
  isString,
  isNull,
  isUndefined,
  isNaN,
} from 'lodash-es'

import { isNaN, isString } from 'lodash-es'
export const isStringNumber = (v): v is string =>
  isString(v) ? !isNaN(Number(v)) : false
