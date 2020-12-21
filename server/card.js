const clientDir = __dirname + "/client";

export class Card {
  imageUrl = clientDir + "/images/default.png";

  name = "Card1";
  description = "This card is cool";

  cost = 2;
  health = 3;
  attack = 1;
}
