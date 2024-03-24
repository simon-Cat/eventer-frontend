<script>
import EventCard from './EventCard.vue';

export default {
  props: ['events', 'className'],
  components: {
    EventCard
  }
}
</script>

<template>
  <ul class="event-list" :class="className">
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </ul>
</template>

<style scoped>
.event-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 63px;
  column-gap: 40px;
}
</style>
