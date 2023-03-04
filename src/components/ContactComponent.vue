<template>
  <section id="contacts">
    <div class="content">
      <h3 class="section-title">
        Contacts
      </h3>
      <div class="wrapper" :class="wClass">
        <a href="https://www.linkedin.com/in/miqayel-petrosyan-754349185/" target="_blank" class="item">
          <div class="icon">
            <img src="@/assets/images/contact/linkedin.png" alt="">
          </div>
          <div class="info">
            Linkedin
          </div>
        </a>
        <a href="https://www.facebook.com/miqayel.petrosyan.1/" target="_blank" class="item">
          <div class="icon">
            <img src="@/assets/images/contact/fb.png" alt="">
          </div>
          <div class="info">
            Facebook
          </div>
        </a>
        <a href="tel:095101585" class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
            </svg>
          </div>
          <div class="info">
            095101585
          </div>
        </a>
        <a href="mailto:miqayelpetrosyan@gmail.com" class="item">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
              <path stroke-linecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"/>
            </svg>
          </div>
          <div class="info">
            miqayelpetrosyan@gmail.com
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import mainMixin from "@/mixins/mainMixin";

export default {
  name: "ContactsComponent",
  mixins: [mainMixin]
}
</script>

<style scoped lang="scss">
#contacts {
  .content {
    .wrapper {
      display: flex;
      gap: 130px;
      flex-wrap: wrap;
      justify-content: center;

      &.m {
        flex-wrap: wrap;

        .item {
          width: 25%;
        }
      }

      &.s {
        flex-direction: column;
      }

      .item {
        text-align: center;
        color: var(--grey);

        &:hover {
          .icon {
            transform: rotate(30deg);
          }
        }

        .icon {
          transition: .3s;

          svg, img {
            height: 30px;
          }
        }

        .info a {

        }
      }
    }
  }
}
</style>