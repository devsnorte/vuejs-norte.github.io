<template>
  <li class="li">
    <div class="top">
      <q-img
        contain
        class="avatar-img"
        v-if="member.photo"
        :alt="`Avatar de ${member.name}`"
        :src="member.photo.photo_link"
      />
      <q-img
        class="avatar-img"
        v-if="!member.photo"
        src=""
      />
    </div>
    <div class="content">
      <div class="name">
        <h3>{{ member.name }}</h3>
      </div>
      <div class="sub">
        <p class="bio">
          {{ member.group_profile.intro || member.bio }}
        </p>
        <p class="location">
          <q-icon name="location" />
          <span>
            {{ member.city }} ({{ member.localized_country_name }})
          </span>
        </p>
        <p class="since">
          Entrou em {{ formatDate(member.group_profile.created || member.joined) }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
import moment from 'moment'

import { QImg } from 'quasar'
export default {
  name: 'MemberProfile',
  components: { QImg },
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    formatDate: rawDate => moment(rawDate).format('L')
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.2em;
  width: 16em;
  max-width: 100%;
  .top {
    display: flex;
    justify-content: center;
    .avatar-img {
      width: 128px;
      height: 128px;
      max-width: 100%;
      border-radius: 50%;
    }
  }
  .content {
    margin: 0;
    padding: 0;
    .name {
      h3 {
        font-size: 1.8em;
        text-transform: capitalize;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
