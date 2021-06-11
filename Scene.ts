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
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
    ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.Lathilda, "LUSTUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS du Faulpelz.");
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.grin, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit.. Na dann viel Spass Pumelchen.");
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Nicht schon wieder. Ich geh mal raus Jungs... ihr kennt es ja.");
    await ƒS.Character.animate(characters.Lustus, characters.Lustus.pose.normal, middle_to_left);
    await ƒS.update(0);
    await ƒS.Location.show(locations.Schrottplatz);
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Also was soll abgeladen werden? Hat Onkel Litus wieder irgendwas angeschleppt?");
    await ƒS.Character.show(characters.Lathilda, characters.Lathilda.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lathilda, "Na nun steh nicht Fual rum alles was da so rumliegt muss runter vom Lastwagen. Falls was zu schwer ist, lass es stehen Latrick und Leneth wissen auch BEscheid und machen die übrigen Sachen.");
    await ƒS.Speech.tell(characters.Lustus, "Ist gut Tante Lathilda. Ich stell die Sachen dann neben dem Schuppen ab.");


  }
}