<template>
  <section id="skills">
    <div class="content">
      <h3 class="section-title">
        Skills
      </h3>
      <div class="wrapper">
        <div class="card" v-for="item in skills" :key="item.title">
          <figure class="item">
            <div class="logo" :style="{backgroundImage: `url(${item.img})`}"/>
            <div class="title">{{ item.title }}</div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mainMixin from "@/mixins/mainMixin";
import html_icon from "@/assets/images/skills_icons/html.svg"
import css_icon from "@/assets/images/skills_icons/css.svg"
import bootstrap_icon from "@/assets/images/skills_icons/bootstrap.svg"
import tailwind_icon from "@/assets/images/skills_icons/tailwind.svg"
import js_icon from "@/assets/images/skills_icons/js.svg"
import jquery_icon from "@/assets/images/skills_icons/jquery.svg"
import php_icon from "@/assets/images/skills_icons/php.svg"
import sql_icon from "@/assets/images/skills_icons/sql.svg"
import vue_icon from "@/assets/images/skills_icons/vue.svg"
import vuex_icon from "@/assets/images/skills_icons/vuex.svg"
import react_icon from "@/assets/images/skills_icons/react.svg"
import laravel_icon from "@/assets/images/skills_icons/laravel.svg"
import livewire_icon from "@/assets/images/skills_icons/livewire.svg"
import ps_icon from "@/assets/images/skills_icons/ps.svg"
import git_icon from "@/assets/images/skills_icons/git.svg"

export default {
  name: "SkillsComponent",
  mixins: [mainMixin],
  data() {
    return {
      var2: '600px',
      directory: 'skills_icons',
      skills: [
        {
          title: 'HTML 5',
          img: html_icon
        },
        {
          title: 'CSS 3',
          img: css_icon
        },
        {
          title: 'Bootstrap',
          img: bootstrap_icon
        },
        {
          title: 'Tailwind Css',
          img: tailwind_icon
        },
        {
          title: 'JavaScript',
          img: js_icon
        },
        {
          title: 'jQuery',
          img: jquery_icon
        },
        {
          title: 'PHP',
          img: php_icon
        },
        {
          title: 'SQL',
          img: sql_icon
        },
        {
          title: 'Vue.js',
          img: vue_icon
        },
        {
          title: 'Vuex',
          img: vuex_icon
        },
        {
          title: 'React (basic)',
          img: react_icon
        },
        {
          title: 'Laravel',
          img: laravel_icon
        },
        {
          title: 'Livewire',
          img: livewire_icon
        },
        {
          title: 'Git',
          img: git_icon
        },
        {
          title: 'Photoshop',
          img: ps_icon
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/style/vars.scss';

#skills {
  .content {
    .wrapper {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 30px 10px;

      @media all and (max-width: $m) {
        grid-template-columns: auto auto auto;
      }
      @media all and (max-width: $s) {
        grid-template-columns: auto auto;
      }

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