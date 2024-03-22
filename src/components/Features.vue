<script>
export default {}
</script>

<template>
  <section class="eventer-features section">
    <h2 class="title">Что <span class="text-blue">Eventer</span> может?</h2>
    <ul class="list">
      <li class="list-item">
        <div class="vector features-vector" id="features-vector-1"></div>
        <p class="list-item-text">
          Создавайть события, связанные с развлечениями, бизнесом или хобби.
        </p>
        <img
          class="list-item-img"
          src="../assets/images/landing-img-1.png"
          alt=""
          width="424"
          height="270"
        />
      </li>
      <li class="list-item">
        <div class="vector features-vector" id="features-vector-2"></div>
        <img
          class="list-item-img"
          src="../assets/images/landing-img-2.png"
          alt=""
          width="424"
          height="270"
        />
        <p class="list-item-text">Следить за тем, кто подписан на ваше события.</p>
      </li>
      <li class="list-item">
        <div class="vector features-vector" id="features-vector-3"></div>
        <p class="list-item-text">Уведомлять подписчиков об изменениях в вашем событии.</p>
        <img
          class="list-item-img"
          src="../assets/images/landing-img-1.png"
          alt=""
          width="424"
          height="270"
        />
      </li>
    </ul>
  </section>
</template>

<style scoped>
.eventer-features {
  padding-bottom: 100px;
  position: relative;
}

.title {
  max-width: 375px;
  margin: 90px auto 0;
  font-size: var(--text-size-40);
  z-index: 1;
  position: relative;
  margin-bottom: 80px;
}

.list-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  position: relative;
}

.features-vector {
  width: 350px;
  height: 350px;
  background: url(../assets/images/vectors/features-vector.svg) no-repeat;
  background-size: contain;
  z-index: -1;
}

#features-vector-1 {
  top: 100px;
  left: 180px;
}

#features-vector-2 {
  transform: rotate(270deg);
  top: 100px;
  right: 180px;
}

#features-vector-3 {
  top: 100px;
  left: 180px;
}

.list-item:last-of-type {
  margin-bottom: 0;
}

.list-item-text {
  font-size: var(--text-size-26);
  max-width: 630px;
  line-height: 30px;
  align-self: center;
}

.list-item-img {
  width: 600px;
  height: 500px;
  object-fit: contain;
  border-radius: var(--raduis-10);
  box-shadow: 0 0 10px var(--dark-shadow-color);
}

.text-blue {
  color: var(--blue-color);
}
</style>
