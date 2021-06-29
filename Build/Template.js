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
            background: "Source/imgbackground/badEnd.png"
        }
    };
    //Sounds
    Lagezeichen.sound = {
        backgroundtheme: "Source/music/noise/saw.mp3"
    };
    Lagezeichen.soundFiles = {
        distantsaw: "Source/music/noise/distantsaw.mp3",
        distantsaw2: "Source/music/noise/distantsaw2.mp3",
        saw: "Source/music/noise/saw.mp3",
        chainsaw: "Source/music/noise/chainsaw.ogg",
        jackhammer: "Source/music/noise/jackhammer.mp3",
        hammer: "Source/music/noise/hammer.mp3",
        distanthammer: "Source/music/noise/distanthammer.mp3",
        müllpresse: "Source/music/noise/müllpresse.mp3"
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
    function middleToRight() {
        return {
            start: { translation: Lagezeichen.ƒS.positions.bottomcenter },
            end: { translation: Lagezeichen.ƒS.positions.bottomright },
            duration: 1,
            playmode: Lagezeichen.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Lagezeichen.middleToRight = middleToRight;
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
    /* let volume: number = 0.5;
    export function increaseVolume(): void {
      if (volume < 100)
        return;
      volume += 0.08;
      ƒS.Sound.setVolume(sound.backgroundtheme, volume);
    }
    export function decreaseVolume(): void {
      if (volume > 0)
        return;
      volume -= 0.08;
      ƒS.Sound.setVolume(sound.backgroundtheme, volume);
      
    }
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
    let gameMenu: ƒS.Menu;
  
    async function buttonFunctions(_option: string): Promise<void> {
      console.log(_option);
      if (_option == inGameMenu.save) {
        await ƒS.Progress.save();
      }
      else if (_option == inGameMenu.load) {
        await ƒS.Progress.load();
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
    } */
    //document.addEventListener("keydown", hndKeypress);
    // let hiddenMenu: boolean = true;
    /* async function hndKeypress(_event: KeyboardEvent): Promise<void> {
      switch (_event.code) {
        case ƒ.KEYBOARD_CODE.A && ƒ.KEYBOARD_CODE.B:
          console.log("Save");
          await ƒS.Progress.save();
          break;
        case ƒ.KEYBOARD_CODE.C:
          console.log("load");
          await ƒS.Progress.load();
          break;
        case ƒ.KEYBOARD_CODE.I:
          console.log("inventory");
          await ƒS.Inventory.open();
          break;
        case ƒ.KEYBOARD_CODE.M:
          if (hiddenMenu == false) { gameMenu.close(); }
  
          else if (hiddenMenu == true) { gameMenu.open(); }
  
  
      }
  
    } */
    window.addEventListener("load", start);
    function start(_event) {
        //gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");
        // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
        let scenes = [
            //{ scene: startScreen, name: "Startscreen" }
            { scene: Lagezeichen.ErsteScene, name: "Erste Szene" }
            //{ scene: firstBadEnd, name: "BadEnd1" },
            //{ scene: visitLustus, name: "Geh zuerst zu Lustus" },
            //{ scene: visitHQ, name: "Direkt in die Zentrale" },
            //{ scene: getRidOfIt, name: "Alles entsorgen (schon wieder)" }
            //{ scene: firstGoodDecission, name: "Erste gute Entscheidung"}
            //{ scene: endOfDemo, name: "eod"}
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
    async function startScreen() {
        /* document.addEventListener("click", explanationScene);
        let gamemenu = document.getElementsByClassName("gameMenu");
        gamemenu[0].setAttribute("visibility", "hidden");
        let chatwindow = document.getElementsByTagName("speech");
        chatwindow[0].setAttribute("visibility", "hidden");
        console.log("explanation");
        document.removeEventListener("click", explanationScene);
     */
    }
    Lagezeichen.startScreen = startScreen;
    async function ErsteScene() {
        console.log("Lagezeichen");
        Lagezeichen.ƒS.Speech.setTickerDelays(7, 10);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Dies ist ein frei erfundenes Spiel. Ähnlichkeiten mit realen Personen oder Orten ist rein zufällig. Das Spiel ist eine Demo und nicht vollendet. Viel Spaß beim Lesen.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distantsaw, 0.1, false);
        await Lagezeichen.ƒS.update(2);
        lobNormal();
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(1.5);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ach man es ist schon wieder nichts los.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(1.5);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und die Ventilatoren schaffen es nicht, die Hitze fernzuhalten. Ugghhh.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS, du Faulpelz.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.smile, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Au Wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spaß Pummelchen.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Nicht schon wieder.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich geh mal raus Jungs... Ihr kennt es ja.");
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.middleToLeft());
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.müllpresse, 0.3, false);
        Lagezeichen.ƒS.Sound.fade(Lagezeichen.soundFiles.müllpresse, 0, 20, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Also was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lathilda, Lagezeichen.characters.Lathilda.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lathilda, "Na nun steh nicht faul rum. Alles was da so rumliegt, muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ist gut, Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Eine kurze Zeit später.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Schrottplatz);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Puhhh, warum muss es auch so verdammt heiß sein.");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Deliveryboy, Lagezeichen.characters.Deliveryboy.pose.normal, Lagezeichen.rightTowardsMid());
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hey, was soll das? Was ist in der Box?");
        //await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, midTowardsRight());
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Deliveryboy);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "HE bleib hier. Was ist das??!!");
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Weg ist er... Bringt mir einen Karton und geht einfach wieder.");
        //ƒS.Inventory.add(items.geschlossenesPaket);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Hmm, zum Glück ist der Lastwagen fast fertig abgeladen. Ich bring mal das Paket in die Zentrale. Mal sehen, was Lob und Leter dazu sagen.");
        Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.normal, Lagezeichen.ƒS.positions.bottomcenter);
        await Lagezeichen.ƒS.update(0);
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distantsaw2, 0.1, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Moment, ich glaube wir haben noch eine Flasche rumstehen... Ah ja, hier ist noch eine.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.normal, Lagezeichen.ƒS.positions.bottomright);
        Lagezeichen.ƒS.update(0);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Was hast denn da eigentlich in dem Karton?");
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
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Garnichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Sieht aus wie ein Versuch, uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Du willst bevor wir irgendwas wissen, direkt alles hinschmeißen? Na, ich hatte mehr von Dir erwartet Leter. Lob, was denkst du?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Hmm..");
        let FD = {
            trhowAway: "Weg mit dem Zeug.",
            keepIt: "Wir behalten den Karton."
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(FD, "Selection");
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
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob lehrte das Glas in den Abfluss und warf es in einen Glascontainer.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Papierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den beiden wissen.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten, ein Sommerschnupfen macht die Runde.");
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Einige hatten so schlimmes Fieber, sodass selbst die Ärzte verwundert waren.");
        Lagezeichen.ƒS.update(0);
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
        Lagezeichen.ƒS.Speech.hide();
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BadEnd);
    }
    Lagezeichen.firstBadEnd = firstBadEnd;
    async function firstGoodDecission() {
        console.log("1Good");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lob, Lagezeichen.characters.Lob.pose.normal, Lagezeichen.ƒS.positions.bottomleft);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Also wirklich Leter. Wieder mal keine Ahnung von nichts oder?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wir untersuchen das Glas und den Karton auf jeden Fall bevor wir irgendwas entsorgen.");
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.distanthammer, 0.1, false);
        await Lagezeichen.ƒS.Character.show(Lagezeichen.characters.Lustus, Lagezeichen.characters.Lustus.pose.smile, Lagezeichen.ƒS.positions.bottomcenter);
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Na, wenigstens hat Lob etwas im Kopf. Also auf gehts. Lob willst du den Karton untersuchen? Leter du bekommst das Glas und das Papier okay?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Ich lass die Flüssigkeit noch in ein paar andere Gläser ab, dann kanns losgehen.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Okay, geht klar. Allerdings gibts bei mir bald Essen. Also erst beim nächsten Mal. cya.");
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Lob);
        lustusNormal();
        await Lagezeichen.ƒS.update(2);
        leterAngry();
        // await ƒS.Character.show(characters.Leter, characters.Leter.pose.angry, ƒS.positions.bottomright);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Erst bezeichnest du mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Du hast wirklich was an der Waffel.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du kannst mich mal Lustus.");
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Character.animate(Lagezeichen.characters.Leter, Lagezeichen.characters.Leter.pose.angry, Lagezeichen.rightTowardsLeft());
        await Lagezeichen.ƒS.Character.hide(Lagezeichen.characters.Leter);
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "He Knall die Tür nicht so...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.Character.hideAll();
        await Lagezeichen.ƒS.update(1);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lustus begann mit seiner Untersuchung. Am nächsten Tag wollte Leter immer noch nicht mit Lob und ihm reden.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste, was wirklich los war mit ihm, steckten Leter und Lob die Köpfe zusammen und überlegten.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren. Sollten Sie nachsehen, was los war oder eher nicht?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Lob meinte es gibt bestimmt was Neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immer noch nichts davon hören.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Sollte Lob Leters Idee nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben Lustus aufzusuchen?");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Oder du gibst Leters erster Idee, alles zu entsorgen nach und schmeißt jetzt alles weg.");
        let SD = {
            visitLustus: "Wir gehen zu Lustus.",
            visitHQ: "Wir gehen direkt in die Zentrale.",
            getRidOfIt: "Entsorge direkt alles"
        };
        let firstDecision = await Lagezeichen.ƒS.Menu.getInput(SD, "Selection");
        {
            switch (firstDecision) {
                case SD.visitLustus:
                    return endOfDemo();
                //return visitLustus();
                case SD.visitHQ:
                    return endOfDemo();
                //return visitHQ();
                case SD.getRidOfIt:
                    return endOfDemo();
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
        leterNormal();
        lobNormal();
        await Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Er pennt...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Da machen wir uns die Mühe und er ist am schlafen. Na wird nötig sein, wenn er um die Zeit pennt...");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Lass uns in die Zentrale verschwinden.");
        lustusAngry();
        Lagezeichen.ƒS.Sound.play(Lagezeichen.soundFiles.saw, 0.2, false);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lustus, "mmhhggg wer redet denn so laut?! Ich versuche zu schlafen und nicht mit Kopfschmerzen und halbverstopfter Nase im Bett zu leiden.");
        leterAngry();
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Na super. Wir machen uns sorgen, sehen nach ob Du noch lebst und werden angeschnauzt. Jetzt weisst du warum ich nicht herkommen wollte Lob.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Jetzt macht mal beide halblang. Lustus dir gehts beschissen aber uns musst du deswegen nicht anranzen. Du auch Leter.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Ruh dich gut aus Lustus, wir schauen mal in der Zentrale nach was so neues los ist. Komm Leter.");
        Lagezeichen.ƒS.Character.hideAll();
        Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        await Lagezeichen.ƒS.update(0);
    }
    Lagezeichen.visitLustus = visitLustus;
    async function visitHQ() {
        console.log("visitHQ");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.Wohnwagen);
        leterNormal();
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "So. Wir sind in der Zentrale.. und jetzt??");
        lobNormal();
        Lagezeichen.ƒS.update(2);
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Na was wohl? Wir suchen nach etwas an dem Karton oder dem Glas das Lustus noch nicht aufgefallen ist.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Lustus macht sich immer Notizen zu den Erkenntnissen im Labor. Genau da werde ich mal nachsehen. Wenn wir davon ausgehen das es ein Virus ist den er sich durch die Lösung im Glas geholt hat.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Wenn Lustus als nicht an dem Glasinhalt war muss es wenn es aus dem Karton kommt am Glas oder am Karton gewesen sein.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Du glaubst wirklich da war was drin?? Ach komm das ist doch lächerlich Lob.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Lob, "Und wenn es doch was gibt? Du erinnerst dich an den Fall mit dem Familienerbstück im Glastresor? Genau.");
        await Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Leter, "Ja gut ich such dann mal am Karton... Aber es wird nichts da sein ausser unseren Abdrücken.");
    }
    Lagezeichen.visitHQ = visitHQ;
    async function getRidOfIt() {
        console.log("getRidOfIt");
        await Lagezeichen.ƒS.Location.show(Lagezeichen.locations.BS);
        await Lagezeichen.ƒS.update(0);
    }
    Lagezeichen.getRidOfIt = getRidOfIt;
    async function endOfDemo() {
        Lagezeichen.ƒS.Speech.tell(Lagezeichen.characters.Narrator, "Hier endet die Demo.");
    }
    Lagezeichen.endOfDemo = endOfDemo;
})(Lagezeichen || (Lagezeichen = {}));
//# sourceMappingURL=Template.js.map