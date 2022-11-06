import { $button } from './common/var';
import { b } from './mixins/mixins';
import { set_component_css_var } from './mixins/_var';


b('button',
  set_component_css_var('button', $button)
)
