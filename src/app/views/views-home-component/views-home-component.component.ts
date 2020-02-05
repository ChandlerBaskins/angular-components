import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-views-home-component",
  templateUrl: "./views-home-component.component.html",
  styleUrls: ["./views-home-component.component.css"]
})
export class ViewsHomeComponentComponent implements OnInit {
  stats = [
    { value: 22, label: "Number of Users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "Reviews" }
  ];

  items = [
    { image: "/assets/couch.jpeg", title: "Couch", description: "Nice couch" },
    {
      image: "/assets/dresser.jpeg",
      title: "Dresser",
      description: "Nice dresser"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
