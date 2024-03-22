<script>
import Popup from '@/components/Popup.vue'
export default {
  props: ['id', 'eventlist'],
  data() {
    return {
      isMarkAsIGo: false
    }
  },
  components: {
    Popup
  },
  computed: {
    event() {
      const event = this.eventlist.filter((event) => event.id == this.id)[0]
      return event
    },
    followersCount() {
      const followersCount = this.event.followers.length
      return followersCount
    }
  },
  methods: {
    // Вызов метода компонента Popup
    openPopup() {
      this.$refs['followers-popup'].openPopup()
    },
    changeMark() {
      this.isMarkAsIGo = !this.isMarkAsIGo
    }
  }
}
</script>

<template>
  <div class="vector event-vector" id="vector_1"></div>
  <div class="vector event-vector" id="vector_2"></div>
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
    <button v-if="followersCount > 15" class="follower-count" @click="openPopup">
      {{ followersCount > 99 ? '99+' : followersCount }}
    </button>
    <button class="btn" :class="{ btn_red: isMarkAsIGo }" type="button" @click="changeMark">
      {{ isMarkAsIGo === true ? 'Я не пойду' : 'Я пойду!' }}
    </button>
  </section>
  <Popup ref="followers-popup">
    <section>
      <div class="vector popup__vector"></div>
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

.event-vector {
  background: url(../assets/images/vectors/event-vector.svg) no-repeat;
  background-size: contain;
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
  border-radius: var(--raduis-15);
  margin-bottom: 20px;
}

.title {
  font-size: var(--text-size-35);
  margin-bottom: 30px;
}

.description {
  font-size: var(--text-size-20);
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
  font-size: var(--text-size-20);
  opacity: var(--opacity);
}

.about-text {
  font-size: var(--text-size-26);
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
  color: var(--white-color);
  font-size: var(--text-size-26);
  text-align: center;
  border-radius: var(--raduis-10);
}

.btn_red {
  background: var(--red-color);
}

.btn:hover {
  opacity: var(--opacity);
}

.popup__title {
  text-align: center;
  margin-bottom: 50px;
  font-size: var(--text-size-28);
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
  border-radius: var(--raduis-percent-50);
}

.popup__followername {
  font-size: var(--text-size-24);
}

.popup__vector {
  background: url(../assets/images/vectors/followers_popup-vector.svg) no-repeat;
  background-size: contain;
  width: 400px;
  height: 400px;
  z-index: -1;
  top: 0;
  left: -100px;
}

.follower-count {
  width: 50px;
  height: 50px;
  border-radius: var(--raduis-percent-50);
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue-color);
  color: var(--white-color);
  font-size: var(--text-size-19);
  transform: translate(245px, -140px);
}
</style>
