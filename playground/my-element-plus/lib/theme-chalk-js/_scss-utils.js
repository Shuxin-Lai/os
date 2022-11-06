// scss 内置函数或者工具函数
//  借助 vanilla 或者 lodash 表示
import { merge, get } from 'lodash-es';

/**
 * @see https://wikimass.com/sass/inspect
 * @example
 *    @debug inspect(null); // "null"
 *    @debug inspect(10px 20px 30px); // "10px 20px 30px"
 *    @debug inspect('sans-serif'); // "'sans-serif'"
 *    @debug inspect(('width': 200px)); // "('width': 200px)"`
 * @returns { string }
 */
export function inspect($value) {
  if ($value == null) return 'null';
  if (typeof $value == 'string') return '"' + $value + '"';
  return $value;
}

/**
 * @param { string } $value
 * @param { number? } start
 * @param { number? } end
 * @returns
 */
export function str_slice($value, start, end) {
  return $value.slice(start, end);
}

/**
 * @param { string } $value
 * @param { string } $substring
 */
export function str_index($value, $substring) {
  const index = $value.indexOf($substring);
  if (index == -1) return null;

  return index;
}

export const map = {
  get,
  deep_merge: merge,
};

export function rgba($value, $opacity) {
  return `rgba(r, g, b, a)`;
}

export const color = {
  /**
   * 混合两种颜色
   * @see https://sass-lang.com/documentation/modules/color#mix
   * @param weight $color1 的权重。weight 越大 $color1 的权重越高。
   * @returns 混合后的颜色
   */
  mix($color1, $color2, $weight = 0.5) {
    return `mixed color`;
  },
};

export const math = {
  div($number1, $number2) {
    return $number1 / $number2;
  },

  percentage($float) {
    return `${$float * 100}%`;
  },
};
