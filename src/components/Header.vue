<script>
export default {
  mounted() {
    document.addEventListener('scroll', () => {
      const documentOffsetTopValue = document.querySelector('body').getBoundingClientRect().top

      if (documentOffsetTopValue < 0) {
        this.topOffset = true
      } else {
        this.topOffset = false
      }
    })
  },
  data() {
    return {
      topOffset: false
    }
  }
}
</script>

<template>
  <header class="header section" :class="{ shadow: topOffset }">
    <RouterLink to="/">
      <div class="logo"></div>
    </RouterLink>
    <nav class="navigation">
      <RouterLink to="/events" class="navigation-link" active-class="active" exact
        >Все события</RouterLink
      >
      <RouterLink to="/profile" class="navigation-link" active-class="active">Профиль</RouterLink>
      <!-- <a href="#" class="navigation-link">Вход</a>
      <a href="#" class="navigation-link">Регистрация</a> -->
    </nav>
  </header>
</template>

<style>
.header {
  background-color: var(--light-blue-color);
  padding-top: 20px;
  padding: 20px var(--x-padding-desktop);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  transition:
    box-shadow var(--transition),
    background-color var(--transition),
    color var(--transition);
}

.logo {
  width: 40px;
  height: 40px;
  background-color: var(--blue-color);
  border-radius: 5px;
  cursor: pointer;
  transition: opacity var(--transition);
}

.logo:hover {
  opacity: var(--opacity);
}

.navigation {
  display: flex;
  gap: 17px;
  font-size: var(--text-size-19);
}

.navigation-link {
  transition: opacity var(--transition);
  letter-spacing: 1px;
}

.navigation-link:hover {
  opacity: var(--opacity);
}

.shadow {
  box-shadow: 0 1px 7px var(--dark-shadow-color);
  background-color: var(--white-color);
}
</style>
