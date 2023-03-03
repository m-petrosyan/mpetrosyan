<template>
  <NavigationComponent/>
  <main>
    <SkillsComponent/>
    <PortfolioComponent/>
  </main>
</template>

<script setup>
import NavigationComponent from "@/components/NavigationComponent.vue";
import SkillsComponent from "@/components/SkillsComponent.vue";
import PortfolioComponent from "@/components/PortfolioComponent.vue";</script>

<style scoped>
main {
  max-width: 1280px;
  margin: auto;
}
</style>
