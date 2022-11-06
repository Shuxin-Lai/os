/* Element Chalk Variables */

import { map, color, math, rgba } from '../_scss-utils';
import { getCssVar } from '../mixins/function';
const { mix } = color;

// Special comment for theme configurator
// type|skipAutoTranslation|Category|Order
// skipAutoTranslation 1

// types
const $types = [`primary`, `success`, `warning`, `danger`, `error`, `info`];

// Color
export let _$colors = {}; // !default;
export let $colors = map.deep_merge(
  {
    'white': '#ffffff',
    'black': '#000000',
    'primary': {
      'base': '#409eff',
    },
    'success': {
      'base': '#67c23a',
    },
    'warning': {
      'base': '#e6a23c',
    },
    'danger': {
      'base': '#f56c6c',
    },
    'error': {
      'base': '#f56c6c',
    },
    'info': {
      'base': '#909399',
    },
  },
  _$colors
);

let $color_white = map.get($colors, 'white'); // !default;
let $color_black = map.get($colors, 'black'); // !default;
let $color_primary = map.get($colors, 'primary', 'base'); // !default;
let $color_success = map.get($colors, 'success', 'base'); // !default;
let $color_warning = map.get($colors, 'warning', 'base'); // !default;
let $color_danger = map.get($colors, 'danger', 'base'); // !default;
let $color_error = map.get($colors, 'error', 'base'); // !default;
let $color_info = map.get($colors, 'info', 'base'); // !default;

// https://sass-lang.com/documentation/values/maps#immutability
// mix colors with white/black to generate light/dark level
export function* set_color_mix_level($type, $number, $mode = 'light', $mix_color = $color_white) {
  $colors = map.deep_merge(
    {
      [$type]: {
        [`${$mode}-${$number}`]: mix(
          $mix_color,
          map.get($colors, $type, 'base'),
          math.percentage(math.div($number, 10))
        ),
      },
    },
    $colors
  ); // !global;
}

// $colors.primary.light-i
// --el-color-primary-light-i
// 10% 53a8ff
// 20% 66b1ff
// 30% 79bbff
// 40% 8cc5ff
// 50% a0cfff
// 60% b3d8ff
// 70% c6e2ff
// 80% d9ecff
// 90% ecf5ff
for (const $type of $types) {
  for (let $i = 0; $i <= 9; $i++) {
    `
      ${set_color_mix_level($type, $i, 'light', $color_white)}
    `;
  }
}

// --el-color-primary-dark-2
for (const $type of $types) {
  for (let $i = 0; $i <= 9; $i++) {
    `
      ${set_color_mix_level($type, 2, 'dark', $color_black)}
    `;
  }
}

export let _$text_color = {}; // !default;
export let $text_color = map.merge(
  {
    'primary': `#303133`,
    'regular': `#606266`,
    'secondary': `#909399`,
    'placeholder': `#a8abb2`,
    'disabled': `#c0c4cc`,
  },
  _$text_color
);

export let _$border_color = {}; // !default;
export let $border_color = map.merge(
  {
    '': `#dcdfe6`,
    'light': `#e4e7ed`,
    'lighter': `#ebeef5`,
    'extra-light': `#f2f6fc`,
    'dark': `#d4d7de`,
    'darker': `#cdd0d6`,
  },
  _$border_color
);

export let _$fill_color = {}; // !default;
export let $fill_color = map.merge(
  {
    '': `#f0f2f5`,
    'light': `#f5f7fa`,
    'lighter': `#fafafa`,
    'extra-light': `#fafcff`,
    'dark': `#ebedf0`,
    'darker': `#e6e8eb`,
    'blank': `#ffffff`,
  },
  _$fill_color
);

// Background
export let _$bg_color = {}; // !default;
export let $bg_color = map.merge(
  {
    '': `#ffffff`,
    'page': `#f2f3f5`,
    'overlay': `#ffffff`,
  },
  _$bg_color
);

// Border
export let $border_width = `1px`; // !default;
export let $border_style = `solid`; // !default;
export let $border_color_hover = getCssVar('text-color', 'disabled'); // !default;

export let _$border_radius = {}; // !default;
export let $border_radius = map.merge(
  {
    'base': `4px`,
    'small': `2px`,
    'round': `20px`,
    'circle': `100%`,
  },
  _$border - radius
);

// Box-shadow
export let _$box_shadow = {}; // !default;
export let $box_shadow = map.merge(
  {
    '': [`0px 12px 32px 4px rgba(0, 0, 0, 0.04)`, `0px 8px 20px rgba(0, 0, 0, 0.08)`],
    'light': [`0px 0px 12px rgba(0, 0, 0, 0.12)`],
    'lighter': [`0px 0px 6px rgba(0, 0, 0, 0.12)`],
    'dark': [
      `0px 16px 48px 16px rgba(0, 0, 0, 0.08)`,
      `0px 12px 32px rgba(0, 0, 0, 0.12)`,
      `0px 8px 16px -8px rgba(0, 0, 0, 0.16)`,
    ],
  },
  _$box_shadow
);

// Typography
export let _$font_family = {}; // !default;
export let $font_family = map.merge(
  {
    // default family
    '':
      "'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif",
  },
  $font_family
);

