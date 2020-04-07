<template>
    <a class="btn btn-link d-block">
      <slot />
    </a>
</template>

<script>
export default {
  name: 'BtnLg'
};
</script>

<style lang="stylus" scoped>

  $color-primary = #43a16f
  $color-dark = #35495e
  $color-light = #fafafa

  .btn
    display inline-block
    font-weight bold
    color $$color-primary
    text-align center
    vertical-align middle
    cursor pointer
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
    user-select none
    background-color transparent
    border 1px solid transparent
    padding 0.375rem 0.75rem
    font-size 1rem
    line-height 1.5
    border-radius .5rem !important
    transition color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
  &.btn-link
    color: $color-light
    background-color: $color-primary
    border-width: 2px
    margin-bottom: 1rem
    font-weight: bold
    border-color: $color-dark !important
    transition: all 0.2s ease-in-out
    &:hover
      background: transparent
      color: $color-primary
      text-decoration: none !important
    &:nth-last-child(1)
      margin-bottom: 0
    ::selection
      background: $color-primary
    ::-moz-selection
      background: $color-primary

  .d-block
    display block

</style>