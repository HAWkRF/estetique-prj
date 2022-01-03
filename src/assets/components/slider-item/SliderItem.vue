<template>
  <div class="item">
    <div class="slider-item">
      <div class="slider-item__bg">
        <img :src=icon alt="">
      </div>
      <div class="slider-item__title">{{title}}</div>
      <div class="slider-item__descr">
        {{descr}}
      </div>
    </div>
  </div>
</template>

<script>
import arrowIcon from '../../img/Sliderarrow.svg';
export default {
  name: "SliderItem",
  props: {
    title: String,
    descr: String,
    icon: String,
    activeSlider: Number,
  },
  data() {
    return {
      arrowIcon,
      currentSlider: this.activeSlider,
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
}
.slider-item {
  width: 460px;
  height: 100%;
  &__bg {
    display: flex;
    width: 100%;
    height: 440px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__title {
    font-family: 'IBM Plex Mono', sans-serif;
    font-weight: 500;
    font-size: 22px;
    margin: 40px 0 30px 0;
  }
  &__descr {
    font-family: 'IBM Plex Mono', sans-serif;
    width: 180px;
    height: 85px;
  }
}
</style>