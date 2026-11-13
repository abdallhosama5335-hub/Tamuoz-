"""Total Battle - game parameters (Python)."""
import math

# أولاً: الأداء والنظام التقني
TICK_RATE_WORLD_UPDATES_MS = 1000
TICK_RATE_ALLIANCE_BATTLE_MS = 500
MAX_CONCURRENT_CONNECTIONS_PER_NODE = 5000
ASSET_LOD_DISTANCE = {"near": 50, "mid": 150, "far": 400}
DATABASE_TRANSACTION_TIMEOUT_MS = 3000

# ثانياً: الأبطال والقادة
HERO_MAX_LEVEL = 100
XP_BASE = 100
XP_EXPONENT = 1.5
ATTRIBUTE_SCALING = {"attack": 1.2, "defense": 1.1, "speed": 1.05, "leadership": 1.15}
STAMINA_MAX = 100
STAMINA_REGEN_MINUTES_PER_POINT = 3
ENHANCEMENT_SUCCESS_RATE = [0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20, 0.10, 0.05]

# ثالثاً: المستويات والاقتصاد
BUILDING_UPGRADE_BASE_COST = 100
BUILDING_UPGRADE_MULTIPLIER = 1.25
RESOURCE_BASE_PER_HOUR = {"iron": 500, "wood": 500, "silver": 300, "food": 600, "gold": 50}
PVE_MAX_TIER = 50


def xp_required(level: int) -> int:
    """XP needed to advance from `level` to the next level."""
    return math.floor(XP_BASE * level ** XP_EXPONENT)


def building_upgrade_cost(current_level: int) -> int:
    return math.floor(BUILDING_UPGRADE_BASE_COST * BUILDING_UPGRADE_MULTIPLIER ** current_level)


def enhancement_chance(current_level: int) -> float:
    if not 0 <= current_level < len(ENHANCEMENT_SUCCESS_RATE):
        raise ValueError("enhancement level out of range")
    return ENHANCEMENT_SUCCESS_RATE[current_level]


def min_might_required(monster_tier: int) -> int:
    if not 1 <= monster_tier <= PVE_MAX_TIER:
        raise ValueError(f"monster_tier must be between 1 and {PVE_MAX_TIER}")
    return math.floor(100 * monster_tier ** 1.3)
