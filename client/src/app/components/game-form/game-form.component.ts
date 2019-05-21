import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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

  edit: boolean = false;

  constructor(private gamesService: GamesService, private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.gamesService.getGame(params.id).subscribe(
        res => {
          this.edit = true;
          this.game = res;
        },
        err => console.error(err)
      )
    }
  }

  saveNewGame() {
    delete this.game.id;
    delete this.game.created_at;
    
    this.gamesService.saveGame(this.game).subscribe(
      res => { 
        console.log(res);
        this.route.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

  updateGame(){
    this.gamesService.updateGame(this.game.id,this.game).subscribe(
      res => { 
        console.log(res);
        this.route.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

}
