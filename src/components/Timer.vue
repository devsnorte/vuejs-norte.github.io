<template>
  <span>{{ timeLeft }}</span>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br'
import ClockMixin from './ClockMixin.vue'

export default {
  name: 'Timer',
  mixins: [ClockMixin],
  props: {
    target: {
      type: Date,
      required: true
    }
  },
  computed: {
    timeLeft () {
      return moment(this.now).to(this.target)
    }
  }
}
</script>

<style>

</style>
