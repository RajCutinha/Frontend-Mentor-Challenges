import { Component, OnInit, Input } from '@angular/core';

interface customButton {
  btn: boolean;
  'btn-primary': boolean;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() primary!: boolean;

  btnClass!: customButton;

  constructor() {}

  ngOnInit(): void {
    this.btnClass = {
      btn: true,
      'btn-primary': this.primary,
    };
  }
}
