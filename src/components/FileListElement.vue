<template>
  <div class="file-list-element">
    <div
      class="file-list-element__inner"
      ref="nameElement"
      @input="onChangeName">
      {{ item.name }}
    </div>
    <div class="file-list-element__actions">
      <div
        class="file-list-element__action"
        @click="onClickEditItem">
        Изменить
      </div>
      <div
        class="file-list-element__action"
        @click="() => onClickRemoveItem(item.id)">
        Удалить
      </div>
    </div>
  </div>
  <div
    class="file-list-element__dir-element"
    v-if="item.elements">
    <template v-for="innerItem in item.elements">
      <file-list-element
        @remove="onClickRemoveItem"
        :item="innerItem"
        v-if="!innerItem.deleted" />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IElement } from '../types/Element'

const emit = defineEmits(['remove'])

const nameElement = ref()

const onClickEditItem = () => {
  const el = nameElement.value as HTMLElement
  el.setAttribute('contenteditable', 'true')
  el.focus()
}

const onClickRemoveItem = (itemId: string) => {
  emit('remove', itemId)
}

const onChangeName = (e: any) => {
  props.item.name = e.target.innerText
}

interface Props {
  item: IElement
}
const props = defineProps<Props>()
</script>

<style lang="scss">
.file-list-element {
  display: flex;
  gap: 16px;
  &__dir-element {
    padding-left: 8px;
  }
  &__actions {
    display: flex;
    gap: 8px;
  }
}
</style>
