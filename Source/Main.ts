namespace Lagezeichen {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");
  //define transitions
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };
  export let locations = {
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
      background: "Source/img/background/lususRoom.jpg"
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

  export let soundFiles = {
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
  export let characters = {
    Narrator: {
      name: ""
    },

    Deliveryboy: {
      name: "unbekannt",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "Source/img/chars/placeholder/phboy.png"
      }
    },
    Lustus: {
      name: "Lustus Lonas",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        //normal: "Source/img/chars/Lathilda/Lathilda_N.png"
        normal: "Source/img/chars/placeholder/phL.png"
      }
    },
    InspectorLotter: {
      name: "Inspector Lotter",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Source/img/chars/placeholder/phLotter.png"
      }
    },
    Phantom: {
      //Pages wollten nicht wie ich wollte.
      name: "Phantom",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "Source/img/chars/placeholder/phPhantom.png"
      }
    }
  };


  //ANIMATIONS


  export function middleToRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter },
      end: { translation: ƒS.positions.bottomright },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function outsideTowardsRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(-30, 100) },
      end: { translation: ƒS.positions.bottomright },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function LobGroupAtRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positionPercent(75, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function leftToOutside(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomleft },
      end: { translation: ƒS.positionPercent(-30, 100) },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function rightToOutside(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright },
      end: { translation: ƒS.positionPercent(-30, 100) },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function rightTowardsMid(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter },
      end: { translation: ƒS.positions.bottomcenter },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function rightTowardsLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomright },
      end: { translation: ƒS.positions.bottomleft },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function midTowardsRight(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter },
      end: { translation: ƒS.positions.bottomcenter },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function middleToLeft(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positions.bottomcenter },
      end: { translation: ƒS.positions.bottomleft },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export let dataForSave = {
    state: {
      a: 50

    }
  };

  //Menu Audio
  export let volume: number = 0.5;
  export function increaseVolume(): void {
    if (volume <= 0.95) {
      volume = volume + 0.08;
      console.log(volume);
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function decreaseVolume(): void {
    if (volume >= 0.04) {
      volume = volume - 0.08;
      console.log(volume);
      ƒS.Sound.setMasterVolume(volume);
    }
  }
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
  }
  document.addEventListener("keydown", hndKeypress);

  let hiddenMenu: boolean = false;
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.A && ƒ.KEYBOARD_CODE.B:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.C:
        console.log("load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.U:
        console.log("volUp");
        increaseVolume();
        break;
      case ƒ.KEYBOARD_CODE.D:
        console.log("volDown");
        decreaseVolume();
        break;
      case ƒ.KEYBOARD_CODE.M: {

        if (hiddenMenu == false) {
          gameMenu.close();
          hiddenMenu = true;
        }
        else if (hiddenMenu == true) { gameMenu.open(); hiddenMenu = false; }
        break;
      }
      default:
        console.log("menudefault");
    }
  }
  window.addEventListener("load", start);

  function start(_event: Event): void {

    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctions, "gameMenu");

    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [
      //{ scene: TestScene, name: "TEST" }
      { scene: ErsteScene, name: "Erste Szene" },
      { scene: firstBadEnd, name: "BadEnd1" },
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
      { scene: überredenGoodEnd, name: "Glück beim Verhör" }
    ];
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave.state = ƒS.Progress.setData(dataForSave.state, uiElement);
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}