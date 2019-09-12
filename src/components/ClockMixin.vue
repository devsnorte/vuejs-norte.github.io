<script>
import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

export default {
  data () {
    return {
      now: new Date(),
      clockRef: null
    }
  },
  mounted () {
    this.setClock()
  },
  methods: {
    async setClock () {
      this.tick()
    },
    async tick () {
      this.now = new Date()
      this.clockRef = setTimeout(() => this.tick(), 1000)
    },
    timeUntil (targetDate) {
      return moment.duration(moment(this.targetDate).diff(this.now))
    }
  }
}
</script>

<style>

</style>
