<template lang="pug">
.py-4
  h2.title.is-capitalized.has-text-weight-light.pb-2.mb-0 {{ title }}
  .border-under
</template>

<script>
export default {
  props: {
    title: {
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
    onScroll() {
      const targets = document.querySelectorAll('.border-under')
      const offset = 0
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
@keyframes drawLine
  0%
    width: 0
  100%
    width: 100%

.is-animated
  height: 1px
  width: 0
  margin-top: -1px
  animation: drawLine 1s ease .5s forwards
  background-color: #aaa
</style>
