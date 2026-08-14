// C1V-666AX — clean-room 4x-strategy. Deterministic by construction.
// Inspiration (mechanics only, not source material): 4X conventions (expand, exploit, explore, exterminate)
// Target engine for the render layer: web (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { TechTree, VictoryCheck } from "./archetype";

export const SPEC = "4X conventions (expand, exploit, explore, exterminate)";
export const MODULES = [{ id: "TechTree", name: "C1V-666AX :: TechTree" }, { id: "VictoryCheck", name: "C1V-666AX :: VictoryCheck" }];
export { seededRandom };
