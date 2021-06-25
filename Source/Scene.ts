namespace Lagezeichen {
  let lob_normal = ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
  let lob_angry = ƒS.Character.show(characters.Lob, characters.Lob.pose.angry, ƒS.positions.bottomleft);
  let lob_surprised = ƒS.Character.show(characters.Lob, characters.Lob.pose.surprised, ƒS.positions.bottomleft);
  let lob_happy = ƒS.Character.show(characters.Lob, characters.Lob.pose.happy, ƒS.positions.bottomleft);
  let lob_smile = ƒS.Character.show(characters.Lob, characters.Lob.pose.smile, ƒS.positions.bottomleft);
  let leter_normal = ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
  let leter_smile = ƒS.Character.show(characters.Leter, characters.Leter.pose.smile, ƒS.positions.bottomright);
  let leter_happy = ƒS.Character.show(characters.Leter, characters.Leter.pose.happy, ƒS.positions.bottomright);
  let leter_angry = ƒS.Character.show(characters.Leter, characters.Leter.pose.angry, ƒS.positions.bottomright);
  let leter_surprised = ƒS.Character.show(characters.Leter, characters.Leter.pose.surprised, ƒS.positions.bottomright);

  let lustus_normal = ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
  let lustus_surprised = ƒS.Character.show(characters.Lustus, characters.Lustus.pose.surprised, ƒS.positions.bottomcenter);
  let lustus_angry = ƒS.Character.show(characters.Lustus, characters.Lustus.pose.angry, ƒS.positions.bottomcenter);
  let lustus_happy = ƒS.Character.show(characters.Lustus, characters.Lustus.pose.happy, ƒS.positions.bottomcenter);
  let lustus_smile = ƒS.Character.show(characters.Lustus, characters.Lustus.pose.smile, ƒS.positions.bottomcenter);

  export async function ErsteScene(): ƒS.SceneReturn {
    console.log("Lagezeichen");

    ƒS.Speech.setTickerDelays(20, 20);
    await ƒS.Location.show(locations.Wohnwagen);
    ƒS.Sound.play(soundFiles.saw, 0.03, false);

    await ƒS.update(2);
    await leter_normal;
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(1.5);


    ƒS.Sound.play(soundFiles.hammer, 0.1, false);
    await ƒS.Speech.tell(characters.Leter, "Ach mann es ist schon wieder nichts los.");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1.5);
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
    ƒS.Character.hideAll();
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "LUSTUUUUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS du Faulpelz.");
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.grin, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit. Na dann viel Spass Pumelchen.");
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Nicht schon wieder.");
    await ƒS.Speech.tell(characters.Lustus, "Ich geh mal raus Jungs... ihr kennt es ja.");
    await ƒS.Character.animate(characters.Lustus, characters.Lustus.pose.normal, middleToLeft);
    await ƒS.update(2);
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Also was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
    await ƒS.Character.show(characters.Lathilda, characters.Lathilda.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "Na nun steh nicht faul rum. Alles was da so rumliegt muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen. Latrick und Leneth wissen auch Bescheid und machen die übrigen Sachen.");
    await ƒS.Speech.tell(characters.Lustus, "Ist gut Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");
    await ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Eine kurze Zeit später.");
    await ƒS.Speech.tell(characters.Lustus, "Puhhh warum muss es auch so verdammt heiß sein.");
    await ƒS.Character.show(characters.Deliveryboy, characters.Deliveryboy.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, rightTowardsMid);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Hey, was soll das? Was ist in der Box?");
    await ƒS.Character.animate(characters.Deliveryboy, characters.Deliveryboy.pose.normal, midTowardsRight);
    await ƒS.update();
    await ƒS.Character.hide(characters.Deliveryboy);
    await ƒS.Speech.tell(characters.Lustus, "HE bleib hier was ist das??!!");

    await ƒS.Speech.tell(characters.Lustus, "Weg ist er... komisch.. Bringt mir einen Karton und geht einfach wieder.");
    ƒS.Inventory.add(items.geschlossenesPaket);
    await ƒS.Speech.tell(characters.Lustus, "Hmm zum Glück ist der Lastwagen fast fertig abegeladen. Ich bring mal das Packet in die Zentrale. Mal sehen was Lob und Leter dazu sagen.");
    ƒS.Character.hideAll();
    await ƒS.Location.show(locations.BS);
    await ƒS.update(0);
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.update(1);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(0);
    await ƒS.Speech.tell(characters.Lustus, "Endlich fertig mit dem Krempel. Ham wir noch Limo?");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Moment, ich glaube wir haben noch eine Flasche rumstehen... Ah ja hier ist noch eine.");
    await ƒS.Speech.tell(characters.Lustus, "Danke Lob. Immerhin ist es hier drin kühler.");
    await ƒS.Character.hide(characters.Lob);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Leter, "was hast denn da eig in dem Karton?");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    ƒS.update(0);
    await ƒS.Speech.tell(characters.Lob, "Hab mich auch schon gewundert. Was hast du da?");
    await ƒS.Speech.tell(characters.Lustus, "Das hat mir ein Junge hingestellt und ist wieder verschwunden. Kein Wort hat er von sich gegeben.");
    await ƒS.Speech.tell(characters.Leter, "einfach so das Ding abgestellt und gegeangen?");
    await ƒS.Speech.tell(characters.Lob, "Hast du schon reingeschaut? Was ist drin?");
    await ƒS.Speech.tell(characters.Lustus, "Na was denkst du denn? Als ob ich einfach ohne euch das Ding aufmache und mich dran erfreuen würde euch extra lange warten zu lassen bis ich sage was drin ist.");
    await ƒS.Speech.tell(characters.Leter, "Komisch, genau das beschreibt dich ziemlich gut");
    await ƒS.Speech.tell(characters.Lustus, "Ich habe es nicht aufgemacht.");
    await ƒS.Speech.tell(characters.Leter, "NA dann aber los. Hier eine Schere.");
    ƒS.update(0.5);
    await ƒS.Speech.tell(characters.Lustus, "Hier ist ein Zettel drin... und ein Glas.");
    await ƒS.Speech.tell(characters.Lob, "Gib mal den Zettel her.");
    await ƒS.Speech.tell(characters.Lob, "Hier steht 'Viel Spass ihr Opfer'. Mehr ist nicht drauf.");
    await ƒS.Speech.tell(characters.Lustus, "Na wir werden ja sehen was noch drauf ist. Wozu haben wir ein kleines Labor?");
    await ƒS.Speech.tell(characters.Leter, "Und was ist in dem Glas? Was steht drauf?");
    await ƒS.Speech.tell(characters.Lustus, "Garnichts. Keine Beschriftung und keine Aufkleber oder Gefahrenhinweise.");
    await ƒS.Speech.tell(characters.Leter, "Sieht aus wie ein Versuch uns zu trollen. Bestimmt wieder was von Limmy Lorris. Dem sieht das ähnlich. Wir versuchen was zu finden und mühen uns ab und dann ist nichts zu finden.");
    await ƒS.Speech.tell(characters.Leter, "Also ich bin dafür, wir entsorgen das Zeug direkt. Limmy hat uns schon genug verarscht.");
    await ƒS.Speech.tell(characters.Lustus, "Du willst bevor wir irgendwas wissen direkt alles hinschmeissen? na ich hatte mehr von Dir erwartet Leter. Lob was denkst du?");
    await ƒS.Speech.tell(characters.Lob, "Hmm..");
    let FD = {
      trhowAway: "Weg mit dem Zeug.",

      keepIt: "Wir behalten den Karton."
    };
    let firstDecision = await ƒS.Menu.getInput(FD, "class");
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
    ƒS.Speech.tell(characters.Narrator, "Lob und Leter waren also dabei die Sachen zu entsorgen. Lob lehrte das Glas in den Abfluss und warf es in einen Glasscontainer.");
    ƒS.Speech.tell(characters.Narrator, "Leter hatte inzwischen den Karton und das Papier in die Altpapierpresse des Schrottplatzes geworfen. Lustus wollte für eine Woche nichts von den Beiden wissen.");
    ƒS.Speech.tell(characters.Narrator, "Es schien ein Schatten über Locky Beach zu hängen. Nach und nach waren verschiedenste Leute aus Locky Beach krank. Einige dachten ein Sommerschnupfen macht die Runde.");
    ƒS.Speech.tell(characters.Narrator, "Einige hatten so schlimmes Fieber das selbst die Ärzte verwundert waren.");
    ƒS.update(0);
    ƒS.Speech.tell(characters.Narrator, "Du hast eine Seuche auf die Welt losgelassen.");
    ƒS.Speech.hide();
    ƒS.Location.show(locations.BadEnd);



  }
  export async function firstGoodDecission(): ƒS.SceneReturn {
    console.log("1Good");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.normal, ƒS.positions.bottomleft);
    await ƒS.Speech.tell(characters.Lob, "ALso wirklich Leter. Wieder mal keine Ahnung von nichts oder?");
    await ƒS.Speech.tell(characters.Lob, "Wenn das Ding nun aber nicht von Linny Loris ist und wirklich ein Auftrag für uns sein soll?");
    await ƒS.Speech.tell(characters.Lob, "Wir untersuchen das Glas und den Karton auf jedenfall bevor wir die Sachen entsorgen.");
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.smile, ƒS.positions.bottomcenter);
    await ƒS.Speech.tell(characters.Lustus, "Na wenigstens hat Lob etwas im Kopf. Also auf gehts. Lob willst du den Karton untersuchen? Leter du bekommst das Glas und das Papier okay?");
    await ƒS.Speech.tell(characters.Lustus, "Ich lass die Fluessigkeit noch in ein paar andere Glaeser ab dann kanns los gehen.");
    await ƒS.Speech.tell(characters.Lob, "Okay geht klar. allerdings gibts bei mir bald essen also erst beim nächsten Mal.cya Jungs");

    await ƒS.Character.hide(characters.Lob);
    await ƒS.update(2);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.angry, ƒS.positions.bottomright);
    await ƒS.Speech.tell(characters.Leter, "Esr bezeichnet ihr beide mich als dumm und dann soll ich auch noch mitmachen bei dem ganzen Mist? Ich glaube da geht doch einiges nicht richtig bei euch.");
    await ƒS.Speech.tell(characters.Leter, "Du kannst mich mal Lustus.");
    await ƒS.Character.hide(characters.Leter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "He Knall die Tür nicht so... Na er kommt schon wieder runter.");
    await ƒS.Speech.tell(characters.Lustus, "Dann fang ich halt ohne die beiden an. Kann mir egal sein.");
    await ƒS.Location.show(locations.BS);
    await ƒS.Character.hideAll();
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Lustus begann mit seiner Undersuchung. Am nächsten Tag wollte Leter immernoch nicht mit Lob und ihm reden.");
    await ƒS.Speech.tell(characters.Narrator, "Als dann Lustus nicht in der Schule auftauchte und keiner wusste was wirklich los war mit ihm, steckten Leter und Lob ihre Köpfe zusammen und überlegten.");
    await ƒS.Speech.tell(characters.Narrator, "Normal war es nicht, das Lustus krank wurde. Aber es kann jedem passieren.. Sollten Sie nachsehen was los war oder eher nicht?");
    await ƒS.Speech.tell(characters.Narrator, "Lob meinte es gibt bestimmt was neues von den Sachen. Irgendwas muss ja aufgetaucht sein.. Leter wollte immernoch nichts davon hören.");
    await ƒS.Speech.tell(characters.Narrator, "Sollte Lob Leter nachgeben und nicht nach Lustus sehen oder festhalten an seinem Vorhaben Lustus aufzusuchen?");
    let SD = {
      visitLustus: "Wir gehen zu Lustus.",

      visitHQ: "Wir gehen direkt in die Zentrale."
    };
    let firstDecision = await ƒS.Menu.getInput(SD, "class");
    {
      switch (firstDecision) {
        case SD.visitLustus:


        case SD.visitHQ:

        default:
          break;
      }
    }

  }
  export async function visit_Lustus(): ƒS.SceneReturn {
    console.log("Visit Lustus");
    await ƒS.Location.show(locations.Schrottplatz);
    ƒS.update(1);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.normal, ƒS.positions.bottomright);
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
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.surprised, ƒS.positions.bottomcenter);
    await ƒS.Speech.tell(characters.Lustus, "Oh! Na ihr zwei? Ungewohnt euch hier zu sehen. Wie ergeht es euch?");
    await ƒS.Speech.tell(characters.Lustus, "Sagt blos ihr habt euch Sorgen gemacht?");
    await lob_smile;
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.smile, ƒS.positions.bottomleft);

    await ƒS.Speech.tell(characters.Lob, "Schau dir unseren Ersten an Leter, sitzt in Ruhe an seinem Schreibtisch und brütet über irgendwelche Papieren.")
  }
}