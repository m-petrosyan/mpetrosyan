<template>
  <section id="portfolio">
    <div class="content">
      <h3 class="section-title">
        Portfolio
      </h3>
      <div class="wrapper">
        <div class="card" v-for="item in projects" :key="item.title"
             :class="{'in-progress': !item.github && !item.url }">
          <figure class="item"
                  @click="openModal ? openItem(item) :  openLink(item.url ?? item.github)">
            <div class="img" :style="{backgroundImage: `url(${item.img})`}">
              <div class="info">
                <a class="btn" @click.stop.prevent="openLink(item.url)" target="_blank" v-if="item.url">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z"/>
                    <path fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                          clip-rule="evenodd"/>
                  </svg>
                </a>
                <a class="btn" @click.stop.prevent="openLink(item.github)" target="_blank" v-if="item.github">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <button v-if="openModal" class="btn" @click.stop.prevent="openItem(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                          clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="technologies">
              <template v-for="i in technologies" :key="i.title">
                <div class="item" v-if="item.technologies.some(el => i.title === el)"
                     :style="{backgroundImage: `url(${i.img})`}"/>
              </template>
            </div>
          </figure>
        </div>
      </div>
    </div>
    <PortfolioModal v-if="item" v-model:item="item" :directory="directory"/>
  </section>
</template>
<script>
import mainMixin from "@/mixins/mainMixin";
import PortfolioModal from "@/components/PortfolioModal.vue";
import tms from "@/assets/images/portfolio/tms.jpg"
import mpetrosyan from "@/assets/images/portfolio/mpetrosyan.jpg"
import colorizer from "@/assets/images/portfolio/colorizer.jpg"
// import weather from "@/assets/images/portfolio/1.jpg"
import weather from "@/assets/images/portfolio/weatherapp.jpg"
import tmsMockup from "@/assets/images/portfolio/tmsMockup.jpg"
import technologiesMixin from "@/mixins/technologiesMixin";

export default {
  name: "PortfolioComponent",
  components: {PortfolioModal},
  mixins: [mainMixin, technologiesMixin],
  data() {
    return {
      directory: 'portfolio',
      item: null,
      openModal: false,
      projects: [
        {
          title: 'Task management system',
          technologies: ['HTML 5', 'CSS 3', 'Tailwind Css', 'JavaScript', 'PHP', 'SQL', 'Laravel', 'Vue.js', 'Vuex'],
          img: tms,
          mockup: tmsMockup,
          url: 'https://tms.mpetrosyan.com/',
          github: 'https://github.com/m-petrosyan/tms',
          description: 'Welcome to our task management website! Here\'s a guide on how to use platform:\n' +
              'Registering an Account: To use our website, you need to register for an account. Click on the "Register" button on the homepage and fill out the required information, including your name, email address, and password.\n' +
              'Editing Your Profile: Once you\'re logged in, you can edit your profile information by clicking on the "Profile" button in the navigation bar. Here, you can update your name, email, and password.\n' +
              'Creating a Task: To create a new task, click on the "Create Task" button on the homepage. You will be prompted to fill out the task details, such as the title, description, due date, and assignee.\n' +
              'Assigning an Assignee: You can assign a task to a specific user by selecting their name from the drop-down menu in the "Assignee" field. If you leave this field blank, the task will be assigned to you by default.\n' +
              'Updating Task Progress: As you work on a task, you can update its progress by clicking on the task and adjusting the progress bar. This will help you and your team track the status of the task.\n' +
              'Searching for Tasks: To search for tasks, click on the "Search" button in the navigation bar. Here, you can search for tasks based on their title or description.\n' +
              'Editing Your Own Tasks: You can only edit tasks that you have created. To edit a task, click on the task and make the necessary changes. If you need to assign the task to a different user, you can do so by adjusting the "Assignee" field.'
        },
        {
          title: 'Weather app',
          technologies: ['HTML 5', 'CSS 3', 'Tailwind Css', 'JavaScript', 'PHP', 'SQL', 'Laravel', 'Vue.js', 'Vuex'],
          img: weather,
          url: 'https://weatherapp.mpetrosyan.com/',
          github: 'https://github.com/m-petrosyan/weather-app',
          description: ''
        },
        // {
        //   title: 'Woodmart',
        //   img: woodmart,
        //   slogan: '"Bringing Nature into Your Home: Quality Wood Products for Every Room!"',
        //   url: 'https://preview.themeforest.net/item/woodmart-responsive-shopify-template/full_screen_preview/21955531?_ga=2.266157647.1310448962.1677618364-130833021.1677101247&_gac=1.193103711.1677101247.CjwKCAiAl9efBhAkEiwA4Toriqhb6g9XQ3nqYRPrMlCrfaHXPDoWaG2GKFbEmgfhc73EtewOHYJGMRoC6JoQAvD_BwE',
        //   github: 'https://github.com/m-petrosyan/woodmart',
        //   description: ''
        // },
        {
          title: 'Mpetrosyan',
          technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'Vue.js'],
          img: mpetrosyan,
          url: 'https://mpetrosyan.com',
          github: 'https://github.com/m-petrosyan/mpetrosyan',
          description: ''
        },
        {
          title: 'Colorizer',
          technologies: ['HTML 5', 'CSS 3', 'Tailwind Css', 'JavaScript', 'PHP', 'SQL', 'Laravel', 'Vue.js', 'Vuex'],
          img: colorizer,
          url: 'https://colorizer.mpetrosyan.com',
          github: null,
          description: ''
        },
      ]
    }
  },
  methods: {
    openItem(item) {
      this.item = item
    },
    openLink(link) {
      window.open(link);
    },

  },
}
</script>

