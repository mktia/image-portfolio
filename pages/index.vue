<template lang="pug">
.index-page
  header-bar(component-name='menu', right-icon='bars', title='portfolio')
  .top.mb-5
    div.is-flex.is-justify-content-center
      p.top__title
        span {{ title }}
    p.top__under.icon-text.is-flex.is-justify-content-center(@click='scroll')
      font-awesome-icon(:icon='["fas", "arrow-down"]')
      span.ml-3 detail
  #creator.container
    section-title(title='creator')
    .md-serif.py-6(v-html='profile')
  #works.container
    section-title(title='works')
    .is-flex.is-flex-wrap-wrap.is-justify-content-space-around
      .img-container.mx-3.my-4(v-for='link in links')
        image-view(:image='image(link)', :link='link')
        //- p {{ content(link) }}
  footer-bar
</template>

<script>
import FILES from '@/dist/files.json'
import TEXT from '@/dist/text.json'
import profile from '@/assets/markdown/creator.md'

export default {
  transition: {
    name: 'menu',
  },
  data() {
    return {
      scrollStyle: {},
      title: "It's my portfolio.",
    }
  },
  head: {
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  computed: {
    links() {
      return Object.keys(FILES).filter(/./.test.bind(/^(?!.*shrink).*$/))
    },
    profile() {
      return profile
    },
  },
  methods: {
    content(link) {
      const lines = TEXT[link].split(/\n/)
      return lines[lines.length - 1]
    },
    convert(link) {
      return link.replace(/-/g, ' ')
    },
    image(link) {
      return FILES[link][0]
    },
    scroll() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/main.sass'

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes slideIn
  0%
    opacity: 0
    transform: translateY(-10px)
  100%
    opacity: 1

@keyframes drawLine
  0%
    width: 0
  100%
    width: 100%

@keyframes zoom
  0%
    transform: scale(1.2)
  100%
    transform: scale(1)

html
  scroll-behavior: smooth !important

#creator,
#works
  min-height: 100vh

.img-container
  width: 320px

  a
    display: block
    position: relative
    background-position: center
    background-size: cover
    height: calc(320px * 3/4)
    width: 320px

  .img-title
    position: absolute
    bottom: 0
    width: 320px
    color: white
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))
    font-size: .9rem
    padding-top: .2rem
    padding-left: .2rem

.md-serif
  font-family: $mincho

  & ::v-deep p
    line-height: 2
    margin-bottom: 2rem
    text-align: justify

.menu-enter-active,
.menu-leave-active
  transition: opacity .5s

.menu-enter,
.menu-leave-to
  opacity: 0

.top
  position: relative
  min-height: 100vh
  background: linear-gradient(deepskyblue, white)
  padding-top: 35vh
  padding-left: 5%
  padding-right: 5%

  & > div
    animation: zoom 1s ease-out .5s forwards

  &__title
    color: white
    font-family: 'Homemade Apple', sans-serif
    font-size: 5rem
    margin-bottom: 4rem
    // margin-right: 1.5rem
    max-width: 800px
    animation: fadeIn 2s ease .5s forwards
    opacity: 0
    transform: rotate(-15deg)

  &__under
    position: absolute
    font-size: 2rem
    width: 300px
    bottom: 5rem
    left: calc((100% - 300px)/2)
    animation: slideIn 2s ease 2s forwards
    opacity: 0

    span
      font-weight: 200

@media screen and (max-width: 768px)
  #creator,
  #works
    padding-left: 1rem
    padding-right: 1rem

  .top
    padding-left: 0
    padding-right: 0

    &__title
      font-size: 3.8rem
      max-width: 300px

    &__under
      font-size: 1.6rem
      width: 150px
      left: calc((100% - 150px)/2)
</style>
