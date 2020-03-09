import { LogService } from "./log.service";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

@Injectable()
export class StarWarsService {
  private characters = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" }
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get("https://swapi.co/api/people")
      .map((response: Response) => {
        const data = response.json();
        const extractedChars = data.results;
        const chars = extractedChars.map(char => {
          return { name: char.name, side: "" };
        });
        return chars;
      })
      .subscribe(data => {
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  getCharacters(chosenList) {
    if (chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter(item => item.side === chosenList);
  }

  onSideChosen(newCharInfo) {
    // const pos = this.characters.findIndex(
    //   char => char.name === newCharInfo.name
    // )
    // this.characters[pos].side = newCharInfo.side
    const foundChart = this.characters.find(char => {
      return char.name === newCharInfo.name;
    });
    foundChart.side = newCharInfo.side;
    this.charactersChanged.next();
    this.logService.writeLog(
      "changed side of " + foundChart.name + ", new side: " + foundChart.side
    );
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex(char => char.name === name);
    if (pos !== -1) {
      return;
    }
    this.characters[pos].side = side;
    const newChar = { name: name, side: side };
    this.characters.push(newChar);
  }
}