export let _$font_size = {}; // !default;
export let $font_size = map.merge(
  {
    'extra-large': `20px`,
    'large': `18px`,
    'medium': `16px`,
    'base': `14px`,
    'small': `13px`,
    'extra-small': `12px`,
  },
  _$font_size
);

// zIndex
export let _$z_index = {}; // !default;
export let $z_index = map.merge(
  {
    'normal': 1,
    'top': 1000,
    'popper': 2000,
  },
  _$z_index
);

// Disable default
export let _$disabled = {}; // !default;
export let $disabled = map.merge(
  {
    'bg-color': getCssVar('fill-color', 'light'),
    'text-color': getCssVar('text-color', 'placeholder'),
    'border-color': getCssVar('border-color', 'light'),
  },
  $disabled
);

export let _$common_component_size = {}; // !default;
export let $common_component_size = map.merge(
  {
    'large': `40px`,
    'default': `32px`,
    'small': `24px`,
  },
  _$common_component_size
);

// overlay
export let _$overlay_color = {}; // !default;
export let $overlay_color = map.merge(
  {
    '': rgba(0, 0, 0, 0.8),
    'light': rgba(0, 0, 0, 0.7),
    'lighter': rgba(0, 0, 0, 0.5),
  },
  $overlay_color
);

// mask
export let _$mask_color = {}; // !default;
export let $mask_color = map.merge(
  {
    '': rgba(255, 255, 255, 0.9),
    'extra-light': rgba(255, 255, 255, 0.3),
  },
  $mask_color
);

// Components
// ---
// Checkbox
// css3 var in packages/theme-chalk/src/checkbox.scss
export let _$checkbox = {}; // !default;
export let $checkbox = map.merge(
  {
    'font-size': `14px`,
    'font-weight': getCssVar('font-weight-primary'),
    'text-color': getCssVar('text-color-regular'),
    'input-height': `14px`,
    'input-width': `14px`,
    'border-radius': getCssVar('border-radius-small'),
    'bg-color': getCssVar('fill-color', 'blank'),
    'input-border': getCssVar('border'),
    'disabled-border-color': getCssVar('border-color'),
    'disabled-input-fill': getCssVar('fill-color', 'light'),
    'disabled-icon-color': getCssVar('text-color-placeholder'),
    'disabled-checked-input-fill': getCssVar('border-color-extra-light'),
    'disabled-checked-input-border-color': getCssVar('border-color'),
    'disabled-checked-icon-color': getCssVar('text-color-placeholder'),
    'checked-text-color': getCssVar('color-primary'),
    'checked-input-border-color': getCssVar('color-primary'),
    'checked-bg-color': getCssVar('color-primary'),
    'checked-icon-color': getCssVar('color', 'white'),
    'input-border-color-hover': getCssVar('color-primary'),
  },
  $checkbox
);

export let _$checkbox_button = {}; // !default;
export let $checkbox_button = map.merge(
  {
    'checked-bg-color': getCssVar('color-primary'),
    'checked-text-color': getCssVar('color-white'),
    'checked-border-color': getCssVar('color-primary'),
  },
  _$checkbox_button
);

export let _$checkbox_bordered_padding_left = {}; // !default;
export let $checkbox_bordered_padding_left = map.merge(
  {
    'large': `12px`,
    'default': `10px`,
    'small': `8px`,
  },
  _$checkbox_bordered_padding_left
);

export let _$checkbox_bordered_padding_right = {}; // !default;
export let $checkbox_bordered_padding_right = map.merge(
  {
    'large': `20px`,
    'default': `16px`,
    'small': `12px`,
  },
  _$checkbox_bordered_padding_right
);

// Radio
/// fontSize||Font|1
export let _$radio = {}; // !default;
export let $radio = map.merge(
  {
    'font-size': getCssVar('font-size-base'),
    'text-color': getCssVar('text-color-regular'),
    'font-weight': getCssVar('font-weight-primary'),
    'input-height': `14px`,
    'input-width': `14px`,
    'input-border-radius': getCssVar('border-radius-circle'),
    'input-bg-color': getCssVar('fill-color', 'blank'),
    'input-border': getCssVar('border'),
    'input-border-color': getCssVar('border-color'),
    'input-border-color-hover': getCssVar('color-primary'),
  },
  _$radio
);

export let _$radio_height = {}; // !default;
export let $radio_height = map.merge($common_component_size, $radio_height);

export let _$radio_button = {}; // !default;
export let $radio_button = map.merge(
  {
    'checked-bg-color': getCssVar('color-primary'),
    'checked-text-color': getCssVar('color-white'),
    'checked-border-color': getCssVar('color-primary'),
    'disabled-checked-fill': getCssVar('border-color-extra-light'),
  },
  _$radio_button
);

export let _$radio_disabled = {}; // !default;
export let $radio_disabled = map.merge(
  {
    'input-border-color': getCssVar('disabled-border-color'),
    'input-fill': getCssVar('disabled-bg-color'),
    'icon-color': getCssVar('disabled-bg-color'),
    'checked-input-border-color': getCssVar('disabled-border-color'),
    'checked-input-fill': getCssVar('disabled-bg-color'),
    'checked-icon-color': getCssVar('text-color-placeholder'),
  },
  _$radio_disabled
);

