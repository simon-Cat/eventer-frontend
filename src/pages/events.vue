<script>
import EventList from '@/components/EventList.vue'
export default {
  props: ['eventlist'],
  components: {
    EventList
  }
}
</script>

<template>
  <section class="events section">
    <h2 class="title">Все события</h2>
    <EventList :events="eventlist" />
  </section>
</template>

<style scoped>
.events {
  padding-bottom: 80px;
}

.title {
  font-size: var(--text-size-30);
  font-weight: var(----medium-font-weigth);
  text-transform: uppercase;
  opacity: var(--opacity);
  padding: 50px 0 30px;
}
</style>
