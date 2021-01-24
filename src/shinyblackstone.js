onEvent('recipes', event => {
	event.shaped(Item.of('minecraft:gilded_blackstone', 1), [
		'GGG',
		'GBG',
		'GGG'
	], {
		G: 'minecraft:gold_nugget'
		B: 'minecraft:blackstone'
	})
})