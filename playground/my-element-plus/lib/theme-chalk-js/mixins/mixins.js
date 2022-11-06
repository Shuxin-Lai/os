export * from './config';
import { $namespace } from 'config';

export function* b($block, $content = ``) {
  let $B = $namespace + '-' + $block;

  yield `.${$B} {
    ${$content}
  }`;
}
