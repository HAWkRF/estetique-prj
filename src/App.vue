<template>
  <div class="wrapper">
      <section class="promo" id="promo-slide">
        <div class="container" style="display: flex; justify-content: space-between">

        <div class="slider">
            <img class="slider__item" :src="getCurrentSlide()" alt="" style="transition: 0.05s;">
        </div>
        
        <nav class="nav">
          <div class="nav__bar">
            <div class="nav__bar__line"></div>
            <div class="nav-items">
              <a class="nav-items__item" href="#portfolio-slide">Портфолио</a>
              <a class="nav-items__item" href="#about-slide">Кто мы</a>
              <a class="nav-items__item" href="#customer">Кто вы</a>
              <a class="nav-items__item" href="#partners-slide">Наши клиенты</a>
              <a class="nav-items__item" href="#services-slide">Услуги</a>
              <a class="nav-items__item" href="#started-slide">Контакты</a>
            </div>
            <div class="nav__bar__line"></div>
          </div>
          <div class="nav-mobile">
            <div class="nav-mobile__icon">
              <img :src=navIcon alt="">
            </div>

            <button class="nav-mobile__burger" type="button" @click="navMenu = !navMenu">
              <img :src=burger alt="">
            </button>

            <div :class="classesNavMenu">
              <a class="nav-items__item" href="#portfolio-slide">Портфолио</a>
              <a class="nav-items__item" href="#about-slide">Кто мы</a>
              <a class="nav-items__item" href="#customer">Кто вы</a>
              <a class="nav-items__item" href="#partners-slide">Наши клиенты</a>
              <a class="nav-items__item" href="#services-slide">Услуги</a>
              <a class="nav-items__item" href="#started-slide">Контакты</a>
            </div>
          </div>
          <div class="nav__name">
            ESTHETIQUE
            DESIGN///
          </div>
          <div class="nav__slogan">
            Студия эстетического креатива
            <a class="button" href="tel: +79198761734">Начать проект</a>
          </div>
           
          <div class="nav__social">
            <a class="nav__social__item" href="https://www.behance.net/esthetique1" target="_blank">Behance</a>
            <a class="nav__social__item" href="https://www.beatport.com/artist/esthetique/121867" target="_blank">Beatport</a>
          </div>
          <div class="nav__footer">
            <div class="nav-arrows">
              <div class="nav-arrows__item">
                <div>0{{navActive + 1}}</div>
                <div class="nav-arrows__item__arrow" @click="prevSlide">
                  <img :src=arrowIcon alt="">
                </div>
              </div>
              <div v-if="navActive !== 2" class="nav-arrows__item right" @click="nextSlide">
                <div>0{{navActive + 2}}</div>
                <div class="nav-arrows__item__arrow">
                  <img :src=arrowIcon alt="">
                </div>
              </div>
            </div>
            <a class="button" href="tel: +79198761734">Начать проект</a>
          </div>
        </nav>
        </div>
      </section>
      <section class="portfolio" id="portfolio-slide">
        <div class="container" style="display: flex; justify-content: space-between">
            <div class="title">Портфолио</div>
            <div class="portfolio__slider">
              <vue-chocolat v-for="slide in getCurrentSliders()" :key="slide.id">
                  <a :href="slide.icon" target="_blank" style="text-decoration: none;">
                  <SliderItem :activeSlider="activeSlider" :title="slide.title" :descr="slide.descr" :icon="slide.icon" />
                </a>
                </vue-chocolat>

              <div class="separator">
                <div class="separator__item">
                  <div class="separator__item__arrow left" @click="setPrevActiveSlider">
                  </div>
                  <div class="separator__item__arrow" @click="setNextActiveSlider">
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div class="portfolio__image">
          <img :src=sliderSlideMobile1 alt="">
          <img :src=sliderSlideMobile2 alt="">
          <img :src=sliderSlideMobile3 alt="">
          <img :src=sliderSlideMobile4 alt="">
          <img :src=sliderSlideMobile5 alt="">
          <img :src=sliderSlideMobile6 alt="">
        </div>
      </section>
      <section ref="about" class="about" id="about-slide">
        <div class="container" style="display: flex; justify-content: space-between">

        <div class="title" style="margin: 36px 0 0 0">Кто мы</div>
        <div class="about__descr">
          Мы  —  команда
          высококлассных специалистов
          в сфере дизайна, брендинга, продакшна
        </div>
        <div class="stats">
          <div class="stats__item">
            <div class="stats__item__value">9</div>
            <div class="stats__item__descr">Человек</div>
          </div>
          <div ref="observer" class="stats__item circle">
            <div class="stats__item__circle" :style="{background: `conic-gradient(#c4c4c4 ${circleState}deg, white 1deg)`}"></div>
            <div class="stats__item__value">{{ currentYear }}</div>
            <div class="stats__item__descr">Лет</div>
          </div>
          <div class="stats__item">
            <div class="stats__item__value">100+</div>
            <div class="stats__item__descr">Проектов</div>
          </div>
        </div>
        </div>
      </section>
      <section ref="customer" class="customer" id="customer">
        <div class="container" style="display: flex; justify-content: space-between">
          <div class="title" style="margin: 36px 0 0 0">Кто вы</div>
          <div class="customer__descr">
              Современный бизнес, создающий умный продукт, понимающий важность визуальной коммуникации с клиентом 
          </div>
        </div>
      </section>
      <section ref="partners" class="partners " id="partners-slide">
        <div class="container" style="display: flex; justify-content: space-between">
        <div class="title">Наши клиенты</div>
        <div class="partners__block">
          <div class="partners__block__item">
            <img class="partners__block--image1" :src=colaIcon alt="">
          </div>
          <div class="partners__block__item">
            <img class="partners__block--image2" :src=vogueIcon alt="">
          </div>
          <div class="partners__block__item">
            <img class="partners__block--image3" :src=pepsiIcon alt="">
          </div>
          <div class="partners__block__item">
            <img class="partners__block--image4" :src=fiveIcon alt="">
          </div>
          <div class="partners__block__item">
            <img class="partners__block--image5" :src=sberIcon alt="">
          </div>
        </div>
        </div>
      </section>
      <section class="services" id="services-slide">
        <div class="container" style="display: flex; justify-content: space-between">
        <div class="title" style="color: #fff">Услуги</div>
        <div class="services__block">
          <ServicesItem v-for="item in services" :key="item.id" :services="services" :title="item.title" :descr="item.descr" :isOpen="item.isOpen" @click="openState(item.id)" />
        </div>
        </div>
      </section>
        <section class="container started " id="started-slide">
          <div class="started__text">БОЛЬШАЯ КРАСНАЯ КНОПКА — БОЛЬШАЯ КРАСНАЯ КНОПКА — БОЛЬШАЯ</div>
          <a class="button" href="tel: +79198761734">Начать проект</a>
          <a class="started__mail" href="mailto: esthetique@dmitry.by">esthetique@dmitry.by</a>
        </section>
      <footer class="footer">
        <div class="container" style="display: flex; justify-content: space-between">
        <a class="footer__arrow" href="#promo-slide"></a>
        <div class="footer__social">
          <a class="footer__social__item" href="https://www.behance.net/esthetique1" target="_blank">Behance</a>
          <a class="footer__social__item" href="https://www.beatport.com/artist/esthetique/121867" target="_blank">Beatport</a>
        </div>
        <a class="footer__politic">ESTHETIQUE DESIGN</a>
        </div>
      </footer>
  </div>
