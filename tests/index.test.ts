import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { TechTree, VictoryCheck } from "../src/archetype";

describe("C1V-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(2);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const t = new TechTree();
expect(t.researchable([], "writing")).toBe(false);
expect(t.researchable(["pottery"], "writing")).toBe(true);
const v = new VictoryCheck();
v.add(600);
expect(v.win()).toBe(false);
v.add(400);
expect(v.win()).toBe(true);
  });
});
