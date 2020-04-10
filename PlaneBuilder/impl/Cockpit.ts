/// <reference path="./Part.ts" />
/// <reference path="./Stats.ts" />

class Cockpit extends Part {
    private stats: Stats;
    private types: { name: string, stats: Stats }[];
    private upgrades: { name: string, stats: Stats }[];
    private safety: { name: string, stats: Stats }[];
    private gunsights: { name: string, stats: Stats }[];
    private selected_type: number;
    private selected_upgrades: boolean[];
    private selected_safety: boolean[];
    private selected_gunsights: boolean[];
    private total_stress: number;
    private total_escape: number;
    private total_visibility: number;

    constructor(tl: { name: string, stats: Stats }[],
        ul: { name: string, stats: Stats }[],
        sl: { name: string, stats: Stats }[],
        gl: { name: string, stats: Stats }[]
    ) {
        super();
        this.stats = new Stats();
        this.types = tl;
        this.upgrades = ul;
        this.safety = sl;
        this.gunsights = gl;
        this.selected_type = 0;
        this.selected_upgrades = [...Array(this.upgrades.length).fill(false)];
        this.selected_safety = [...Array(this.safety.length).fill(false)];
        this.selected_gunsights = [...Array(this.gunsights.length).fill(false)];
        this.total_stress = 0;
        this.total_escape = 0;
        this.total_visibility = 0;
    }

    public toJSON() {
        return {
            type: this.selected_type,
            upgrades: this.selected_upgrades,
            safety: this.selected_safety,
        };
    }

    public fromJSON(js: JSON) {
        this.selected_type = js["type"];
        this.selected_upgrades = js["upgrades"];
        this.selected_safety = js["safety"];
    }

    public GetTypeList() {
        return this.types;
    }

    public GetUpgradeList() {
        return this.upgrades;
    }

    public GetSafetyList() {
        return this.safety;
    }

    public GetGunsightList() {
        return this.gunsights;
    }

    public GetType() {
        return this.selected_type;
    }

    public SetType(index: number) {
        if (index >= this.types.length)
            throw "Selected type is not in range of actual types.";
        this.selected_type = index;
        this.CalculateStats();
    }

    public GetSelectedUpgrades() {
        return this.selected_upgrades;
    }

    public SetUpgrade(index: number, state: boolean) {
        if (index >= this.upgrades.length)
            throw "Selected type is not in range of actual upgrades.";
        this.selected_upgrades[index] = state;
        this.CalculateStats();
    }

    public GetSelectedSafety() {
        return this.selected_safety;
    }

    public SetSafety(index: number, state: boolean) {
        if (index >= this.safety.length)
            throw "Selected type is not in range of actual safties.";
        this.selected_safety[index] = state;
        this.CalculateStats();
    }

    public GetSelectedGunsights() {
        return this.selected_gunsights;
    }

    public SetGunsight(index: number, state: boolean) {
        if (index >= this.safety.length)
            throw "Selected type is not in range of actual gunsights.";
        this.selected_gunsights[index] = state;
        this.CalculateStats();
    }

    public GetVisibility() {
        return this.total_visibility;
    }

    public GetFlightStress() {
        return this.total_stress;
    }

    public GetEscape() {
        return this.total_escape;
    }

    public PartStats(): Stats {
        this.stats = new Stats();
        this.stats.reqsections = 1;

        this.stats = this.stats.Add(this.types[this.selected_type].stats);

        for (let i = 0; i < this.selected_upgrades.length; i++) {
            if (this.selected_upgrades[i])
                this.stats = this.stats.Add(this.upgrades[i].stats);
        }

        for (let i = 0; i < this.selected_safety.length; i++) {
            if (this.selected_safety[i])
                this.stats = this.stats.Add(this.safety[i].stats);
        }

        for (let i = 0; i < this.selected_gunsights.length; i++) {
            if (this.selected_gunsights[i])
                this.stats = this.stats.Add(this.gunsights[i].stats);
        }

        var stats = new Stats();
        stats = stats.Add(this.stats);
        return stats;
    }

    public CrewUpdate(escape: number, flightstress: number, visibility: number) {
        this.total_escape = this.stats.escape + escape;
        this.total_stress = this.stats.flightstress + flightstress;
        this.total_stress = Math.max(0, this.total_stress);
        this.total_visibility = this.stats.visibility + visibility;
    }

    public SetCalculateStats(callback: () => void) {
        this.CalculateStats = callback;
    }
}