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
        BS: {
            name: string;
            background: string;
        };
        BadEnd: {
            name: string;
            background: string;
        };
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
        HelicopterFlyBy: string;
        telefonPiepTon: string;
        telefonBelegt: string;
        telefonWahl: string;
        türZufallen: string;
        telefonKlingeln: string;
        rauschen: string;
        radiomusic: string;
        radiotalk: string;
        walkingSound: string;
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
        InspectorLotter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Phantom: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    function middleToRight(): ƒS.AnimationDefinition;
    function outsideTowardsRight(): ƒS.AnimationDefinition;
    function LobGroupAtRight(): ƒS.AnimationDefinition;
    function leftToOutside(): ƒS.AnimationDefinition;
    function rightToOutside(): ƒS.AnimationDefinition;
    function rightTowardsMid(): ƒS.AnimationDefinition;
    function rightTowardsLeft(): ƒS.AnimationDefinition;
    function midTowardsRight(): ƒS.AnimationDefinition;
    function middleToLeft(): ƒS.AnimationDefinition;
    let dataForSave: {
        state: {
            a: number;
        };
    };
    let volume: number;
    function increaseVolume(): void;
    function decreaseVolume(): void;
}
declare namespace Lagezeichen {
    function TestScene(): ƒS.SceneReturn;
    function ErsteScene(): ƒS.SceneReturn;
    function firstBadEnd(): ƒS.SceneReturn;
    function firstGoodDecission(): ƒS.SceneReturn;
    function visitLustus(): ƒS.SceneReturn;
    function visitHQ(): ƒS.SceneReturn;
    function demoEnds(): ƒS.SceneReturn;
    function getRidOfIt(): ƒS.SceneReturn;
    function goToHqAfterLustusVisit(): ƒS.SceneReturn;
    function typSuchen(): ƒS.SceneReturn;
    function ersterAnrufBeiLotter(): ƒS.SceneReturn;
    function phantombildErfragen(): ƒS.SceneReturn;
    function notTheBestEnd(): ƒS.SceneReturn;
    function abklappernFahren(): ƒS.SceneReturn;
    function Abgabe(): ƒS.SceneReturn;
    function überredenBadEnd(): ƒS.SceneReturn;
    function überredenGoodEnd(): ƒS.SceneReturn;
}