export let $radio_checked = {}; // !default;
export let _$radio_checked = map.merge(
  {
    'text-color': getCssVar('color-primary'),
    'input-border-color': getCssVar('color-primary'),
    'icon-color': getCssVar('color-primary'),
  },
  _$radio_checked
);

export let _$radio_bordered_input_height = {}; // !default;
export let $radio_bordered_input_height = map.merge(
  {
    'large': `14px`,
    'default': `12px`,
    'small': `12px`,
  },
  _$radio_bordered_input_height
);

export let _$radio_bordered_input_width = {}; // !default;
export let $radio_bordered_input_width = map.merge(
  {
    'large': `14px`,
    'default': `12px`,
    'small': `12px`,
  },
  _$radio_bordered_input_width
);

// Select
export let _$select = {}; // !default;
export let $select = map.merge(
  {
    'border-color-hover': getCssVar('border-color-hover'),
    'disabled-border': getCssVar('disabled-border-color'),
    'font-size': getCssVar('font-size-base'),
    'close-hover-color': getCssVar('text-color-secondary'),
    'input-color': getCssVar('text-color-placeholder'),
    'multiple-input-color': getCssVar('text-color-regular'),
    'input-focus-border-color': getCssVar('color-primary'),
    'input_font_size': `14px`,
  },
  _$select
);

export let _$select_option = {}; // !default;
export let $select_option = map.merge(
  {
    'text-color': getCssVar('text-color-regular'),
    'disabled-color': getCssVar('text-color-placeholder'),
    'height': `34px`,
    'hover-background': getCssVar('fill-color', 'light'),
    'selected-text-color': getCssVar('color-primary'),
  },
  _$select_option
);

export let _$select_group = {}; // !default;
export let $select_group = map.merge(
  {
    'text-color': getCssVar('color-info'),
    'height': `30px`,
    'font-size': `12px`,
  },
  _$select_group
);

export let _$select_dropdown = {}; // !default;
export let $select_dropdown = map.merge(
  {
    'bg-color': getCssVar('bg-color', 'overlay'),
    'shadow': getCssVar('box-shadow-light'),
    'empty-color': getCssVar('text-color-secondary'),
    'max-height': `274px`,
    'padding': `6px 0`,
    'empty-padding': `10px 0`,
    'border': `1px solid ${getCssVar('border-color-light')}`,
  },
  _$select_dropdown
);

export let _$select_tags_prefix_padding = {}; // !default;
export let $select_tags_prefix_padding = map.merge(
  {
    'large': `8px`,
    'default': `6px`,
    'small': `4px`,
  },
  _$select_tags_prefix_padding
);

// Alert
// css3 var in packages/theme-chalk/src/alert.scss
export let _$alert = {}; // !default;
export let $alert = map.merge(
  {
    'padding': `8px 16px`,
    'border-radius-base': getCssVar('border-radius-base'),
    'title-font-size': `13px`,
    'description-font-size': `12px`,
    'close-font-size': `12px`,
    'close-customed-font-size': `13px`,
    'icon-size': `16px`,
    'icon-large-size': `28px`,
  },
  _$alert
);

// MessageBox
// css3 var in packages/theme-chalk/src/message-box.scss
export let _$messagebox = {}; // !default;
export let $messagebox = map.merge(
  {
    'title-color': getCssVar('text-color-primary'),
    'width': `420px`,
    'border-radius': `4px`,
    'font-size': getCssVar('font-size-large'),
    'content-font-size': getCssVar('font-size-base'),
    'content-color': getCssVar('text-color-regular'),
    'error-font-size': `12px`,
    'padding-primary': `15px`,
  },
  _$messagebox
);

// Message
// css3 var in packages/theme-chalk/src/message.scss
export let _$message = {}; // !default;
export let $message = map.merge(
  {
    'bg-color': getCssVar('color', 'info', 'light-9'),
    'border-color': getCssVar('border-color-lighter'),
    'padding': `15px 19px`,
    'close-size': `16px`,
    'close-icon-color': getCssVar('text-color-placeholder'),
    'close-hover-color': getCssVar('text-color-secondary'),
  },
  _$message
);

// Notification
// css3 var in packages/theme-chalk/src/notification.scss
export let _$notification = {}; // !default;
export let $notification = map.merge(
  {
    'width': `330px`,
    'padding': `14px 26px 14px 13px`,
    'radius': `8px`,
    'shadow': getCssVar('box-shadow-light'),
    'border-color': getCssVar('border-color-lighter'),
    'icon-size': `24px`,
    'close-font-size': `var(
        ${getCssVarName('message-close-size')},
        ${map.get($message, 'close-size')}
      )`,
    'group-margin-left': `13px`,
    'group-margin-right': `8px`,
    'content-font-size': getCssVar('font-size-base'),
    'content-color': getCssVar('text-color-regular'),
    'title-font-size': `16px`,
    'title-color': getCssVar('text-color-primary'),
    'close-color': getCssVar('text-color-secondary'),
    'close-hover-color': getCssVar('text-color-regular'),
  },
  _$notification
);

