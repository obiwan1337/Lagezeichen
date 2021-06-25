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
            background: "Source/img/background/locky_beach.jpg"
        },
        Lustus_room: {
            name: "Lustus Zimmer",
            background: "Source/img/background/Lusus_zimmer.jpg"
        },
        chinatown: {
            name: "China Town",
            background: "Source/img/background/chinatown_front.jpg"
        },
        BS: {
            name: "",
            background: "Source/img/background/blackscreen.jpg"
        },
        BadEnd: {
            name: "",
            background: "Source/imgbackground/BadEnd.png"
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
                normal: "Source/img/chars/Leter/Leter.png",
                smile: "Source/img/chars/Leter/Leter_smile.png",
                angry: "Source/img/chars/Leter/Leter_angry.png",
                happy: "Source/img/chars/Leter/Leter_happy.png",
                surprised: "Source/img/chars/Leter/Leter_surprised.png"
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
    let lob_normal = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
    let lob_angry = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.angry, Lagezeichen.ƒS.positions.bottomleft);
    let lob_surprised = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.surprised, Lagezeichen.ƒS.positions.bottomleft);
    let lob_happy = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.happy, Lagezeichen.ƒS.positions.bottomleft);
    let lob_smile = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.smile, Lagezeichen.ƒS.positions.bottomleft);
    let leter_normal = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
    let leter_smile = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.smile, Lagezeichen.ƒS.positions.bottomright);
    let leter_happy = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.happy, Lagezeichen.ƒS.positions.bottomright);
    let leter_angry = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.angry, Lagezeichen.ƒS.positions.bottomright);
    let leter_surprised = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.surprised, Lagezeichen.ƒS.positions.bottomright);
    let lustus_normal = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
    let lustus_surprised = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.surprised, Lagezeichen.ƒS.positions.bottomcenter);
    let lustus_angry = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.angry, Lagezeichen.ƒS.positions.bottomcenter);
    let lustus_happy = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.happy, Lagezeichen.ƒS.positions.bottomcenter);
    let lustus_smile = Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.smile, Lagezeichen.ƒS.positions.bottomcenter);
    async function ErsteScene() {
        console.log("Lagezeichen");
        Lagezeichen.ƒS.Speech.setTickerDelays(20, 20);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.saw, 0.03, false);
        await Lagezeichen.ƒS.update(2);
        await leter_normal;
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(1.5);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.hammer, 0.1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach mann es ist schon wieder nichts los.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
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
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Moment, ich glaube wir haben noch eine Flasche rumstehen... Ah ja hier ist noch eine.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "was hast denn da eig in dem Karton?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hab mich auch schon gewundert. Was hast du da?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Das hat mir ein Junge hingestellt und ist wieder verschwunden. Kein Wort hat er von sich gegeben.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "einfach so das Ding abgestellt und gegeangen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hast du schon reingeschaut? Was ist drin?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na was denkst du denn? Als ob ich einfach ohne euch das Ding aufmache und mich dran erfreuen würde euch extra lange warten zu lassen bis ich sage was drin ist.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Komisch, genau das beschreibt dich ziemlich gut");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich habe es nicht aufgemacht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "NA dann aber los. Hier eine Schere.");
        Lagezeichen.ƒS.update(0.5);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hier ist ein Zettel drin... und ein Glas.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Gib mal den Zettel her.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hier steht 'Viel Spass ihr Opfer'. Mehr ist nicht drauf.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na wir werden ja sehen was noch drauf ist. Wozu haben wir ein kleines Labor?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Und was ist in dem Glas? Was steht drauf?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Garnichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Sieht aus wie ein Versuch uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Du willst bevor wir irgendwas wissen direkt alles hinschmeissen? na ich hatte mehr von Dir erwartet Leter. Lob was denkst du?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hmm..");
        let FD = {
            trhowAway: "Weg mit dem Zeug.",
            keepIt: "Wir behalten den Karton."
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(FD, "class");
        {
            switch (firstDecision) {
                case FD.trhowAway:
                    return firstBadEnd();
                case FD.keepIt:
                    return firstGoodDecission();
                default:
                    break;
            }
        }
    }
    Lagezeichen.ErsteScene = ErsteScene;
    async function firstBadEnd() {
        console.log("1Bad");
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob hatte genau wie Leter keine Lust auf eine Schnitzeljagd ohne Schnitzel. Er war ebenfalls dafür das Zeug zu entsorgen.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob lehrte das Glas in den Abfluss und warf es in einen Glasscontainer.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Altpapierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den Beiden wissen.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten ein Sommerschnupfen macht die Runde.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Einige hatten so schlimmes Fieber das selbst die Ärzte verwundert waren.");
        Lagezeichen.ƒS.update(0);
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
        Lagezeichen.ƒS.Speech.hide();
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
    }
    Lagezeichen.firstBadEnd = firstBadEnd;
    async function firstGoodDecission() {
        console.log("1Good");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "ALso wirklich Leter. Wieder mal keine Ahnung von nichts oder?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir untersuchen das Glas und den Karton auf jedenfall bevor wir die Sachen entsorgen.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.smile, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na wenigstens hat Lob etwas im Kopf. Also auf gehts. Lob willst du den Karton untersuchen? Leter du bekommst das Glas und das Papier okay?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich lass die Fluessigkeit noch in ein paar andere Glaeser ab dann kanns los gehen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Okay geht klar. allerdings gibts bei mir bald essen also erst beim nächsten Mal.cya Jungs");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.angry, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Esr bezeichnet ihr beide mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Ich glaube da geht doch einiges nicht richtig bei euch.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du kannst mich mal Lustus.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "He Knall die Tür nicht so... Na er kommt schon wieder runter.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lustus begann mit seiner Undersuchung. Am nächsten Tag wollte Leter immernoch nicht mit Lob und ihm reden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste was wirklich los war mit ihm, steckten Leter und Lob ihre Köpfe zusammen und überlegten.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren.. Sollten Sie nachsehen was los war oder eher nicht?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob meinte es gibt bestimmt was neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immernoch nichts davon hören.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Sollte Lob Leter nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben Lustus aufzusuchen?");
        let SD = {
            visitLustus: "Wir gehen zu Lustus.",
            visitHQ: "Wir gehen direkt in die Zentrale."
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(SD, "class");
        {
            switch (firstDecision) {
                case SD.visitLustus:
                case SD.visitHQ:
                default:
                    break;
            }
        }
    }
    Lagezeichen.firstGoodDecission = firstGoodDecission;
    async function visit_Lustus() {
        console.log("Visit Lustus");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Mann Lob warum sollen wir zu Lustus wenn er uns nur ansteckt.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.angry, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Mann Leter heul nicht rum. Wir haben 3 tage nichts von Lustus gehört. Zumindest mal fragen gehört sich.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Uff, Lob das muss auch nicht sein. Wenn Lustus krank ist dann will ich nicht das gleiche bekommen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Dann geh doch. Aber dann brauchst dich auch nicht als Freund von Lustus bezeichnen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ist ja gut ich komm doch mit. Aber es ist trotzdem fahrläßig wenn er nun was hat das wir auch bekommen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und genau das sollte Dir keine Gedanken machen. wenn es eine Grippe war dann kann dein Körper damit umgehen.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Lustus_room);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.surprised, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Oh! Na ihr zwei? Ungewohnt euch hier zu sehen. Wie ergeht es euch?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Sagt blos ihr habt euch Sorgen gemacht?");
        await lob_smile;
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.smile, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Schau dir unseren Ersten an Leter, sitzt in Ruhe an seinem Schreibtisch und brütet über irgendwelche Papieren.");
    }
    Lagezeichen.visit_Lustus = visit_Lustus;
})(Lagezeichen || (Lagezeichen = {}));
//# sourceMappingURL=Template.js.map