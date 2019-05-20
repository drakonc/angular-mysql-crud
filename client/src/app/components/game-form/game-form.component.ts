import { Component, OnInit, HostBinding } from "@angular/core";
import { Game } from "../../models/Game";
import { GamesService } from "../../services/games.service";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
  styleUrls: ["./game-form.component.css"]
})
export class GameFormComponent implements OnInit {
  @HostBinding("class") classes = "row";

  game: Game = {
    id: 0,
    title: "",
    description: "",
    image: "",
    created_at: new Date()
  };

  constructor(private gamesService: GamesService) {}

  ngOnInit() {}

  saveNewGame() {
    console.log(this.game);
  }
}
