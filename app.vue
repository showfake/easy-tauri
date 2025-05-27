<template>
  <div>
    <NuxtPage :key="route.fullPath"/>
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/" icon="wap-home">主页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search" >搜索</van-tabbar-item>
      <van-tabbar-item to="/discuss" icon="friends">讨论</van-tabbar-item>
      <van-tabbar-item to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "#vue-router";

const route = useRoute();

const active = ref(0);
</script>
