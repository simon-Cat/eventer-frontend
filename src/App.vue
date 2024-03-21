<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import events from './utils/events.js'

export default {
  data() {
    return {
      eventlist: events
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header />
  <main>
    <RouterView v-slot="{ Component }">
      <component :is="Component" :eventlist="eventlist" />
    </RouterView>
  </main>
  <Footer />
</template>

<style></style>
