class Cards {
    private dash_canvas: HTMLCanvasElement;
    private dash_image: HTMLImageElement;
    private weap_canvas: HTMLCanvasElement;
    private weap_image: HTMLImageElement;
    public name: string;
    public acft_data: {
        full_bomb_boost: number,
        half_bomb_boost: number,
        full_boost: number,
        half_boost: number,
        empty_boost: number,
        full_bomb_hand: number,
        half_bomb_hand: number,
        full_hand: number,
        half_hand: number,
        empty_hand: number,
        full_bomb_stall: number,
        half_bomb_stall: number,
        full_stall: number,
        half_stall: number,
        empty_stall: number,
        fuel: number,
        max_speed: number,
        dropoff: number,
        ordinance: string[],
        escape: number,
        crash: number,
        visibility: number,
        energy_loss: number,
        turn_bleed: number,
        stability: number,
        stress: number,
        toughness: number,
        max_strain: number,
        vital_parts: string[],
        armour: number[],
    }

    public weap_data: {
        type: string,
        ammo_mult: number,
        ammo_base: number,
        ap: number,
        jam: string,
        hits: number[],
        damage: number,
        tags: string[],
        reload: number,
    }

    constructor() {
        this.dash_canvas = document.createElement("CANVAS") as HTMLCanvasElement;
        this.dash_canvas.width = 1122;
        this.dash_canvas.height = 786;
        this.dash_image = document.getElementById("dash_img") as HTMLImageElement;
        this.dash_image.width = 1122;
        this.dash_image.height = 786;
        this.dash_image.src = './Cards/Dashboard.png';

        this.weap_canvas = document.createElement("CANVAS") as HTMLCanvasElement;
        this.weap_canvas.width = 483;
        this.weap_canvas.height = 291;
        this.weap_image = document.getElementById("weap_img") as HTMLImageElement;
        this.weap_image.width = 483;
        this.weap_image.height = 291;
        this.weap_image.src = './Cards/Weapon.png';

        this.acft_data = {
            full_bomb_boost: 0,
            half_bomb_boost: 0,
            full_boost: 0,
            half_boost: 0,
            empty_boost: 0,
            full_bomb_hand: 0,
            half_bomb_hand: 0,
            full_hand: 0,
            half_hand: 0,
            empty_hand: 0,
            full_bomb_stall: 0,
            half_bomb_stall: 0,
            full_stall: 0,
            half_stall: 0,
            empty_stall: 0,
            fuel: 0,
            max_speed: 0,
            dropoff: 0,
            ordinance: [""],
            escape: 0,
            crash: 0,
            visibility: 0,
            energy_loss: 0,
            turn_bleed: 0,
            stability: 0,
            stress: 0,
            toughness: 0,
            max_strain: 0,
            vital_parts: [""],
            armour: [],
        }

        this.weap_data = {
            type: "",
            ammo_mult: 0,
            ammo_base: 0,
            ap: 0,
            jam: "",
            hits: [],
            damage: 0,
            tags: [],
            reload: 0,
        }
    }