// Input
// css3 var in packages/theme-chalk/src/input.scss
export let _$input = {}; // !default;
export let $input = map.merge(
  {
    'text-color': getCssVar('text-color-regular'),
    'border': getCssVar('border'),
    'hover-border': getCssVar('border-color-hover'),
    'focus-border': getCssVar('color-primary'),
    'transparent-border': `0 0 0 1px transparent inset`,
    'border-color': getCssVar('border-color'),
    'border-radius': getCssVar('border-radius-base'),
    'bg-color': getCssVar('fill-color', 'blank'),
    'icon-color': getCssVar('text-color-placeholder'),
    'placeholder-color': getCssVar('text-color-placeholder'),
    'hover-border-color': getCssVar('border-color-hover'),
    'clear-hover-color': getCssVar('text-color-secondary'),
    'focus-border-color': getCssVar('color-primary'),
  },
  _$input
);

export let _$input_disabled = {}; // !default;
export let $input_disabled = map.merge(
  {
    'fill': getCssVar('disabled-bg-color'),
    'border': getCssVar('disabled-border-color'),
    'text-color': getCssVar('disabled-text-color'),
    'placeholder-color': getCssVar('text-color-placeholder'),
  },
  _$input_disabled
);

export let _$input_font_size = {}; // !default;
export let $input_font_size = map.merge(
  {
    'large': `14px`,
    'default': `14px`,
    'small': `12px`,
  },
  _$input_font_size
);

export let _$input_height = {}; // !default;
export let $input_height = map.merge($common_component_size, _$input_height);

export let _$input_line_height = {}; // !default;
export let $input_line_height = map.merge($common_component_size, _$input_line_height);

export let _$input_number_width = {}; // !default;
export let $input_number_width = map.merge(
  {
    'large': `180px`,
    'default': `150px`,
    'small': `120px`,
  },
  _$input_number_width
);

export let _$input_padding_horizontal = {}; // !default;
export let $input_padding_horizontal = map.merge(
  {
    'large': `16px`,
    'default': `12px`,
    'small': `8px`,
  },
  _$input_padding_horizontal
);

// Cascader
// css3 var in packages/theme-chalk/src/cascader.scss
export let _$cascader = {}; // !default;
export let $cascader = map.merge(
  {
    'menu-text-color': getCssVar('text-color-regular'),
    'menu-selected-text-color': getCssVar('color-primary'),
    'menu-fill': getCssVar('bg-color', 'overlay'),
    'menu-font-size': getCssVar('font-size-base'),
    'menu-radius': getCssVar('border-radius-base'),
    'menu-border': `solid 1px ${getCssVar('border-color-light')}`,
    'menu-shadow': getCssVar('box-shadow-light'),
    'node-background-hover': getCssVar('fill-color', 'light'),
    'node-color-disabled': getCssVar('text-color-placeholder'),
    'color-empty': getCssVar('text-color-placeholder'),
    'tag-background': getCssVar('fill-color'),
  },
  _$cascader
);

// Button
// css3 var in packages/theme-chalk/src/button.scss
export let _$button = {}; // !default;
export let $button = map.merge(
  {
    'font-weight': getCssVar('font-weight-primary'),
    'border-color': getCssVar('border-color'),
    'bg-color': getCssVar('fill-color', 'blank'),
    'text-color': getCssVar('text-color', 'regular'),
    'disabled-text-color': getCssVar('disabled-text-color'),
    'disabled-bg-color': getCssVar('fill-color', 'blank'),
    'disabled-border-color': getCssVar('border-color-light'),
    'divide-border-color': rgba($color - white, 0.5),
    'hover-text-color': getCssVar('color-primary'),
    'hover-bg-color': getCssVar('color-primary', 'light-9'),
    'hover-border-color': getCssVar('color-primary-light-7'),
    'active-text-color': getCssVar('button-hover-text-color'),
    'active-border-color': getCssVar('color-primary'),
    'active-bg-color': getCssVar('button', 'hover-bg-color'),
    'outline-color': getCssVar('color-primary', 'light-5'),
    'hover-link_text_color': getCssVar('color-info'),
    'active-color': getCssVar('text-color', 'primary'),
  },
  _$button
);

export let $button_border_width = $border_width; // !default;

// need mix, so do not use css var
let $button_hover_tint_percent = `20%`;
let $button_active_shade_percent = `10%`;

export let _$button_border_color = {}; // !default;
export let _$button_bg_color = {}; // !default;
export let _$button_text_color = {}; // !default;

for (const $type of $types) {
  window.$button_border_color = map.merge(
    {
      [$type]: map.get($colors, $type, 'base'),
    },
    window.$button_border_color
  );

  window.$button_bg_color = map.merge(
    {
      [$type]: map.get($colors, $type, 'base'),
    },
    window.$button_bg_color
  );
}

export let _$button_font_size = {}; // !default;
export let $button_font_size = map.merge(
  {
    'large': getCssVar('font-size', 'base'),
    'default': getCssVar('font-size', 'base'),
    'small': `12px`,
  },
  _$button_font_size
);

export let _$button_border_radius = {}; // !default;
export let $button_border_radius = map.merge(
  {
    'large': getCssVar('border-radius', 'base'),
    'default': getCssVar('border-radius', 'base'),
    'small': `calc(${getCssVar('border-radius', 'base')} - 1px)`,
  },
  _$button_border_radius
);

export let _$button_padding_vertical = {}; // !default;
export let $button_padding_vertical = map.merge(
  {
    'large': `13px`,
    'default': `9px`,
    'small': `6px`,
  },
  _$button_padding_vertical
);

