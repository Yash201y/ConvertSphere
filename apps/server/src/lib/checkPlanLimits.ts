import { PLANS } from "../config/plans";

export function checkPlanLimits(
  plan: keyof typeof PLANS,
  conversionsToday: number,
  fileSizeMB: number
) {
  const currentPlan = PLANS[plan];

  if (
    conversionsToday >= currentPlan.dailyConversions
  ) {
    return {
      success: false,
      message:
        "Daily conversion limit reached.",
    };
  }

  if (
    fileSizeMB > currentPlan.maxUploadMB
  ) {
    return {
      success: false,
      message:
        "File exceeds upload limit.",
    };
  }

  return {
    success: true,
  };
}