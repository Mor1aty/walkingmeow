<template>
  <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>新建连接</template>
      <el-menu-item index="1-1">Mysql</el-menu-item>
      <el-menu-item index="1-2" disabled>Redis</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">新建查询</el-menu-item>
    <el-menu-item index="3">表</el-menu-item>
    <el-menu-item index="4">用户</el-menu-item>
    <el-menu-item index="5">查询</el-menu-item>
  </el-menu>
  <h1>{{ activeIndex }}</h1>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import store from "@/store";

const activeIndex = ref(store.state.topMenuActiveIndex)

const handleSelect = (key: string) => {
  store.commit('changeTopMenuActiveIndex', key)
  activeIndex.value = key
}
</script>

<style scoped>

</style>