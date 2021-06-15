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
    Lagezeichen.locations = {
        Schrottplatz: {
            name: "Junkyard Litus Jonas",
            background: "Source/img/background/schrottplatz.png"
        },
        Wohnwagen: {
            name: "Zentrale der 3 Lagezeichen",
            background: "Source/img/background/wohnwagen.png"
        },
        Labor: {
            name: "Labor in der Zentrale",
            background: "Source/img/background/laboratory.jpg"
        },
        locky_beach: {
            name: "Locky Beach",
            background: "Source/img/background/locky beach.jpg"
        },
        chinatown: {
            name: "China Town",
            background: "Source/img/background/chinatown_front.jpg"
        },
        BS: {
            name: "",
            background: "Source/img/background/blackscreen.jpg"
        }
    };
    //Sounds
    Lagezeichen.sound = {
        backgroundtheme: "Source/music/noise/saw.mp3"
    };
    Lagezeichen.soundFiles = {
        saw: "Source/music/noise/saw.mp3",
        chainsaw: "Source/music/noise/chainsaw.ogg",
        jackhammer: "Source/music/noise/jackhammer.mp3",
        hammer: "Source/music/noise/hammer.mp3"
    };
    //define characteres
    Lagezeichen.characters = {
        Narrator: {
            name: ""
        },
        Deliveryboy: {
            name: "unbekannt",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Source/img/chars/placeholder/ph.png"
            }
        },
        Lustus: {
            name: "Lustus Lonas",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Source/img/chars/Lustus/Lustus.png",
                smile: "Source/img/chars/Lustus/Lustus_smile.png",
                happy: "Source/img/chars/Lustus/Lustus_happy.png",
                angry: "Source/img/chars/Lustus/Lustus_angry.png",
                surprised: "Source/img/chars/Lustus/Lustus_surrprised.png"
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
                away: "Source/img/chars/Leter/Leter_away.png"
            }
        },
        Lob: {
            name: "Lob Landrews",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Source/img/chars/Lob/Lob.png",
                angry: "Source/img/chars/Lob/Lob_angry.png",
                happy: "Source/img/chars/Lob/Lob_happy.png",
                smile: "Source/img/chars/Lob/Lob_smile.png",
                surprised: "Source/img/chars/Lob/Lob_surprised.png"
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
    //ITEMS
    Lagezeichen.items = {
        geschlossenesPaket: {
            name: "Paket",
            image: "Source/img/items/geschlossenesPaket.png",
            description: "Ein ziemlich leichtes und verschlossenes Paket. Es wurde an Lustus von einem Unbekannten übergeben."
        }
    };
    //ANIMATIONS
    Lagezeichen.middleToRight = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomright },
        duration: 2,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    Lagezeichen.rightTowardsMid = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        duration: 1,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    Lagezeichen.midTowardsRight = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        duration: 1,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    Lagezeichen.middleToLeft = {
        start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
        end: { translation: Lagezeichen.ƒS.positions.bottomleft },
        duration: 2,
        playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
    Lagezeichen.dataForSave = {
        state: {
            a: 50
        }
    };
    //Menu Audio
    let volume = 0.5;
    function increaseVolume() {
        if (volume < 100)
            return;
        volume += 0.08;
        Lagezeichen.ƒS.Sound.setVolume(Lagezeichen.sound.backgroundtheme, volume);
    }
    Lagezeichen.increaseVolume = increaseVolume;
    function decreaseVolume() {
        if (volume > 0)
            return;
        volume -= 0.08;
        Lagezeichen.ƒS.Sound.setVolume(Lagezeichen.sound.backgroundtheme, volume);
    }
    Lagezeichen.decreaseVolume = decreaseVolume;
    //Menu Elements
    let inGameMenu = {
        save: "save",
        load: "load",
        close: "close",
        turnUpVol: "+",
        turnDownVol: "-",
        credits: "Credits",
        about: "About"
    };
    //Menu Buttons for the menu
    let gameMenu;
    async function buttonFunctions(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await Lagezeichen.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await Lagezeichen.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVol) {
            increaseVolume();
        }
        else if (_option == inGameMenu.turnDownVol) {
            decreaseVolume();
        }
        else if (_option == inGameMenu.close) {
            gameMenu.close();
        }
    }
    document.addEventListener("keydown", hndKeypress);
    //let hiddenMenu: boolean = true;
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
            /* case ƒ.KEYBOARD_CODE.M:
            if (hiddenMenu == false)
            {}
            
            else if (hiddenMenu == true)
            {}
             */
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Lagezeichen.ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            { scene: Lagezeichen.ErsteScene, name: "Erste Szene" }
            //{ scene: LustusZimmer1, name: "Bei Lustus im Zimmer" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Lagezeichen.dataForSave.state = Lagezeichen.ƒS.Progress.setData(Lagezeichen.dataForSave.state, uiElement);
        // start the sequence
        Lagezeichen.ƒS.Progress.go(scenes);
    }
})(Lagezeichen || (Lagezeichen = {}));
var Lagezeichen;
(function (Lagezeichen) {
    async function ErsteScene() {
        console.log("Lagezeichen");
        Lagezeichen.ƒS.Speech.setTickerDelays(20, 20);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.saw, 0.03, false);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.bored, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(1.5);
        await Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.hammer, 0.1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach mann es ist schon wieder nichts los.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.smile, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(1.5);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS du Faulpelz.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.grin, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spass Pumelchen.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Nicht schon wieder.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich geh mal raus Jungs... ihr kennt es ja.");
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.middleToLeft);
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Also was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lathilda, Lagezeichen.characters.Lathilda.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "Na nun steh nicht faul rum. Alles was da so rumliegt muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ist gut Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Eine kurze Zeit später.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Puhhh warum muss es auch so verdammt heiß sein.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.rightTowardsMid);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hey, was soll das? Was ist in der Box?");
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.midTowardsRight);
        await Lagezeichen.ƒS.update();
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Deliveryboy);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "HE bleib hier was ist das??!!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Weg ist er... komisch.. Bringt mir einen Karton und geht einfach wieder.");
        Lagezeichen.ƒS.Inventory.add(Lagezeichen.items.geschlossenesPaket);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hmm zum Glück ist der Lastwagen fast fertig abegeladen. Ich bring mal das Packet in die Zentrale. Mal sehen was Lob und Leter dazu sagen.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.update(0.8);
    }
    Lagezeichen.ErsteScene = ErsteScene;
})(Lagezeichen || (Lagezeichen = {}));
//# sourceMappingURL=Template.js.map