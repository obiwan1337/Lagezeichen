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
        distantsaw: string;
        distantsaw2: string;
        saw: string;
        chainsaw: string;
        jackhammer: string;
        hammer: string;
        distanthammer: string;
        müllpresse: string;
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
    function middleToRight(): ƒS.AnimationDefinition;
    function rightTowardsMid(): ƒS.AnimationDefinition;
    function rightTowardsLeft(): ƒS.AnimationDefinition;
    function midTowardsRight(): ƒS.AnimationDefinition;
    function middleToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {
        state: {
            a: number;
        };
    };
}
declare namespace Lagezeichen {
    function startScreen(): ƒS.SceneReturn;
    function ErsteScene(): ƒS.SceneReturn;
    function firstBadEnd(): ƒS.SceneReturn;
    function firstGoodDecission(): ƒS.SceneReturn;
    function visitLustus(): ƒS.SceneReturn;
    function visitHQ(): ƒS.SceneReturn;
    function getRidOfIt(): ƒS.SceneReturn;
    function endOfDemo(): ƒS.SceneReturn;
}
