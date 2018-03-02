<template>
  <div class="container">
    <div class="columns">
      <div v-if="contentLoaded && isAuthenticated" class="column is-9-mobile is-offset-2-mobile is-3-desktop is-6-tablet" v-for="card in cards" v-bind:key="card.id">
        <app-card v-bind:link="card.link">
            <div slot="card-image" class="card-image">
              <figure v-bind:class="['image', card.img_class]">
                <div v-images-loaded="loaded">
                  <transition name="fade">
                    <img v-show="imgFlag" v-bind:src="card.img" v-bind:alt="card.title">
                  </transition>  
                </div>
                  <img v-show="!imgFlag" src="/static/images/loading.gif" alt="loading..." />
              </figure>
            </div>
          <h3 slot="card-title">{{ card.title }}</h3>
          <p slot="card-content">{{ card.card_content }}</p>
        </app-card>
      </div>  
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue'
  import imagesLoaded from 'vue-images-loaded'
  import { mapGetters } from 'vuex'
  export default {
    directives: {
      imagesLoaded
    },
    components: {
      'app-card': Card
    },
    data () {
      return {
        contentLoaded: false,
        imgFlag: false
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated']),
      ...mapGetters('cardsModule', ['cards'])
    },
    methods: {
      loadCards () {
        this.imgFlag = false
        if (this.$route.params.id === 'data') {
          this.categoryId = 'data'
        } else {
          this.categoryId = 'automation'
        }
        this.$store.dispatch('cardsModule/updateCategory', this.categoryId)
          .then(() => {
            this.contentLoaded = true
          })
      },
      loaded (instance) {
        var self = this
        setTimeout(function () {
          self.imgFlag = true
        }, 800)
      }
    },
    watch: {
      '$route' (to, from) {
        // this.id = to.params.id
        this.loadCards()
      }
    },
    created () {
      this.$store.dispatch('initAuth')
        .then(() => {
          if (this.isAuthenticated) {
            this.loadCards()
          } else {
            this.$router.push({ name: 'login', query: { redirect: '/' } })
          }
        })
      // this is how you would grab vars from the query
      // this.$route.query.page returns the "page" var if valid 
      // console.log(this.$route.query.page)
    }
  }
</script>
