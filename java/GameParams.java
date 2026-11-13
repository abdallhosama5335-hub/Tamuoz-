import java.util.Map;

/* Total Battle - game parameters (Java) */
public final class GameParams {
    private GameParams() {}

    // أولاً: الأداء والنظام التقني
    public static final int TICK_RATE_WORLD_UPDATES_MS = 1000;
    public static final int TICK_RATE_ALLIANCE_BATTLE_MS = 500;
    public static final int MAX_CONCURRENT_CONNECTIONS_PER_NODE = 5000;
    public static final Map<String, Integer> ASSET_LOD_DISTANCE = Map.of("near", 50, "mid", 150, "far", 400);
    public static final int DATABASE_TRANSACTION_TIMEOUT_MS = 3000;

    // ثانياً: الأبطال والقادة
    public static final int HERO_MAX_LEVEL = 100;
    public static final double XP_BASE = 100;
    public static final double XP_EXPONENT = 1.5;
    public static final Map<String, Double> ATTRIBUTE_SCALING =
            Map.of("attack", 1.2, "defense", 1.1, "speed", 1.05, "leadership", 1.15);
    public static final int STAMINA_MAX = 100;
    public static final int STAMINA_REGEN_MINUTES_PER_POINT = 3;
    public static final double[] ENHANCEMENT_SUCCESS_RATE =
            {0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20, 0.10, 0.05};

    // ثالثاً: المستويات والاقتصاد
    public static final double BUILDING_UPGRADE_BASE_COST = 100;
    public static final double BUILDING_UPGRADE_MULTIPLIER = 1.25;
    public static final Map<String, Integer> RESOURCE_BASE_PER_HOUR =
            Map.of("iron", 500, "wood", 500, "silver", 300, "food", 600, "gold", 50);
    public static final int PVE_MAX_TIER = 50;

    public static long xpRequired(int level) {
        return (long) Math.floor(XP_BASE * Math.pow(level, XP_EXPONENT));
    }

    public static long buildingUpgradeCost(int currentLevel) {
        return (long) Math.floor(BUILDING_UPGRADE_BASE_COST * Math.pow(BUILDING_UPGRADE_MULTIPLIER, currentLevel));
    }

    public static double enhancementChance(int currentLevel) {
        if (currentLevel < 0 || currentLevel >= ENHANCEMENT_SUCCESS_RATE.length) {
            throw new IllegalArgumentException("enhancement level out of range");
        }
        return ENHANCEMENT_SUCCESS_RATE[currentLevel];
    }

    public static long minMightRequired(int monsterTier) {
        if (monsterTier < 1 || monsterTier > PVE_MAX_TIER) {
            throw new IllegalArgumentException("monsterTier must be between 1 and " + PVE_MAX_TIER);
        }
        return (long) Math.floor(100 * Math.pow(monsterTier, 1.3));
    }
}
