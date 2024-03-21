<script>
import Popup from '@/components/Popup.vue'
export default {
  props: ['id', 'eventlist'],
  components: {
    Popup
  },
  computed: {
    event() {
      const event = this.eventlist.filter((event) => event.id == this.id)[0]
      return event
    }
  }
}
</script>

<template>
  <div class="vector" id="vector_1"></div>
  <div class="vector" id="vector_2"></div>
  <section class="event section">
    <img class="img" src="../assets/images/event_image.png" alt="" />
    <h2 class="title">{{ event.title }}</h2>
    <p class="description">{{ event.description }}</p>
    <ul class="about-list">
      <li class="about-item">
        <p class="about-label">Организатор:</p>
        <p class="about-text">{{ event.creator }}</p>
      </li>
      <li class="about">
        <p class="about-label">Место проведения:</p>
        <p class="about-text">{{ event.city + ', ' + event.place }}</p>
      </li>
      <li class="about">
        <p class="about-label">Дата и время проведения:</p>
        <p class="about-text">{{ event.date + ', ' + event.time }}</p>
      </li>
      <li class="about">
        <p class="about-label">Тип мероприятия:</p>
        <p class="about-text">{{ event.type }}</p>
      </li>
      <li class="followers">
        <p class="about-label">Участники:</p>
        <ul class="followers-list">
          <li class="follower-item" v-for="(follower, index) in event.followers" :key="index">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
        </ul>
      </li>
    </ul>
    <button class="btn" type="button">Я пойду!</button>
  </section>
  <Popup>
    <section>
      <div class="popup__vector"></div>
      <h2 class="popup__title">Участники</h2>
      <ul class="popup__followers">
        <li class="popup__follower" v-for="(follower, index) in event.followers" :key="index">
          <img class="popup__followerlogo" src="../assets/images/avatar.svg" alt="" />
          <p class="popup__followername">{{ follower.name }}</p>
        </li>
      </ul>
    </section>
  </Popup>
</template>

<style scoped>
.event {
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
}

.vector {
  background: url(../assets/images/vectors/event-vector.svg) no-repeat;
  background-size: contain;
  position: absolute;
}

#vector_1 {
  width: 820px;
  height: 650px;
  top: 300px;
}

#vector_2 {
  width: 600px;
  height: 600px;
  bottom: -700px;
  right: 0;
  transform: scaleX(-1);
}

.img {
  width: 100%;
  height: 590px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
}

.title {
  font-size: 35px;
  margin-bottom: 30px;
}

.description {
  font-size: 20px;
  text-align: justify;
  margin-bottom: 60px;
  max-width: 70%;
}

.about-list {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}

.about-label {
  font-size: 20px;
  opacity: 0.8;
}

.about-text {
  font-size: 25px;
}

.followers-list {
  margin-top: 10px;
  max-width: 260px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 120px;
  height: 150px;
  overflow: hidden;
}

.follower-item {
  width: 45px;
  height: 45px;
}

.follower-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 50%;
  padding: 20px;
  background-color: var(--blue-color);
  color: var(--bg-color);
  font-size: 25px;
  text-align: center;
  border-radius: 10px;
  border: none;
  transition: opacity var(--transition);
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

.popup__title {
  text-align: center;
  margin-bottom: 50px;
  font-size: 28px;
}

.popup__followers {
  height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 340px;
  margin: 0 auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.popup__followers::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.popup__followers {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.popup__follower {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.popup__followerlogo {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
}

.popup__followername {
  font-size: 24px;
}

.popup__vector {
  position: absolute;
  background: url(../assets/images/vectors/followers_popup-vector.svg) no-repeat;
  background-size: contain;
  width: 400px;
  height: 400px;
  z-index: -1;
  top: 0;
  left: -100px;
}
</style>
