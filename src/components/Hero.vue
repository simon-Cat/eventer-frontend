<script>
export default {}
</script>

<template>
  <section class="hero">
    <h2 class="title">Welcome to <span class="text-blue">Eventer</span></h2>
    <p class="description">Our goal is to bring people together.</p>
    <div id="hero-vector"></div>
  </section>
  c
</template>

<style>
.hero {
  padding: 60px 0 100px;
  background-color: var(--bg-color);
  position: relative;
}

.title {
  font-size: 100px;
  font-weight: var(--medium-font-weigth);
  max-width: 1100px;
  margin: 0 auto 100px;
}

.text-blue {
  color: var(--blue-color);
  font-size: 135px;
  padding: 0 20px 20px;
  border: 1px dashed var(--blue-color);
  border-radius: 10px;
}

.description {
  max-width: 1100px;
  margin: 0 auto;
  font-size: 45px;
}

#hero-vector {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../assets/images/vectors/hero-vector.svg) no-repeat;
  background-size: contain;
  bottom: -500px;
}
</style>
