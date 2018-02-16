<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ card.title }}</h3>
      {{ card.content }}
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" v-bind:href="card.link" target="_blank">Read More</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>
