// Total Battle - game parameters (Go)
package config

import (
	"fmt"
	"math"
)

// أولاً: الأداء والنظام التقني
const (
	TickRateWorldUpdatesMs          = 1000
	TickRateAllianceBattleMs        = 500
	MaxConcurrentConnectionsPerNode = 5000
	DatabaseTransactionTimeoutMs    = 3000
)

var AssetLODDistance = map[string]int{"near": 50, "mid": 150, "far": 400}

// ثانياً: الأبطال والقادة
const (
	HeroMaxLevel                = 100
	XPBase                      = 100.0
	XPExponent                  = 1.5
	StaminaMax                  = 100
	StaminaRegenMinutesPerPoint = 3
)

var AttributeScaling = map[string]float64{"attack": 1.2, "defense": 1.1, "speed": 1.05, "leadership": 1.15}

var EnhancementSuccessRate = []float64{0.90, 0.80, 0.70, 0.60, 0.50, 0.40, 0.30, 0.20, 0.10, 0.05}

// ثالثاً: المستويات والاقتصاد
const (
	BuildingUpgradeBaseCost   = 100.0
	BuildingUpgradeMultiplier = 1.25
	PvEMaxTier                = 50
)

var ResourceBasePerHour = map[string]int{"iron": 500, "wood": 500, "silver": 300, "food": 600, "gold": 50}

func XPRequired(level int) int64 {
	return int64(math.Floor(XPBase * math.Pow(float64(level), XPExponent)))
}

func BuildingUpgradeCost(currentLevel int) int64 {
	return int64(math.Floor(BuildingUpgradeBaseCost * math.Pow(BuildingUpgradeMultiplier, float64(currentLevel))))
}

func EnhancementChance(currentLevel int) (float64, error) {
	if currentLevel < 0 || currentLevel >= len(EnhancementSuccessRate) {
		return 0, fmt.Errorf("enhancement level %d out of range", currentLevel)
	}
	return EnhancementSuccessRate[currentLevel], nil
}

func MinMightRequired(monsterTier int) (int64, error) {
	if monsterTier < 1 || monsterTier > PvEMaxTier {
		return 0, fmt.Errorf("monsterTier must be between 1 and %d", PvEMaxTier)
	}
	return int64(math.Floor(100 * math.Pow(float64(monsterTier), 1.3))), nil
}
