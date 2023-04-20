<template>
  <Teleport to="body" class="popup">
    <div class="modal">
      <div class="modal-content">
        <button class="close-modal" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="info">
          <div class="img" :style="{backgroundImage: `url(${item.mockup})`}"/>
          <h3 class="title"> {{ item.title }}</h3>
          <p v-html="item.description"/>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import mainMixin from "@/mixins/mainMixin";

export default {
  name: "PortfolioModal",
  mixins: [mainMixin],
  props: {
    item: Object,
    directory: String
  },
  methods: {
    closeModal() {
      this.$emit('update:item', null)
    }
  }
}
</script>

<style scoped lang="scss">
@import 'src/assets/style/vars.scss';

.modal {
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000eb;

  .modal-content {
    position: relative;
    border-radius: 5px;
    margin: 100px auto;
    background-color: white;
    min-height: 200px;
    width: 80%;
    max-width: 1000px;
    padding: 50px;

    @media all and (max-width: $m) {
      padding: 20px;
    }

    .close-modal {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #181818;
      width: 40px;

      @media all and (max-width: $m) {
        width: 35px;
        right: -3px;
        top: -3px;
      }
    }

    .info {
      max-width: 1000px;
      margin: auto;

      .img {
        height: 260px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top;

        @media all and (max-width: $m) {
          height: 185px;
        }
        @media all and (max-width: $s) {
          height: 122px;
        }
      }

      .title {
        margin-top: 20px;
      }
    }
  }
}
</style>