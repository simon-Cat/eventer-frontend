<script>
export default {}
</script>

<template>
  <section class="eventer-features section">
    <h2 class="title">Что <span class="text-blue">Eventer</span> может?</h2>
    <ul class="list">
      <li class="list-item">
        <p class="list-item-text">Создавайть мероприятия, связанные с развлечениями, бизнесом и хобби.</p>
        <img src="" alt="" width="424" height="270">
      </li>
      <li class="list-item">
        <img src="" alt="" width="424" height="270">
        <p class="list-item-text">Следить за тем, кто подписан на ваше мероприятие.</p>
      </li>
      <li class="list-item">
        <p class="list-item-text">Уведомлять подписчиков об изменениях в вашем мероприятии.</p>
        <img src="" alt="" width="424" height="270">
      </li>
    </ul>
  </section>
</template>

<style scoped>
.title {
  max-width: 375px;
  margin: 130px auto 0;
  font-size: 40px;
  z-index: 1;
  position: relative;
  margin-bottom: 80px;
}

.list-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

.list-item:last-of-type {
  margin-bottom: 0;
}

.list-item-text {
  font-size: 24px;
  max-width: 550px;
  line-height: 28px;
}
</style>
