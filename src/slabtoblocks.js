onEvent('recipes', event => {
	const addRecipe = (output, input) => {
		event.shaped(Item.of(output, 1), [
			'I ',
			'I '
		], {
			I: input
		})
		
		event.shaped(Item.of(output, 1), [
			' I',
			' I'
		], {
			I: input
		})
	}
	
	// Wood
	addRecipe('minecraft:oak_slab', 'minecraft:oak_planks')
	addRecipe('minecraft:spruce_slab', 'minecraft:spruce_planks')
	addRecipe('minecraft:birch_slab', 'minecraft:birch_planks')
	addRecipe('minecraft:jungle_slab', 'minecraft:jungle_planks')
	addRecipe('minecraft:acacia_slab', 'minecraft:acacia_planks')
	addRecipe('minecraft:dark_oak_slab', 'minecraft:dark_oak_planks')
	addRecipe('minecraft:crimson_slab', 'minecraft:crimson_planks')
	addRecipe('minecraft:warped_slab', 'minecraft:warped_planks')
	
	// Modded
	// addRecipe('traverse:fir_slab', 'traverse:fir_planks')
	event.remove({id: 'traverse:fir_slab'})
	
	// Stone
	addRecipe('minecraft:stone_slab', 'minecraft:stone')
	addRecipe('minecraft:smooth_stone_slab', 'minecraft:smooth_stone')
	addRecipe('minecraft:cobblestone_slab', 'minecraft:cobblestone')
	addRecipe('minecraft:mossy_cobblestone_slab', 'minecraft:mossy_cobblestone')
	addRecipe('minecraft:mossy_stone_brick_slab', 'minecraft:mossy_stone_bricks')
	
	// Sandstone
	addRecipe('minecraft:cut_sandstone_slab', 'minecraft:cut_sandstone')
	addRecipe('minecraft:smooth_sandstone_slab', 'minecraft:smooth_sandstone')
	addRecipe('minecraft:cut_red_sandstone_slab', 'minecraft:red_sandstone')
	addRecipe('minecraft:smooth_red_sandstone_slab', 'minecraft:smooth_red_sandstone')
	
	// Diorite/Andesite/Granite
	addRecipe('minecraft:diorite_slab', 'minecraft:diorite')
	addRecipe('minecraft:polished_diorite_slab', 'minecraft:polished_diorite')
	addRecipe('minecraft:andesite_slab', 'minecraft:andesite')
	addRecipe('minecraft:polished_andesite_slab', 'minecraft:polished_andesite')
	addRecipe('minecraft:granite_slab', 'minecraft:granite')
	addRecipe('minecraft:polished_granite_slab', 'minecraft:polished_granite')
	
	// Ocean
	addRecipe('minecraft:prismarine_slab', 'minecraft:prismarine')
	addRecipe('minecraft:prismarine_brick_slab', 'minecraft:prismarine_bricks')
	addRecipe('minecraft:dark_prismarine_slab', 'minecraft:dark_prismarine')
	
	// Bricks
	addRecipe('minecraft:brick_slab', 'minecraft:bricks')
	
	// Nether
	addRecipe('minecraft:red_nether_brick_slab', 'minecraft:red_nether_bricks')
	addRecipe('minecraft:smooth_quartz_slab', 'minecraft:smooth_quartz')
	addRecipe('minecraft:blackstone_slab', 'minecraft:blackstone')
	addRecipe('minecraft:polished_blackstone_brick_slab', 'minecraft:polished_blackstone_bricks')
	
	// End
	addRecipe('minecraft:end_stone_brick_slab', 'minecraft:end_stone_bricks')
})