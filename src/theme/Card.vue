<template>
  <div class="card">
    <slot name="card-image"></slot>
    <div class="card-content">
      <slot name="card-title"></slot>
      <slot name="card-content"></slot>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" disabled v-bind:href="link" target="_blank">Read More</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['link']
}
</script>
<style scoped>
  .card {
    padding-bottom: 40px;
    height: 100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>

