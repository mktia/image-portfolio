<template lang="pug">
.contact
  header-bar(component-name='menu', right-icon='bars', title='portfolio')
  .is-flex.is-justify-content-center
    .form
      .field
        label.label Name
        .control
          input.input(type="text", placeholder="Your name")

      .field
        label.label Email
        .control.has-icon-left
          input.input(type='email', placeholder="example@email.com")

      .field
        label.label Message
        .control
          textarea.textarea(placeholder='enter some messages')

      .field
        .control
          label.checkbox
            input(type='checkbox')
            span.ml-2 I agree to the <a href="#">terms and conditions</a>

      .field
        .control
          button.button Submit

  footer-bar
</template>

<script>
export default {
  transition: {
    name: 'menu',
  },
}
</script>

<style lang="sass" scoped>
.form
  min-height: 85vh
  padding-top: 6rem

.menu-enter-active,
.menu-leave-active
  transition: opacity .5s

.menu-enter,
.menu-leave-to
  opacity: 0
</style>
