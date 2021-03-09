# Introduction

Vue Formulate Datetime is a [Vue Formulate][1] plugin that provides the
[vue-datetime][2] UI into a `FormulateInput`.

# Installation

## NPM
```sh
npm install vue-formulate-datetime
```

## Add to Vue

As with any [Vue Formulate plugin][3]:

```javascript
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

import FormulateVueDatetimePlugin from '@cone2875/vue-formulate-datetime'

// !important
// Import the vue-datetime css
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(VueFormulate, {
    plugins: [ FormulateVueDatetimePlugin ]
})
```

# Usage

Use `vue-datetime` as the input `type`. `vue-datetime` uses the `type` prop
too, so we changed the name of this prop to `datetype`.

```html
<FormulateInput
    type="vue-datetime"
    datetype="datetime"
    />
```

It works as any other `FormulateInput`.

[1]: https://vueformulate.com
[2]: https://github.com/mariomka/vue-datetime
[3]: https://vueformulate.com/guide/plugins/