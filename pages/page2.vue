<template>
  <div style="color: white">
    <button @click="addHandler" class="test">add</button>
    <button @click="deleteHandler" class="test">delete</button>
    <button @click="updateHandler" class="test">update</button>
    <button @click="viewHandler" class="test">view</button>
  </div>
</template>

<script setup>
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
  console.log("res", res);
}
</script>

<style lang="scss" scoped>
.test {
  cursor: pointer;
  margin: 5px;
}
</style>
