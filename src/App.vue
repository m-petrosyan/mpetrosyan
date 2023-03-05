<template>
  <NavigationComponent/>
  <main>
    <HeaderComponent/>
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
import appMixin from "@/mixins/appMixin";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  mixins: [appMixin],
  components: {
    HeaderComponent,
    ContactComponent,
    NavigationComponent,
    SkillsComponent,
    PortfolioComponent
  }
}
</script>

<style>

</style>
