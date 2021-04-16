<template lang="pug">
.menu-page
  header-bar(component-name='back', right-icon='times')
  .menu-list.has-text-centered.is-flex.is-justify-content-center
    div
      h2.title.has-text-weight-light.is-capitalized menu
      ul
        li(v-for='route in routes')
          a.subtitle.is-capitalized(:href='`/${route}`') {{ route.replace('#', '') }}
  .social.is-flex.is-justify-content-center
    .is-flex.is-justify-content-space-around
      a(v-for='social in socials', :href='social.url')
        font-awesome-icon(:icon='social.icon')
</template>

<script>
export default {
  data() {
    return {
      routes: ['#creator', '#works', 'contact'],
      socials: [
        {
          icon: ['fab', 'twitter'],
          url: 'https://twitter.com/mktia',
        },
        {
          icon: ['fab', 'facebook-f'],
          url: 'https://www.facebook.com/',
        },
        {
          icon: ['fab', 'github'],
          url: 'https://github.com/mktia',
        },
        {
          icon: ['far', 'envelope'],
          url: 'mailto:contact@mktia.com',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.menu-list
  position: relative
  top: 6rem

  h2
    border-bottom: solid 1px #ddd

.social
  position: absolute
  width: 100%
  bottom: 4rem

  & > div
    width: 300px

  a
    font-size: 1.6rem

  svg
    *
      fill: black !important
</style>
