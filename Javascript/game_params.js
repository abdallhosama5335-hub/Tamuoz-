/* Total Battle - game parameters (JavaScript / Node.js) */

// أولاً: الأداء والنظام التقني
const TICK_RATE_WORLD_UPDATES_MS = 1000;
const TICK_RATE_ALLIANCE_BATTLE_MS = 500;
const MAX_CONCURRENT_CONNECTIONS_PER_NODE = 5000;
const ASSET_LOD_DISTANCE = { near: 50, mid: 150, far: 400 };
const DATABASE_TRANSACTION_TIMEOUT_MS = 3000;

// ثانياً: الأبطال والقادة
const HERO_MAX_LEVEL = 100;
const XP_BASE = 100;
const XP_EXPONENT = 1.5;
const ATTRIBUTE_SCALING = { attack: 1.2, defense: 1.1, speed: 1.05, leadership: 1.15 };
const STAMINA_MAX = 100;
const STAMINA_REGEN_MINUTES_PER_POINT = 3;
const ENHANCEMENT_SUCCESS_RATE = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];

// ثالثاً: المستويات والاقتصاد
const BUILDING_UPGRADE_BASE_COST = 100;
const BUILDING_UPGRADE_MULTIPLIER = 1.25;
const RESOURCE_BASE_PER_HOUR = { iron: 500, wood: 500, silver: 300, food: 600, gold: 50 };
const PVE_MAX_TIER = 50;

function xpRequired(level) {
  return Math.floor(XP_BASE * Math.pow(level, XP_EXPONENT));
}

function buildingUpgradeCost(currentLevel) {
  return Math.floor(BUILDING_UPGRADE_BASE_COST * Math.pow(BUILDING_UPGRADE_MULTIPLIER, currentLevel));
}

function enhancementChance(currentLevel) {
  if (currentLevel < 0 || currentLevel >= ENHANCEMENT_SUCCESS_RATE.length) {
    throw new RangeError("enhancement level out of range");
  }
  return ENHANCEMENT_SUCCESS_RATE[currentLevel];
}

function minMightRequired(monsterTier) {
  if (monsterTier < 1 || monsterTier > PVE_MAX_TIER) {
    throw new RangeError(`monsterTier must be between 1 and ${PVE_MAX_TIER}`);
  }
  return Math.floor(100 * Math.pow(monsterTier, 1.3));
}

module.exports = {
  TICK_RATE_WORLD_UPDATES_MS, TICK_RATE_ALLIANCE_BATTLE_MS,
  MAX_CONCURRENT_CONNECTIONS_PER_NODE, ASSET_LOD_DISTANCE,
  DATABASE_TRANSACTION_TIMEOUT_MS, HERO_MAX_LEVEL, XP_BASE, XP_EXPONENT,
  ATTRIBUTE_SCALING, STAMINA_MAX, STAMINA_REGEN_MINUTES_PER_POINT,
  ENHANCEMENT_SUCCESS_RATE, BUILDING_UPGRADE_BASE_COST,
  BUILDING_UPGRADE_MULTIPLIER, RESOURCE_BASE_PER_HOUR, PVE_MAX_TIER,
  xpRequired, buildingUpgradeCost, enhancementChance, minMightRequired,
};
