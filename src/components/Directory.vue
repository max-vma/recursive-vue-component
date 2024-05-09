<template>
	<div class="directory">
		<div class="directory__name">{{ item.id }} {{ item.name }}</div>
		<div class="directory__controls">
			<div class="directory__controls-list">Удалить</div>
			<div class="directory__controls-list">Изменить</div>
		</div>
	</div>
	<div class="directory-elements" v-if="item.elements">
		<file-list-element :item="innerItem" v-for="innerItem in item.elements" />
	</div>
</template>
<script lang="ts" setup>
import { IElement } from '../types/Element'
import FileListElement from './FileListElement.vue'

interface PropTypes {
	item: IElement
}
const props = defineProps<PropTypes>()
</script>
<style>
.directory {
	display: flex;
}
.directory__controls {
	display: flex;
}
</style>
