<template lang="pug">
.image-portfolio
	header-bar(component-name='menu', right-icon='bars', title='portfolio')
	.container
		viewer.viewer(:images='images')
			.is-flex.is-flex-wrap-wrap.is-justify-content-space-around
				.img-container.my-3(v-for='name in images')
					img.img(:src='`/images/${slug}-shrink/${name}`', :alt='name')
		.text(v-html='$md.render(content)')
	footer-bar
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import FILES from '@/dist/files.json'
import TEXT from '@/dist/text.json'

Vue.use(Viewer, {
  defaultOptions: {
    toolbar: {
      zoomIn: 2,
      zoomOut: 2,
      oneToOne: 2,
      reset: 2,
      prev: 1,
      play: {
        show: 1,
        size: 'large',
      },
      next: 1,
      rotateLeft: 2,
      rotateRight: 2,
      flipHorizontal: 2,
      flipVertical: 2,
    },
    url(image) {
      return image.src.replace('-shrink', '')
    },
  },
})

export default {
  transition: {
    name: 'menu',
  },
  computed: {
    content() {
      return TEXT[this.slug]
    },
    images() {
      return FILES[this.slug]
    },
    slug() {
      return this.$route.params.image
    },
  },
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/main.sass'

.img
  height: 100%
  width: 100%
  object-fit: cover

.img-container
  height: 200px
  width: 200px

.menu-enter-active,
.menu-leave-active
  transition: opacity .5s

.menu-enter,
.menu-leave-to
  opacity: 0

.text
  border-bottom: solid 1px #333
  padding-top: 3rem
  padding-bottom: 1rem
  margin-bottom: 2rem
  margin-left: 1rem
  margin-right: 1rem

  & ::v-deep p
    font-family: $mincho
    line-height: 2
    text-align: justify

  & ::v-deep h2
    color: white
    font-size: 1.2rem
    background-color: #333
    letter-spacing: .3rem
    line-height: 2.4
    margin-bottom: 1rem
    text-align: center
    text-transform: uppercase

.viewer
  // min-height: calc(100vh - 6rem)
  padding-top: 6rem

@media screen and (max-width: 425px)
  .img-container
    height: 100px
    width: 100px
</style>