<style scoped lang="scss">
@import 'src/assets/style/vars.scss';

#portfolio {
  .content {
    .wrapper {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 80px 10px;

      @media all and (max-width: $m) {
        grid-template-columns: auto auto;
      }
      @media all and (max-width: $s) {
        grid-template-columns: auto;
      }

      .card {

        &:not(.in-progress):hover .item .img .info {
          height: 40%;
          opacity: 1;
        }

        &.in-progress {
          position: relative;

          &::before {
            content: 'in progress';
            font-size: 25px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
          }

          figure {
            filter: blur(3px);
            opacity: .3;
            pointer-events: none
          }
        }

        & figure {
          position: relative;
          overflow: hidden;

          &::before {
            position: absolute;
            top: 0;
            left: -75%;
            z-index: 1;
            display: block;
            content: '';
            width: 50%;
            height: 100%;
            background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
            background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%);
            -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
          }

          &:hover::before {
            -webkit-animation: shine 1.75s;
            animation: shine 1.75s;
          }

          @-webkit-keyframes shine {
            100% {
              left: 125%;
            }
          }
          @keyframes shine {
            100% {
              left: 125%;
            }
          }
        }

        .item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          text-align: center;

          .img {
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            height: 150px;
            border-radius: 10px;
            width: 276px;
            margin: auto;
            overflow: hidden;

            .info {
              z-index: 2;
              height: 0;
              opacity: 0;
              transition: all .3s;
              width: 100%;
              display: flex;
              gap: 0 30px;
              justify-content: center;
              align-items: center;
              position: absolute;
              bottom: 0;
              background-color: #525252db;

              .btn {
                &:hover {
                  svg {
                    fill: white;
                  }
                }

                svg {
                  transition: .3s;
                  height: 35px;
                  color: white;
                  fill: #dddddd;
                }
              }
            }
          }

          .title {
            margin-top: 10px;
          }

          .technologies {
            margin-top: 20px;
            display: flex;
            justify-content: center;

            .item {
              background-repeat: no-repeat;
              background-size: contain;
              height: 20px;
              width: 20px;
            }
          }
        }
      }
    }
  }
}
</style>