export let _$button_padding_horizontal = {}; // !default;
export let $button_padding_horizontal = map.merge(
  {
    'large': `20px`,
    'default': `16px`,
    'small': `12px`,
  },
  _$button_padding_horizontal
);

// Switch
// css3 var in packages/theme-chalk/src/switch.scss
export let _$switch = {}; // !default;
export let $switch = map.merge(
  {
    'on-color': getCssVar('color-primary'),
    'off-color': getCssVar('border-color'),
  },
  _$switch
);

// Dialog
// css3 var in packages/theme-chalk/src/dialog.scss
export let _$dialog = {}; // !default;
export let $dialog = map.merge(
  {
    'width': `50%`,
    'margin-top': `15vh`,
    'bg-color': getCssVar('bg-color'),
    'box-shadow': getCssVar('box-shadow'),
    'title-font-size': getCssVar('font-size-large'),
    'content-font-size': `14px`,
    'font-line-height': getCssVar('font-line-height-primary'),
    'padding-primary': `20px`,
    'border-radius': getCssVar('border-radius-small'),
  },
  _$dialog
);

// Table
// css3 var in packages/theme-chalk/src/table.scss
export let _$table = {}; // !default;
export let $table = map.merge(
  {
    'border-color': getCssVar('border-color-lighter'),
    'border': `1px solid ${getCssVar('table-border-color')}`,
    'text-color': getCssVar('text-color-regular'),
    'header-text-color': getCssVar('text-color-secondary'),
    'row-hover-bg-color': getCssVar('fill-color', 'light'),
    'current-row-bg-color': getCssVar('color-primary-light-9'),
    'header-bg-color': getCssVar('bg-color'),
    'fixed-box-shadow': getCssVar('box-shadow', 'light'),
    'bg-color': getCssVar('fill-color', 'blank'),
    'tr-bg-color': getCssVar('fill-color', 'blank'),
    'expanded-cell-bg-color': getCssVar('fill-color', 'blank'),
    'fixed-left-column': `inset 10px 0 10px -10px rgb(0 0 0 / 15%)`,
    'fixed-right-column': `inset -10px 0 10px -10px rgb(0 0 0 / 15%)`,
  },
  _$table
);

export let _$table_font_size = {}; // !default;
export let $table_font_size = map.merge(
  {
    'large': getCssVar('font-size', 'base'),
    'default': `14px`,
    'small': `12px`,
  },
  _$table_font_size
);

export let _$table_padding = {}; // !default;
export let $table_padding = map.merge(
  {
    'large': `12px 0`,
    'default': `8px 0`,
    'small': `4px 0`,
  },
  _$table_padding
);

export let _$table_cell_padding = {}; // !default;
export let $table_cell_padding = map.merge(
  {
    'large': `0 16px`,
    'default': `0 12px`,
    'small': `0 8px`,
  },
  _$table_cell_padding
);

// Pagination
// css3 var in packages/theme-chalk/src/pagination.scss
export let _$pagination = {}; // !default;
export let $pagination = map.merge(
  {
    'font-size': `14px`,
    'bg-color': getCssVar('fill-color', 'blank'),
    'text-color': getCssVar('text-color-primary'),
    'border-radius': `3px`,
    'button-color': getCssVar('text-color-primary'),
    'button-width': `32px`,
    'button-height': `32px`,
    'button-disabled-color': getCssVar('text-color-placeholder'),
    'button-disabled-bg-color': getCssVar('fill-color', 'blank'),
    'button-bg-color': getCssVar('fill-color'),
    'hover-color': getCssVar('color-primary'),
    'height-extra-small': `24px`,
    'line-height-extra-small': getCssVar('pagination-height-extra-small'),
  },
  _$pagination
);

// Popup
// css3 var in packages/theme-chalk/src/popup.scss
export let _$popup = {}; // !default;
export let $popup = map.merge(
  {
    'modal-bg-color': getCssVar('color-black'),
    'modal-opacity': 0.5,
  },
  _$popup
);

// Popover
// css3 var in packages/theme-chalk/src/popover.scss
export let _$popover = {}; // !default;
export let $popover = map.merge(
  {
    'bg-color': getCssVar('bg-color', 'overlay'),
    'font-size': getCssVar('font-size-base'),
    'border-color': getCssVar('border-color-lighter'),
    'padding': `12px`,
    'padding-large': `18px 20px`,
    'title-font-size': `16px`,
    'title-text-color': getCssVar('text-color-primary'),
    'border-radius': `4px`,
  },
  _$popover
);

// popper
// Pay attention to the difference between 'popper' and 'popover'
export let _$popper = {}; // !default;
export let $popper = map.merge(
  {
    'border-radius': `var(${getCssVarName('popover-border-radius')}, 4px)`,
  },
  _$popper
);

// skeleton
export let _$skeleton = {}; // !default;
export let $skeleton = map.merge(
  {
    'color': getCssVar('fill-color'),
    'to-color': getCssVar('fill-color', 'darker'),
  },
  _$skeleton
);

// Tag
// css3 var in packages/theme-chalk/src/tag.scss
export let _$tag = {}; // !default;
export let $tag = map.merge(
  {
    'font-size': `12px`,
    'border-radius': `4px`,
    'border-radius-rounded': `9999px`,
  },
  _$tag
);

