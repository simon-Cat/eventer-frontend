<script>
export default {
  props: ['event']
}
</script>

<template>
  <router-link :to="{ path: `/events/${event.id}` }">
    <li class="event-card">
      <div
        class="vector event-vector"
        :class="[
          event.type === 'Публичное мероприятие' ? 'event-vector_public' : 'event-vector_private'
        ]"
      ></div>
      <img
        class="event-image"
        src="../assets/images/event_image.jpg"
        alt=""
      />
      <div class="caption">
        <span class="caption-city">{{ event.city }}</span>
        <span class="caption-date">{{ event.date }}</span>
      </div>
      <p class="event-title">{{ event.title }}</p>
      <div class="event-type">
        <div
          class="event-type-icon"
          :class="[
            event.type === 'Публичное мероприятие'
              ? 'event-type-icon_public'
              : 'event-type-icon_private'
          ]"
        ></div>
        <span class="event-type-text">{{ event.type }}</span>
      </div>
    </li>
  </router-link>
</template>

<style scoped>
.event-vector {
  width: 0;
  height: 0;
  border-radius: var(--raduis-percent-50);
  top: -75px;
  right: -145px;
  z-index: -1;
  transition:
    width var(--transition),
    height var(--transition);
}

.event-vector_private {
  background: var(--red-color);
}

.event-vector_public {
  background: var(--blue-color);
}

.event-card {
  position: relative;
  width: 500px;
  padding: 50px 32px;
  box-shadow: 6px 6px 17px rgba(73, 73, 73, 40%);
  border-radius: var(--raduis-15);
  height: 550px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform var(--transition);
  background-color: var(--white-color);
  overflow: hidden;
}

.event-card:hover {
  transform: scale(1.01);
}

.event-card:hover .event-vector {
  width: 500px;
  height: 500px;
}

.event-image {
  display: block;
  width: 100%;
  height: 242px;
  object-fit: cover;
  margin-bottom: 37px;
  border-radius: var(--raduis-10);
}

.caption {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.caption-city,
.caption-date {
  font-size: var(--text-size-15);
  opacity: var(--opacity);
}

.event-title {
  font-size: var(--text-size-19);
  line-height: 26px;
  margin-bottom: 50px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.event-type {
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.event-type-icon {
  width: 20px;
  height: 20px;
  border-radius: var(--raduis-5);
  display: inline-block;
}

.event-type-icon_private {
  background-color: var(--red-color);
}

.event-type-icon_public {
  background-color: var(--blue-color);
}

.event-type-text {
  font-size: var(--text-size-16);
  opacity: var(--opacity);
}
</style>
