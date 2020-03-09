import { Component, OnInit } from "@angular/core";
import { StarWarsService } from "app/star-wars.service";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"]
})
export class CreateCharacterComponent implements OnInit {
  avaibleSides = [
    { display: "None", value: "" },
    { display: "Light", value: "light" },
    { display: "Dark", value: "dark" }
  ];
  // defaultName = "Obi-Wan";
  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }
  ngOnInit() {}
  onSubmit(submittedForm) {
    console.log("submitted", submittedForm);
    if (submittedForm.invalid) return;
    this.swService.addCharacter(
      submittedForm.value.name,
      submittedForm.value.side
    );
  }
}
