<template>
  <NavigationComponent :wClass="wClass"/>
  <main>
    <SkillsComponent :wClass="wClass"/>
    <PortfolioComponent :wClass="wClass"/>
    <ContactComponent :wClass="wClass"/>
  </main>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import appMixin from "@/mixins/appMixin";

export default {
  mixins: [appMixin],
  components: {
    ContactComponent,
    NavigationComponent,
    SkillsComponent,
    PortfolioComponent
  }
}
</script>

<style scoped>
main {
//margin: auto auto 100px;
}
</style>
