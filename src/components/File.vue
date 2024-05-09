<template>
	<div class="file">
		<div class="file__name">{{ item.id }} {{ item.name }}</div>
		<div class="file__controls"></div>
	</div>
</template>
<script lang="ts" setup>
import { IElement } from '../types/Element'

interface PropTypes {
	item: IElement
}
const props = defineProps<PropTypes>()
</script>
<style>
.file {
	display: flex;
}
</style>
