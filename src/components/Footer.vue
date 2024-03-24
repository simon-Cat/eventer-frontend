<script>
export default {}
</script>

<template>
  <footer class="footer">
    <div class="vector" id="footer-vector"></div>
    <p class="footer__text">Объединим людей вместе!</p>
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
  background-size: contain;
  width: 100%;
  height: 100%;
  top: -163px;
  z-index: -1;
}

@media screen and (max-width: 1101px) {
  #footer-vector {
    top: -120px;
  }
}

@media screen and (max-width: 810px) {
  #footer-vector {
    top: -100px;
  }
}

@media screen and (max-width: 674px) {
  #footer-vector {
    top: -80px;
  }
}

@media screen and (max-width: 539px) {
  #footer-vector {
    top: -60px;
  }
}

@media screen and (max-width: 403px) {
  #footer-vector {
    top: -40px;
  }
}

@media screen and (max-width: 685px) {
  .footer__text {
    font-size: var(--text-size-35);
  }
}

@media screen and (max-width: 685px) {
  .footer__text {
    font-size: var(--text-size-30);
  }
}

@media screen and (max-width: 445px) {
  .footer__text {
    font-size: var(--text-size-26);
  }
}
</style>
