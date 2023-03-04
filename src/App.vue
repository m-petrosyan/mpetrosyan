<template>
  <NavigationComponent/>
  <main>
    <SkillsComponent/>
    <PortfolioComponent/>
    <ContactComponent/>
  </main>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  components: {
    ContactComponent,
    NavigationComponent,
    SkillsComponent,
    PortfolioComponent
  },
  mounted() {
    window.location.hash = location.hash
    console.log(location.hash)
  }
}
</script>

<style scoped>
main {
//margin: auto auto 100px;
}
</style>
