<template>
  <ul class="member-list__ul">
    <template v-for="member in orderedList">
      <member-profile :member="member" :key="member.id"/>
    </template>
  </ul>
</template>

<script>
import MemberProfile from './MemberProfile'

export default {
  name: 'MemberList',
  components: { MemberProfile },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    orderedList: function () {
      const isOrganizer = obj => (obj.group_profile.role || '')
        .indexOf('organizer') > -1
      return this.list
        .slice(0)
        .sort((a, b) =>
          !isOrganizer(a) && isOrganizer(b)
            ? 1
            : isOrganizer(a) && !isOrganizer(b)
              ? -1
              : !a.photo && b.photo
                ? 1
                : a.photo && !b.photo
                  ? -1
                  : a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    }
  }
}
</script>

<style>
.member-list__ul {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
