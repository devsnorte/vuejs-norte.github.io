<script>
const validation = validator => msg => val => validator(val) || msg
export default {
  name: 'UtilsMixin',
  methods: {
    sortBy: prop => (a, b) => a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0,
    validateName: validation(v => !!v && typeof v === 'string' && v.split(' ').length > 1),
    validateNumber: validation(v => v !== undefined && v !== null && typeof v === 'number')
  }
}
</script>