export let _$tag_height = {}; // !default;
export let $tag_height = map.merge(
  {
    'large': `32px`,
    'default': `24px`,
    'small': `20px`,
  },
  _$tag_height
);

export let _$tag_padding = {}; // !default;
export let $tag_padding = map.merge(
  {
    'large': `12px`,
    'default': `10px`,
    'small': `8px`,
  },
  _$tag_padding
);

export let _$tag_icon_size = {}; // !default;
export let $tag_icon_size = map.merge(
  {
    'large': `16px`,
    'default': `14px`,
    'small': `12px`,
  },
  _$tag_icon_size
);

// Tree
// css3 var in packages/theme-chalk/src/tree.scss
export let _$tree = {}; // !default;
export let $tree = map.merge(
  {
    'node-hover-bg-color': getCssVar('fill-color', 'light'),
    'text-color': getCssVar('text-color-regular'),
    'expand-icon-color': getCssVar('text-color-placeholder'),
  },
  _$tree
);

// Dropdown
export let _$dropdown = {}; // !default;
export let $dropdown = map.merge(
  {
    'menu-box-shadow': getCssVar('box-shadow-light'),
    'menuItem-hover-fill': getCssVar('color-primary-light-9'),
    'menuItem-hover-color': getCssVar('color-primary'),
    'menu-index': 10,
  },
  _$dropdown
);

// drawer
export let _$drawer = {}; // !default;
export let $drawer = map.merge(
  {
    'bg-color': `var(${getCssVarName('dialog', 'bg-color')}, ${getCssVar('bg-color')})`,
    'padding-primary': `var(${getCssVarName('dialog', 'padding-primary')}, 20px)`,
  },
  _$drawer
);

// Badge
// css3 var in packages/theme-chalk/src/badge.scss
export let _$badge = {}; // !default;
export let $badge = map.merge(
  {
    'bg-color': getCssVar('color-danger'),
    'radius': `10px`,
    'font-size': `12px`,
    'padding': `6px`,
    'size': `18px`,
  },
  _$badge
);

// Card
export let _$card = {}; // !default;
export let $card = map.merge(
  {
    'border-color': getCssVar('border-color', 'light'),
    'border-radius': `4px`,
    'padding': `20px`,
    'bg-color': getCssVar('fill-color', 'blank'),
  },
  _$card
);

// Slider
// css3 var in packages/theme-chalk/src/slider.scss
export let _$slider = {}; // !default;
export let $slider = map.merge(
  {
    'main-bg-color': getCssVar('color-primary'),
    'runway-bg-color': getCssVar('border-color-light'),
    'stop-bg-color': getCssVar('color-white'),
    'disabled-color': getCssVar('text-color-placeholder'),
    'border-radius': `3px`,
    'height': `6px`,
    'button-size': `20px`,
    'button-wrapper-size': `36px`,
    'button-wrapper-offset': `-15px`,
  },
  _$slider
);

// Menu
// css3 var in packages/theme-chalk/src/menu.scss
export let _$menu = {}; // !default;
export let $menu = map.merge(
  {
    'active-color': getCssVar('color-primary'),
    'text-color': getCssVar('text-color-primary'),
    'hover-text-color': getCssVar('color-primary'),
    'bg-color': getCssVar('fill-color', 'blank'),
    'hover-bg-color': getCssVar('color-primary-light-9'),
    'item-height': `56px`,
    'sub-item-height': `calc(${getCssVar('menu-item-height')} - 6px)`,
    'horizontal-sub-item-height': `36px`,
    'item-font-size': getCssVar('font-size-base'),
    'item-hover-fill': getCssVar('color-primary-light-9'),
    'border-color': getCssVar('border-color'),
    'base-level-padding': `20px`,
    'level-padding': `20px`,
    'icon-width': `24px`,
  },
  _$menu
);

// Rate
export let _$rate = {}; // !default;
export let $rate = map.merge(
  {
    'height': `20px`,
    'font-size': getCssVar('font-size-base'),
    'icon-size': `18px`,
    'icon-margin': `6px`,
    // seems not be used, to be removed
    // 'icon-color': getCssVar('text-color-placeholder),
    'void-color': getCssVar('border-color', 'darker'),
    'fill-color': `#f7ba2a`,
    'disabled-void-color': getCssVar('fill-color'),
    'text-color': getCssVar('text-color', 'primary'),
  },
  _$rate
);

// DatePicker
// css3 var packages/theme-chalk/src/date-picker/var.scss
export let _$datepicker = {}; // !default;
export let $datepicker = map.merge(
  {
    'text-color': getCssVar('text-color-regular'),
    'off-text-color': getCssVar('text-color-placeholder'),
    'header-text-color': getCssVar('text-color-regular'),
    'icon-color': getCssVar('text-color-primary'),
    'border-color': getCssVar('disabled-border-color'),
    'inner-border-color': getCssVar('border-color-light'),
    'inrange-bg-color': getCssVar('border-color-extra-light'),
    'inrange-hover-bg-color': getCssVar('border-color-extra-light'),
    'active-color': getCssVar('color-primary'),
    'hover-text-color': getCssVar('color-primary'),
  },
  _$datepicker
);

