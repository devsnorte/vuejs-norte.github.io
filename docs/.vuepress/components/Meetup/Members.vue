<template>
  <div>
    <ul>
      <li v-for="(member, index) in members" class="member-li" :key="index">
        <a :href="member.group_profile.link" target="_blank">
          <img :src="member.photo.thumb_link" :title="member.name" class="member-img"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: [],
  mounted() {
    axios.get('https://vuejs-back-api.herokuapp.com/meetup/members')
    .then(response => {
      this.members = response.data
    })
    .catch(err => {
      console.error(err);
    })
  },
  data() {
    return {
      members: []
    }
  },
  methods: {}
}
</script>

<style>
  .member-li {
    display: inline;
    margin: 0.5em;
  }
  .member-img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 4px solid #41b883ff;
  }
</style>
