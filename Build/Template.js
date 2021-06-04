"use strict";
var Lagezeichen;
(function (Lagezeichen) {
    Lagezeichen.ƒ = FudgeCore;
    Lagezeichen.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transitions
    Lagezeichen.transition = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    Lagezeichen.sound = {
        //Musik
        backgroundtheme: "",
        // Sound
        click: "",
    };
    Lagezeichen.locations = {
        Schrottplatz: {
            name: "Junkyard Litus Jonas",
            background: "Source/img/background/schrottplatz.jpg"
        },
        Wohnwagen: {
            name: "Zentrale der 3 Lagezeichen",
            background: "Source/img/background/wohnwagen.jpg"
        },
        Labor: {
            name: "Labor in der Zentrale",
            background: "Source/img/background/wohnwagen.jpg",
        },
        locky_beach: {
            name: "Locky Beach",
            background: "Source/img/background/locky beach.jpg"
        },
        chinatown: {
            name: "China Town",
            background: "Source/img/background/chinatown_front.jpg"
        }
    };
    //Sounds
    Lagezeichen.Soundfiles = {
        saw: "Source/music/noise/saw.mp3",
        chainsaw: "Source/music/noise/chainsaw.ogg",
        jackhammer: "Source/music/noise/jackhammer.mp3",
        hammer: "Source/music/noise/hammer.mp3",
    };
    //define characteres
    Lagezeichen.characters = {
        Narrator: {
            name: ""
        },
        Lustus: {
            name: "Lustus Lonas",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Source/img/chars/Lustus/Lustus.png",
                smile: "Source/img/chars/Lustus/Lustus_smile.png",
                happy: "Source/img/chars/Lustus/Lustus_happy.png",
                angry: "Source/img/chars/Lustus/Lustus_angry.png",
                surprised: "Source/img/chars/Lustus/Lustus_surrprised.png",
            }
        },
        Leter: {
            name: "Leter Lhaw",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Source/img/chars/Leter/Leter_N.png",
                smile: "Source/img/chars/Leter/Leter_smile.png",
                upset: "Source/img/chars/Leter/Leter_upset.png",
                grin: "Source/img/chars/Leter/Leter_grin.png",
                laugh: "Source/img/chars/Leter/Leter_laugh.png",
                bored: "Source/img/chars/Leter/Leter_bore.png",
                nerveous: "Source/img/chars/Leter/Leter_nerveous.png",
                away: "Source/img/chars/Leter/Leter_away.png",
            }
        },
        Lob: {
            name: "Lob Landrews",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                angry: "Source/img/chars/Lob/Lob_Angry.png",
                angry2: "Source/img/chars/Lob/Lob_Angry_2.png",
                happy: "Source/img/chars/Lob/Lob_Happy.png",
                happy2: "Source/img/chars/Lob/Lob_Happy_2.png",
                confident: "Source/img/chars/Lob/Lob_Confident.png",
                confident2: "Source/img/chars/Lob/Lob_Confident_2.png",
                sad: "Source/img/chars/Lob/Lob_Sad.png",
                sad2: "Source/img/chars/Lob/Lob_Sad_2.png",
                smile: "Source/img/chars/Lob/Lob_Smile.png",
                smile2: "Source/img/chars/Lob/Lob_Smile_2.png",
                surprised: "Source/img/chars/Lob/Lob_Surprised.png",
                surprised2: "Source/img/chars/Lob/Lob_Surprised_2.png",
            }
        },
        Lathilda: {
            name: "Tante Lathilda",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Source/img/chars/Lathilda/Lathilda_N.png"
            }
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Lagezeichen.ƒ.KEYBOARD_CODE.A && Lagezeichen.ƒ.KEYBOARD_CODE.B:
                console.log("Save");
                await Lagezeichen.ƒS.Progress.save();
                break;
            case Lagezeichen.ƒ.KEYBOARD_CODE.C:
                console.log("load");
                await Lagezeichen.ƒS.Progress.load();
                break;
            case Lagezeichen.ƒ.KEYBOARD_CODE.I:
                console.log("inventory");
                await Lagezeichen.ƒS.Inventory.open();
                break;
        }
    }
    Lagezeichen.dataForSave = {
        state: {
            a: 0,
        }
    };
    let uiElement = document.querySelector("[type=interface]");
    Lagezeichen.dataForSave.state = Lagezeichen.ƒS.Progress.setDataInterface(Lagezeichen.dataForSave.state, uiElement);
    window.addEventListener("load", start);
    function start(_event) {
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: Lagezeichen.ErsteScene, name: "Erste Szene" },
        ];
        // start the sequence
        Lagezeichen.ƒS.Progress.go(scenes);
    }
})(Lagezeichen || (Lagezeichen = {}));
var Lagezeichen;
(function (Lagezeichen) {
    let middle_to_right = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomright },
        duration: 2,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    let middle_to_left = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomleft },
        duration: 2,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    async function ErsteScene() {
        console.log("Lagezeichen");
        Lagezeichen.ƒS.Speech.setTickerDelays(20, 20);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.Sound.play(Lagezeichen.Soundfiles.saw, 0.2, false);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.bored, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(1.5);
        console.log("Leter sollte reden");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
        await Lagezeichen.ƒS.Sound.play(Lagezeichen.Soundfiles.hammer, 0.3, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach mann es ist schon wieder nichts los.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.smile, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "LUSTUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS du Faulpelz.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.grin, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit.. Na dann viel Spass Pumelchen.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Nicht schon wieder. Ich geh mal raus Jungs... ihr kennt es ja.");
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, middle_to_left);
        await Lagezeichen.ƒS.update(2);
    }
    Lagezeichen.ErsteScene = ErsteScene;
})(Lagezeichen || (Lagezeichen = {}));
//# sourceMappingURL=Template.js.map