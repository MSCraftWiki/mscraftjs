onEvent('recipes', event => {
	event.blasting(Item.of('minecraft:stone', 1), 'minecraft:cobblestone')
	event.blasting(Item.of('minecraft:smooth_stone', 1), 'minecraft:stone')
	event.blasting(Item.of('minecraft:smooth_sandstone', 1), 'minecraft:sandstone')
	event.blasting(Item.of('minecraft:smooth_red_sandstone', 1), 'minecraft:red_sandstone')
	event.blasting(Item.of('minecraft:cracked_stone_bricks', 1), 'minecraft:stone_bricks')
	event.blasting(Item.of('minecraft:glass', 1), 'minecraft:sand')
	event.blasting(Item.of('minecraft:cracked_polished_blackstone_bricks', 1), 'minecraft:polished_blackstone_bricks')
	event.blasting(Item.of('minecraft:cracked_nether_bricks', 1), 'minecraft:nether_bricks')
})
	
