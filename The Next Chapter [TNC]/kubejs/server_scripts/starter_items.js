// Listen to player login event
PlayerEvents.loggedIn(e => {
 // Check if player doesn't have "starting_items" stage yet
 if (!e.player.stages.has('starting_items')) {
  let playerName = e.player.name.string;
   
  // Add the stage
  e.player.stages.add('starting_items');
   
  // Give some items to the player
  e.player.give('ftbquests:book');
  e.player.give('minecraft:stone_pickaxe');
  e.player.give('7x minecraft:apple');
 }
});