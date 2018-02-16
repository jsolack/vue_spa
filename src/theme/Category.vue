<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-mobile is-offset-2-mobile is-3-desktop is-6-tablet" v-for="(card, index) in cards" v-bind:key="card.id">
        <app-card v-bind:link="card.link">
            <div slot="card-image" class="card-image">
              <figure v-bind:class="['image', card.img_class]">
                <img v-bind:src="card.img" v-bind:alt="card.title">
              </figure>
            </div>
          <h3 slot="card-title">{{ card.title }}</h3>
          <p slot="card-content">{{ card.content }}</p>
        </app-card>
      </div>  
    </div>
  </div>
</template>
<script>
  import Card from './Card.vue'
  export default {
    components: {
      'app-card': Card
    },
    data () {
      return {
        id: this.$route.params.id,
        cards_data: [
          {
            id: 1,
            title: 'Dashboards',
            content: 'Data Tools can bring data and insights to the web for exploration and sharing across organizations',
            img: '/static/img/dashboard.png',
            img_class: 'is-4by3',
            link: '#'
          },
          {
            id: 2,
            title: 'Data Visualization',
            content: 'Dynamic charting and filtering of data for impact',
            img: '/static/img/dataviz.gif',
            img_class: 'is-4by3',
            link: '#'
          },
          {
            id: 3,
            title: 'Microsites/Portals',
            content: 'Create an ecosystem of dashboards, metrics, and sharing for a unified interface to decision making ',
            img: '/static/img/microsite.png',
            img_class: 'is-4by3',
            link: '#'
          },
          {
            id: 4,
            title: 'Journey Maps',
            content: 'Visualize online the journey and processes that customers and stakeholders make ',
            img: '/static/img/journeymap.png',
            img_class: 'is-4by3',
            link: '#'
          }
        ],
        cards_automation: [
          {
            id: 5,
            title: 'QA Automation',
            content: 'Leverage programatic methods to find and catch quality errors ',
            img: '/static/img/quality.png',
            img_class: 'is-4by3',
            link: '#'
          },
          {
            id: 6,
            title: 'Data Cleaning & Transformation',
            content: 'Put structure around data and clean out dirty data from multiple sources ',
            img: '/static/img/cleaning.png',
            img_class: 'is-4by3',
            link: '#'
          },
          {
            id: 7,
            title: 'Deliverables',
            content: 'Replace error-prone and mechanical poplulation of deliverables with a programatic, rules-based approach ',
            img: '/static/img/deliverables.gif',
            img_class: 'is-4by3',
            link: '#'
          }
        ],
        cards: []
      }
    },
    methods: {
      loadCards () {
        if (this.id === 'data') {
          this.cards = this.cards_data
        } else {
          this.cards = this.cards_automation
        }
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