    public SaveDash() {
        var context = this.dash_canvas.getContext("2d");

        context.clearRect(0, 0, this.dash_canvas.width, this.dash_canvas.height);
        context.textAlign = "center";

        context.drawImage(this.dash_image, 0, 0);
        context.font = "35px Balthazar";
        context.fillText(this.acft_data.full_bomb_boost.toString(), 548, 92, 80);
        context.fillText(this.acft_data.full_bomb_hand.toString(), 548 + 80, 92, 80);
        context.fillText(this.acft_data.full_bomb_stall.toString(), 548 + 160, 92, 80);

        context.fillText(this.acft_data.half_bomb_boost.toString(), 548, 92 + 40, 80);
        context.fillText(this.acft_data.half_bomb_hand.toString(), 548 + 80, 92 + 40, 80);
        context.fillText(this.acft_data.half_bomb_stall.toString(), 548 + 160, 92 + 40, 80);

        context.fillText(this.acft_data.full_boost.toString(), 548, 92 + 80, 80);
        context.fillText(this.acft_data.full_hand.toString(), 548 + 80, 92 + 80, 80);
        context.fillText(this.acft_data.full_stall.toString(), 548 + 160, 92 + 80, 80);

        context.fillText(this.acft_data.half_boost.toString(), 548, 92 + 120, 80);
        context.fillText(this.acft_data.half_hand.toString(), 548 + 80, 92 + 120, 80);
        context.fillText(this.acft_data.half_stall.toString(), 548 + 160, 92 + 120, 80);

        context.fillText(this.acft_data.empty_boost.toString(), 548, 92 + 160, 80);
        context.fillText(this.acft_data.empty_hand.toString(), 548 + 80, 92 + 160, 80);
        context.fillText(this.acft_data.empty_stall.toString(), 548 + 160, 92 + 160, 80);

        context.fillText(Math.floor(this.acft_data.fuel).toString(), 414, 305, 35);

        context.fillText(Math.floor(this.acft_data.max_speed).toString(), 1044, 370, 35);
        context.fillText(this.acft_data.dropoff.toString(), 1044, 440, 35);

        context.fillText(this.acft_data.escape.toString(), 280, 450, 35);
        context.fillText(this.acft_data.crash.toString(), 280, 530, 35);

        context.fillText(this.acft_data.visibility.toString(), 135, 460, 35);
        context.fillText(this.acft_data.stability.toString(), 135, 550, 35);
        context.fillText(this.acft_data.energy_loss.toString(), 70, 505, 35);
        context.fillText(this.acft_data.turn_bleed.toString(), 195, 505, 35);

        context.fillText(this.acft_data.stress.toString(), 85, 675, 35);

        context.fillText(this.acft_data.toughness.toString(), 250, 645, 35);
        context.fillText(this.acft_data.max_strain.toString(), 250, 720, 35);

        context.font = "20px Balthazar";
        context.textAlign = "left";
        for (let i = 0; i < this.acft_data.ordinance.length; i++) {
            context.fillText(this.acft_data.ordinance[i], 480, 398 + i * 26, 220);
        }

        var rows = Math.min(this.acft_data.vital_parts.length, 7);
        var cols = Math.ceil(this.acft_data.vital_parts.length / rows);
        var idx = 0;
        for (let r = 0; r < rows; r++) {
            let ypx = 575 + 26 * r;
            let str = "";
            for (let c = 0; c < cols; c++) {
                if (idx < this.acft_data.vital_parts.length) {
                    if (c != 0) {
                        str += ", ";
                    }
                    str += this.acft_data.vital_parts[idx];
                }
                idx++;
            }
            context.fillText(str, 335, ypx, 180);
        }

        var idx = 0;
        for (let r = 0; r < this.acft_data.armour.length; ++r) {
            let AP = r + 1;
            if (this.acft_data.armour[r] > 0) {
                let str = this.acft_data.armour[r].toString() + " Coverage AP " + AP.toString();
                context.fillText(str, 525, 575 + 26 * idx, 180);
                idx++;
            }
        }
        this.download(this.name + "_Dashboard", this.dash_canvas);
    }

    public SaveWeapon(i: number) {
        var context = this.weap_canvas.getContext("2d");

        context.clearRect(0, 0, this.weap_canvas.width, this.weap_canvas.height);
        context.textAlign = "center";

        context.drawImage(this.weap_image, 0, 0);

        context.font = "25px Balthazar";
        context.fillText(this.weap_data.type, 150, 112, 215);

        context.font = "15px Balthazar";
        var ammo = "";
        if (this.weap_data.reload > 0) {
            var clips = this.weap_data.ammo_base / this.weap_data.reload;
            ammo += (clips * this.weap_data.ammo_mult).toString() + " loads of ";
            ammo += this.weap_data.reload.toString() + " shots";
        } else {
            ammo += (this.weap_data.ammo_base * this.weap_data.ammo_mult).toString() + " shots";
        }
        context.fillText(ammo, 95, 158, 105);
        context.fillText(this.weap_data.ap.toString(), 172, 158, 23);
        context.fillText(this.weap_data.jam, 230, 158, 65);

        context.fillText(this.weap_data.hits[0].toString(), 157, 208, 80);
        context.fillText(this.weap_data.hits[1].toString(), 157 + 80, 208, 80);
        context.fillText(this.weap_data.hits[2].toString(), 157 + 160, 208, 80);
        context.fillText(this.weap_data.hits[3].toString(), 157 + 240, 208, 80);

        context.fillText((this.weap_data.damage * this.weap_data.hits[0]).toString(), 157, 208 + 23, 80);
        context.fillText((this.weap_data.damage * this.weap_data.hits[1]).toString(), 157 + 80, 208 + 23, 80);
        context.fillText((this.weap_data.damage * this.weap_data.hits[2]).toString(), 157 + 160, 208 + 23, 80);
        context.fillText((this.weap_data.damage * this.weap_data.hits[3]).toString(), 157 + 240, 208 + 23, 80);

        context.textAlign = "left";
        context.fillText(this.weap_data.tags[0], 90, 256, 350);
        var tags = "";
        for (let i = 1; i < this.weap_data.tags.length; i++) {
            if (i != 1)
                tags += ", ";
            tags += this.weap_data.tags[i];
        }
        context.fillText(tags, 90, 276, 350);

        this.download(this.name + "_Weapon_" + i.toString(), this.weap_canvas);
    }

    private download(filename: string, canvas: HTMLCanvasElement) {

        var lnk = document.createElement('a') as HTMLAnchorElement;

        lnk.download = filename + ".png";
        lnk.href = canvas.toDataURL();

        if (document.createEvent) {
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent('click', true, true, window,
                0, 0, 0, 0, 0, false, false,
                false, false, 0, null);

            /// send event            
            lnk.dispatchEvent(e);
        }
    }
}