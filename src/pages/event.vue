<script>
export default {}
</script>

<template>
  <div class="vector" id="vector_1"></div>
  <div class="vector" id="vector_2"></div>
  <section class="event section">
    <img class="img" src="../assets/images/event_image.png" alt="" />
    <h2 class="title">Вечеринка в честь празднования нового года</h2>
    <p class="description">
      Значимость этих проблем настолько очевидна, что консультация с широким активом влечет за собой
      процесс внедрения и модернизации систем массового участия. Равным образом постоянный
      количественный рост и сфера нашей активности позволяет оценить значение соответствующий
      условий активизации. Повседневная практика показывает, что сложившаяся структура организации
      играет важную роль в формировании соответствующий условий активизации.
    </p>
    <ul class="about-list">
      <li class="about-item">
        <p class="about-label">Организатор:</p>
        <p class="about-text">Екатерина Мурова</p>
      </li>
      <li class="about">
        <p class="about-label">Место проведения:</p>
        <p class="about-text">Площадь восстания, Санкт-Петербург</p>
      </li>
      <li class="about">
        <p class="about-label">Дата и время проведения:</p>
        <p class="about-text">23 ноября 2024, 14:00</p>
      </li>
      <li class="about">
        <p class="about-label">Тип мероприятия:</p>
        <p class="about-text">Частное мероприятие</p>
      </li>
      <li class="followers">
        <p class="about-label">Участники:</p>
        <ul class="followers-list">
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
          <li class="follower-item">
            <img class="follower-img" src="../assets/images/avatar.svg" alt="" />
          </li>
        </ul>
      </li>
    </ul>
    <button class="btn" type="button">Я пойду!</button>
  </section>
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
</style>
