<template>
  <section id="skills">
    <div class="content">
      <h3 class="section-title">
        Skills
      </h3>
      <div class="wrapper">
        <div class="card" v-for="item in technologies" :key="item.title">
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
import technologiesMixin from "@/mixins/technologiesMixin";

export default {
  name: "SkillsComponent",
  mixins: [mainMixin, technologiesMixin],
  data() {
    return {
      var2: '600px',
      directory: 'skills_icons',
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