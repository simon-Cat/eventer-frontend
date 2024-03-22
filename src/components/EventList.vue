<script>
export default {
  props: ['events', 'className']
}
</script>

<template>
  <ul class="event-list" :class="className">
    <li class="event-item" v-for="(event, index) in events" :key="index">
      <img
        class="event-image"
        src="data:image/jpeg;base64,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"
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
  </ul>
</template>

<style scoped>
.event-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 63px;
  column-gap: 40px;
}

.event-item {
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
}

.event-item:hover {
  transform: scale(1.01);
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
