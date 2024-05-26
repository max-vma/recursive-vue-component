<template>
  <ul class="file-list">
    <template v-for="item in items">
      <file-list-element
        @remove="onRemoveItem"
        :item="item"
        v-if="!item.deleted" />
    </template>
  </ul>
</template>
<script lang="ts" setup>
import FileListElement from './FileListElement.vue'
import fileSystem from './../mocks/fileSystem'
import { findDeep } from '../utils/findDeep'
import { IElement } from '../types/Element'
import { ref } from 'vue'

const items = ref<IElement[]>(fileSystem)

const onRemoveItem = (itemId: number) => {
  const item = findDeep<IElement>(items.value, 'id', itemId)
  if (item) {
    item.deleted = true
  }
}
</script>

<style></style>
