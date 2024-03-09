<script>
export default {}
</script>

<template>
  <header class="header">
    <div class="logo"></div>
    <nav class="navigation">
      <a href="#" class="navigation-link">Вход</a>
      <a href="#" class="navigation-link">Регистрация</a>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: #d5e3ef;
  padding: 20px var(--x-padding-desktop);
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  opacity: var(--hover-opacity);
}

.navigation {
  display: flex;
  gap: 30px;
  font-size: 19px;
}

.navigation-link {
  transition: opacity var(--transition);
  letter-spacing: 1px;
}

.navigation-link:hover {
  opacity: var(--hover-opacity);
}
</style>
