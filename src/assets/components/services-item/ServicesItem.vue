<template>
  <div class="services-item">
    <div class="services-item__title">
      <div>{{title}}</div>
      <div class="services-item__title__icon">{{isOpen ? '-' : '+'}}</div>
    </div>
    <transition-group>
      <ul v-show="isOpen" class="services-item__descr">
        <li class="services-item__descr__item">{{sortDescr(0)}}</li>
        <li class="services-item__descr__item">{{sortDescr(1)}}</li>
        <li class="services-item__descr__item">{{sortDescr(2)}}</li>
        <li class="services-item__descr__item">{{sortDescr(3)}}</li>
        <li v-show="sortDescr(4) === '' ? null : sortDescr(4) " class="services-item__descr__item">{{sortDescr(4)}}</li>
        <li v-show="sortDescr(5) === '' ? null : sortDescr(5) " class="services-item__descr__item">{{sortDescr(5)}}</li>
      </ul>
    </transition-group>
  </div>
</template>



<script>
import cursorIcon from './img/cursor.png';
export default {
name: "ServicesItem",
  props: {
    title: String,
    descr: Array,
    services: Array,
    isOpen: Boolean,
  },
  data() {
    return {
      cursorIcon
    }
  },
  methods: {
    sortDescr(value) {
      for (let i = 0; i < this.descr.length; i++) {
        return this.descr[value];
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .services-item {
    padding: 30px 0;
    border-top: 1px solid #E4E4E4;
    cursor: url("../../img/cursor-white.svg"), default;
    // cursor: url(./img/cursor.png), default;

    @media (max-width: 575px) {
      padding: 6px 0;
    }

    &:last-child {
      border-bottom: 1px solid #E4E4E4;
    }
    &__title {
      font-family: 'IBM Plex Mono', sans-serif;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 36px;
      color: #fff;

      @media (max-width: 575px) {
        font-size: 18px;
      } 

      &__icon {
        font-size: 36px;
      }
    }
    &__descr {
      font-family: 'IBM Plex Mono', sans-serif;
      font-size: 18px;
      color: #fff;
      margin: 40px 0;
      transition: all 3s;
      &__item {
        margin: 0 0 12px 0;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
</style>