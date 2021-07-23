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
  function upd(): void { ƒS.update(2); }

 
  export async function TestScene(): ƒS.SceneReturn {
  }
  export async function ErsteScene(): ƒS.SceneReturn {
    console.log("ersteScene");

    ƒS.Speech.setTickerDelays(7, 10);
    await ƒS.Speech.tell(characters.Narrator, "Dies ist ein frei erfundenes Spiel. Ähnlichkeiten mit realen Personen oder Orten sind rein zufällig. Das Spiel ist eine Demo und nicht vollendet. Viel Spaß beim Lesen.");
    await ƒS.Location.show(locations.Wohnwagen);
    ƒS.Sound.play(soundFiles.distantsaw, 0.5, false);
    ƒS.Sound.play(soundFiles.radiomusic, 0.05, false);
    await ƒS.update(2);
    lobNormal();
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(1.5);
    ƒS.Sound.play(soundFiles.distanthammer, 0.5, false);
    await ƒS.Speech.tell(characters.Leter, "Ach Mann, es ist schon wieder nichts los.");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1.5);
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht, die Hitze fernzuhalten. Ugghhh.");
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS, du Faulpelz.");
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.smile, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spaß, Pummelchen.");
    await ƒS.Sound.fade(soundFiles.radiomusic, 0, 0, false);
    ƒS.Sound.play(soundFiles.radiotalk, 0.4, false);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Nicht schon wieder.");
    await ƒS.Speech.tell(characters.Lustus, "Ich geh mal raus, Jungs... Ihr kennt es ja.");
    await ƒS.Sound.fade(soundFiles.radiotalk, 0, 0, false);
    await ƒS.Character.animate(characters.Lustus, characters.Lustus.pose.normal, middleToLeft());
    await ƒS.update(2);
    ƒS.Character.hideAll();
    ƒS.Sound.play(soundFiles.türZufallen, 0.5, false);
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    ƒS.Sound.play(soundFiles.müllpresse, 0.7, false);
    await ƒS.Speech.tell(characters.Lustus, "Also, was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
    await ƒS.Character.show(characters.Lathilda, characters.Lathilda.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "Na, nun steh nicht faul rum. Alles was da so rumliegt, muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
    await ƒS.Speech.tell(characters.Lustus, "Ist gut, Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
    await ƒS.Character.hideAll();
    ƒS.Sound.fade(soundFiles.müllpresse, 0, 1, false);
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Eine kurze Zeit später.");
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.Sound.fade(soundFiles.saw, 0.5, 1, false);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Puhhh, warum muss es auch so verdammt heiß sein.");
    await ƒS.Character.show(characters.Deliveryboy, characters.Deliveryboy.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(2);
    ƒS.Sound.play(soundFiles.jackhammer, 0.2, false);
    await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, rightTowardsMid());
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Hey, was soll das? Was ist in der Box?");
    //await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, midTowardsRight());

    await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, rightToOutside());
    await ƒS.Sound.fade(soundFiles.walkingSound, 0, 3, false);
    await ƒS.Speech.tell(characters.Lustus, "HEE bleib hier. Was ist das??!!");
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Weg ist er... Bringt mir einen Karton und geht einfach wieder.");

    await ƒS.Speech.tell(characters.Lustus, "Hmm, zum Glück ist der Lastwagen fast fertig abgeladen. Ich bring mal das Paket in die Zentrale. Mal sehen, was Lob und Leter dazu sagen.");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Location.show(locations.Wohnwagen);
    ƒS.Sound.play(soundFiles.türZufallen, 0.4, false);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0);
    ƒS.Sound.play(soundFiles.distantsaw2, 0.2, false);
    await ƒS.Speech.tell(characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Moment, ich glaube, wir haben noch eine Flasche rumstehen... Ah ja, hier ist noch eine.");
    await ƒS.Speech.tell(characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
    await ƒS.Character.hide(characters.Lob);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Leter, "Was haste denn da eigentlich in dem Karton?");
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
    await ƒS.Speech.tell(characters.Lustus, "Gar nichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
    await ƒS.Speech.tell(characters.Leter, "Sieht aus wie ein Versuch, uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
    await ƒS.Speech.tell(characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
    await ƒS.Speech.tell(characters.Lustus, "Du willst bevor wir irgendwas wissen, direkt alles hinschmeißen? Na, ich hatte mehr von dir erwartet Leter. Lob, was denkst du?");
    await ƒS.Speech.tell(characters.Lob, "Hmm..");
    let FD = {
      throwAway: "Weg mit dem Zeug.",

      keepIt: "Wir behalten den Karton."
    };
    let firstDecision = await ƒS.Menu.getInput(FD, "Selection");
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

  export async function firstBadEnd(): ƒS.SceneReturn {
    console.log("1Bad");

    await ƒS.Location.show(locations.BS);
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Narrator, "Lob hatte genau wie Leter keine Lust auf eine Schnitzeljagd ohne Schnitzel. Er war ebenfalls dafür das Zeug zu entsorgen.");
    await ƒS.Speech.tell(characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob leerte das Glas in den Abfluss und warf es in einen Glascontainer.");
    await ƒS.Speech.tell(characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Papierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den beiden wissen.");
    await ƒS.Speech.tell(characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten, ein Sommerschnupfen macht die Runde.");
    await ƒS.Speech.tell(characters.Narrator, "Einige hatten so schlimmes Fieber, dass selbst die Ärzte verwundert waren.");
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.BadEnd);
    await ƒS.update(0);
  }
  export async function firstGoodDecission(): ƒS.SceneReturn {
    console.log("1Good");
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.Speech.tell(characters.Lob, "Also wirklich, Leter. Wieder mal keine Ahnung von nichts, oder?");
    await ƒS.Speech.tell(characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
    await ƒS.Speech.tell(characters.Lob, "Wir untersuchen das Glas und den Karton auf jeden Fall, bevor wir irgendwas entsorgen.");
    ƒS.Sound.play(soundFiles.distanthammer, 0.4, false);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.smile, ƒS.positions.bottomcenter);
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Na, wenigstens hat Lob etwas im Kopf. Also, auf gehts. Lob, willst du den Karton untersuchen? Leter, du bekommst das Glas und das Papier, okay?");
    await ƒS.Speech.tell(characters.Lustus, "Ich lass die Flüssigkeit noch in ein paar andere Gläser ab, dann kanns losgehen.");
    await ƒS.Speech.tell(characters.Lob, "Okay, geht klar. Allerdings gibts bei mir bald Essen. Also erst beim nächsten Mal. cya.");
    await ƒS.Character.hide(characters.Lob);
    upd();
    ƒS.Sound.play(soundFiles.türZufallen, 0.4, false);
    await ƒS.Character.hide(characters.Lustus);
    await ƒS.Character.hide(characters.Leter);
    lustusNormal();
    leterAngry();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Erst bezeichnest du mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Du hast wirklich was an der Waffel.");
    await ƒS.Speech.tell(characters.Leter, "Du kannst mich mal, Lustus.");
    ƒS.Sound.fade(soundFiles.distanthammer, 0, 0, false);
    await ƒS.update(2);
    await ƒS.Character.animate(characters.Leter, characters.Leter.pose.angry, rightTowardsLeft());
    ƒS.Sound.play(soundFiles.türZufallen, 1, false);
    await ƒS.Character.hide(characters.Leter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "He! Knall die Tür nicht so...");
    await ƒS.Speech.tell(characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
    await ƒS.Location.show(locations.BS);
    await ƒS.Character.hideAll();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Lustus begann mit seiner Untersuchung. Am nächsten Tag wollte Leter immer noch nicht mit Lob und ihm reden.");
    await ƒS.Speech.tell(characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste, was wirklich los war mit ihm, steckten Leter und Lob die Köpfe zusammen und überlegten.");
    await ƒS.Speech.tell(characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren. Sollten Sie nachsehen, was los war oder eher nicht?");
    await ƒS.Speech.tell(characters.Narrator, "Lob meinte, es gäbe bestimmt was Neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immer noch nichts davon hören.");
    await ƒS.Speech.tell(characters.Narrator, "Sollte Lob Leters Idee nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben, Lustus aufzusuchen?");
    await ƒS.Speech.tell(characters.Narrator, "Oder du gibst Leters erster Idee nach, alles zu entsorgen, und schmeißt jetzt alles weg.");
    let SD = {
      visitLustus: "Wir gehen zu Lustus.",

      visitHQ: "Wir gehen direkt in die Zentrale.",

      getRidOfIt: "Entsorge direkt alles."
    };
    let firstDecision = await ƒS.Menu.getInput(SD, "Selection");
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
  export async function visitLustus(): ƒS.SceneReturn {
    console.log("Visit Lustus");
    await ƒS.Location.show(locations.Schrottplatz);
    leterNormal();
    ƒS.update(1);
    ƒS.Sound.play(soundFiles.HelicopterFlyBy, 1, false);
    await ƒS.Speech.tell(characters.Leter, "Mann, Lob, warum sollen wir zu Lustus, wenn er uns nur ansteckt.");
    lobAngry();
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Lob, "Mann, Leter, heul nicht rum. Wir haben 3 Tage nichts von Lustus gehört. Zumindest mal fragen gehört sich.");
    await ƒS.Speech.tell(characters.Leter, "Uff, Lob, das muss auch nicht sein. Wenn Lustus krank ist, dann will ich nicht das gleiche bekommen.");
    await ƒS.Speech.tell(characters.Lob, "Dann geh doch. Aber dann brauchst dich auch nicht als Freund von Lustus zu bezeichnen.");
    await ƒS.Speech.tell(characters.Leter, "Ist ja gut, ich komm doch mit. Aber es ist trotzdem fahrlässig, wenn er nun was hat, das wir auch bekommen.");
    await ƒS.Speech.tell(characters.Lob, "Und genau darüber solltest du dir keine Gedanken machen. Wenn es eine Grippe war, dann kann dein Körper damit umgehen.");
    ƒS.Character.hideAll();
    await ƒS.Sound.fade(soundFiles.HelicopterFlyBy, 0, 2, false);
    await ƒS.Location.show(locations.Lustus_room);
    leterNormal();
    lobNormal();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lob, "Er pennt...");
    await ƒS.Speech.tell(characters.Leter, "Da machen wir uns die Mühe und er ist am Schlafen. Na, wird nötig sein, wenn er um die Zeit pennt...");
    await ƒS.Speech.tell(characters.Lob, "Lass uns in die Zentrale verschwinden.");
    lustusAngry();
    await ƒS.update(2);
    ƒS.Sound.play(soundFiles.saw, 0.2, false);
    await ƒS.Speech.tell(characters.Lustus, "mmhhggg, wer redet denn so laut?! Ich versuche zu schlafen und nicht mit Kopfschmerzen und halbverstopfter Nase im Bett zu leiden.");
    await ƒS.Character.hide(characters.Leter);
    leterAngry();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Na super. Wir machen uns Sorgen, sehen nach ob du noch lebst und werden angeschnauzt. Jetzt weisst du, warum ich nicht herkommen wollte, Lob.");
    await ƒS.Speech.tell(characters.Lob, "Jetzt macht mal beide halblang. Lustus, dir gehts beschissen, aber uns musst du deswegen nicht anranzen. Du auch, Leter.");
    await ƒS.Speech.tell(characters.Lob, "Ruh dich gut aus, Lustus, wir schauen mal in der Zentrale nach, was so neues los ist. Komm, Leter.");
    ƒS.Character.hide(characters.Lustus);
    lustusNormal();
    upd();
    await ƒS.Speech.tell(characters.Lustus, "Na, jetzt wartet doch einen kurzen Moment. Ihr wollt also den Karton und das Glas untersuchen? Das Glas hatte ich schon untersucht, nachdem wir es bekommen hatten.");
    await ƒS.Speech.tell(characters.Lob, "Hmm, also kann Leter den Karton untersuchen und ich suche nach eventuellen Ursprungsorten der Lösung?");
    await ƒS.Character.hide(characters.Leter);
    leterNormal();
    ƒS.Sound.fade(soundFiles.saw, 0, 0, false);
    await ƒS.Speech.tell(characters.Lustus, "Du kannst eigentlich alle Labore der Umgebung in Erwägung ziehen. Es ist auf jeden Fall keine Säure oder Lauge.");
    await ƒS.Speech.tell(characters.Lustus, "Ich habe auch täglich nachgesehen, ob was aus einem der Experimente geworden ist.. es scheint sich aber nur unter der Glasglocke mehr als vorher zu bewegen.. aber ganz sicher bin ich da nicht.");
    await ƒS.Speech.tell(characters.Lob, "Okay dann such ich mal nach Laboren.");
    await ƒS.Speech.tell(characters.Leter, "Ok, dann puder ich den Karton mal ab. Ruh dich gut aus, Lustus.");
    ƒS.Character.hideAll();
    await ƒS.update(0);
    goToHqAfterLustusVisit();

  }

  export async function visitHQ(): ƒS.SceneReturn {
    console.log("visitHQ");
    await ƒS.Location.show(locations.Labor);
    leterNormal();
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "So. Wir sind in der Zentrale.. und jetzt??");
    lobNormal();
    ƒS.update(2);
    await ƒS.Speech.tell(characters.Lob, "Na was wohl? Wir suchen nach etwas an dem Karton oder dem Glas, das Lustus noch nicht aufgefallen ist.");
    await ƒS.Speech.tell(characters.Lob, "Lustus macht sich immer Notizen zu den Erkenntnissen im Labor. Genau da werde ich mal nachsehen. Wenn wir davon ausgehen, dass es ein Virus ist, den er sich durch die Lösung im Glas geholt hat.");
    await ƒS.Speech.tell(characters.Lob, "Wenn Lustus also nicht an dem Glasinhalt war, muss es wenn es aus dem Karton kommt, am Glas oder am Karton gewesen sein.");
    await ƒS.Speech.tell(characters.Leter, "Du glaubst wirklich, da war was drin?? Ach komm, das ist doch lächerlich, Lob.");
    await ƒS.Speech.tell(characters.Lob, "Und wenn es doch was gibt? Du erinnerst dich an den Fall mit dem Familienerbstück im Glastresor? Genau.");
    await ƒS.Speech.tell(characters.Leter, "Ja gut, ich such dann mal am Karton... Aber es wird nichts da sein außer unseren Abdrücken.");
    demoEnds();
  }
  export async function demoEnds(): ƒS.SceneReturn {
    ƒS.Speech.tell(characters.Narrator, "Dieser Abschnitt ist nicht fertig. Versuche eine andere Option.");
    firstGoodDecission();
  }
  export async function getRidOfIt(): ƒS.SceneReturn {
    console.log("getRidOfIt");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Narrator, "Sogleich machten sich Leter und Lob daran, die Sachen zu entsorgen. Lob schüttete alle Lösungen, die Lustus erstellt hatte, in den Abfluss und stopfte die benutzten Gläser in eine Spülmaschine.");
    await ƒS.Speech.tell(characters.Narrator, "Leter hatte sich derweil mit den Papieren und dem Karton im Hof eingefunden und verbrannte den Haufen.");
    await ƒS.Speech.tell(characters.Narrator, "Was die beiden nicht bedachten, waren die Lösung und die Kanalsystembewohner. So wurde ein unbekanntes Virus von Ratten auf andere Tiere übertragen und an die Bevölkerung des kleinen Ortes Locky Beaches weitergegeben.");
    ƒS.Speech.hide();
    ƒS.Location.show(locations.BadEnd);
    ƒS.update(2);
  }
  export async function goToHqAfterLustusVisit(): ƒS.SceneReturn {
    console.log("goToHqAfterLustusVisit");
    await ƒS.Location.show(locations.Wohnwagen);
    lobNormal();
    leterNormal();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Hmm, wir haben scheinbar kaum noch Graphitpulver.. oder gibt es noch ein verstecktes Döschen?");
    await ƒS.Speech.tell(characters.Lob, "Wir haben noch eine Dose davon im Schrank.");
    await ƒS.Character.hide(characters.Lob);
    await ƒS.Character.hide(characters.Leter);
    await ƒS.Location.show(locations.BS);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Narrator, "Eine halbe Stunde später");
    await ƒS.update(2);

    lobSmile();
    await ƒS.Location.show(locations.Wohnwagen);
    upd();
    ƒS.Sound.play(soundFiles.distanthammer, 0.8, false);
    await ƒS.Speech.tell(characters.Lob, "So, ich habe die in der Umgebung liegenden Einrichtungen aufgeschrieben und etwas versucht im Netz zu finden.");
    leterNormal();
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Leter, "Hmm, ging ja schnell.. Ich such noch nach weiteren Abdrücken. Ich habe bis jetzt nur einen gefunden. Du kannst ja schon einen Blick auf die Notizen der Glocke werfen.");
    await ƒS.Speech.tell(characters.Lob, "Stimmt ja, ich lese die mal vor, damit du auch was davon hast.");
    await ƒS.Speech.tell(characters.Leter, "Okay, Lustus hat also ein paar Tests gemacht und lässt was wachsen. Aber was machen wir nun? Wir haben einen Fingerabruck und die Lösung. Wir können die Konzerne und Labore mal abklappern und ein paar Fragen stellen, oder?");
    await ƒS.Speech.tell(characters.Lob, "Ich denke es wäre besser, nach dem Typ zu suchen, dem wir das ganze Zeug verdanken.");
    ƒS.Sound.fade(soundFiles.distanthammer, 0, 0.5, false);
    let abklappernUndSuchen = {
      suchen: "Wir suchen den Typ.",
      abklappern: "Wir klappern die Adressen ab."
    };
    let abklappernUndSuchenDecision = await ƒS.Menu.getInput(abklappernUndSuchen, "Selection");
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
  export async function typSuchen(): ƒS.SceneReturn {
    console.log("typSuchen");
    leterNormal();
    lobNormal();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Und wie stellen wir das an? Wir haben keine Ahnung, wie der Kerl aussieht oder wo wir suchen sollen. Wir haben nur einen Fingerabdruck.");
    await ƒS.Speech.tell(characters.Lob, "Ach nee. Denk eher mal nach, was uns helfen könnte. Ich dachte schon die ganze Zeit an einen Anruf bei Inspector Lotter. Der Fingerabdruck gibt bestimmt was aus.");
    await ƒS.Speech.tell(characters.Leter, "Als ob du Inspector Lotter fragen willst. Da nutzen wir eher eine Telefon und Mail-Lawine. Damit sollte sich doch irgend jemand finden, der einer Personenbeschreibung entspricht.");
    await ƒS.Speech.tell(characters.Lob, "Ja gut, ein Bild oder eine Beschreibung sollten wir aus unserem Ersten schon rausbekommen.");
    leterAngry();
    await ƒS.Character.hide(characters.Leter);
    upd();
    await ƒS.Speech.tell(characters.Leter, "Damit Lustus uns noch mehr anschnauzt, weil wir ihn nicht schlafen lassen?!");
    await ƒS.Speech.tell(characters.Lob, "Ach was.");
    let phantombildOderAnrufbeiLotter = {
      anrufen: "Wir rufen bei Inspector Lotter an",
      bild: "Wir fragen bei Lustus nach einem Bild."
    };
    let phantombildOderAnrufbeiLotterDecision = await ƒS.Menu.getInput(phantombildOderAnrufbeiLotter, "Selection");
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

  export async function ersterAnrufBeiLotter(): ƒS.SceneReturn {
    lobNormal();
    leterNormal();
    upd();
    ƒS.Sound.play(soundFiles.telefonWahl, 0.3, false);
    await ƒS.Speech.tell(characters.Lob, "Dann wählen wir mal...", true);
    await ƒS.Sound.fade(soundFiles.telefonWahl, 0, 0, false);
    ƒS.Sound.play(soundFiles.telefonPiepTon, 0.4, false);
    await ƒS.Speech.tell(characters.Lob, "...", true);
    await ƒS.Speech.tell(characters.Lob, "......", true);
    ƒS.Sound.play(soundFiles.telefonBelegt, 0.4, false);
    await ƒS.Speech.tell(characters.Leter, "Da ist der Inspector nicht am Schreibtisch. Alles klar. Und jetzt?");
    await ƒS.Sound.fade(soundFiles.telefonBelegt, 0, 0, false);
    let nochmalAnrufen = {
      nochmal: "Wir rufen nachher nochmal an.",
      bild2: "Wir fragen Lustus nach einem Bild."
    };
    let zweiterAnrufbeiLotterDecision = await ƒS.Menu.getInput(nochmalAnrufen, "Selection");
    {
      switch (zweiterAnrufbeiLotterDecision) {
        case nochmalAnrufen.nochmal:
          leterNormal();
          lobNormal();
          await ƒS.Speech.tell(characters.Lob, "Dann versuchen wir einfach nochmal anzurufen. Er wird schon wieder in sein Büro müssen.");
          await ƒS.update(2);
          ƒS.Sound.play(soundFiles.telefonWahl, 0.3, false);
          await ƒS.Speech.tell(characters.Lob, "Auf ein Neues...", true);
          await ƒS.Sound.fade(soundFiles.telefonWahl, 0, 0, false);
          ƒS.Sound.play(soundFiles.telefonPiepTon, 0.4, false);
          await ƒS.Speech.tell(characters.Lob, "...", true);
          await ƒS.Speech.tell(characters.Lob, "......", true);

          ƒS.Sound.play(soundFiles.telefonBelegt, 0.4, false);
          await ƒS.Speech.tell(characters.Leter, "Da ist der Inspector immer noch nicht am Schreibtisch. Alles klar. Und jetzt?");
          await ƒS.Sound.fade(soundFiles.telefonBelegt, 0, 0, false);

          await ƒS.update(2);
          await ƒS.Speech.tell(characters.Lob, "Wir können uns einen entspannten Abend machen. Hausaufgaben hab ich eh noch genug...Bis morgen dann.");
          await ƒS.Speech.tell(characters.Leter, "Erinner mich doch nicht an Hausaufgaben, Lob... Ich hab so keine Lust auf den gammligen Geschichtsaufsatz...");
          await ƒS.Speech.tell(characters.Leter, "Ugh. Bis morgen, Lob.");
          ƒS.Character.hideAll();
          await ƒS.Location.show(locations.BS);
          await ƒS.update(2);
          await ƒS.Location.show(locations.Wohnwagen);
          lobNormal();
          await ƒS.update(0);
          ƒS.Sound.play(soundFiles.türZufallen, 0.3, false);
          await ƒS.Character.animate(characters.Leter, characters.Leter.pose.normal, outsideTowardsRight());
          upd();
          await ƒS.Speech.tell(characters.Lob, "Guten Mittag Leter. Hast du den Aufsatz angefangen?");
          await ƒS.Speech.tell(characters.Leter, "Ja hab ich...");
          await ƒS.Speech.tell(characters.Leter, "Und ich habe den inzwischen fertig.. War ein ganzes Stück Arbeit. Deswegen bin ich auch erst jetzt angekommen. Hast du Neuigkeiten?");
          await ƒS.Speech.tell(characters.Lob, "Jep, hab ich. Heute Vormittag habe ich Lotter nach nur 2 Versuchen erreicht. Er war so schlechter Laune wie selten. Aber in seiner Rage hat er wie immer zu viel geplappert.");
          await ƒS.Speech.tell(characters.Lob, "Scheinbar gab es in einem Labor in Locky Beach einen Einbruch. Genau in der Nacht, bevor wir den Karton bekommen haben.");
          await ƒS.Speech.tell(characters.Lob, "Und damit war es ziemlich einfach, was rauszufinden. Die offizielle Presse hat nichts geschrieben soweit, aber ein Blogger aus der Umgebung hat was gepostet.");
          await ƒS.Speech.tell(characters.Lob, "Es sind zwei Polizeiwagen vor dem Loronavirus Laboratory in Locky Beach.");
          await ƒS.Speech.tell(characters.Leter, "Ach...Das hinten auf dem Hügel oben? Das ist a wirklich nicht weit weg.");
          await ƒS.Speech.tell(characters.Lob, "Genau, deswegen können wir uns da ziemlich gut um--");
          ƒS.Sound.play(soundFiles.telefonKlingeln, 0.5, false);
          await ƒS.Speech.tell(characters.Leter, "Ich mach mal den Verstärker an");
          ƒS.Sound.fade(soundFiles.telefonKlingeln, 0, 0, false);
          notTheBestEnd();

        case nochmalAnrufen.bild2:
          return phantombildErfragen();
        default:
          break;
      }
    }
  }
  export async function phantombildErfragen(): ƒS.SceneReturn {
    console.log("phantombildErfragen");
    await ƒS.Location.show(locations.Wohnwagen);
    leterNormal();
    lobNormal();
    await ƒS.update(0);
    ƒS.Sound.play(soundFiles.radiomusic, 0.3, false);
    await ƒS.Speech.tell(characters.Lob, "Stimmt eigentlich. Einen Moment, ich frage Lustus, ob er uns eine Zeichnung von dem Dude anfertigen kann.");
    await ƒS.Speech.tell(characters.Leter, "Hey! Was machst du da an dem Schrank? Lob, was suchst du denn schon wieder.");
    await ƒS.Speech.tell(characters.Lob, "Ich funk Lustus an. Wir haben extra ein Walkie Talkie in seinem Zimmer und der Zentrale.");
    ƒS.Sound.play(soundFiles.rauschen, 1, false);
    await ƒS.Speech.tell(characters.Lob, "Zentrale an Nest, Bitte kommen. Over.");
    ƒS.Character.hide(characters.Leter);
    leterAngry();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Als ob das noch klappt, bestimmt ist der Akku schon lange nicht geladen worden.");
    await ƒS.Speech.tell(characters.Lustus, "Nest an Zentrale? Was gibt es denn noch? Over.");
    ƒS.Character.hide(characters.Leter);
    ƒS.Character.hide(characters.Lob);
    leterSurprised();
    lobSmile();
    upd();
    ƒS.Sound.play(soundFiles.rauschen, 1, false);
    await ƒS.Speech.tell(characters.Lob, "Kannst du eine Zeichnung der Person anfertigen? Leter und ich haben den ja noch nie gesehen. Eine Vorstellung würde da schon etwas helfen. Over.");
    ƒS.Sound.play(soundFiles.distanthammer, 1, false);
    await ƒS.Speech.tell(characters.Lustus, "Alles klar ihr zwei, ich versuch mich dran. Over.");
    await ƒS.Location.show(locations.BS);
    await ƒS.update(2);
    lobNormal();
    leterNormal();
    await ƒS.Location.show(locations.Wohnwagen);
    upd();
    ƒS.Sound.play(soundFiles.rauschen, 1, false);
    await ƒS.Speech.tell(characters.Lob, "Jo danke, Erster, ist angekommen. Over.");
    await ƒS.Speech.tell(characters.Lob, "Na jetzt haben wir eine Vorstellung der Person. Jetzt können wir uns auch nach dem Lump umsehen.");
    await ƒS.Speech.tell(characters.Lustus, "Gut, dann fragt mal nach, ob Inspector Lotter das Gekritzel erkennt. Over.");
    ƒS.Character.hide(characters.Leter);
    leterSurprised();
    upd();
    ƒS.Sound.play(soundFiles.rauschen, 1, false);
    await ƒS.Speech.tell(characters.Leter, "Bist du bei Trost, Erster? Wir sollen Lotter anrufen und ihn fragen, ob ihm das Gesicht bekannt vorkommt?");
    await ƒS.Speech.tell(characters.Lustus, "Genau das sollt ihr tun, Leter. Over.");
    await ƒS.Speech.tell(characters.Lob, "Na dann... lass uns Inspector Lotter anrufen...");
    ƒS.Character.hide(characters.Leter);
    await ƒS.Sound.fade(soundFiles.radiomusic, 0, 5, false);
    leterNormal();
    upd();
    ƒS.Sound.play(soundFiles.telefonWahl, 0.4, false);
    ƒS.Sound.play(soundFiles.telefonPiepTon, 0.4, true);
    await ƒS.Speech.tell(characters.Lob, "...", true);
    ƒS.Sound.fade(soundFiles.telefonPiepTon, 0, 0.5, true);
    ƒS.Sound.play(soundFiles.telefonBelegt, 0.4, false);
    ƒS.Sound.fade(soundFiles.telefonBelegt, 0, 0, false);
    await ƒS.Speech.tell(characters.Lob, "Niemand im Büro. Dann wird er wohl noch unterwegs sein.");
    await ƒS.Speech.tell(characters.InspectorLotter, "Jungs? Lustus, Leter, Lob seid ihr da?");
    ƒS.Character.hide(characters.Leter);
    ƒS.Character.hide(characters.Lob);
    leterSurprised();
    lobSurprised();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Warum ruft Inspector Lotter nach uns? Wir gehen besser mal auf den Hof.");
    await ƒS.Character.animate(characters.Leter, characters.Leter.pose.surprised, rightToOutside());
    await ƒS.Character.animate(characters.Lob, characters.Lob.pose.normal, leftToOutside());
    await ƒS.update(0);
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.InspectorLotter, characters.InspectorLotter.pose.normal, ƒS.positionPercent(10, 100));
    ƒS.Sound.play(soundFiles.distantsaw2, 1, false);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positionPercent(65, 100));
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positionPercent(85, 100));
    await ƒS.Speech.tell(characters.Lustus, "Inspector Lotter? Was bringt Sie her?");
    await ƒS.Speech.tell(characters.InspectorLotter, "Wir haben eine Zeugenaussage über einen Einbrecher aus dem Lorona Virus Laboratory. Der soll bei euch vorbeigeschaut haben.");
    await ƒS.Speech.tell(characters.Leter, "Meinen Sie den hier? Lustus hat einen Karton von dem bekommen und wir suchen den ebenfalls.");
    await ƒS.Sound.fade(soundFiles.müllpresse, 0.5, 3, false);
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    ƒS.Location.show(locations.BS);
    ƒS.Character.show(characters.Phantom, characters.Phantom.pose.normal, ƒS.positions.bottomcenter);
    ƒS.update(0);
    ƒS.Speech.tell(characters.Narrator, "", true);
    await ƒS.Speech.tell(characters.InspectorLotter, "Zeig mal her Leter... Was ist das den für ein Gekritzel... hmm, aber doch, das hat Ähnlichkeit mit dem Beschriebenen");
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
    await ƒS.Character.show(characters.InspectorLotter, characters.InspectorLotter.pose.normal, ƒS.positionPercent(10, 100));

    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positionPercent(45, 100));
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positionPercent(65, 100));
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positionPercent(85, 100));
    await ƒS.Speech.tell(characters.Lob, "Und was hat der nun verbockt? Muss ja was wichtiges sein, wenn Sie hier so ankommen.");
    await ƒS.Sound.fade(soundFiles.distantsaw2, 0.4, 4, false);
    await ƒS.Speech.tell(characters.InspectorLotter, "Das Labor hat gemeldet, eine Probe eines hochansteckenden Virus zu vermissen.");
    await ƒS.Speech.tell(characters.Lustus, "Welche Symptome soll der den an Menschen verursachen? Haben Sie da Informationen zu erhalten?");
    await ƒS.Speech.tell(characters.InspectorLotter, " Das Labor meinte sowas noch nie an einem Menschen gesehen zu haben.. allerdings waren Tiere unter fieber- und schnupfenähnlichen Erkrankungssymptomen aufgefallen.");
    await ƒS.Speech.tell(characters.Lob, "Wann nehmen Sie Lustus in Quarantäne, Herr Inspektor?");
    await ƒS.Speech.tell(characters.InspectorLotter, "Wieso?");
    await ƒS.Speech.tell(characters.Leter, "Du meinst wohl uns alle, Lob. Wir hatten mit Lustus und der Lösung auch Kontakt. Ebenso sollten dann Tante und Onkel untersucht werden und zuhause bleiben.");
    await ƒS.Location.show(locations.BS);
    await ƒS.Character.hideAll();
    await ƒS.Sound.fade(soundFiles.müllpresse, 0, 1, false);
    await ƒS.Sound.fade(soundFiles.distantsaw2, 0, 1, false);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Narrator, "Nach ein paar Untersuchungen und Bluttests der Lagezeichen mussten sie zur Sicherheit eine 7-Tage Quarantäne absitzen und konnten dann ohne Probleme wieder ihr Büro führen.");
    await ƒS.Speech.tell(characters.Narrator, "Es stellte sich heraus, dass das Labor einen geplanten Versuch vertuschen wollte. Dabei hatten Sie geplant, das Virus unkontrolliert in die Bevölkerung abzugeben.");
    await ƒS.Speech.tell(characters.Narrator, "Der Dieb wurde gefasst und gestand, den Lagezeichen den Karton gebracht zu haben. Damit wollte er das Labor unter Druck setzen. Von den dreien war bis jetzt jeder Fall gelöst worden.");
    await ƒS.Speech.tell(characters.Narrator, "Er ging davon aus, dass die Drei es ohne große Schwierigkeiten aufklären würden.");
    await ƒS.Speech.tell(characters.Narrator, "Good End -- Eine Seuche verhindert.");
  }
  export async function notTheBestEnd(): ƒS.SceneReturn {
    ƒS.Location.show(locations.Wohnwagen);
    leterNormal();
    lobNormal();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Hallo, hier Leter von den drei Lagezeichen.");
    await ƒS.Speech.tell(characters.InspectorLotter, "Hallo Leter, hier Inspector Lotter. Seid ihr drei in eurem Wohnwagen?");
    await ƒS.Speech.tell(characters.Leter, "Nein, Lustus ist nicht im Wohnwagen. Nur Lob ist mit mir hier. Lustus hatte die letzten Tage irgendwie 'nen Infekt oder so.");
    await ƒS.Speech.tell(characters.InspectorLotter, "Ich bin auf dem Weg. Jungs, wartet auf dem Schrottplatz und versucht, Lustus mit auf den Platz zu bekommen, aber schaut, dass ihr Abstand haltet.");
    await ƒS.Speech.tell(characters.Lob, "Was ist denn eigen--?");
    await ƒS.Speech.tell(characters.InspectorLotter, "Keine Zeit jetzt, Lob! Bis gleich!");
    ƒS.Sound.play(soundFiles.telefonBelegt, 0.4, false);
    await ƒS.Sound.fade(soundFiles.telefonBelegt, 0, 0.5, false);

    lobSurprised();
    leterSurprised();
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Was war das denn. Lotter war richtig aufgebracht, als wir was von Lustus und seinem Schnupfen sagten...");
    await ƒS.Speech.tell(characters.Leter, "Egal er wird ja bald auftauchen. Funken wir mal Lustus an.");
    ƒS.Sound.play(soundFiles.rauschen, 1, false);

    leterNormal();
    lustusNormal();
    upd();
    await ƒS.Speech.tell(characters.Lob, "Zentrale an Nest. Zentrale an Nest. Over.");
    await ƒS.Speech.tell(characters.Lustus, "Guten Morgen Zentrale, was gibt es denn? Over.");
    await ƒS.Speech.tell(characters.Lob, "Lotter hat eben angerufen und will uns drei im Hof sehen. Er hat nicht erklärt, was los ist, aber uns gesagt, Abstand von dir zu halten.");
    await ƒS.Speech.tell(characters.Lob, "Er war sehr aufgebracht, nachdem wir deinen Schnupfen erwähnten... Over.");
    await ƒS.Speech.tell(characters.Lustus, "Hmm okay, dann bis gleich im Hof. Ich ess noch schnell was. Over.");
    await ƒS.Location.show(locations.BS);
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Location.show(locations.Schrottplatz);
    leterNormal();
    lustusNormal();
    lobNormal();
    await ƒS.update(0);
    await ƒS.Character.animate(characters.Lob, characters.Lob.pose.normal, LobGroupAtRight());
    await ƒS.Character.show(characters.InspectorLotter, characters.InspectorLotter.pose.normal, ƒS.positions.bottomleft);
    upd();
    await ƒS.Speech.tell(characters.InspectorLotter, "Guten Morgen ihr drei. Kennt ihr einen Dennis Bender?");
    await ƒS.Speech.tell(characters.Lustus, "Der Name sagt mir nichts, was ist mit diesem Dennis Bender?");
    await ƒS.Speech.tell(characters.Leter, "Kenn ich auch nicht. Du Lob?");
    await ƒS.Speech.tell(characters.Lob, "Nope. Kenne keinen Dennis.");
    await ƒS.Speech.tell(characters.InspectorLotter, "Dann erklärt mir mal, warum jener Herr nun im Krankenhaus liegt und mit hohem Fieber kaum noch atmen kann??!!");
    await ƒS.Speech.tell(characters.InspectorLotter, "Und das Personal im Krankenhaus die Polizei benachrichtigt, weil er die ganze Zeit von euch, einem Virus und Lebensgefahr schwafelt?");
    await ƒS.Speech.tell(characters.Lustus, "Inspector. Wenn wir einen Dennis Bender nicht kennen, dann ist das so. Haben sie noch andere Anhaltspunkte? Eventuell ein Bild von der Person?");
    await ƒS.Speech.tell(characters.InspectorLotter, "Ein Bild!? Wozu brauchst du ein Bild von Bender?? Wir haben ein Bild da. Das Krankenhaus hat uns eins geschickt.");
    await ƒS.Speech.tell(characters.Lustus, "Jungs. Das ist der Typ, den wir suchen!");
    await ƒS.Speech.tell(characters.Leter, "Nicht dein Ernst, Erster!");
    await ƒS.Speech.tell(characters.InspectorLotter, "Also kennt ihr den Herrn ja doch! Wieso sagt ihr das nicht sofort!!");
    await ƒS.Speech.tell(characters.Lustus, "Kennen ist übertrieben. Er war vor ein paar Tagen nachmittags kurz hier. Er hat mir einen Karton gegeben und ist direkt verschwunden.");
    await ƒS.Speech.tell(characters.Leter, "Seitdem versuchen wir den Typ zu finden. Allerdings hatten wir noch nicht viel Erfolg dabei.");
    ƒS.Character.hide(characters.Lustus);
    lustusSurprised();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Das erklärt auch was die Lösung in dem Glas ist.. oder sein muss. ");
    await ƒS.Speech.tell(characters.InspectorLotter, "Welches Glas!?");
    await ƒS.Speech.tell(characters.Lustus, "Es war ein Glas mit einer Lösung, die uns Herr Jorgen gebracht hat. Leider war nichts anderes dabei.");
    lustusNormal();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.InspectorLotter, "Hmm. Ihr habt das Zeug also alles noch. Gut. Dann wird das jetzt an ein Labor gebracht. Dort haben Sie die Ausrüstung zum Analysieren. Ihr drei wartet hier. Es ist schon ein Team unterwegs, dass euch auf Symptome und Ansteckung untersuchen soll.");
    await ƒS.Location.show(locations.BS);
    ƒS.Character.hideAll();
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Narrator, "Auch mit den Bemühungen des Labors und der bereits informierten Polizei war das Virus schon im Umlauf. Das Krankenhaus hatte zwar mit erhöter Ansteckungsgefahr gerechnet, war aber nicht auf die aggressive Verbreitung des Virus vorbereitet.");
    await ƒS.Speech.tell(characters.Narrator, "Die drei Lagezeichen durften sich mit Homeschooling begnügen und waren nach nur 2 Jahren wieder in der Schule. Das Virus war als eine Art Waffe entwickelt worden und sollte in den Umlauf gebracht werden.");
    await ƒS.Speech.tell(characters.Narrator, "Das Lorona Laboratory wurde in einer Nacht- und Nebelaktion verlassen. Die Ermittlungen laufen immer noch.");
    await ƒS.Speech.tell(characters.Narrator, "Not the best end -- Quarantäne und Homeschooling");
  }

  export async function abklappernFahren(): ƒS.SceneReturn {
    console.log("abklappernFahren");
    lobNormal();
    await ƒS.Speech.tell(characters.Lob, "Also dann fahren wir die Adressen ab. Sind nur 5.");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Location.show(locations.Wohnwagen);
    leterAngry();
    lobNormal();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Den ganzen Nachmitag rumgefahren. Von wegen nur 5. Die waren alle so weit auseinander, dass wir ewig gebraucht haben.");
    await ƒS.Speech.tell(characters.Lob, "Na, nun reg dich mal nicht so auf. Es war nicht dein Kraftstoff und eine Sauna ist auch nicht schlecht.");
    await ƒS.Speech.tell(characters.Leter, "Ich will aber nicht in einem Auto fahrend gebacken werden. Wir hatten Glück, dass du genug Wasser dabei hattest.");
    await ƒS.Speech.tell(characters.Leter, "Dann noch nichts rausgefunden auf dem ganzen Trip. Alles umsonst.");
    await ƒS.Speech.tell(characters.Lob, "Ist ja gut jetzt. Uns ist halt nichts aufgefallen. Na und? Wofür denkst du habe ich Bilder von jedem Gebäude gemacht. Eventuell haben wir was nicht gesehen.");

    ƒS.Character.hide(characters.Leter);
    leterNormal();
    upd();
    await ƒS.Speech.tell(characters.Leter, "Na los, dann gib schon her die Cam.");
    await ƒS.Speech.tell(characters.Lob, "Hat schon was, wenn nicht erst entwickelt werden muss, um die Bilder zu sehen. Sehr angenehm.");
    await ƒS.Speech.tell(characters.Leter, "Welche Nummer hat eigentlich Inspector Lotters Wagen? war das nicht 1887?");
    await ƒS.Speech.tell(characters.Lob, "Das war 1337. Wieso hast den Wagen gesehen?? Mir ist nichts aufgefallen.");
    await ƒS.Speech.tell(characters.Leter, "Ja, der Wagen steht auf einem Parkplatz vor dem... uhh Lorona Virus Laboratoy");
    await ƒS.Speech.tell(characters.Lob, "Na dann, klingeln wir direkt mal Lotter durch.");
    ƒS.Sound.play(soundFiles.telefonWahl, 0.4, false);
    ƒS.Sound.play(soundFiles.telefonPiepTon, 0.1, false);
    ƒS.Sound.fade(soundFiles.telefonPiepTon, 0, 0, false);
    await ƒS.Speech.tell(characters.Lob, "Ja, guten Tag, Inspector Lotter, Lob hier. Uns ist aufgefallen, Sie waren vorhin bei einem Chemiekonzern. Was ist denn dort passiert? Wie ein Sicherheitsbruch im Labor, aber nichts gestohlen?");
    await ƒS.Speech.tell(characters.Lob, "Wir suchen gerade nach einer Person, die vermutlich was aus einem Labor entwendet hat.. Kurz nach dem ersten Kontakt war Lustus krank mit einer Art schnupfen und leichtem Fieber.");
    await ƒS.Speech.tell(characters.Leter, "Frag ihn doch, ob er den Mann mal nach dem Karton bei uns fragen kann. Wir haben ja auch einen Fingerabdruck gefunden im Karton. Das wird vermutlich reichen für einen Blöff.");
    await ƒS.Speech.tell(characters.Lob, "Ja Inspector, das war Leter. Es stimmt, wir haben einen Fingerabdruck in dem Karton gefunden.");
    let fallAbgebenOderLotterÜberreden = {
      abgeben: "Wir bringen den Karton zu Lotter.",
      nichtabgeben: "Wir behalten den Karton."
    };
    let fallAbgebenOderLotterÜberredenDecision = await ƒS.Menu.getInput(fallAbgebenOderLotterÜberreden, "Selection");
    {
      switch (fallAbgebenOderLotterÜberredenDecision) {
        case fallAbgebenOderLotterÜberreden.abgeben:
          return Abgabe();

        case fallAbgebenOderLotterÜberreden.nichtabgeben:
          let rValue: number = (Math.random() * 1);
          if (rValue < 0.5)
            return überredenGoodEnd();
          else
            return überredenBadEnd();
      }
    }
  }
  export async function Abgabe(): ƒS.SceneReturn {
    await ƒS.Speech.tell(characters.Lob, "Okay, dann bringen wir Ihnen den Karton vorbei. Bis bald.");
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Narrator, "Die drei Lagezeichen geben nie einen Fall auf.");
    await ƒS.Location.show(locations.BadEnd);
    ƒS.Speech.hide();
    upd();
  }
  export async function überredenBadEnd(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.BS);
    ƒS.Character.hideAll();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Lotter informiert die drei Lagezeichen über den Misserfolg der Befragung zu dem Karton. Auch ist der Fingerabdruck nicht von dem festgenommenen Mann.");
    await ƒS.Speech.tell(characters.Narrator, "Die drei Lagezeichen versuchen weiterhin, den Verantwortlichen zu finden. Eine sich immer weiter verbreitende Seuche verhindert allerdings ihre Arbeit.");
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.BadEnd);
    upd();
  }
  export async function überredenGoodEnd(): ƒS.SceneReturn {
    await ƒS.Location.show(locations.BS);
    ƒS.Character.hideAll();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Lotter gelang es, aus dem fest genommenen Mann rauszubekommen, was in dem Karton war. Es handelt sich, wie die drei Jungen von Lotter hörten, um ein Virus, das als eine Art Versuch auf die Bevölkerung losgelassen werden sollte.");
    await ƒS.Speech.tell(characters.Narrator, "Die drei Jungen sowie ihre Eltern wurden auf eine solche Krankheit untersucht, waren aber nicht davon betroffen.");
    await ƒS.Speech.tell(characters.Narrator, "Good End");
  }
}