export let _$date_editor = {}; // !default;
export let $date_editor = map.merge(
  {
    'width': `220px`,
    'monthrange-width': `300px`,
    'daterange-width': `350px`,
    'datetimerange-width': `400px`,
  },
  _$date_editor
);

// Loading
// css3 var in packages/theme-chalk/src/loading.scss
export let _$loading = {}; // !default;
export let $loading = map.merge(
  {
    'spinner-size': `42px`,
    'fullscreen-spinner-size': `50px`,
  },
  _$loading
);

// Scrollbar
// css3 var in packages/theme-chalk/src/scrollbar.scss
export let _$scrollbar = {}; // !default;
export let $scrollbar = map.merge(
  {
    'opacity': 0.3,
    'bg-color': getCssVar('text-color-secondary'),
    'hover-opacity': 0.5,
    'hover-bg-color': getCssVar('text-color-secondary'),
  },
  _$scrollbar
);

// Carousel
// css3 var in packages/theme-chalk/src/carousel.scss
export let _$carousel = {}; // !default;
export let $carousel = map.merge(
  {
    'arrow-font-size': `12px`,
    'arrow-size': `36px`,
    'arrow-background': rgba(31, 45, 61, 0.11),
    'arrow-hover-background': rgba(31, 45, 61, 0.23),
    'indicator-width': `30px`,
    'indicator-height': `2px`,
    'indicator-padding-horizontal': `4px`,
    'indicator-padding-vertical': `12px`,
    'indicator-out-color': getCssVar('border-color-hover'),
  },
  _$carousel
);

// Collapse
// css3 var in packages/theme-chalk/src/collapse.scss
export let _$collapse = {}; // !default;
export let $collapse = map.merge(
  {
    'border-color': getCssVar('border-color-lighter'),
    'header-height': `48px`,
    'header-bg-color': getCssVar('fill-color', 'blank'),
    'header-text-color': getCssVar('text-color-primary'),
    'header-font-size': `13px`,
    'content-bg-color': getCssVar('fill-color', 'blank'),
    'content-font-size': `13px`,
    'content-text-color': getCssVar('text-color-primary'),
  },
  _$collapse
);

// Transfer
// css3 var in packages/theme-chalk/src/transfer.scss
export let _$transfer = {}; // !default;
export let $transfer = map.merge(
  {
    'border-color': getCssVar('border-color-lighter'),
    'border-radius': getCssVar('border-radius-base'),
    'panel-width': `200px`,
    'panel-header-height': `40px`,
    'panel-header-bg-color': getCssVar('fill-color', 'light'),
    'panel-footer-height': `40px`,
    'panel-body-height': `278px`,
    'item-height': `30px`,
    'filter-height': `32px`,
  },
  _$transfer
);

// Timeline
// css3 var in packages/theme-chalk/src/timeline-item.scss
export let _$timeline = {}; // !default;
export let $timeline = map.merge(
  {
    'node-size-normal': `12px`,
    'node-size-large': `14px`,
    'node-color': getCssVar('border-color-light'),
  },
  _$timeline
);

// Tabs
// css3 var in packages/theme-chalk/src/tabs.scss
export let _$tabs = {}; // !default;
export let $tabs = map.merge(
  {
    'header-height': `40px`,
  },
  _$tabs
);

// Backtop
// css3 var in packages/theme-chalk/src/backtop.scss
export let _$backtop = {}; // !default;
export let $backtop = map.merge(
  {
    'bg-color': getCssVar('bg-color', 'overlay'),
    'text-color': getCssVar('color-primary'),
    'hover-bg-color': getCssVar('border-color-extra-light'),
  },
  _$backtop
);

// Link
// css3 var in packages/theme-chalk/src/link.scss
export let _$link = {}; // !default;
export let $link = map.merge(
  {
    'font-size': getCssVar('font-size-base'),
    'font-weight': getCssVar('font-weight-primary'),
    'text-color': getCssVar('text-color-regular'),
    'hover-text-color': getCssVar('color-primary'),
    'disabled-text-color': getCssVar('text-color-placeholder'),
  },
  _$link
);

export let _$link_text_color = {}; // !default;

for (const $type of $types) {
  window.$link_text_color = map.merge(window.$link_text_color, {
    [$type]: map.get($colors, $type, 'base'),
  });
}

// Calendar
// css3 var in packages/theme-chalk/src/calendar.scss
export let _$calendar = {}; // !default;
export let $calendar = map.merge(
  {
    'border': `var(
        ${getCssVarName('table-border')},
        1px solid #{getCssVar('border-color-lighter')}
      )`,
    'header-border-bottom': getCssVar('calendar-border'),
    'selected-bg-color': getCssVar('color', 'primary', 'light-9'),
    'cell-width': `85px`,
  },
  _$calendar
);

// Form
// css3 var in packages/theme-chalk/src/form.scss
export let _$form = {}; // !default;
export let $form = map.merge(
  {
    'label-font-size': getCssVar('font-size-base'),
  },
  _$form
);

// Avatar
// css3 var in packages/theme-chalk/src/avatar.scss
export let _$avatar = {}; // !default;
export let $avatar = map.merge(
  {
    'text-color': getCssVar('color-white'),
    'bg-color': getCssVar('text-color', 'disabled'),
    'text-size': `14px`,
    'icon-size': `18px`,
    'border-radius': getCssVar('border-radius-base'),
  },
  _$avatar
);

