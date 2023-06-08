// parte I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
};

const warriorDamage = () => {
  const minDamage = warrior.strength;
  const maxDamage = minDamage * warrior.weaponDmg;
  return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
};

const mageDamage = () => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  if (mageMana > 15) {
    turnStats.manaSpent = 15;
    turnStats.damageDealt = damage;
    return turnStats;
  }
  return turnStats;
}
// console.log(dragonDamage());
// console.log(warriorDamage());
// console.log(mageDamage());

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());