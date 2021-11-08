import {
  Component,
  ElementRef,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() dismiss = new EventEmitter();
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement);
  }

  onDismissClick() {
    this.dismiss.emit();
  }
}