export let _$avatar_size = {}; // !default;
export let $avatar_size = map.merge(
  {
    'large': `56px`,
    'default': `40px`,
    'small': `24px`,
  },
  _$avatar_size
);

// Empty
// css3 var in packages/theme-chalk/src/empty.scss
export let _$empty = {}; // !default;
export let $empty = map.merge(
  {
    'padding': `40px 0`,
    'image-width': `160px`,
    'description-margin-top': `20px`,
    'bottom-margin-top': `20px`,
    'fill-color-0': getCssVar('color-white'),
    'fill-color-1': `#fcfcfd`,
    'fill-color-2': `#f8f9fb`,
    'fill-color-3': `#f7f8fc`,
    'fill-color-4': `#eeeff3`,
    'fill-color-5': `#edeef2`,
    'fill-color-6': `#e9ebef`,
    'fill-color-7': `#e5e7e9`,
    'fill-color-8': `#e0e3e9`,
    'fill-color-9': `#d5d7de`,
  },
  _$empty
);

// Descriptions
// css3 var in packages/theme-chalk/src/descriptions.scss
export let _$descriptions = {}; // !default;
export let $descriptions = map.merge(
  {
    'table-border': `1px solid getCssVar('border-color-lighter')`,
    'item-bordered-label-background': getCssVar('fill-color', 'light'),
  },
  _$descriptions
);

// Result
// css3 var in packages/theme-chalk/src/result.scss
export let _$result = {}; // !default;
export let $result = map.merge(
  {
    'padding': `40px 30px`,
    'icon-font-size': `64px`,
    'title-font-size': `20px`,
    'title-margin-top': `20px`,
    'subtitle-margin-top': `10px`,
    'extra-margin-top': `30px`,
  },
  _$result
);

// Upload
// css3 var in packages/theme-chalk/src/upload.scss
export let _$upload = {}; // !default;
export let $upload = map.merge(
  {
    'dragger-padding-horizontal': `40px`,
    'dragger-padding-vertical': `10px`,
  },
  _$upload
);

// transition
export let _$transition = {}; // !default;
export let $transition = map.merge(
  {
    'all': `all getCssVar('transition-duration')
      getCssVar('transition-function-ease-in-out-bezier')`,
    'fade': `opacity getCssVar('transition-duration')
      getCssVar('transition-function-fast-bezier')`,
    'md-fade': {
      transform: `getCssVar('transition-duration')
        getCssVar('transition-function-fast-bezier')`,
      opacity: `getCssVar('transition-duration')
        getCssVar('transition-function-fast-bezier')`,
    },
    'fade-linear': `opacity getCssVar('transition-duration-fast') linear`,
    'border': `border-color getCssVar('transition-duration-fast')
      getCssVar('transition-function-ease-in-out-bezier')`,
    'box-shadow': `box-shadow getCssVar('transition-duration-fast')
      getCssVar('transition-function-ease-in-out-bezier')`,
    'color': `color getCssVar('transition-duration-fast')
      getCssVar('transition-function-ease-in-out-bezier')`,
  },
  _$transition
);

export let _$transition_duration = {}; // !default;
export let $transition_duration = map.merge(
  {
    '': `0.3s`,
    'fast': `0.2s`,
  },
  _$transition_duration
);

export let _$transition_function = {}; // !default;
export let $transition_function = map.merge(
  {
    'ease-in-out-bezier': cubic - bezier(0.645, 0.045, 0.355, 1),
    'fast-bezier': cubic - bezier(0.23, 1, 0.32, 1),
  },
  $transition_function
);

// header
export let $header = {}; // !default;
export let _$header = map.merge(
  {
    'padding': `0 20px`,
    'height': `60px`,
  },
  _$header
);

// main
export let _$main = {}; // !default;
export let $main = map.merge(
  {
    'padding': `20px`,
  },
  _$main
);
// footer
export let _$footer = {}; // !default;
export let $footer = map.merge(
  {
    'padding': `0 20px`,
    'height': `60px`,
  },
  _$footer
);

// Break-point
export let $sm = `768px`; // !default;
export let $md = `992px`; // !default;
export let $lg = `1200px`; // !default;
export let $xl = `1920px`; // !default;

export let $breakpoints = {
  'xs': '(max-width: #{$sm})',
  'sm': '(min-width: #{$sm})',
  'md': '(min-width: #{$md})',
  'lg': '(min-width: #{$lg})',
  'xl': '(min-width: #{$xl})',
}; // !default;

export let $breakpoints_spec = {
  'xs-only': '(max-width: #{$sm - 1})',
  'sm-and-up': '(min-width: #{$sm})',
  'sm-only': '(min-width: #{$sm}) and (max-width: #{$md - 1})',
  'sm-and-down': '(max-width: #{$md - 1})',
  'md-and-up': '(min-width: #{$md})',
  'md-only': '(min-width: #{$md}) and (max-width: #{$lg - 1})',
  'md-and-down': '(max-width: #{$lg - 1})',
  'lg-and-up': '(min-width: #{$lg})',
  'lg-only': '(min-width: #{$lg}) and (max-width: #{$xl - 1})',
  'lg-and-down': '(max-width: #{$xl - 1})',
  'xl-only': '(min-width: #{$xl})',
}; // !default;
