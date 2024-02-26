ServerEvents.recipes(event => {
  // Define the ingots to prevent coin crafting from
  const ingots = [
    'minecraft:iron_ingot',
    'minecraft:gold_ingot',
    'minecraft:copper_ingot',
  ];

  // Define the coins to prevent crafting
  const coins = [
    'coinsje:copper_coin',
    'coinsje:iron_coin',
    'coinsje:gold_coin',
  ];

  // Remove coin-producing smelting and blasting recipes that use ingots as input
  ingots.forEach(ingot => {
    coins.forEach(coin => {
      event.remove({ output: coin, input: ingot, type: 'minecraft:smelting' });
      event.remove({ output: coin, input: ingot, type: 'minecraft:blasting' });
    });
  });
});
