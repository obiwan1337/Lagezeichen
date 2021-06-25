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
        Lustus_room: {
            name: string;
            background: string;
        };
        chinatown: {
            name: string;
            background: string;
        };
        BS: {
            name: string;
            background: string;
        };
        BadEnd: {
            name: string;
            background: string;
        };
    };
    let sound: {
        backgroundtheme: string;
    };
    let soundFiles: {
        saw: string;
        chainsaw: string;
        jackhammer: string;
        hammer: string;
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Deliveryboy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
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
                angry: string;
                happy: string;
                surprised: string;
            };
        };
        Lob: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                angry: string;
                happy: string;
                smile: string;
                surprised: string;
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
    let items: {
        geschlossenesPaket: {
            name: string;
            image: string;
            description: string;
        };
    };
    let middleToRight: ƒS.AnimationDefinition;
    let rightTowardsMid: ƒS.AnimationDefinition;
    let midTowardsRight: ƒS.AnimationDefinition;
    let middleToLeft: ƒS.AnimationDefinition;
    let dataForSave: {
        state: {
            a: number;
        };
    };
    function increaseVolume(): void;
    function decreaseVolume(): void;
}
declare namespace Lagezeichen {
    function ErsteScene(): ƒS.SceneReturn;
    function firstBadEnd(): ƒS.SceneReturn;
    function firstGoodDecission(): ƒS.SceneReturn;
    function visit_Lustus(): ƒS.SceneReturn;
}
