namespace Lagezeichen {
  function lobNormal(): void {
    ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
  }
  function lobAngry(): void {
    ƒS.Character.show(characters.Lob, characters.Lob.pose.angry, ƒS.positions.bottomleft);
  }
  function lobSmile(): void {
    ƒS.Character.show(characters.Lob, characters.Lob.pose.smile, ƒS.positions.bottomleft);
  }
  function lobSurprised(): void {
    ƒS.Character.show(characters.Lob, characters.Lob.pose.surprised, ƒS.positions.bottomleft);
  }
  function lobHappy(): void {
    ƒS.Character.show(characters.Lob, characters.Lob.pose.happy, ƒS.positions.bottomleft);
  }
  function leterNormal(): void {
    ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
  }
  function leterSmile(): void {
    ƒS.Character.show(characters.Leter, characters.Leter.pose.smile, ƒS.positions.bottomright);
  }
  function leterHappy(): void {
    ƒS.Character.show(characters.Leter, characters.Leter.pose.happy, ƒS.positions.bottomright);
  }
  function leterSurprised(): void {
    ƒS.Character.show(characters.Leter, characters.Leter.pose.surprised, ƒS.positions.bottomright);
  }
  function leterAngry(): void {
    ƒS.Character.show(characters.Leter, characters.Leter.pose.angry, ƒS.positions.bottomright);
  }
  function lustusNormal(): void {
    ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
  }
  function lustusAngry(): void {
    ƒS.Character.show(characters.Lustus, characters.Lustus.pose.angry, ƒS.positions.bottomcenter);
  }
  function lustusSmile(): void { ƒS.Character.show(characters.Lustus, characters.Lustus.pose.smile, ƒS.positions.bottomcenter); }
  function lustusSurprised(): void { ƒS.Character.show(characters.Lustus, characters.Lustus.pose.surprised, ƒS.positions.bottomcenter); }
  function lustusHappy(): void { ƒS.Character.show(characters.Lustus, characters.Lustus.pose.happy, ƒS.positions.bottomcenter); }

