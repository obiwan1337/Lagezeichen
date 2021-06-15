namespace Lagezeichen {

  export async function ErsteScene(): ƒS.SceneReturn {
    console.log("Lagezeichen");

    ƒS.Speech.setTickerDelays(20, 20);
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.Sound.play(soundFiles.saw, 0.03, false);

    await ƒS.update(2);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.bored, ƒS.positions.bottomright);
    await ƒS.update(1.5);


    await ƒS.Sound.play(soundFiles.hammer, 0.1, false);
    await ƒS.Speech.tell(characters.Leter, "Ach mann es ist schon wieder nichts los.");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.smile, ƒS.positions.bottomleft);
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
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.update(0.8);

  }
}