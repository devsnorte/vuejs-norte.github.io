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
    },
    showNegative: Boolean
  },
  computed: {
    agora () {
      return this.now
    },
    timeLeft () {
      const time = moment(this.now).to(this.target)
      if (time < 0) {
        return this.negative ? time : moment().fromNow()
      }
      return time
    },
    countdownTime () {
      const duration = moment(this.target).diff(this.now)
      const diffDuration = duration < 0 ? this.negative ? duration : 0 : duration
      const diff = moment.duration(diffDuration)
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
