import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(private el: ElementRef) {}
  @Output() close = new EventEmitter();

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit()
  }
}
