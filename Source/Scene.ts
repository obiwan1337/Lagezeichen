namespace Lagezeichen {
  let middle_to_right: ƒS.AnimationDefinition = {
    start: { translation: ƒS.positions.bottomcenter },
    end: { translation: ƒS.positions.bottomright },
    duration: 2,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  };

  let middle_to_left: ƒS.AnimationDefinition = {
    start: { translation: ƒS.positions.bottomcenter },
    end: { translation: ƒS.positions.bottomleft },
    duration: 2,
    playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
  };
  export async function ErsteScene(): ƒS.SceneReturn {
    console.log("Lagezeichen");
    
    ƒS.Speech.setTickerDelays(20, 20);
    await ƒS.Location.show(locations.Wohnwagen);
    await ƒS.Sound.play(Soundfiles.saw, 0.2, false);

    await ƒS.update(1);
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.bored, ƒS.positions.bottomright);
    await ƒS.update(1.5);
    console.log("Leter sollte reden");
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
   await ƒS.Sound.play(Soundfiles.hammer, 0.3,false);
    await ƒS.Speech.tell(characters.Leter, "Ach mann es ist schon wieder nichts los.");
    await ƒS.Character.show(characters.Lob, characters.Lob.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Lob, "Und die Ventilatoren schaffen es nicht die Hitze fernzuhalten. Ugghhh.");
    ƒS.Character.hideAll();
    await ƒS.Speech.tell(characters.Lathilda, "LUSTUSSS! Wo bist du Lümmel denn schon wieder?! Dein Onkel braucht Hilfe beim Abladen. LOS du Faulpelz.")
    await ƒS.Character.show(characters.Leter, characters.Leter.pose.grin, ƒS.positions.bottomright);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Leter, "Au wei, Tante Lathilda hat wieder Arbeit.. Na dann viel Spass Pumelchen.");
    await ƒS.Character.show(characters.Lustus, characters.Lustus.pose.normal, ƒS.positions.bottomcenter);
    await ƒS.update(2);
    await ƒS.Speech.tell(characters.Lustus, "Nicht schon wieder. Ich geh mal raus Jungs... ihr kennt es ja.");
    await ƒS.Character.animate(characters.Lustus, characters.Lustus.pose.normal, middle_to_left);
    await ƒS.update(2);
    
  }
}