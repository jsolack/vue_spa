<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{main_title}}
        </h1>
        <h2 class="subtitle">
          {{main_subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      main_title: 'Data Tools',
      main_subtitle: 'Check it out'
    }
  }
}
</script>
