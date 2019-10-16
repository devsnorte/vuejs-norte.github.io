<template>
  <span>
    <span v-if="showDate === true">
      {{ targetDate }}
    </span>
    <span v-else>
      {{ timeLeft }}
    </span>
    <span v-if="countdown === true">
      ({{ countdownTime }})
    </span>
  </span>
</template>

<script>
import moment from 'moment'
import 'moment/locale/pt-br'
import ClockMixin from './ClockMixin.vue'

export default {
  name: 'Timer',
  mixins: [ClockMixin],
  props: {
    countdown: {
      type: Boolean,
      default: false
    },
    showDate: {
      type: Boolean,
      default: false
    },
    target: {
      type: Date,
      required: true
    }
  },
  computed: {
    agora () {
      return this.now
    },
    timeLeft () {
      return moment(this.now).to(this.target)
    },
    countdownTime () {
      const diff = moment.duration(moment(this.target).diff(this.now))
      const measures = [
        Math.floor(diff.asDays()),
        Math.floor(diff.asHours() % 24),
        Math.floor(diff.asMinutes() % 60),
        Math.floor(diff.asSeconds() % 60)
      ]
      const countdown = measures
        .map(value => Number(value).toString().padStart(2, 0))
        .join(':')
      return `${countdown}`.trim()
    },
    targetDate () {
      return moment(this.target).format('l')
    }
  }
}
</script>

<style>

</style>
