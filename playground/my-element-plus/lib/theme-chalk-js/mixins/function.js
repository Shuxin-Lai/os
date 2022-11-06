import { inspect, str_slice, str_index } from '../_scss-utils';
import * as config from './config';

// BEM support Func
export function selectorToString($selector) {
  $selector = inspect($selector);
  $selector = str_slice($selector, 2, -2);
  return $selector;
}

/**
 * @example
 */
export function containsModifier($selector) {
  $selector = selectorToString($selector);

  if (str_index($selector, config.$modifier_separator)) {
    return true;
  } else {
    return false;
  }
}

export function containWhenFlag($selector) {
  $selector = selectorToString($selector);

  if (str_index($selector, '.' + config.$state_prefix)) {
    return true;
  } else {
    return false;
  }
}

export function containPseudoClass($selector) {
  $selector = selectorToString($selector);

  if (str_index($selector, ':')) {
    return true;
  } else {
    return false;
  }
}

export function hitAllSpecialNestRule($selector) {
  return containsModifier($selector) || containWhenFlag($selector) || containPseudoClass($selector);
}

// join var name
// joinVarName(('button', 'text-color')) => '--el-button-text-color'
/**
 * param {Array<string>} $list
 * returns { string }
 */
export function joinVarName($list) {
  let $name = '--' + config.$namespace;
  for (const $item of $list) {
    if ($item != '') {
      $name = $name + '-' + $item;
    }
  }

  return $name;
}

// getCssVarName('button', 'text-color') => '--el-button-text-color'
/**
 * @param  {...string} $args
 */
export function getCssVarName(...$args) {
  return joinVarName($args);
}

// getCssVar('button', 'text-color') => var(--el-button-text-color)
export function getCssVar(...$args) {
  return `var(${joinVarName($args)})`;
}

// getCssVarWithDefault(('button', 'text-color'), red) => var(--el-button-text-color, red)
export function getCssVarWithDefault($args, $default) {
  return `var(${joinVarName($args)}, ${$default})`;
}

// bem('block', 'element', 'modifier') => 'el-block__element--modifier'
export function bem($block, $element = '', $modifier = '') {
  $name = config.$namespace + config.$common_separator + $block;

  if ($element != '') {
    $name = $name + config.$element_separator + $element;
  }

  if ($modifier != '') {
    $name = $name + config.$modifier_separator + $modifier;
  }

  // @debug $name;
  return $name;
}
