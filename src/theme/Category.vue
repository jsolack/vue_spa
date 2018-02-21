<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-mobile is-offset-2-mobile is-3-desktop is-6-tablet" v-for="(card, index) in cards" v-bind:key="card.id">
        <app-card v-bind:link="card.link">
            <div slot="card-image" class="card-image">
              <figure v-bind:class="['image', card.img_class]">
                <div v-images-loaded="loaded">
                  <transition name="fade">
                    <img v-show="imgFlag" v-bind:src="card.img" v-bind:alt="card.title">
                  </transition>  
                </div>
                  <img v-show="!imgFlag" src="/static/img/loading.gif" alt="loading..." />
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
  import appService from '../app.service.js'
  import imagesLoaded from 'vue-images-loaded'
  export default {
    directives: {
      imagesLoaded
    },
    components: {
      'app-card': Card
    },
    data () {
      return {
        id: this.$route.params.id,
        cards: [],
        imgFlag: false
      }
    },
    methods: {
      loadCards () {
        this.imgFlag = false
        let categoryId = 'data'
        if (this.id === 'data') {
          categoryId = 'data'
        } else {
          categoryId = 'automation'
        }
        appService.getCards(categoryId).then(data => {
          this.fixImgPath(data)
          this.imagesLoaded = true
        })
      },
      fixImgPath (data) {
        for (var i = 0; i < data.data.length; i++) {
          data.data[i]['img'] = data.imgPath + data.data[i]['img']
        }
        this.cards = data.data
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
        this.id = to.params.id
        this.loadCards()
      }
    },
    created () {
      this.loadCards()
      // this is how you would grab vars from the query
      // this.$route.query.page returns the "page" var if valid 
      console.log(this.$route.query.page)
    }
  }
</script>
