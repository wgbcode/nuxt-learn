<template>
  <div
    style="
      position: relative;
      background-color: #1a1a1a;
      width: 100%;
      height: 100%;
      display: flex;
    "
  >
    <div style="width: 10%; height: 100%; background-color: #081421">
      <ul>
        <li style="color: #292929"><NuxtLink to="/">首页</NuxtLink></li>
        <li style="color: #292929"><NuxtLink to="/about1">about1</NuxtLink></li>
        <li style="color: #292929"><NuxtLink to="/about2">about2</NuxtLink></li>
        <li style="color: #292929"><NuxtLink to="/about3">about3</NuxtLink></li>
      </ul>
    </div>
    <div style="width: 90%; height: 100%">
      <NuxtPage />
    </div>
  </div>
  <!-- <button
      @click="addHandler"
      style="position: absolute; bottom: 100px; right: 50px; cursor: pointer"
    >
      add
    </button>
    <button
      @click="deleteHandler"
      style="position: absolute; bottom: 100px; right: 100px; cursor: pointer"
    >
      delete
    </button>
    <button
      @click="updateHandler"
      style="position: absolute; bottom: 100px; right: 150px; cursor: pointer"
    >
      update
    </button>
    <button
      @click="viewHandler"
      style="position: absolute; bottom: 100px; right: 200px; cursor: pointer"
    >
      view
    </button> -->
</template>

<script setup lang="ts">
// async function addHandler() {
//   await useFetch("/api/add");
// }
// async function deleteHandler() {
//   await useFetch("/api/delete");
// }
// async function updateHandler() {
//   useFetch("/api/update");
// }
// async function viewHandler() {
//   await useFetch("/api/view");
// }

useHead({
  title: "我的应用",
  meta: [{ name: "description", content: "我的神奇网站。" }],
  bodyAttrs: {
    class: "test",
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
