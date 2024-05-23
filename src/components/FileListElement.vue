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
        @click="onClickRemoveItem">
        Удалить
      </div>
    </div>
  </div>
  <div
    class="file-list-element__dir-element"
    v-if="item.elements">
    <file-list-element
      :item="innerItem"
      v-for="innerItem in item.elements" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { IElement } from '../types/Element'

const emit = defineEmits(['remove'])

const nameElement = ref()

const onClickEditItem = () => {
  const el = nameElement.value as HTMLElement
  el.setAttribute('contenteditable', 'true')
  el.focus()
}

const onClickRemoveItem = () => {
  emit('remove', props.item)
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
