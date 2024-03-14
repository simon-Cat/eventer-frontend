<script>
export default {}
</script>

<template>
  <section class="hero section">
    <h2 class="title">
      Добро пожаловать в <span class="text-blue">Eventer</span>
      <div class="circle"></div>
    </h2>

    <p class="description">Наша цель - объединять людей.</p>
    <div id="hero-vector"></div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: var(--bg-color);
  position: relative;
}

.title {
  font-size: 70px;
  font-weight: var(--medium-font-weigth);
  max-width: 1100px;
  margin: 0 auto 45px;
  position: relative;
}

.circle {
  position: absolute;
  width: 125px;
  height: 125px;
  border: 53px solid var(--blue-color);
  border-radius: 50%;
  top: -72px;
  right: -51px;
}

.text-blue {
  color: var(--blue-color);
  font-size: 100px;
  padding: 0 20px 20px;
  border: 1px dashed var(--blue-color);
  border-radius: 10px;
}

.description {
  max-width: 1100px;
  margin: 0 auto;
  font-size: 30px;
  opacity: 0.8;
}

#hero-vector {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/images/vectors/hero-vector.svg) no-repeat;
  background-size: contain;
  bottom: -365px;
  left: -1px;
}
</style>
