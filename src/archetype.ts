export class TechTree {
  private nodes = new Map<string, string[]>();
  constructor() { this.nodes.set("writing", ["pottery"]); this.nodes.set("philosophy", ["writing"]); }
  prereqs(tech: string): string[] { return this.nodes.get(tech) ?? []; }
  researchable(researched: string[], tech: string): boolean {
    return this.prereqs(tech).every((p) => researched.includes(p));
  }
}
export class VictoryCheck {
  private score = 0;
  add(v: number): void { this.score += v; }
  win(threshold = 1000): boolean { return this.score >= threshold; }
}