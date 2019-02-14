<template>
  <div id="SideNavigation">
    <el-menu default-active="activeLink" class="side-nav-bar" :router="true">
      <el-menu-item index="/dashboard">
        <span>Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/list">
        <span>List</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./side-navigation.component.js">
</script>

<style src="./side-navigation.component.css">
</style>
