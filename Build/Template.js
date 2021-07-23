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
            background: "Source/img/background/lustusRoom.jpg"
        },
        BS: {
            name: "",
            background: "Source/img/background/blackscreen.jpg"
        },
        BadEnd: {
            name: "",
            background: "Source/img/background/badEnd.png"
        }
    };
    //Sounds
    Lagezeichen.soundFiles = {
        distantsaw: "Source/music/noise/distantsaw.mp3",
        distantsaw2: "Source/music/noise/distantsaw2.mp3",
        saw: "Source/music/noise/saw.mp3",
        chainsaw: "Source/music/noise/chainsaw.ogg",
        jackhammer: "Source/music/noise/jackhammer.mp3",
        hammer: "Source/music/noise/hammer.mp3",
        distanthammer: "Source/music/noise/distanthammer.mp3",
        müllpresse: "Source/music/noise/müllpresse.mp3",
        HelicopterFlyBy: "Source/music/noise/HelicopterLong.mp3",
        telefonPiepTon: "Source/music/noise/PhoneRingingDialer.mp3",
        telefonBelegt: "Source/music/noise/lineBusy.mp3",
        telefonWahl: "Source/music/noise/telefonWahl.mp3",
        türZufallen: "Source/music/noise/doorClose.mp3",
        telefonKlingeln: "Source/music/noise/phoneRingingGettingCalled.mp3",
        rauschen: "Source/music/noise/talkOver.mp3",
        radiomusic: "Source/music/noise/radioMusic.mp3",
        radiotalk: "Source/music/noise/radioTalk.mp3",
        walkingSound: "Source/music/noise/walkingSound.mp3"
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
                normal: "Source/img/chars/placeholder/phboy.png"
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
                surprised: "Source/img/chars/Lustus/Lustus_surprised.png"
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
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                //normal: "Source/img/chars/Lathilda/Lathilda_N.png"
                normal: "Source/img/chars/placeholder/phL.png"
            }
        },
        InspectorLotter: {
            name: "Inspector Lotter",
            origin: Lagezeichen.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Source/img/chars/placeholder/phLotter.png"
            }
        },
        Phantom: {
            //Pages wollten nicht wie ich wollte.
            name: "Phantom",
            origin: Lagezeichen.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "Source/img/chars/placeholder/phPhantom.png"
            }
        }
    };
    //ANIMATIONS
    function middleToRight() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            end: { translation: Lagezeichen.ƒS.positions.bottomright },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.middleToRight = middleToRight;
    function outsideTowardsRight() {
        return {
            start: { translation: Lagezeichen.ƒS.positionPercent(-30, 100) },
            end: { translation: Lagezeichen.ƒS.positions.bottomright },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.outsideTowardsRight = outsideTowardsRight;
    function LobGroupAtRight() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomleft },
            end: { translation: Lagezeichen.ƒS.positionPercent(75, 100) },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.LobGroupAtRight = LobGroupAtRight;
    function leftToOutside() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomleft },
            end: { translation: Lagezeichen.ƒS.positionPercent(-30, 100) },
            duration: 2,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.leftToOutside = leftToOutside;
    function rightToOutside() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomright },
            end: { translation: Lagezeichen.ƒS.positionPercent(-30, 100) },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.rightToOutside = rightToOutside;
    function rightTowardsMid() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            end: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.rightTowardsMid = rightTowardsMid;
    function rightTowardsLeft() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomright },
            end: { translation: Lagezeichen.ƒS.positions.bottomleft },
            duration: 2,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.rightTowardsLeft = rightTowardsLeft;
    function midTowardsRight() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            end: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.midTowardsRight = midTowardsRight;
    function middleToLeft() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            end: { translation: Lagezeichen.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.middleToLeft = middleToLeft;
    Lagezeichen.dataForSave = {
        state: {
            a: 50
        }
    };
    //Menu Audio
    Lagezeichen.volume = 0.5;
    function increaseVolume() {
        if (Lagezeichen.volume <= 0.95) {
            Lagezeichen.volume = Lagezeichen.volume + 0.08;
            console.log(Lagezeichen.volume);
            Lagezeichen.ƒS.Sound.setMasterVolume(Lagezeichen.volume);
        }
    }
    Lagezeichen.increaseVolume = increaseVolume;
    function decreaseVolume() {
        if (Lagezeichen.volume >= 0.04) {
            Lagezeichen.volume = Lagezeichen.volume - 0.08;
            console.log(Lagezeichen.volume);
            Lagezeichen.ƒS.Sound.setMasterVolume(Lagezeichen.volume);
        }
    }
    Lagezeichen.decreaseVolume = decreaseVolume;
    //Menu Elements
    let inGameMenu = {
        save: "save (A + B)",
        load: "load (C)",
        close: "close (M)",
        turnUpVol: "+ (U)",
        turnDownVol: "- (D)"
        /* credits: "Credits (",
        about: "About" */
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
    let hiddenMenu = false;
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
            case Lagezeichen.ƒ.KEYBOARD_CODE.U:
                console.log("volUp");
                increaseVolume();
                break;
            case Lagezeichen.ƒ.KEYBOARD_CODE.D:
                console.log("volDown");
                decreaseVolume();
                break;
            case Lagezeichen.ƒ.KEYBOARD_CODE.M: {
                if (hiddenMenu == false) {
                    gameMenu.close();
                    hiddenMenu = true;
                }
                else if (hiddenMenu == true) {
                    gameMenu.open();
                    hiddenMenu = false;
                }
                break;
            }
            default:
                console.log("menudefault");
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Lagezeichen.ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            //{ scene: TestScene, name: "TEST" }
            { scene: Lagezeichen.ErsteScene, name: "Erste Szene" },
            /*  { scene: firstBadEnd, name: "BadEnd1" },
             { scene: firstGoodDecission, name: "FirstGoodDecission" },
             { scene: visitLustus, name: "Geh zuerst zu Lustus" },
       
             { scene: visitHQ, name: "Direkt in die Zentrale" },
             { scene: getRidOfIt, name: "Alles entsorgen (schon wieder)" },
             { scene: firstGoodDecission, name: "Erste gute Entscheidung" },
             { scene: demoEnds, name: "eod" },
             { scene: goToHqAfterLustusVisit, name: "Die Zentrale wartet." },
             { scene: typSuchen, name: "Suche den Übeltäter" },
             { scene: ersterAnrufBeiLotter, name: "Erster Anruf bei Lotter" },
             { scene: phantombildErfragen, name: "Frage Lustus nach einem Bild" },
             { scene: notTheBestEnd, name: "nicht das Beste aber keine Katastrophe" },
             { scene: abklappernFahren, name: "Fahre an den Chemiekonzernen vorbei" },
             { scene: Abgabe, name: "gib den Karton bei Lotter ab" },
             { scene: überredenBadEnd, name: "Kein Glück bei der Befragung" },
             { scene: überredenGoodEnd, name: "Glück beim Verhör" } */
        ];
        let uiElement = document.querySelector("[type=interface]");
        Lagezeichen.dataForSave.state = Lagezeichen.ƒS.Progress.setData(Lagezeichen.dataForSave.state, uiElement);
        // start the sequence
        Lagezeichen.ƒS.Progress.go(scenes);
    }
})(Lagezeichen || (Lagezeichen = {}));
var Lagezeichen;
(function (Lagezeichen) {
    function lobNormal() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
    }
    function lobAngry() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.angry, Lagezeichen.ƒS.positions.bottomleft);
    }
    function lobSmile() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.smile, Lagezeichen.ƒS.positions.bottomleft);
    }
    function lobSurprised() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.surprised, Lagezeichen.ƒS.positions.bottomleft);
    }
    function lobHappy() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.happy, Lagezeichen.ƒS.positions.bottomleft);
    }
    function leterNormal() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
    }
    function leterSmile() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.smile, Lagezeichen.ƒS.positions.bottomright);
    }
    function leterHappy() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.happy, Lagezeichen.ƒS.positions.bottomright);
    }
    function leterSurprised() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.surprised, Lagezeichen.ƒS.positions.bottomright);
    }
    function leterAngry() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.angry, Lagezeichen.ƒS.positions.bottomright);
    }
    function lustusNormal() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
    }
    function lustusAngry() {
        Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.angry, Lagezeichen.ƒS.positions.bottomcenter);
    }
    function lustusSmile() { Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.smile, Lagezeichen.ƒS.positions.bottomcenter); }
    function lustusSurprised() { Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.surprised, Lagezeichen.ƒS.positions.bottomcenter); }
    function lustusHappy() { Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.happy, Lagezeichen.ƒS.positions.bottomcenter); }
    function upd() { Lagezeichen.ƒS.update(2); }
    async function TestScene() {
    }
    Lagezeichen.TestScene = TestScene;
    async function ErsteScene() {
        console.log("ersteScene");
        Lagezeichen.ƒS.Speech.setTickerDelays(7, 10);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Dies ist ein frei erfundenes Spiel. Ähnlichkeiten mit realen Personen oder Orten sind rein zufällig. Das Spiel ist eine Demo und nicht vollendet. Viel Spaß beim Lesen.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distantsaw, 0.5, false);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.radiomusic, 0.1, false);
        await Lagezeichen.ƒS.update(2);
        lobNormal();
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(1.5);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.5, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach Mann, es ist schon wieder nichts los.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(1.5);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und die Ventilatoren schaffen es nicht, die Hitze fernzuhalten. Ugghhh.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS, du Faulpelz.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.smile, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spaß, Pummelchen.");
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.radiomusic, 0, 0, false);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.radiotalk, 0.4, false);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Nicht schon wieder.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich geh mal raus, Jungs... Ihr kennt es ja.");
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.radiotalk, 0, 0, false);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.middleToLeft());
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Character.hideAll();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.türZufallen, 0.5, false);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.müllpresse, 0.7, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Also, was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lathilda, Lagezeichen.characters.Lathilda.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "Na, nun steh nicht faul rum. Alles was da so rumliegt, muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ist gut, Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
        await Lagezeichen.ƒS.Character.hideAll();
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.müllpresse, 0, 1, false);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Eine kurze Zeit später.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.saw, 0.5, 1, false);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Puhhh, warum muss es auch so verdammt heiß sein.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.jackhammer, 0.2, false);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.rightTowardsMid());
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hey, was soll das? Was ist in der Box?");
        //await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, midTowardsRight());
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.jackhammer, 0, 2, false);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.rightToOutside());
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.walkingSound, 0, 3, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "HEE bleib hier. Was ist das??!!");
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Weg ist er... Bringt mir einen Karton und geht einfach wieder.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hmm, zum Glück ist der Lastwagen fast fertig abgeladen. Ich bring mal das Paket in die Zentrale. Mal sehen, was Lob und Leter dazu sagen.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.türZufallen, 0.4, false);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(0);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distantsaw2, 0.5, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Moment, ich glaube, wir haben noch eine Flasche rumstehen... Ah ja, hier ist noch eine.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Was haste denn da eigentlich in dem Karton?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hab mich auch schon gewundert. Was hast du da?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Das hat mir ein Junge hingestellt und ist wieder verschwunden. Kein Wort hat er von sich gegeben.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Einfach so das Ding abgestellt und gegangen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hast du schon reingeschaut? Was ist drin?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na was denkst du denn? Als ob ich einfach ohne euch das Ding aufmache und mich dran erfreuen würde, euch extra lange warten zu lassen, bis ich sage, was drin ist.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Komisch, genau das beschreibt dich ziemlich gut.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich habe es nicht aufgemacht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Na dann aber los. Hier eine Schere.");
        Lagezeichen.ƒS.update(0.5);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hier ist ein Zettel drin... und ein Glas.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Gib mal den Zettel her.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hier steht 'Viel Spaß ihr Opfer'. Mehr ist nicht drauf.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na, wir werden ja sehen, was noch drauf ist. Wozu haben wir ein kleines Labor?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Und was ist in dem Glas? Was steht drauf?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Gar nichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Sieht aus wie ein Versuch, uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Du willst bevor wir irgendwas wissen, direkt alles hinschmeißen? Na, ich hatte mehr von dir erwartet Leter. Lob, was denkst du?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hmm..");
        let FD = {
            throwAway: "Weg mit dem Zeug.",
            keepIt: "Wir behalten den Karton."
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(FD, "Selection");
        {
            switch (firstDecision) {
                case FD.throwAway:
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
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob hatte genau wie Leter keine Lust auf eine Schnitzeljagd ohne Schnitzel. Er war ebenfalls dafür das Zeug zu entsorgen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob leerte das Glas in den Abfluss und warf es in einen Glascontainer.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Papierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den beiden wissen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten, ein Sommerschnupfen macht die Runde.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Einige hatten so schlimmes Fieber, dass selbst die Ärzte verwundert waren.");
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
        Lagezeichen.ƒS.Speech.hide();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
        await Lagezeichen.ƒS.update(0);
    }
    Lagezeichen.firstBadEnd = firstBadEnd;
    async function firstGoodDecission() {
        console.log("1Good");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Also wirklich, Leter. Wieder mal keine Ahnung von nichts, oder?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir untersuchen das Glas und den Karton auf jeden Fall, bevor wir irgendwas entsorgen.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lustus);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.4, false);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.smile, Lagezeichen.ƒS.positions.bottomcenter);
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na, wenigstens hat Lob etwas im Kopf. Also, auf gehts. Lob, willst du den Karton untersuchen? Leter, du bekommst das Glas und das Papier, okay?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich lass die Flüssigkeit noch in ein paar andere Gläser ab, dann kanns losgehen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Okay, geht klar. Allerdings gibts bei mir bald Essen. Also erst beim nächsten Mal. cya.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.türZufallen, 0.4, false);
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lustus);
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        lustusNormal();
        leterAngry();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Erst bezeichnest du mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Du hast wirklich was an der Waffel.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du kannst mich mal, Lustus.");
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.distanthammer, 0, 0, false);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.angry, Lagezeichen.rightTowardsLeft());
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.türZufallen, 1, false);
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "He! Knall die Tür nicht so...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lustus begann mit seiner Untersuchung. Am nächsten Tag wollte Leter immer noch nicht mit Lob und ihm reden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste, was wirklich los war mit ihm, steckten Leter und Lob die Köpfe zusammen und überlegten.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren. Sollten Sie nachsehen, was los war oder eher nicht?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob meinte, es gäbe bestimmt was Neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immer noch nichts davon hören.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Sollte Lob Leters Idee nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben, Lustus aufzusuchen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Oder du gibst Leters erster Idee nach, alles zu entsorgen, und schmeißt jetzt alles weg.");
        let SD = {
            visitLustus: "Wir gehen zu Lustus.",
            visitHQ: "Wir gehen direkt in die Zentrale.",
            getRidOfIt: "Entsorge direkt alles."
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(SD, "Selection");
        {
            switch (firstDecision) {
                case SD.visitLustus:
                    return visitLustus();
                case SD.visitHQ:
                    return visitHQ();
                case SD.getRidOfIt:
                    return getRidOfIt();
                default:
                    break;
            }
        }
    }
    Lagezeichen.firstGoodDecission = firstGoodDecission;
    async function visitLustus() {
        console.log("Visit Lustus");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        leterNormal();
        Lagezeichen.ƒS.update(1);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.HelicopterFlyBy, 1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Mann, Lob, warum sollen wir zu Lustus, wenn er uns nur ansteckt.");
        lobAngry();
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Mann, Leter, heul nicht rum. Wir haben 3 Tage nichts von Lustus gehört. Zumindest mal fragen gehört sich.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Uff, Lob, das muss auch nicht sein. Wenn Lustus krank ist, dann will ich nicht das gleiche bekommen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Dann geh doch. Aber dann brauchst dich auch nicht als Freund von Lustus zu bezeichnen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ist ja gut, ich komm doch mit. Aber es ist trotzdem fahrlässig, wenn er nun was hat, das wir auch bekommen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und genau darüber solltest du dir keine Gedanken machen. Wenn es eine Grippe war, dann kann dein Körper damit umgehen.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Lustus_room);
        leterNormal();
        lobNormal();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Er pennt...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Da machen wir uns die Mühe und er ist am Schlafen. Na, wird nötig sein, wenn er um die Zeit pennt...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Lass uns in die Zentrale verschwinden.");
        lustusAngry();
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.saw, 0.2, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "mmhhggg, wer redet denn so laut?! Ich versuche zu schlafen und nicht mit Kopfschmerzen und halbverstopfter Nase im Bett zu leiden.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        leterAngry();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Na super. Wir machen uns Sorgen, sehen nach ob du noch lebst und werden angeschnauzt. Jetzt weisst du, warum ich nicht herkommen wollte, Lob.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Jetzt macht mal beide halblang. Lustus, dir gehts beschissen, aber uns musst du deswegen nicht anranzen. Du auch, Leter.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ruh dich gut aus, Lustus, wir schauen mal in der Zentrale nach, was so neues los ist. Komm, Leter.");
        lustusNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na, jetzt wartet doch einen kurzen Moment. Ihr wollt also den Karton und das Glas untersuchen? Das Glas hatte ich schon untersucht, nachdem wir es bekommen hatten.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hmm, also kann Leter den Karton untersuchen und ich suche nach eventuellen Ursprungsorten der Lösung?");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        leterNormal();
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.saw, 0, 0, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Du kannst eigentlich alle Labore der Umgebung in Erwägung ziehen. Es ist auf jeden Fall keine Säure oder Lauge.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich habe auch täglich nachgesehen, ob was aus einem der Experimente geworden ist.. es scheint sich aber nur unter der Glasglocke mehr als vorher zu bewegen.. aber ganz sicher bin ich da nicht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Okay dann such ich mal nach Laboren.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ok, dann puder ich den Karton mal ab. Ruh dich gut aus, Lustus.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.HelicopterFlyBy, 0, 2, false);
        goToHqAfterLustusVisit();
    }
    Lagezeichen.visitLustus = visitLustus;
    async function visitHQ() {
        console.log("visitHQ");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Labor);
        leterNormal();
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "So. Wir sind in der Zentrale.. und jetzt??");
        lobNormal();
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na was wohl? Wir suchen nach etwas an dem Karton oder dem Glas, das Lustus noch nicht aufgefallen ist.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Lustus macht sich immer Notizen zu den Erkenntnissen im Labor. Genau da werde ich mal nachsehen. Wenn wir davon ausgehen, dass es ein Virus ist, den er sich durch die Lösung im Glas geholt hat.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wenn Lustus also nicht an dem Glasinhalt war, muss es wenn es aus dem Karton kommt, am Glas oder am Karton gewesen sein.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du glaubst wirklich, da war was drin?? Ach komm, das ist doch lächerlich, Lob.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und wenn es doch was gibt? Du erinnerst dich an den Fall mit dem Familienerbstück im Glastresor? Genau.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ja gut, ich such dann mal am Karton... Aber es wird nichts da sein außer unseren Abdrücken.");
        demoEnds();
    }
    Lagezeichen.visitHQ = visitHQ;
    async function demoEnds() {
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Dieser Abschnitt ist nicht fertig. Versuche eine andere Option.");
        firstGoodDecission();
    }
    Lagezeichen.demoEnds = demoEnds;
    async function getRidOfIt() {
        console.log("getRidOfIt");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Sogleich machten sich Leter und Lob daran, die Sachen zu entsorgen. Lob schüttete alle Lösungen, die Lustus erstellt hatte, in den Abfluss und stopfte die benutzten Gläser in eine Spülmaschine.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Leter hatte sich derweil mit den Papieren und dem Karton im Hof eingefunden und verbrannte den Haufen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Was die beiden nicht bedachten, waren die Lösung und die Kanalsystembewohner. So wurde ein unbekanntes Virus von Ratten auf andere Tiere übertragen und an die Bevölkerung des kleinen Ortes Locky Beaches weitergegeben.");
        Lagezeichen.ƒS.Speech.hide();
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
        Lagezeichen.ƒS.update(2);
    }
    Lagezeichen.getRidOfIt = getRidOfIt;
    async function goToHqAfterLustusVisit() {
        console.log("goToHqAfterLustusVisit");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        lobNormal();
        leterNormal();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Hmm, wir haben scheinbar kaum noch Graphitpulver.. oder gibt es noch ein verstecktes Döschen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir haben noch eine Dose davon im Schrank.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Eine halbe Stunde später");
        await Lagezeichen.ƒS.update(2);
        lobSmile();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.8, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "So, ich habe die in der Umgebung liegenden Einrichtungen aufgeschrieben und etwas versucht im Netz zu finden.");
        leterNormal();
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Hmm, ging ja schnell.. Ich such noch nach weiteren Abdrücken. Ich habe bis jetzt nur einen gefunden. Du kannst ja schon einen Blick auf die Notizen der Glocke werfen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Stimmt ja, ich lese die mal vor, damit du auch was davon hast.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Okay, Lustus hat also ein paar Tests gemacht und lässt was wachsen. Aber was machen wir nun? Wir haben einen Fingerabruck und die Lösung. Wir können die Konzerne und Labore mal abklappern und ein paar Fragen stellen, oder?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ich denke es wäre besser, nach dem Typ zu suchen, dem wir das ganze Zeug verdanken.");
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.distanthammer, 0, 0.5, false);
        let abklappernUndSuchen = {
            suchen: "Wir suchen den Typ.",
            abklappern: "Wir klappern die Adressen ab."
        };
        let abklappernUndSuchenDecision = await Lagezeichen.ƒS.Menu.getInput(abklappernUndSuchen, "Selection");
        {
            switch (abklappernUndSuchenDecision) {
                case abklappernUndSuchen.suchen:
                    return typSuchen();
                case abklappernUndSuchen.abklappern:
                    return abklappernFahren();
                default:
                    break;
            }
        }
    }
    Lagezeichen.goToHqAfterLustusVisit = goToHqAfterLustusVisit;
    async function typSuchen() {
        console.log("typSuchen");
        leterNormal();
        lobNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Und wie stellen wir das an? Wir haben keine Ahnung, wie der Kerl aussieht oder wo wir suchen sollen. Wir haben nur einen Fingerabdruck.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ach nee. Denk eher mal nach, was uns helfen könnte. Ich dachte schon die ganze Zeit an einen Anruf bei Inspector Lotter. Der Fingerabdruck gibt bestimmt was aus.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Als ob du Inspector Lotter fragen willst. Da nutzen wir eher eine Telefon und Mail-Lawine. Damit sollte sich doch irgend jemand finden, der einer Personenbeschreibung entspricht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ja gut, ein Bild oder eine Beschreibung sollten wir aus unserem Ersten schon rausbekommen.");
        leterAngry();
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Damit Lustus uns noch mehr anschnauzt, weil wir ihn nicht schlafen lassen?!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ach was.");
        let phantombildOderAnrufbeiLotter = {
            anrufen: "Wir rufen bei Inspector Lotter an",
            bild: "Wir fragen bei Lustus nach einem Bild."
        };
        let phantombildOderAnrufbeiLotterDecision = await Lagezeichen.ƒS.Menu.getInput(phantombildOderAnrufbeiLotter, "Selection");
        {
            switch (phantombildOderAnrufbeiLotterDecision) {
                case phantombildOderAnrufbeiLotter.anrufen:
                    return ersterAnrufBeiLotter();
                case phantombildOderAnrufbeiLotter.bild:
                    return phantombildErfragen();
                default:
                    break;
            }
        }
    }
    Lagezeichen.typSuchen = typSuchen;
    async function ersterAnrufBeiLotter() {
        lobNormal();
        leterNormal();
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonWahl, 0.3, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Dann wählen wir mal...", true);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonWahl, 0, 0, false);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonPiepTon, 0.4, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "...", true);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "......", true);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonBelegt, 0.4, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Da ist der Inspector nicht am Schreibtisch. Alles klar. Und jetzt?");
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonBelegt, 0, 0, false);
        let nochmalAnrufen = {
            nochmal: "Wir rufen nachher nochmal an.",
            bild2: "Wir fragen Lustus nach einem Bild."
        };
        let zweiterAnrufbeiLotterDecision = await Lagezeichen.ƒS.Menu.getInput(nochmalAnrufen, "Selection");
        {
            switch (zweiterAnrufbeiLotterDecision) {
                case nochmalAnrufen.nochmal:
                    leterNormal();
                    lobNormal();
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Dann versuchen wir einfach nochmal anzurufen. Er wird schon wieder in sein Büro müssen.");
                    await Lagezeichen.ƒS.update(2);
                    Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonWahl, 0.3, false);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Auf ein Neues...", true);
                    await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonWahl, 0, 0, false);
                    Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonPiepTon, 0.4, false);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "...", true);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "......", true);
                    Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonBelegt, 0.4, false);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Da ist der Inspector immer noch nicht am Schreibtisch. Alles klar. Und jetzt?");
                    await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonBelegt, 0, 0, false);
                    await Lagezeichen.ƒS.update(2);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir können uns einen entspannten Abend machen. Hausaufgaben hab ich eh noch genug...Bis morgen dann.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Erinner mich doch nicht an Hausaufgaben, Lob... Ich hab so keine Lust auf den gammligen Geschichtsaufsatz...");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ugh. Bis morgen, Lob.");
                    Lagezeichen.ƒS.Character.hideAll();
                    await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
                    await Lagezeichen.ƒS.update(2);
                    await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
                    lobNormal();
                    await Lagezeichen.ƒS.update(0);
                    Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.türZufallen, 0.3, false);
                    await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.outsideTowardsRight());
                    upd();
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Guten Mittag Leter. Hast du den Aufsatz angefangen?");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ja hab ich...");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Und ich habe den inzwischen fertig.. War ein ganzes Stück Arbeit. Deswegen bin ich auch erst jetzt angekommen. Hast du Neuigkeiten?");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Jep, hab ich. Heute Vormittag habe ich Lotter nach nur 2 Versuchen erreicht. Er war so schlechter Laune wie selten. Aber in seiner Rage hat er wie immer zu viel geplappert.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Scheinbar gab es in einem Labor in Locky Beach einen Einbruch. Genau in der Nacht, bevor wir den Karton bekommen haben.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und damit war es ziemlich einfach, was rauszufinden. Die offizielle Presse hat nichts geschrieben soweit, aber ein Blogger aus der Umgebung hat was gepostet.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Es sind zwei Polizeiwagen vor dem Loronavirus Laboratory in Locky Beach.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach...Das hinten auf dem Hügel oben? Das ist a wirklich nicht weit weg.");
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Genau, deswegen können wir uns da ziemlich gut um--");
                    Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonKlingeln, 0.5, false);
                    await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ich mach mal den Verstärker an");
                    Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonKlingeln, 0, 0, false);
                    notTheBestEnd();
                case nochmalAnrufen.bild2:
                    return phantombildErfragen();
                default:
                    break;
            }
        }
    }
    Lagezeichen.ersterAnrufBeiLotter = ersterAnrufBeiLotter;
    async function phantombildErfragen() {
        console.log("phantombildErfragen");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        leterNormal();
        lobNormal();
        await Lagezeichen.ƒS.update(0);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.radiomusic, 0.1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Stimmt eigentlich. Einen Moment, ich frage Lustus, ob er uns eine Zeichnung von dem Dude anfertigen kann.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Hey! Was machst du da an dem Schrank? Lob, was suchst du denn schon wieder.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ich funk Lustus an. Wir haben extra ein Walkie Talkie in seinem Zimmer und der Zentrale.");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.rauschen, 1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Zentrale an Nest, Bitte kommen. Over.");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        leterAngry();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Als ob das noch klappt, bestimmt ist der Akku schon lange nicht geladen worden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Nest an Zentrale? Was gibt es denn noch? Over.");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        leterSurprised();
        lobSmile();
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.rauschen, 1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Kannst du eine Zeichnung der Person anfertigen? Leter und ich haben den ja noch nie gesehen. Eine Vorstellung würde da schon etwas helfen. Over.");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.3, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Alles klar ihr zwei, ich versuch mich dran. Over.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(2);
        lobNormal();
        leterNormal();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.rauschen, 1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Jo danke, Erster, ist angekommen. Over.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na jetzt haben wir eine Vorstellung der Person. Jetzt können wir uns auch nach dem Lump umsehen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Gut, dann fragt mal nach, ob Inspector Lotter das Gekritzel erkennt. Over.");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        leterSurprised();
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.rauschen, 1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Bist du bei Trost, Erster? Wir sollen Lotter anrufen und ihn fragen, ob ihm das Gesicht bekannt vorkommt?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Genau das sollt ihr tun, Leter. Over.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na dann... lass uns Inspector Lotter anrufen...");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.radiomusic, 0, 5, false);
        leterNormal();
        upd();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonWahl, 0.4, false);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonPiepTon, 0.4, true);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "...", true);
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonPiepTon, 0, 0.5, true);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonBelegt, 0.4, false);
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonBelegt, 0, 0, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Niemand im Büro. Dann wird er wohl noch unterwegs sein.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Jungs? Lustus, Leter, Lob seid ihr da?");
        await Lagezeichen.ƒS.Character.hideAll();
        leterSurprised();
        lobSurprised();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Warum ruft Inspector Lotter nach uns? Wir gehen besser mal auf den Hof.");
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.surprised, Lagezeichen.rightToOutside());
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.leftToOutside());
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.InspectorLotter, Lagezeichen.characters.InspectorLotter.pose.normal, Lagezeichen.ƒS.positionPercent(10, 100));
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distantsaw2, 0.8, false);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positionPercent(45, 100));
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positionPercent(65, 100));
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positionPercent(85, 100));
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Inspector Lotter? Was bringt Sie her?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Wir haben eine Zeugenaussage über einen Einbrecher aus dem Lorona Virus Laboratory. Der soll bei euch vorbeigeschaut haben.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Meinen Sie den hier? Lustus hat einen Karton von dem bekommen und wir suchen den ebenfalls.");
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.müllpresse, 0, 3, false);
        await Lagezeichen.ƒS.Speech.hide();
        await Lagezeichen.ƒS.Character.hideAll();
        upd();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Phantom, Lagezeichen.characters.Phantom.pose.normal, Lagezeichen.ƒS.positions.center);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "", true);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Zeig mal her Leter... Was ist das den für ein Gekritzel... hmm, aber doch, das hat Ähnlichkeit mit dem Beschriebenen");
        /* let phantomBild: string[] = ["< img src = 'Source/img/chars/placeholder/phPhantom.png' /> "
        ];
        let current: number = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice: string;
        ƒS.Text.addClass("phantomBild");
        do {
          ƒS.Text.print(phantomBild[current]);
          choice = await ƒS.Menu.getInput(flip, "flip");
          switch (choice) {
            case flip.back:
              current = Math.max(0, current - 1);
              break;
            case flip.next:
              current = Math.min(phantomBild.length - 1, current + 1);
              break;
            default:
              console.log("phantombildError");
          }
        } while (choice != flip.done);
        ƒS.Text.close();
     */
        await Lagezeichen.ƒS.Speech.show();
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.InspectorLotter, Lagezeichen.characters.InspectorLotter.pose.normal, Lagezeichen.ƒS.positionPercent(10, 100));
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positionPercent(45, 100));
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positionPercent(65, 100));
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positionPercent(85, 100));
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und was hat der nun verbockt? Muss ja was wichtiges sein, wenn Sie hier so ankommen.");
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.distantsaw2, 0.4, 4, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Das Labor hat gemeldet, eine Probe eines hochansteckenden Virus zu vermissen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Welche Symptome soll der den an Menschen verursachen? Haben Sie da Informationen zu erhalten?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, " Das Labor meinte sowas noch nie an einem Menschen gesehen zu haben.. allerdings waren Tiere unter fieber- und schnupfenähnlichen Erkrankungssymptomen aufgefallen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wann nehmen Sie Lustus in Quarantäne, Herr Inspektor?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Wieso?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du meinst wohl uns alle, Lob. Wir hatten mit Lustus und der Lösung auch Kontakt. Ebenso sollten dann Tante und Onkel untersucht werden und zuhause bleiben.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.müllpresse, 0, 1, false);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.distantsaw2, 0, 1, false);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Nach ein paar Untersuchungen und Bluttests der Lagezeichen mussten sie zur Sicherheit eine 7-Tage Quarantäne absitzen und konnten dann ohne Probleme wieder ihr Büro führen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Es stellte sich heraus, dass das Labor einen geplanten Versuch vertuschen wollte. Dabei hatten Sie geplant, das Virus unkontrolliert in die Bevölkerung abzugeben.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Der Dieb wurde gefasst und gestand, den Lagezeichen den Karton gebracht zu haben. Damit wollte er das Labor unter Druck setzen. Von den dreien war bis jetzt jeder Fall gelöst worden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Er ging davon aus, dass die Drei es ohne große Schwierigkeiten aufklären würden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Good End -- Eine Seuche verhindert.");
    }
    Lagezeichen.phantombildErfragen = phantombildErfragen;
    async function notTheBestEnd() {
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        leterNormal();
        lobNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Hallo, hier Leter von den drei Lagezeichen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Hallo Leter, hier Inspector Lotter. Seid ihr drei in eurem Wohnwagen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Nein, Lustus ist nicht im Wohnwagen. Nur Lob ist mit mir hier. Lustus hatte die letzten Tage irgendwie 'nen Infekt oder so.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Ich bin auf dem Weg. Jungs, wartet auf dem Schrottplatz und versucht, Lustus mit auf den Platz zu bekommen, aber schaut, dass ihr Abstand haltet.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Was ist denn eigen--?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Keine Zeit jetzt, Lob! Bis gleich!");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonBelegt, 0.4, false);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonBelegt, 0, 0.5, false);
        lobSurprised();
        leterSurprised();
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Was war das denn. Lotter war richtig aufgebracht, als wir was von Lustus und seinem Schnupfen sagten...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Egal er wird ja bald auftauchen. Funken wir mal Lustus an.");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.rauschen, 1, false);
        leterNormal();
        lustusNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Zentrale an Nest. Zentrale an Nest. Over.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Guten Morgen Zentrale, was gibt es denn? Over.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Lotter hat eben angerufen und will uns drei im Hof sehen. Er hat nicht erklärt, was los ist, aber uns gesagt, Abstand von dir zu halten.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Er war sehr aufgebracht, nachdem wir deinen Schnupfen erwähnten... Over.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hmm okay, dann bis gleich im Hof. Ich ess noch schnell was. Over.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        leterNormal();
        lustusNormal();
        lobNormal();
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.LobGroupAtRight());
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.InspectorLotter, Lagezeichen.characters.InspectorLotter.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Guten Morgen ihr drei. Kennt ihr einen Dennis Bender?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Der Name sagt mir nichts, was ist mit diesem Dennis Bender?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Kenn ich auch nicht. Du Lob?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Nope. Kenne keinen Dennis.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Dann erklärt mir mal, warum jener Herr nun im Krankenhaus liegt und mit hohem Fieber kaum noch atmen kann??!!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Und das Personal im Krankenhaus die Polizei benachrichtigt, weil er die ganze Zeit von euch, einem Virus und Lebensgefahr schwafelt?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Inspector. Wenn wir einen Dennis Bender nicht kennen, dann ist das so. Haben sie noch andere Anhaltspunkte? Eventuell ein Bild von der Person?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Ein Bild!? Wozu brauchst du ein Bild von Bender?? Wir haben ein Bild da. Das Krankenhaus hat uns eins geschickt.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Jungs. Das ist der Typ, den wir suchen!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Nicht dein Ernst, Erster!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Also kennt ihr den Herrn ja doch! Wieso sagt ihr das nicht sofort!!");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Kennen ist übertrieben. Er war vor ein paar Tagen nachmittags kurz hier. Er hat mir einen Karton gegeben und ist direkt verschwunden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Seitdem versuchen wir den Typ zu finden. Allerdings hatten wir noch nicht viel Erfolg dabei.");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lustus);
        lustusSurprised();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Das erklärt auch was die Lösung in dem Glas ist.. oder sein muss. ");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Welches Glas!?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Es war ein Glas mit einer Lösung, die uns Herr Jorgen gebracht hat. Leider war nichts anderes dabei.");
        lustusNormal();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.InspectorLotter, "Hmm. Ihr habt das Zeug also alles noch. Gut. Dann wird das jetzt an ein Labor gebracht. Dort haben Sie die Ausrüstung zum Analysieren. Ihr drei wartet hier. Es ist schon ein Team unterwegs, dass euch auf Symptome und Ansteckung untersuchen soll.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Auch mit den Bemühungen des Labors und der bereits informierten Polizei war das Virus schon im Umlauf. Das Krankenhaus hatte zwar mit erhöter Ansteckungsgefahr gerechnet, war aber nicht auf die aggressive Verbreitung des Virus vorbereitet.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Die drei Lagezeichen durften sich mit Homeschooling begnügen und waren nach nur 2 Jahren wieder in der Schule. Das Virus war als eine Art Waffe entwickelt worden und sollte in den Umlauf gebracht werden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Das Lorona Laboratory wurde in einer Nacht- und Nebelaktion verlassen. Die Ermittlungen laufen immer noch.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Not the best end -- Quarantäne und Homeschooling");
    }
    Lagezeichen.notTheBestEnd = notTheBestEnd;
    async function abklappernFahren() {
        console.log("abklappernFahren");
        lobNormal();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Also dann fahren wir die Adressen ab. Sind nur 5.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        leterAngry();
        lobNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Den ganzen Nachmitag rumgefahren. Von wegen nur 5. Die waren alle so weit auseinander, dass wir ewig gebraucht haben.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na, nun reg dich mal nicht so auf. Es war nicht dein Kraftstoff und eine Sauna ist auch nicht schlecht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ich will aber nicht in einem Auto fahrend gebacken werden. Wir hatten Glück, dass du genug Wasser dabei hattest.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Dann noch nichts rausgefunden auf dem ganzen Trip. Alles umsonst.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ist ja gut jetzt. Uns ist halt nichts aufgefallen. Na und? Wofür denkst du habe ich Bilder von jedem Gebäude gemacht. Eventuell haben wir was nicht gesehen.");
        Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        leterNormal();
        upd();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Na los, dann gib schon her die Cam.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hat schon was, wenn nicht erst entwickelt werden muss, um die Bilder zu sehen. Sehr angenehm.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Welche Nummer hat eigentlich Inspector Lotters Wagen? war das nicht 1887?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Das war 1337. Wieso hast den Wagen gesehen?? Mir ist nichts aufgefallen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ja, der Wagen steht auf einem Parkplatz vor dem... uhh Lorona Virus Laboratoy");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na dann, klingeln wir direkt mal Lotter durch.");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonWahl, 0.4, false);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.telefonPiepTon, 0.1, false);
        await Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.telefonPiepTon, 0, 0, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ja, guten Tag, Inspector Lotter, Lob hier. Uns ist aufgefallen, Sie waren vorhin bei einem Chemiekonzern. Was ist denn dort passiert? Wie ein Sicherheitsbruch im Labor, aber nichts gestohlen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir suchen gerade nach einer Person, die vermutlich was aus einem Labor entwendet hat.. Kurz nach dem ersten Kontakt war Lustus krank mit einer Art schnupfen und leichtem Fieber.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Frag ihn doch, ob er den Mann mal nach dem Karton bei uns fragen kann. Wir haben ja auch einen Fingerabdruck gefunden im Karton. Das wird vermutlich reichen für einen Blöff.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ja Inspector, das war Leter. Es stimmt, wir haben einen Fingerabdruck in dem Karton gefunden.");
        let fallAbgebenOderLotterÜberreden = {
            abgeben: "Wir bringen den Karton zu Lotter.",
            nichtabgeben: "Wir behalten den Karton."
        };
        let fallAbgebenOderLotterÜberredenDecision = await Lagezeichen.ƒS.Menu.getInput(fallAbgebenOderLotterÜberreden, "Selection");
        {
            switch (fallAbgebenOderLotterÜberredenDecision) {
                case fallAbgebenOderLotterÜberreden.abgeben:
                    return Abgabe();
                case fallAbgebenOderLotterÜberreden.nichtabgeben:
                    let rValue = (Math.random() * 1);
                    if (rValue < 0.5)
                        return überredenGoodEnd();
                    else
                        return überredenBadEnd();
            }
        }
    }
    Lagezeichen.abklappernFahren = abklappernFahren;
    async function Abgabe() {
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Okay, dann bringen wir Ihnen den Karton vorbei. Bis bald.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Die drei Lagezeichen geben nie einen Fall auf.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
        Lagezeichen.ƒS.Speech.hide();
        upd();
    }
    Lagezeichen.Abgabe = Abgabe;
    async function überredenBadEnd() {
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lotter informiert die drei Lagezeichen über den Misserfolg der Befragung zu dem Karton. Auch ist der Fingerabdruck nicht von dem festgenommenen Mann.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Die drei Lagezeichen versuchen weiterhin, den Verantwortlichen zu finden. Eine sich immer weiter verbreitende Seuche verhindert allerdings ihre Arbeit.");
        Lagezeichen.ƒS.Speech.hide();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
        upd();
    }
    Lagezeichen.überredenBadEnd = überredenBadEnd;
    async function überredenGoodEnd() {
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lotter gelang es, aus dem fest genommenen Mann rauszubekommen, was in dem Karton war. Es handelt sich, wie die drei Jungen von Lotter hörten, um ein Virus, das als eine Art Versuch auf die Bevölkerung losgelassen werden sollte.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Die drei Jungen sowie ihre Eltern wurden auf eine solche Krankheit untersucht, waren aber nicht davon betroffen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Good End");
    }
    Lagezeichen.überredenGoodEnd = überredenGoodEnd;
})(Lagezeichen || (Lagezeichen = {}));
//# sourceMappingURL=Template.js.map