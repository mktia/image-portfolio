<template lang="pug">
header.header
  .container.is-flex.is-justify-content-space-between.is-align-items-center.px-2
    .icon
    h1.is-capitalized(@click='openTopPage') {{ title }}
    .icon(@click='openMenu(componentName)')
      font-awesome-icon(:icon='["fas", rightIcon]')
</template>

<script>
export default {
  props: {
    componentName: {
      type: String,
      default: '',
    },
    rightIcon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    openMenu(name) {
      if (name === 'back') {
        this.$router.go(-1)
      } else {
        this.$router.push({ name })
      }
    },
    openTopPage() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  position: fixed
  width: 100vw
  background-color: transparent
  z-index: 1000

  & > div
    height: 3.2rem

  h1
    font-size: 1.6rem
    font-weight: 200

  .icon
    font-size: 1.4rem
</style>
