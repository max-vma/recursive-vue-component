<template>
  <ul class="file-list">
    <file-list-element
      :item="item"
      v-for="item in fileSystem" />
  </ul>
</template>
<script lang="ts" setup>
import FileListElement from './FileListElement.vue'
import fileSystem from './../mocks/fileSystem'
</script>

<style></style>
