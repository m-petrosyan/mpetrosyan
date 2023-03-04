<template>
  <header :class="{'scroll':scroll}">
    <nav class="navbar" :class="wClass">
      <RouterLink to="/" class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" height="25">
      </RouterLink>
      <ul class="menu">
        <li v-for="item in menu" :key="item.title" :id="item.id" @click="changeHash(item.title)">
          <a :href="'#'+item.title" :class="{'active': this.hash === item.title}">{{ item.title }}</a>
        </li>
        <li>
          <a target="_blank" href="/src/assets/other_files/cv.pdf">Cv</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import mainMixin from "@/mixins/mainMixin";

export default {
  name: "NavigationComponent",
  mixins: [mainMixin],
  data() {
    return {
      scroll: false,
      hash: location.hash,
      menu: [
        {title: 'skills'},
        {title: 'portfolio'},
        {title: 'contacts'},
      ]
    }
  },
  mounted() {
    this.hash = window.location.hash.slice(1)
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scroll = window.top.scrollY > 0
    },
    changeHash(el) {
      this.hash = el
    }
  },
}
</script>

<style scoped lang="scss">


header {
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  backdrop-filter: blur(3px);
  padding: 10px 10vw;
  font-weight: 500;
  z-index: 5;
  transition: all 0.5s;

  &.scroll {
    height: 40px;
    padding: 5px 10vw;
    background-color: rgb(243 243 239 / 93%);
    box-shadow: rgb(99 99 99 / 20%) 0 -1px 8px 0px;

    .navbar {
      .logo {
        img {
          height: 20px;
        }
      }

      .menu {
        a {
          font-size: 15px;
        }
      }
    }
  }

  .navbar {
    display: flex;
    justify-content: space-between;


    &.s {
      justify-content: center;

      .menu {
        display: none;
      }
    }

    .logo {
      img {
        vertical-align: middle;
        transition: .3s;
      }
    }

    .menu {
      display: flex;
      justify-content: space-between;
      width: 300px;
      list-style: none;

      a {
        background: linear-gradient(to right, var(--green), var(--green) 50%, #181818 50%);
        text-transform: capitalize;
        font-size: 17px;
        transition: all .3s;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 100%;
        background-position: 100%;

        &:hover {
          background-position: 0 100%;
        }

        &.active {
          background-position: 0 100%;
          //background: linear-gradient(to right, var(--green), var(--green) 50%, #181818 50%);
          //color: var(--green);
        }
      }
    }
  }
}
</style>