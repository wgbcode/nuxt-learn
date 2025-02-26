<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// SEO 和 Meta
useHead({
  title: "NEWARE",
  meta: [{ name: "description", content: "我的神奇网站。" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style lang="scss" scoped>
.test {
  color: #292929;
}
</style>
