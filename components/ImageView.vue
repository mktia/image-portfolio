<template lang="pug">
a.subtitle.mb-0(
  :href='`/images/${link}`',
  :style='{backgroundImage: `url(/images/${link}-shrink/${image})`}'
) 
  p.img-title.is-capitalized {{ convert(link) }}
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    convert(link) {
      return link.replace(/-/g, ' ')
    },
    onScroll() {
      const targets = document.querySelectorAll('.subtitle')
      const offset = window.innerHeight * 0.25
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      for (const target of targets) {
        const position = target.getBoundingClientRect().top + scrollY
        if (scrollY > position - windowHeight + offset) {
          target.classList.add('is-animated')
        }
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@keyframes blindOut
  0%
    background: white
    width: 320px
  100%
    background: white
    width: 0

a
  display: block
  position: relative
  background-position: center
  background-size: cover
  height: calc(320px * 3/4)
  width: 320px

  &::before
    content: ''
    height: 240px
    width: 320px
    display: block
    background: white

.img-title
  position: absolute
  bottom: 0
  width: 320px
  color: white
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5))
  font-size: .9rem
  padding-top: .3rem
  padding-bottom: .3rem
  padding-left: .3rem

.is-animated
  &::before
    content: ''
    height: 240px
    width: 320px
    display: block
    animation: blindOut .5s ease .2s forwards
</style>
