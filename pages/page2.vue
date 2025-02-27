<template>
  <div style="color: white">
    <span>预渲染内容：{{ name }}</span>
    <button @click="addHandler" class="test">add</button>
    <button @click="deleteHandler" class="test">delete</button>
    <button @click="updateHandler" class="test">update</button>
    <button @click="viewHandler" class="test">view</button>
  </div>
</template>

<script setup>
const name = shallowRef("Bin");

async function addHandler() {
  await useFetch("/api/add");
}
async function deleteHandler() {
  await useFetch("/api/delete");
}
async function updateHandler() {
  useFetch("/api/update");
}
async function viewHandler() {
  const res = await useFetch("/api/view", {
    method: "post",
    body: { test: 123456 },
  });
  name.value = res.data.value.data[0].name;
}
viewHandler();
</script>

<style lang="scss" scoped>
.test {
  cursor: pointer;
  margin: 5px;
}
</style>
