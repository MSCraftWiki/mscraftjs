onEvent('recipes', event => {
	event.smelting(Item.of('minecraft:bread', 1), 'minecraft:wheat')
	event.smoking(Item.of('minecraft:bread', 1), 'minecraft:wheat')
})