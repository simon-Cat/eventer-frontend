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
          Организовывайте вечеринки, концерты, мастер-классы, выставки, семинары и другие
          мероприятия, которые будут интересны и полезны для участников.
        </p>
        <img class="list-item-img" src="../assets/images/landing-img-1.png" alt="" />
      </li>
      <li class="list-item" id="list-item-revert">
        <div class="vector features-vector" id="features-vector-2"></div>
        <img
          class="list-item-img"
          src="../assets/images/landing-img-2.png"
          alt=""
          width="424"
          height="270"
        />
        <p class="list-item-text">
          Следите за тем, кто подписан на ваше событие, чтобы иметь представление о том, сколько
          человек заинтересовано в вашем мероприятии и планирует его посетить.
        </p>
      </li>
      <li class="list-item">
        <div class="vector features-vector" id="features-vector-3"></div>
        <p class="list-item-text">
          Держите подписчиков в курсе о любых актуализациях и событиях, происходящих в рамках вашего
          мероприятия.
        </p>
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
  padding-bottom: 350px;
  position: relative;
}

.title {
  max-width: 380px;
  margin: 190px auto 80px;
  font-size: var(--text-size-40);
  z-index: 1;
  position: relative;
  text-align: center;
}

.list-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
  position: relative;
  background-color: var(--white-color);
}

.features-vector {
  width: 350px;
  height: 350px;
  background: url(../assets/images/vectors/features-vector.svg) no-repeat;
  background-size: contain;
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
  font-weight: var(--light-font-weigth);
  max-width: 630px;
  line-height: 30px;
  align-self: center;
  text-align: center;
  z-index: 1;
}

.list-item-img {
  width: 100%;
  max-width: 600px;
  height: 500px;
  object-fit: contain;
  border-radius: var(--raduis-10);
  box-shadow: 0 0 10px var(--dark-shadow-color);
}

.text-blue {
  color: var(--blue-color);
}

@media screen and (max-width: 1309px) {
  .eventer-features {
    padding-bottom: 300px;
  }

  .list-item {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
    margin-bottom: 150px;
  }

  #list-item-revert {
    flex-direction: column-reverse;
  }

  .list-item-text {
    font-size: var(--text-size-24);
  }

  .features-vector {
    visibility: hidden;
  }
}

@media screen and (max-width: 685px) {
  .list-item-text {
    max-width: 450px;
  }

  .list-item-img {
    max-width: 500px;
  }

  .title {
    margin-bottom: 60px;
    margin-top: 160px;
  }

  .list-item {
    margin-bottom: 120px;
  }
}

@media screen and (max-width: 581px) {
  .title {
    font-size: var(--text-size-35);
    margin-top: 140px;
  }

  .list-item-text {
    font-size: var(--text-size-20);
    max-width: 350px;
  }

  .list-item-img {
    max-width: 450px;
    height: 350px;
  }
}

@media screen and (max-width: 445px) {
  .eventer-features {
    padding-bottom: 250px;
    position: relative;
  }

  .title {
    font-size: var(--text-size-30);
    margin-top: 120px;
    margin-bottom: 50px;
  }

  .list-item-text {
    font-size: var(--text-size-18);
  }

  .list-item-img {
    max-width: 400px;
    height: 300px;
  }

  .list-item {
    margin-bottom: 90px;
  }
}
</style>
