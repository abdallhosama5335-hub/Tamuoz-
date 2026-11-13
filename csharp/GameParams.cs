using System;
using System.Collections.Generic;

// Total Battle - game parameters (C#)
public static class GameParams
{
    // أولاً: الأداء والنظام التقني
    public const int TickRateWorldUpdatesMs = 1000;
    public const int TickRateAllianceBattleMs = 500;
    public const int MaxConcurrentConnectionsPerNode = 5000;
    public static readonly IReadOnlyDictionary<string, int> AssetLodDistance =
        new Dictionary<string, int> { ["near"] = 50, ["mid"] = 150, ["far"] = 400 };
    public const int DatabaseTransactionTimeoutMs = 3000;

    // ثانياً: الأبطال والقادة
    public const int HeroMaxLevel = 100;
    public const double XpBase = 100;
    public const double XpExponent = 1.5;
    public static readonly IReadOnlyDictionary<string, double> AttributeScaling =
        new Dictionary<string, double> { ["attack"] = 1.2, ["defense"] = 1.1, ["speed"] = 1.05, ["leadership"] = 1.15 };
    public const int StaminaMax = 100;
    public const int StaminaRegenMinutesPerPoint = 3;
    public static readonly double[] EnhancementSuccessRate =
        { 0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20, 0.10, 0.05 };

    // ثالثاً: المستويات والاقتصاد
    public const double BuildingUpgradeBaseCost = 100;
    public const double BuildingUpgradeMultiplier = 1.25;
    public static readonly IReadOnlyDictionary<string, int> ResourceBasePerHour =
        new Dictionary<string, int> { ["iron"] = 500, ["wood"] = 500, ["silver"] = 300, ["food"] = 600, ["gold"] = 50 };
    public const int PveMaxTier = 50;

    public static long XpRequired(int level) =>
        (long)Math.Floor(XpBase * Math.Pow(level, XpExponent));

    public static long BuildingUpgradeCost(int currentLevel) =>
        (long)Math.Floor(BuildingUpgradeBaseCost * Math.Pow(BuildingUpgradeMultiplier, currentLevel));

    public static double EnhancementChance(int currentLevel)
    {
        if (currentLevel < 0 || currentLevel >= EnhancementSuccessRate.Length)
            throw new ArgumentOutOfRangeException(nameof(currentLevel), "enhancement level out of range");
        return EnhancementSuccessRate[currentLevel];
    }

    public static long MinMightRequired(int monsterTier)
    {
        if (monsterTier < 1 || monsterTier > PveMaxTier)
            throw new ArgumentOutOfRangeException(nameof(monsterTier), $"must be between 1 and {PveMaxTier}");
        return (long)Math.Floor(100 * Math.Pow(monsterTier, 1.3));
    }
}
