<template>
  <section id="skills">
    <div class="content">
      <h3 class="section-title">
        Skills
      </h3>
      <div class="wrapper">
        <div class="card" v-for="item in skills" :key="item.title">
          <figure class="item">
            <div class="logo" :style="{backgroundImage: getImg(item.img)}"/>
            <div class="title">{{ item.title }}</div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mainMixin from "@/mixins/mainMixin";

export default {
  name: "SkillsComponent",
  mixins: [mainMixin],
  data() {
    return {
      directory: 'skills_icons',
      skills: [
        {
          title: 'HTML 5',
          img: 'html.svg'
        },
        {
          title: 'CSS 3',
          img: 'css.svg'
        },
        {
          title: 'Bootstrap',
          img: 'bootstrap.svg'
        },
        {
          title: 'Tailwind Css',
          img: 'tailwind.svg'
        },
        {
          title: 'JavaScript',
          img: 'js.svg'
        },
        {
          title: 'jQuery',
          img: 'jquery.svg'
        },
        {
          title: 'Vue.js',
          img: 'vue.svg'
        },
        {
          title: 'Vuex',
          img: 'vuex.svg'
        },
        {
          title: 'React (basic)',
          img: 'react.svg'
        },
        {
          title: 'PHP',
          img: 'php.svg'
        },
        {
          title: 'SQL',
          img: 'sql.svg'
        },
        {
          title: 'Laravel',
          img: 'laravel.svg'
        },
        {
          title: 'Livewire',
          img: 'livewire.svg'
        },
        {
          title: 'Git',
          img: 'git.svg'
        },
        {
          title: 'Photoshop',
          img: 'ps.svg'
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#skills {
  .content {
    .wrapper {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 30px 10px;

      .card {

        &:hover .item {
          animation: flash 1.5s;
          transform: scale(1.2);
          transition: 0.5s;

          @keyframes flash {
            0% {
              opacity: .4;
            }
            100% {
              opacity: 1;
            }
          }

        }

        .item {
          display: flex;
          flex-direction: column;
          text-align: center;

          .logo {
            background-position: center;
            background-repeat: no-repeat;
            background-size: 90px;
            width: 100%;
            height: 100px;
          }
        }
      }
    }
  }
}
</style>