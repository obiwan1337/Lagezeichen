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
  //define sound
  export let sound = {
    //Musik
    backgroundtheme: "",
    // Sound
    click: "",

  };
  export let locations = {
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
  export let Soundfiles = {
    saw: "Source/music/noise/saw.mp3",
    chainsaw: "Source/music/noise/chainsaw.ogg",
    jackhammer: "Source/music/noise/jackhammer.mp3",
    hammer: "Source/music/noise/hammer.mp3",
  }
  //define characteres
  export let characters = {
    Narrator: {
      name: ""
    },
    Lustus: {
      name: "Lustus Lonas",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
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
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
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
      origin: ƒS.ORIGIN.BOTTOMLEFT,
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
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Source/img/chars/Lathilda/Lathilda_N.png"
      }
    }

  };
  document.addEventListener("keydown", hndKeypress);
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("inventory");
        await ƒS.Inventory.open();
        break;
    }
  }
export let dataForSave ={
  state: {
    a: 0,
  }
}
let uiElement:HTMLElement = document.querySelector("[type=interface]");
dataForSave.state = ƒS.Progress.setDataInterface(dataForSave.state, uiElement);
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // define the sequence of scenes, each scene as an object with a reference to the scene-function, a name and optionally an id and an id to continue the story with
    let scenes: ƒS.Scenes = [

      { scene: ErsteScene, name: "Erste Szene" },
      //{ scene: LustusZimmer1, name: "Bei Lustus im Zimmer" }

    ];
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}