import { getCssVar, getCssVarName } from './function';

// set all css var for component by map
// set_component_css_var('button');
export function* set_component_css_var($name, $variables) {
  for (const $attribute in $variables) {
    const $value = $variables[$attribute];

    if ($attribute == 'default') {
      yield `${getCssVarName($name)}: ` + `${$value}`;
    } else {
      yield `${getCssVarName($name, $attribute)}: ` + `${$value}`;
    }
  }
}
