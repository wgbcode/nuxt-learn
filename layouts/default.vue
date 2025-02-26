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
    <div style="min-width: 200px; height: 100%; background-color: #081421">
      <ul>
        <li class="test"><NuxtLink to="/">首页</NuxtLink></li>
        <li class="test"><NuxtLink to="/page1">测试1</NuxtLink></li>
        <li class="test"><NuxtLink to="/page2">测试2（服务器）</NuxtLink></li>
        <li class="test"><NuxtLink to="/page3">测试3</NuxtLink></li>
      </ul>
    </div>
    <div style="flex: 1; height: 100%">
      <slot />
    </div>
  </div>
</template>
