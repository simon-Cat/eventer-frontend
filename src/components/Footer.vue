<script>
export default {}
</script>

<template>
  <footer class="footer">
    <div class="vector" id="footer-vector"></div>
    <p class="footer__text">Давайте начнем объединять людей.</p>
  </footer>
</template>

<style>
.footer {
  background: var(--light-blue-color);
  position: relative;
  padding: 100px 0;
}

.footer__text {
  text-align: center;
  font-size: var(--text-size-40);
}

#footer-vector {
  background: url(../assets/images/vectors/footer-vector.svg) no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  top: -163px;
  z-index: -1;
}
</style>
