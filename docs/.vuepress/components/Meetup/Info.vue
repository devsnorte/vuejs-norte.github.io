<template>
  <div>
    <span v-html="info.description"></span>
    <p>{{info.members}} membros</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: [],
  mounted() {
    axios.get('https://vuejs-back-api.herokuapp.com/meetup/')
    .then(response => {
      this.info = response.data
    })
  },
  data() {
    return {
      info: []
    }
  },
  methods: {}
}
</script>
