<template>
  <datetime 
    :class="`formulate-input-element formulate-input-element--${context.type}`"
    :data-type="context.type"
    v-model="context.model"
    v-bind="context.attributes"
    :type="context.attributes.datetype"
    />
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
  components: {
    'datetime': Datetime,
  },
  props: {
    context: {
      type: Object,
      required: true
    },
  },
}
</script>