<script>
import EventCard from './EventCard.vue'

export default {
  props: ['events'],
  components: {
    EventCard
  }
}
</script>

<template>
  <ul class="event-list">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </ul>
</template>

<style scoped>
.event-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 60px 20px;
}

@media screen and (max-width: 1250px) {
  .event-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 854px) {
  .event-list {
    grid-template-columns: 1fr;
  }
}
</style>
