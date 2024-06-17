<script>
export default {}
</script>

<template>
  <section class="hero section">
    <h2 class="title">Добро пожаловать в <span class="text-blue">Eventer</span></h2>
    <p class="description">Наша цель - объединять людей.</p>
    <div class="vector" id="hero-vector"></div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 80px;
  padding-bottom: 100px;
  background-color: var(--light-blue-color);
  position: relative;
}

.title {
  text-align: center;
  font-size: var(--text-size-66);
  font-weight: var(--medium-font-weigth);
  max-width: 1100px;
  margin: 0 auto 45px;
  position: relative;
}

.text-blue {
  display: inline-block;
  max-width: 395px;
  color: var(--blue-color);
  font-size: var(--text-size-100);
  padding: 0 20px 20px;
  border: 1px dashed var(--blue-color);
  border-radius: var(--raduis-10);
}

.description {
  max-width: 1100px;
  margin: 0 auto;
  font-size: var(--text-size-30);
  opacity: var(--opacity);
  text-align: center;
}

#hero-vector {
  width: 100%;
  height: 100%;
  background: url(../assets/images/vectors/hero-vector.svg) no-repeat;
  background-size: contain;
  bottom: -365px;
  left: -1px;
}

@media screen and (max-width: 1153px) {
  .title {
    font-size: var(--text-size-58);
  }

  .text-blue {
    font-size: var(--text-size-80);
    padding: 0 20px 10px;
  }
}

@media screen and (max-width: 1000px) {
  .title {
    font-size: var(--text-size-50);
  }

  .text-blue {
    font-size: var(--text-size-70);
    padding: 0 10px 10px;
  }

  #hero-vector {
    bottom: -354px;
    left: 0px;
  }
}

@media screen and (max-width: 863px) {
  .text-blue {
    margin-top: 10px;
  }

  .description {
    font-size: var(--text-size-26);
  }

  #hero-vector {
    bottom: -418px;
    left: 0px;
  }
}

@media screen and (max-width: 581px) {
  .hero {
    padding-top: 60px;
  }

  .title {
    font-size: var(--text-size-35);
  }

  .text-blue {
    font-size: var(--text-size-58);
    padding: 0 10px 5px;
  }

  .description {
    font-size: var(--text-size-24);
  }

  #hero-vector {
    bottom: -361px;
  }
}

@media screen and (max-width: 445px) {
  .hero {
    padding-top: 40px;
  }

  .title {
    font-size: var(--text-size-28);
    margin-bottom: 40px;
  }

  .text-blue {
    font-size: var(--text-size-0);
  }

  .description {
    font-size: var(--text-size-20);
  }

  #hero-vector {
    bottom: -287px;
  }
}
</style>
