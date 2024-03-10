ServerEvents.recipes(event => {
	
	//Add recipe for Common Ink
	event.shapeless(
		Item.of('irons_spellbooks:common_ink', 3), 
		[ 
		  '3x minecraft:glass_bottle',
		  '3x minecraft:ink_sac', 	
		  '2x irons_spellbooks:arcane_essence'
		]
	)
	
	//Add recipe for Cinder Essence
	event.shapeless(
		Item.of('irons_spellbooks:cinder_essence', 7), 
		[ 
		  'minecraft:netherite_scrap',
		  '2x minecraft:blaze_powder', 	
		  '4x irons_spellbooks:arcane_essence'
		]
	)
	
	//Add recipe for Arcane Essence
	event.shapeless(
		Item.of('irons_spellbooks:arcane_essence', 7), 
		[ 
		  '2x minecraft:lapis_lazuli',
		  '2x minecraft:blaze_powder', 	
		  '2x minecraft:experience_bottle'
		]
	)
	
})