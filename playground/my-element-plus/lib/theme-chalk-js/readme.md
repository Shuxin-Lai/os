---
highlight: qtcreator_light
theme: smartblue
---

# 一文看懂 !default 和 !global

在看 element-plus 源码的时候，是不是有很多小伙伴跟我一样对 scss 中的 !default 和 !global 很疑惑？本文将用示例和简单的 js 告诉你
!default 和 !global 的作用。

## !default

> 可以在变量的结尾添加 !default 给一个未通过 !default 声明赋值的变量赋值，此时，如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值[1]。

```scss
$text-color: red;
$text-color: blue !default;

.block {
  color: $text-color;
}

// 编译后的结果：
// .block {
//   color: red;
// }
```

用简单的 js 表示如下：

```js
// $text-color: blue !default;
var $text_color = window.$text_color || `blue`;
```

## !global

在早期的 sass 版本中，变量只有全局作用域的，在块中声明的变量会覆盖全局变量：

```scss
// sass 3.2 及以下版本
// I instantiated the $text-color variable to Blue
$text-color: blue;

// Here, the intent was to change the color for the .error style
.error {
  $text-color: red;
  color: $text-color;
}

// Following the cascade, in .normal-text, I want Blue, but get Red.
.normal-text {
  color: $text-color;
}

// 编译后的结果：
// .error {
//   color: red;
// }

// .normal-text {
//   color: red;
// }
```

我们用 js 来表示这种行为：

```javascript
// 3.2 及以下版本
var $text_color = `blue`;

// .error
{
  $text_color = `red`; // 直接修改全局变量
  $color = $text_color;
}

// .normal_text
{
  $color = $text_color;
}
```

显然局部变量会作用到全局变量是非常危险的，在 sass 3.2 以上版本开始**不再**支持局部变量作用到全局变量。例如：

```scss
// sass 3.3 及以上版本
$text-color: blue;

.error {
  $text-color: red; // This is now a new local scoped variable
  color: $text-color;
}

.normal-text {
  color: $text-color;
}

// 编译后的结果：
// .error {
//   color: red;
// }

// .normal-text {
//   color: blue;
// }
```

同样，我们用 js 表示上面的行为：

```javascript
var $text_color = `blue`;

// .error
{
  var $text_color = `red`; // 重新声明变量
  var $color = $text_color;
}

// normal_text
{
  var $color = $text_color;
}
```

如果我们想要在**块作用域**修改全局变量那应该怎么做？
那就需要用到 !global 修饰符。简单来说，

> 变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 !global 声明[1]。

还是用上面的示例：

```scss
// sass 3.3 及以上版本
$text-color: blue;

.error {
  $text-color: red !global;
  color: $text-color;
}

.normal-text {
  color: $text-color;
}

// 编译后的结果
// .error {
//   color: red;
// }

// .normal-text {
//   color: red;
// }
```

从编译后的结果来看，normal-text 的 color 被修改成 red，说明在 error 使用 !global 修改变量会作用到全局。

接下我们用 js 表示：

```javascript
var $text_color = `blue`;

// .error
{
  var $text_color = `red`; // !global

  if (window.$text_color != null) {
    window.$text_color = `red`;
  }

  var $color = $text_color;
}

// normal_text
{
  var $color = $text_color;
}
```

## 总结

```javascript
// !default
var $variable = window.$variable || `value`;

// !global
var $variable = `value`;
if (window.$variable != null) {
  window.$variable = $variable;
}
```

# 附录

## 参考文章

[1]: [sass 中文文档](https://www.sass.hk/docs/)

[2]: [the !default and !global flags](https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/content/handy-tools/default-flag.html)
