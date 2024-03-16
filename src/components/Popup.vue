<script>
export default {}
</script>

<template>
  <div class="popup">
    <section class="popup-wrapper">
      <button class="close-btn" type="button"></button>
      <slot></slot>
    </section>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-wrapper {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 50px;
  width: 100%;
  max-width: 600px;
  z-index: -1;
  overflow: hidden;
}

.close-btn {
  width: 27px;
  height: 27px;
  position: absolute;
  top: 20px;
  right: 20px;
  background: url(../assets/images/vectors/close_btn-vector.svg) no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  transition: opacity var(--transition);
}

.close-btn:hover {
  opacity: var(--hover-opacity);
}
</style>
