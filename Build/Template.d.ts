declare namespace Lagezeichen {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundtheme: string;
        click: string;
    };
    let locations: {
        Schrottplatz: {
            name: string;
            background: string;
        };
        Wohnwagen: {
            name: string;
            background: string;
        };
        Labor: {
            name: string;
            background: string;
        };
        locky_beach: {
            name: string;
            background: string;
        };
        chinatown: {
            name: string;
            background: string;
        };
    };
    let Soundfiles: {
        saw: string;
        chainsaw: string;
        jackhammer: string;
        hammer: string;
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Lustus: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                happy: string;
                angry: string;
                surprised: string;
            };
        };
        Leter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                upset: string;
                grin: string;
                laugh: string;
                bored: string;
                nerveous: string;
                away: string;
            };
        };
        Lob: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                angry2: string;
                happy: string;
                happy2: string;
                confident: string;
                confident2: string;
                sad: string;
                sad2: string;
                smile: string;
                smile2: string;
                surprised: string;
                surprised2: string;
            };
        };
        Lathilda: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let dataForSave: {
        state: {
            a: number;
        };
    };
}
declare namespace Lagezeichen {
    function ErsteScene(): ƒS.SceneReturn;
}