  export async function startScreen(): ƒS.SceneReturn {

    /* document.addEventListener("click", explanationScene);
    let gamemenu = document.getElementsByClassName("gameMenu");
    gamemenu[0].setAttribute("visibility", "hidden");
    let chatwindow = document.getElementsByTagName("speech");
    chatwindow[0].setAttribute("visibility", "hidden");
    console.log("explanation");
    document.removeEventListener("click", explanationScene);
 */
  }
  export async function ErsteScene(): ƒS.SceneReturn {
    console.log("Lagezeichen");

    ƒS.Speech.setTickerDelays(7, 10);
    await ƒS.Speech.tell(characters.Narrator, "Dies ist ein frei erfundenes Spiel. Ähnlichkeiten mit realen Personen oder Orten ist rein zufällig. Das Spiel ist eine Demo und nicht vollendet. Viel Spaß beim Lesen.");
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.Sound.play(soundFiles.distantsaw, 0.1, false);

    await ƒS.update(2);
    lobNormal();
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(1.5);


    ƒS.Sound.play(soundFiles.distanthammer, 0.1, false);
    await ƒS.Speech.tell(characters.Leter, "Ach man es ist schon wieder nichts los.");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1.5);
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht, die Hitze fernzuhalten. Ugghhh.");
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS, du Faulpelz.");
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.smile, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Au Wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spaß Pummelchen.");
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Nicht schon wieder.");
    await ƒS.Speech.tell(characters.Lustus, "Ich geh mal raus Jungs... Ihr kennt es ja.");
    await ƒS.Character.animate(characters.Lustus, characters.Lustus.pose.normal, middleToLeft());
    await ƒS.update(2);
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    ƒS.Sound.play(soundFiles.müllpresse, 0.3, false);
    ƒS.Sound.fade(soundFiles.müllpresse, 0, 20, false);
    await ƒS.Speech.tell(characters.Lustus, "Also was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
    await ƒS.Character.show(characters.Lathilda, characters.Lathilda.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "Na nun steh nicht faul rum. Alles was da so rumliegt, muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
    await ƒS.Speech.tell(characters.Lustus, "Ist gut, Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
    await ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Eine kurze Zeit später.");
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Puhhh, warum muss es auch so verdammt heiß sein.");
    await ƒS.Character.show(characters.Deliveryboy, characters.Deliveryboy.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, rightTowardsMid());
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Hey, was soll das? Was ist in der Box?");
    //await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, midTowardsRight());


    await ƒS.Character.hide(characters.Deliveryboy);
    await ƒS.Speech.tell(characters.Lustus, "HE bleib hier. Was ist das??!!");
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Weg ist er... Bringt mir einen Karton und geht einfach wieder.");
    //ƒS.Inventory.add(items.geschlossenesPaket);
    await ƒS.Speech.tell(characters.Lustus, "Hmm, zum Glück ist der Lastwagen fast fertig abgeladen. Ich bring mal das Paket in die Zentrale. Mal sehen, was Lob und Leter dazu sagen.");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Location.show(locations.Wohnwagen);

    await ƒS.update(1);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0);
    ƒS.Sound.play(soundFiles.distantsaw2, 0.1, false);
    await ƒS.Speech.tell(characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Moment, ich glaube wir haben noch eine Flasche rumstehen... Ah ja, hier ist noch eine.");
    await ƒS.Speech.tell(characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
    await ƒS.Character.hide(characters.Lob);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Leter, "Was hast denn da eigentlich in dem Karton?");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Hab mich auch schon gewundert. Was hast du da?");
    await ƒS.Speech.tell(characters.Lustus, "Das hat mir ein Junge hingestellt und ist wieder verschwunden. Kein Wort hat er von sich gegeben.");
    await ƒS.Speech.tell(characters.Leter, "Einfach so das Ding abgestellt und gegangen?");
    await ƒS.Speech.tell(characters.Lob, "Hast du schon reingeschaut? Was ist drin?");
    await ƒS.Speech.tell(characters.Lustus, "Na was denkst du denn? Als ob ich einfach ohne euch das Ding aufmache und mich dran erfreuen würde, euch extra lange warten zu lassen, bis ich sage, was drin ist.");
    await ƒS.Speech.tell(characters.Leter, "Komisch, genau das beschreibt dich ziemlich gut.");
    await ƒS.Speech.tell(characters.Lustus, "Ich habe es nicht aufgemacht.");
    await ƒS.Speech.tell(characters.Leter, "Na dann aber los. Hier eine Schere.");
    ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Lustus, "Hier ist ein Zettel drin... und ein Glas.");
    await ƒS.Speech.tell(characters.Lob, "Gib mal den Zettel her.");
    await ƒS.Speech.tell(characters.Lob, "Hier steht 'Viel Spaß ihr Opfer'. Mehr ist nicht drauf.");
    await ƒS.Speech.tell(characters.Lustus, "Na, wir werden ja sehen, was noch drauf ist. Wozu haben wir ein kleines Labor?");
    await ƒS.Speech.tell(characters.Leter, "Und was ist in dem Glas? Was steht drauf?");
    await ƒS.Speech.tell(characters.Lustus, "Garnichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
    await ƒS.Speech.tell(characters.Leter, "Sieht aus wie ein Versuch, uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
    await ƒS.Speech.tell(characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
    await ƒS.Speech.tell(characters.Lustus, "Du willst bevor wir irgendwas wissen, direkt alles hinschmeißen? Na, ich hatte mehr von Dir erwartet Leter. Lob, was denkst du?");
    await ƒS.Speech.tell(characters.Lob, "Hmm..");
    let FD = {
      trhowAway: "Weg mit dem Zeug.",

      keepIt: "Wir behalten den Karton."
    };
    let firstDecision = await ƒS.Menu.getInput(FD, "Selection");
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

  export async function firstBadEnd(): ƒS.SceneReturn {
    console.log("1Bad");

    ƒS.Location.show(locations.BS);
    ƒS.update(2);
    ƒS.Speech.tell(characters.Narrator, "Lob hatte genau wie Leter keine Lust auf eine Schnitzeljagd ohne Schnitzel. Er war ebenfalls dafür das Zeug zu entsorgen.");
    ƒS.Speech.tell(characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob lehrte das Glas in den Abfluss und warf es in einen Glascontainer.");
    ƒS.Speech.tell(characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Papierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den beiden wissen.");
    ƒS.Speech.tell(characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten, ein Sommerschnupfen macht die Runde.");
    ƒS.Speech.tell(characters.Narrator, "Einige hatten so schlimmes Fieber, sodass selbst die Ärzte verwundert waren.");
    ƒS.update(0);
    ƒS.Speech.tell(characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
    ƒS.Speech.hide();
    ƒS.Location.show(locations.BadEnd);



  }
  export async function firstGoodDecission(): ƒS.SceneReturn {
    console.log("1Good");
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.Speech.tell(characters.Lob, "Also wirklich Leter. Wieder mal keine Ahnung von nichts oder?");
    await ƒS.Speech.tell(characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
    await ƒS.Speech.tell(characters.Lob, "Wir untersuchen das Glas und den Karton auf jeden Fall bevor wir irgendwas entsorgen.");
    ƒS.Sound.play(soundFiles.distanthammer, 0.1, false);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.smile, ƒS.positions.bottomcenter);
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Na, wenigstens hat Lob etwas im Kopf. Also auf gehts. Lob willst du den Karton untersuchen? Leter du bekommst das Glas und das Papier okay?");
    await ƒS.Speech.tell(characters.Lustus, "Ich lass die Flüssigkeit noch in ein paar andere Gläser ab, dann kanns losgehen.");
    await ƒS.Speech.tell(characters.Lob, "Okay, geht klar. Allerdings gibts bei mir bald Essen. Also erst beim nächsten Mal. cya.");

    await ƒS.Character.hide(characters.Lob);
    lustusNormal();
    await ƒS.update(2);
    leterAngry();
    // await ƒS.Character.show(characters.Leter, characters.Leter.pose.angry, ƒS.positions.bottomright);
    await ƒS.Speech.tell(characters.Leter, "Erst bezeichnest du mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Du hast wirklich was an der Waffel.");
    await ƒS.Speech.tell(characters.Leter, "Du kannst mich mal Lustus.");
    await ƒS.update(2);

    await ƒS.Character.animate(characters.Leter, characters.Leter.pose.angry, rightTowardsLeft());
    await ƒS.Character.hide(characters.Leter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "He Knall die Tür nicht so...");
    await ƒS.Speech.tell(characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
    await ƒS.Location.show(locations.BS);
    await ƒS.Character.hideAll();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Lustus begann mit seiner Untersuchung. Am nächsten Tag wollte Leter immer noch nicht mit Lob und ihm reden.");
    await ƒS.Speech.tell(characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste, was wirklich los war mit ihm, steckten Leter und Lob die Köpfe zusammen und überlegten.");
    await ƒS.Speech.tell(characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren. Sollten Sie nachsehen, was los war oder eher nicht?");
    await ƒS.Speech.tell(characters.Narrator, "Lob meinte es gibt bestimmt was Neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immer noch nichts davon hören.");
    await ƒS.Speech.tell(characters.Narrator, "Sollte Lob Leters Idee nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben Lustus aufzusuchen?");
    await ƒS.Speech.tell(characters.Narrator, "Oder du gibst Leters erster Idee, alles zu entsorgen nach und schmeißt jetzt alles weg.");
    let SD = {
      visitLustus: "Wir gehen zu Lustus.",

      visitHQ: "Wir gehen direkt in die Zentrale.",

      getRidOfIt: "Entsorge direkt alles"
    };
    let firstDecision = await ƒS.Menu.getInput(SD, "Selection");
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
  export async function visitLustus(): ƒS.SceneReturn {
    console.log("Visit Lustus");
    await ƒS.Location.show(locations.Schrottplatz);
    leterNormal();
    ƒS.update(1);
    await ƒS.Speech.tell(characters.Leter, "Mann Lob warum sollen wir zu Lustus wenn er uns nur ansteckt.");

    await ƒS.Character.show(characters.Lob, characters.Lob.pose.angry, ƒS.positions.bottomleft);
    await ƒS.Speech.tell(characters.Lob, "Mann Leter heul nicht rum. Wir haben 3 tage nichts von Lustus gehört. Zumindest mal fragen gehört sich.");
    await ƒS.Speech.tell(characters.Leter, "Uff, Lob das muss auch nicht sein. Wenn Lustus krank ist dann will ich nicht das gleiche bekommen.");
    await ƒS.Speech.tell(characters.Lob, "Dann geh doch. Aber dann brauchst dich auch nicht als Freund von Lustus bezeichnen.");
    await ƒS.Speech.tell(characters.Leter, "Ist ja gut ich komm doch mit. Aber es ist trotzdem fahrläßig wenn er nun was hat das wir auch bekommen.");
    await ƒS.Speech.tell(characters.Lob, "Und genau das sollte Dir keine Gedanken machen. wenn es eine Grippe war dann kann dein Körper damit umgehen.");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.Lustus_room);
    await ƒS.update(1);
    leterNormal();
    lobNormal();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lob, "Er pennt...");
    await ƒS.Speech.tell(characters.Leter, "Da machen wir uns die Mühe und er ist am schlafen. Na wird nötig sein, wenn er um die Zeit pennt...");
    await ƒS.Speech.tell(characters.Lob, "Lass uns in die Zentrale verschwinden.");
    lustusAngry();
    ƒS.Sound.play(soundFiles.saw, 0.2, false);
    await ƒS.Speech.tell(characters.Lustus, "mmhhggg wer redet denn so laut?! Ich versuche zu schlafen und nicht mit Kopfschmerzen und halbverstopfter Nase im Bett zu leiden.");
    leterAngry();
    await ƒS.Speech.tell(characters.Leter, "Na super. Wir machen uns sorgen, sehen nach ob Du noch lebst und werden angeschnauzt. Jetzt weisst du warum ich nicht herkommen wollte Lob.");
    await ƒS.Speech.tell(characters.Lob, "Jetzt macht mal beide halblang. Lustus dir gehts beschissen aber uns musst du deswegen nicht anranzen. Du auch Leter.");
    await ƒS.Speech.tell(characters.Lob, "Ruh dich gut aus Lustus, wir schauen mal in der Zentrale nach was so neues los ist. Komm Leter.");
    ƒS.Character.hideAll();
    ƒS.Location.show(locations.Wohnwagen);
    await ƒS.update(0);

  }

  export async function visitHQ(): ƒS.SceneReturn {
    console.log("visitHQ");
    await ƒS.Location.show(locations.Wohnwagen);
    leterNormal();
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "So. Wir sind in der Zentrale.. und jetzt??");
    lobNormal();
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Lob, "Na was wohl? Wir suchen nach etwas an dem Karton oder dem Glas das Lustus noch nicht aufgefallen ist.");
    await ƒS.Speech.tell(characters.Lob, "Lustus macht sich immer Notizen zu den Erkenntnissen im Labor. Genau da werde ich mal nachsehen. Wenn wir davon ausgehen das es ein Virus ist den er sich durch die Lösung im Glas geholt hat.");
    await ƒS.Speech.tell(characters.Lob, "Wenn Lustus als nicht an dem Glasinhalt war muss es wenn es aus dem Karton kommt am Glas oder am Karton gewesen sein.");
    await ƒS.Speech.tell(characters.Leter, "Du glaubst wirklich da war was drin?? Ach komm das ist doch lächerlich Lob.");
    await ƒS.Speech.tell(characters.Lob, "Und wenn es doch was gibt? Du erinnerst dich an den Fall mit dem Familienerbstück im Glastresor? Genau.");
    await ƒS.Speech.tell(characters.Leter, "Ja gut ich such dann mal am Karton... Aber es wird nichts da sein ausser unseren Abdrücken.");

  }
  export async function getRidOfIt(): ƒS.SceneReturn {
    console.log("getRidOfIt");
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);

  }
  export async function endOfDemo(): ƒS.SceneReturn {
    ƒS.Speech.tell(characters.Narrator, "Hier endet die Demo.");
  }
}