<template>
	<div class="file-list-element">
		<component :is="getComponent(item.type)" :item="item" />
	</div>
</template>

<script lang="ts" setup>
import { IElement } from '../types/Element'
import { ElementTypes } from '../types/ElementTypes'
import Directory from './Directory.vue'
import File from './File.vue'

interface PropTypes {
	item: IElement
}
const props = defineProps<PropTypes>()

const getComponent = (type: ElementTypes) => {
	return {
		[ElementTypes.DIRECTORY]: Directory,
		[ElementTypes.FILE]: File,
	}[type]
}
</script>

<style>
.file-list-element {
	display: flex;
	flex-direction: column;
	padding-left: 8px;
}
</style>