</template>

<script>
import arrowIcon from './assets/img/arrow.svg';
import navIcon from './assets/img/logo.png';
import burger from './assets/img/burger.png';
import sliderIcon1 from './assets/img/promo-bg.png';
import sliderIcon2 from './assets/img/promo-bg2.png';
import sliderIcon3 from './assets/img/promo-bg3.png';
import SliderItem from "./assets/components/slider-item/SliderItem";
import sliderSlide1 from './assets/components/slider-item/img/1thSlide.png';
import sliderSlide2 from './assets/components/slider-item/img/2thSlide.png';
import sliderSlide3 from './assets/components/slider-item/img/3thSlide.png';
import sliderSlide4 from './assets/components/slider-item/img/4thSlide.png';
import sliderSlide5 from './assets/components/slider-item/img/5thSlide.png';
import sliderSlide6 from './assets/components/slider-item/img/6thSlide.png';
import sliderSlideMobile1 from './assets/components/slider-item/img/1thSlideMobile.png';
import sliderSlideMobile2 from './assets/components/slider-item/img/2thSlideMobile.png';
import sliderSlideMobile3 from './assets/components/slider-item/img/3thSlideMobile.png';
import sliderSlideMobile4 from './assets/components/slider-item/img/4thSlideMobile.png';
import sliderSlideMobile5 from './assets/components/slider-item/img/5thSlideMobile.png';
import sliderSlideMobile6 from './assets/components/slider-item/img/6thSlideMobile.png';
import colaIcon from './assets/img/cola-logo.png';
import vogueIcon from './assets/img/vogue-logo.png';
import pepsiIcon from './assets/img/pepsi-logo.png';
import fiveIcon from './assets/img/fiveroskhka-icon.png';
import sberIcon from './assets/img/sber-icon.png';
import ServicesItem from "./assets/components/services-item/ServicesItem";
import vueChocolat from 'vue-chocolat'
// import cursorWhite from './assets/img/cursor-white'
// import cursorBlack from './assets/img/cursor-black'
export default {
  name: "App",
  components: {ServicesItem, SliderItem,}, 'vue-chocolat': vueChocolat,
  data() {
    return {
      // cursorWhite,
      // cursorBlack,
      arrowIcon,
      navIcon,
      sliderIcon1,
      burger,
      sliderIcon2,
      sliderIcon3,
      sliderSlide1,
      sliderSlide2,
      sliderSlide3,
      sliderSlide4,
      sliderSlide5,
      sliderSlide6,
      sliderSlideMobile1,
      sliderSlideMobile2,
      sliderSlideMobile3,
      sliderSlideMobile4,
      sliderSlideMobile5,
      sliderSlideMobile6,
      colaIcon,
      vogueIcon,
      pepsiIcon,
      fiveIcon,
      sberIcon,
      sliderSlides: [
        {id: 1, title: 'J7 интерфейс', descr: 'Интерфейс для совместных фотографий на фоне', icon: `${sliderSlide1}`},
        {id: 2, title: 'РБК / Сбербанк', descr: 'Сайт транслирующий выступления бизнес-спикеров', icon: `${sliderSlide2}`},
        {id: 3, title: '161.FM UI', descr: 'Мобильное приложение интернет-радио', icon: `${sliderSlide3}`},
        {id: 4, title: 'UI Pack #1', descr: 'Дизайны главных страниц сайта', icon: `${sliderSlide4}`},
        {id: 5, title: 'UI Pack #2', descr: 'Дизайны главных страниц сайта', icon: `${sliderSlide5}`},
        {id: 6, title: 'Polygraphy', descr: 'Печатная продукция и POS материалы', icon: `${sliderSlide6}`},
      ],
      services: [
        {id: 1, title: 'Веб дизайн', descr: ['Анализ отрасли', 'UX исследование', 'Прототипирование', 'Дизайн и проектирование', 'Frontend разработка', 'СЕО оптимизация'], isOpen: false},
        {id: 2, title: 'Мобильные приложения', descr: ['Аналитика и исследование', 'UX|UI проектирование', 'Дизайн-концепция', 'Прототипирование и тестирование', 'Разработка', 'Релиз MVP'], isOpen: false},
        {id: 3, title: 'Брендинг', descr: ['Разработка логотипов', 'Разработка брендбуков и гайдлайнов', 'Дизайн продукта и упаковка', 'Рекламные кампании', 'Разработка POS материалов', 'Дизайн соцсетей'], isOpen: false},
        {id: 4, title: 'Аудио продакшн', descr: ['Сведение электронной музыки', 'Мастеринг', 'Ghost writing', 'Выпуск на лейбле'], isOpen: false},
        {id: 5, title: 'Видео продакшн', descr: ['Съемка видео', 'Написание сценария', 'Монтаж', 'VFX'], isOpen: false},
      ],
      navImg: [sliderIcon1,sliderIcon2,sliderIcon3],
      navActive: 0,
      activeSlider: 0,
      circleState: 0,
      currentYear: 0,
      navMenu: false
    }
  },
  methods: {
    nextSlide() {
      if (this.navActive < 2) {
        setTimeout(() => this.navActive += 1, 1000)
      }
    },
    prevSlide() {
      if (this.navActive > 0) {
        this.navActive -= 1;
      }
    },
    getCurrentSlide() {
      return this.navImg[this.navActive];
    },
    getCurrentSliders() {
      return this.sliderSlides.slice(this.activeSlider, (this.activeSlider + 2));
    },
    setNextActiveSlider() {
      return this.activeSlider += 1;
    },
    setPrevActiveSlider() {
      return this.activeSlider -= 1;
    },
    openState(id) {
      const service = this.services.find(item => item.id === id);
      service.isOpen = !service.isOpen;
    },
    getCircleState() {
      let start = Date.now();
      let times = []
      if (this.circleState <= 0) {
        for (let i = 0; i < 366; i += 0.2) {
            setTimeout(() => {
              times.push(Date.now() - start);
              if (start + 350 < Date.now()) {
                this.circleState = i;
                this.currentYear = (i / 50).toFixed(0);
              }
            }, 400)
        }
      }
    },
    getAnchors() {
      const anchors = document.querySelectorAll('a[href*="#"]')
        for (let anchor of anchors) {
          anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = anchor.getAttribute('href')
            
            document.querySelector('' + blockID).scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })
          })
        }
    },
  },
  computed: {
    classesNavMenu() {
        return  {
          'nav-items': true, 
          'nav-items--active': this.navMenu
        }
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    const optionsAbout = {
      threshold: 0.5
    }
    const someFn = () => {
      this.getCircleState();
    }
    const callback = function(entries) {
      if (entries[0].isIntersecting) {
        someFn();
      }
      return entries;
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);

    this.getAnchors();

    const funThreeBlocks = () => {
      this.$refs.about.classList.add("el-show");
      this.$refs.customer.classList.add("el-show");
      this.$refs.partners.classList.add("el-show");
    }
    const callbackAbout = (entries) => {
      if (entries[0].isIntersecting) {
        funThreeBlocks();
      }
      return entries;
    }

    const observerThreeBlocks = new IntersectionObserver(callbackAbout, optionsAbout);
    observerThreeBlocks.observe(this.$refs.about);
    observerThreeBlocks.observe(this.$refs.customer);
    observerThreeBlocks.observe(this.$refs.partners);
  },
  watch: {
    activeSlider() {
      if (this.activeSlider === 5) {
        this.activeSlider = 0;
      }
      if (this.activeSlider < 0) {
        this.activeSlider = 5;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/normalize.css";
@import "assets/css/fonts.css";
@import "assets/css/style.css";

.none {
  display: none !important;
}

.wrapper {
  width: 100%;
  height: 100%;
}
.container {
  max-width: 1472px;
  width: 100%;
  
  margin: 0 auto;

  padding-left: 16px;
  padding-right: 16px;
}
.promo {
  display: flex;
  height: 850px;
  background: #171719;
  cursor: url(../src/assets/img/cursor-white.svg), default;

  @media (max-width: 991px) {
    height: 700px;
  }

  @media (max-width: 767px) {
    height: 535px;
  }
}
.slider {
  display: flex;
  width: 720px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 3s;
  }

  @media (max-width: 991px) {
    display: none;
  }
}

.nav-mobile {
  display: none;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;

    width: 100%;
  }

  &__burger {
    position: relative;
    z-index: 100;

    background-color: unset;
    border: unset;
    cursor: pointer;
  }

  .nav-items {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    position: absolute;
    left: 0;
    top: 0;

    padding-top: 63px;
    padding-bottom: 20px;

    background-color: #000;
    transform: translateY(-100%);

    transition: transform .5s linear;

    &--active {
      transform: translateY(0);
    }
  }
  
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 0 0;
  height: 100%;

  @media (max-width: 1434px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 991px) {
    align-items: flex-start;
    width: 100%;

    padding-left: 0;
    padding-right: 0;
  }

  &__bar {
    font-family: 'IBM Plex Mono', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 660px;
    height: 60px;

    @media (max-width: 991px) {
      width: 100%;
    }
    
    @media (max-width: 767px) {
      display: none;
    }

    &__line {
      width: 100%;
      height: 1px;
      background-color: #E4E4E4;
    }
  }
  &__name {
    font-family: 'STRRETCHSANS', sans-serif;
    display: flex;
    width: 580px;
    font-size: 62px;
    margin: 118px 0 40px 0;
    color: #fff;
    line-height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 767px) {
      width: 100%;
      font-size: 35px;
    }

    @media (max-width: 575px) {
      margin: 219px 0 40px 0;
      font-size: 30px;
    }
  }
  &__slogan {
    position: relative;

    font-family: 'IBM Plex Mono', sans-serif;
    width: 600px;
    height: 100px;
    display: flex;
    align-items: center;
    font-size: 22px;
    color: #fff;
    border-bottom: 1px solid #E4E4E4;
    border-top: 1px solid #E4E4E4;
    margin: 0 0 20px 0;

    @media (max-width: 991px) {
      width: 100%;
      margin-top: 18px;

      order: 1;
    }

    @media (max-width: 575px) {
      height: 43px;
      padding-left: 16px;

      font-size: 10px;
    }

    .button {
      display: none;

      @media (max-width: 991px) {
        display: flex;

        position: absolute;
        right: 0; 
      }

      @media (max-width: 359px) {
        width: 84px;
        height: 84px;
      }
    }
  }
  &__social {
    font-family: 'IBM Plex Mono', sans-serif;
    align-self: flex-end;
    display: flex;
    font-size: 16px;
    color: #fff;
    user-select: none;
    cursor: pointer;
    margin: 0 30px 0 0;

    @media (max-width: 991px) {
      align-self: flex-start;
    }

    @media (max-width: 575px) {
      font-size: 10px;
    }

    &__item {
      transition: opacity 0.3s linear;
      color: #fff;
      text-decoration: none;
      &:hover {
        opacity: 0.9;
      }
      &:active {
        opacity: 0.8;
      }
      &:first-child {
        margin: 0 30px 0 0;
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 165px;
    margin: 100px 0 0 0 ;

    @media (max-width: 991px) {
      display: none;
    }
  }
}
.button {
  font-family: 'IBM Plex Mono', sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 164px;
  border-radius: 100%;
  font-size: 15px;
  color: #fff;
  background-color: #C51212;
  user-select: none;
  text-decoration: none;
  &:hover {
    transition: 1.9s;
    background-color: #fff;
    color: #b51111;
  }
  &:active {
    background-color: #fff;
    color: #9f1010;
  }

  @media (max-width: 575px) {
    width: 100px;
    height: 100px;

    padding-left: 10px;
    padding-right: 10px;

    text-align: center;
    font-size: 12px;
  }
}
.nav-arrows {
  font-family: 'STRRETCHSANS', sans-serif;
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  user-select: none;
  width: 250px;
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 62px;
    color: #fff;
    &:first-child {
      margin: 0 30px 0 0;
    }
    &__arrow {
      display: flex;
      width: 100px;
      height: 18px;
      margin: 20px 0 0 0;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
.nav-arrows__item.right {
  font-size: 38px;
  opacity: 0.7;
  .nav-arrows__item__arrow {
    transform: scale(-1, 1);
    width: 77px;
  }
}
.nav-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &__item {
    padding: 7px 15px;
    border: 1px solid transparent;
    user-select: none;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    &:hover {
      border: 1px dashed #9C9C9C;
    }
  }
}
.portfolio {
  display: flex;
  justify-content: space-between;
  padding: 150px 0;
  border-bottom: 1px solid #E4E4E4;
  cursor: url(../src/assets/img/cursor-black.svg), default;

  
  .title {
    margin-right: 15px;
  }

  @media (max-width: 1199px) {
    .container {
      flex-direction: column;
    }
    
    .title {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 991px) {
    padding: 0 0;

    .container {
      display: none !important;
    }
  }

  &__slider {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 624px;
    overflow-x: hidden;

    @media (max-width: 1199px) {
      width: 100%;
    }
  }

  .container {
    display: none;
  }

  &__image {
    display: none;

    @media (max-width: 991px) {
      display: block;
      width: 100%;
      margin-top: -1px;
      
      background-color: #171719;
    }

    img {
      display: block;
      width: 100%;
      height: 200px;

      object-fit: cover;
    }
  }
}
.title {
  font-family: 'IBM Plex Mono', sans-serif;
  font-weight: bold;
  font-size: 36px;
  color: #222222;

  @media (max-width: 575px) {
    font-size: 16px;
  }
}
.about {
  display: flex;
  justify-content: space-between;
  padding: 64px 0 164px 0;
  border-bottom: 1px solid #E4E4E4;
  transform: translateY(20px);
  cursor: url(../src/assets/img/cursor-black.svg), default;
  opacity: 0;

  @media (max-width: 1199px) {
    padding: 100px 0 100px 0;
  }

  @media (max-width: 991px) {
    padding: 50px 0 50px 0;

    .container {
      flex-direction: column;
    }
  }

  @media (max-width: 575px) {
    padding: 30px 0 30px 0;
    border-bottom: none;
  }

  &__descr {
    font-family: 'IBM Plex Mono', sans-serif;
    font-size: 18px;
    width: 220px;
    height: 140px;
    line-height: 154%;
    margin: 36px 0 0 0;

    @media (max-width: 991px) {
      max-width: 500px;
      width: unset;
      height: unset;

      margin-bottom: 20px;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }
}

.about.el-show {
  opacity: 1;
  transition: all 3s;
  transform: translateY(20%);
  }

.stats {
  display: flex;
  justify-content: space-between;
  &__item {
    font-family: 'IBM Plex Mono', sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 212px;
    height: 212px;
    border-radius: 100%;
    margin: 0 54px 0 0;
    background: #fff;

    @media (max-width: 1199px) {
      margin: 0 50px 0 0;
      width: 150px;
      height: 150px;
    }

    @media (max-width: 767px) {
      margin: 0 24px 0 0;

      width: 73px;
      height: 73px;
    }

    &__value {
      font-size: 82px;

      @media (max-width: 1199px) {
        font-size: 50px;

        @media (max-width: 767px) {
          font-size: 32px;
        }
      }
    }
    &__descr {
      font-size: 24px;

      @media (max-width: 1199px) {
        font-size: 20px;
      }

      @media (max-width: 767px) {
        font-size: 12px;
      }
    }
    &__circle {
      position: absolute;
      width: 214px;
      height: 214px;
      z-index: -100;
      border-radius: 100%;

      @media (max-width: 1199px) {
        width: 162px;
        height: 162px;
      }

      @media (max-width: 767px) {
        width: 75px;
        height: 75px;
      }
    }
    &:last-child {
      margin: 0;
    }
    svg {
      position: absolute;
    }
  }
}

.customer {
  padding-top: 100px;
  padding-bottom: 163px;
  border-bottom: 1px solid #E4E4E4;
  cursor: url(../src/assets/img/cursor-black.svg), default;
  opacity: 0;

  
  @media (max-width: 1199px) {
    padding: 100px 0 100px 0;
  }

  @media (max-width: 991px) {
    padding: 50px 0 50px 0;
  }

  @media (max-width: 575px) {
    padding: 30px 0 30px 0;
    border-bottom: none;
  }

  .container {
    justify-content: flex-start !important;
  }

  .title {
    margin-top: 0 !important;
    flex-shrink: 0;
  }

   &__descr {
    // margin-left: 280px;
    // max-width: 586px;

    font-size: 18px;
    width: 220px;
    height: 140px;
    line-height: 154%;
    margin: 36px 0 0 170px;

    font-family: 'IBM Plex Mono', sans-serif;;
    // font-size: 25px;
    // line-height: 1;
    // color: #222222;

    @media (max-width: 1199px) {
      margin-left: 60px;
    }

    @media (max-width: 767px) {
      max-width: 350px;
      margin-left: 29px;

      font-size: 14px;
    }
  }

}

.customer.el-show {
  opacity: 1;
  transition: all 3s;
  transform: translateY(20%);
  }

.partners {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 200px 0;
  cursor: url(../src/assets/img/cursor-black.svg), default;
  opacity: 0;

  @media (max-width: 1199px) {
    padding: 100px 0 100px 0;
  }

  @media (max-width: 991px) {
    padding: 50px 0 50px 0;
  }

  @media (max-width: 575px) {
    padding: 30px 0 30px 0;
  }

  .title {
    @media (max-width: 1295px) {
      margin-bottom: 20px;
    }
  }

  .container {
    @media (max-width: 1295px) {
      flex-direction: column;
    }
  }

  @media (max-width: 575px) {
    padding: 30px 0 30px 0;
  }

  &__block--image1 {
    @media (max-width: 767px) {
      width: 84px;
    }
  }

  &__block--image2 {
    @media (max-width: 767px) {
      width: 80px;
    }
  }

  &__block--image3 {
    @media (max-width: 767px) {
      width: 115px;
    }
  }

  &__block--image4 {
    @media (max-width: 767px) {
      width: 126px;
    }
  }

  &__block--image5 {
    @media (max-width: 767px) {
      width: 86px;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 575px) {
      justify-content: center;
    }
     
    &__item {
      display: flex;
      margin: 0 54px 20px 0;
      
      @media (max-width: 575px) {
        margin: 0 31px 20px 0;
      }

      &:last-child {
        margin: 0;
      }
    }
  }
}

.partners.el-show {
  opacity: 1;
  transition: all 3s;
  transform: translateY(20%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.services {
  display: flex;
  justify-content: space-between;
  padding: 100px 0 130px 0;
  background: #171719;

  @media (max-width: 767px) {
    padding: 62px 0 39px 0;
  }

  .title {
    @media (max-width: 1199px) {
      margin-bottom: 30px;
    }

    @media (max-width: 575px) {
      display: none;
    }
  }

  .container {
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    max-width: 970px;
    width: 100%;
  }
}
.started {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 200px 0;
  overflow-x: hidden;
  cursor: url(../src/assets/img/cursor-black.svg), default;

  @media (max-width: 767px) {
    padding: 55px 0;
  }

  &__text {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    top: 240px;
    position: absolute;
    width: 4000px;
    padding: 0 0 0 820px;
    font-size: 80px;
    color: #171719;
    z-index: -100;
    animation: runString 5s linear infinite;

    font-size: 80px;

      @media (max-width: 767px) {
        margin-top: -152px;
        font-size: 40px;
        animation: runStringMobile 2s linear infinite;
      }
    }

  &__mail {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 36px;
    margin: 80px 0 0 0;
    color: #000;
    text-decoration: none;
    border-bottom: 2px solid #222222;

    @media (max-width: 575px) {
      margin: 53px 0 0 0;
      font-size: 16px;
    }
  }
}

@keyframes runString {
  0% {
    transform: translate(0%, 0);
  }

  100% {
    transform: translate(-32%, 0);
  }
}

@keyframes runStringMobile {
  0% {
    transform: translate(0%, 0);
  }

  100% {
    transform: translate(7%, 0);
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px 0 54px 0;
  background: #171719;
  cursor: url(../src/assets/img/cursor-white.svg), default;

  @media (max-width: 575px) {
    height: 297px;
    align-items: unset;
  }
  
  &__arrow {
    width: 45px;
    height: 46px;
    background: url("./assets/img/another-arrow.png") center center/cover no-repeat;

    @media (max-width: 575px) {
      width: 28px;
      height: 24px;

      margin-top: -8px;

      background: url("./assets/img/another-arrow2.png") center center/cover no-repeat;
    }
  }
  &__social {
    font-family: 'IBM Plex Mono', sans-serif;
    display: flex;
    font-size: 16px;
    margin: 0 0 0 150px;

    @media (max-width: 767px) {
      margin-left: 0;
    }

    @media (max-width: 575px) {
      font-size: 12px;
    }

    &__item {
      color: #fff;
      text-decoration: none;
      &:first-child {
        margin: 0 90px 0 0;
        
        @media (max-width: 575px) {
          margin: 0 50px 0 0;
          font-size: 12px;
        }
      }
    }
  }
  &__politic {
    font-family: 'IBM Plex Mono', sans-serif;
    color: #fff;
    text-decoration: underline;

    @media (max-width: 575px) {
      display: none;
    }
  }
}

.separator {
  align-self: flex-start;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 440px;
  left: 50%;
  transform: translate(-50%, 0);
  &__item {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 138px;
    border-radius: 100%;
    background: #202020;
    transition: opacity 0.1s linear;
    &__arrow {
      width: 69px;
      height: 138px;
      background: url("./assets/img/Sliderarrow.svg") center center/30px no-repeat;
    }

  }
}

.separator__item__arrow.left {
  transform: scale(-1, 1);
}


</style>