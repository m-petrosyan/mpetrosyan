<template>
  <section id="header">
    <div class="content">
      <p class="welcome">Welcome to my CV page</p>
      <div class="animaton-container">
        <p>Hello 👋 I'm</p>
        <div class="animation">
          <div class="item first">
            <div class="text">Miqayel Petrosyan</div>
          </div>
          <div class="item second">
            <div class="text">Web Developer</div>
          </div>
          <div class="item third">
            <div class="text">Full stack developer</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped lang="scss">
@import 'src/assets/style/vars.scss';

#header {
  background-image: url("@/assets/images/header/sectionbg.jpg");
  background-size: cover;
  text-transform: uppercase;
  font-size: 2.26rem;
  height: 500px;
  display: flex;
  align-items: center;

  @media all and (max-width: $m) {
    height: 300px;
  }

  @media all and (max-width: $s) {
    height: 200px;
  }

  .content {
    .welcome {
      background-color: white;
      padding: 0 20px;
      text-align: center;
      animation: toggle-welcome 16s infinite;
      @keyframes toggle-welcome {
        0% {
          opacity: 0;
        }
        45% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        95% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      @media all and (max-width: $s) {
        font-size: 25px;
        animation: none;
      }
    }

    .animaton-container {
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: toggle-hello 16s infinite;
      transition: none;
      @keyframes toggle-hello {
        0% {
          opacity: 1;
        }
        45% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        95% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @media all and (max-width: $s) {
        display: none;
      }

      p {
        text-shadow: 0 0 7px rgba(255, 255, 255, .3), 0 0 3px rgba(255, 255, 255, .3);
      }

      .animation {
        height: 50px;
        overflow: hidden;
        margin-left: 1rem;

        .item {
          &:first-child {
            animation: text-animation 8s infinite;
          }

          &.first .text {
            background-color: #20a7d8;
          }

          &.second div {
            background-color: #CD921E;
          }

          &.third div {
            background-color: #c10528;
          }

          .text {
            padding: 0px 0.75rem;
            height: 50px;
            line-height: 50px;
            color: white;
            display: inline-block;
          }

          @keyframes text-animation {
            10% {
              margin-top: 0;
            }
            20% {
              margin-top: -60px;
            }
            30% {
              margin-top: -60px;
            }
            40% {
              margin-top: -120px;
            }
            60% {
              margin-top: -120px;
            }
            70% {
              margin-top: -60px;
            }
            80% {
              margin-top: -60px;
            }
            90% {
              margin-top: 0;
            }
            100% {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}


</style>