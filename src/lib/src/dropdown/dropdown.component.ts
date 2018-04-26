import { Component, OnInit, Input, Output,EventEmitter, HostListener, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'nrcm-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  selectedOptionValue: string;
  dropdownList =false;


@Input() addDropdownClass ='kjwsvh';
@Input() options = [{
  label: 'option 1',
  value:
  'value 1'
}, {
  label: 'option 2',
  value: 'value 2'
}, {
  label: 'option 3',
  value: 'value 3'
}, {
  label: 'option 4',
  value: 'value 4'
}, {
  label: 'option 5',
  value: 'value 5'
}];
@Input() selectedOption = 'Select an option';
@Output()
changeDropdown = new EventEmitter();

public text: String;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    debugger;
    if(this.eRef.nativeElement.contains(event.target)) {
      this.text = 'clicked inside';
    } else {
      this.text = 'clicked outside';

      this.dropdownList = false;
    }
  }

  constructor(private eRef: ElementRef) {
    this.text = 'no clicks yet';
  }

  selectAnOption() {
    this.dropdownList = !this.dropdownList;
  }
  onClickOption(value) {
    this.selectedOption = this.options[value].label;
    this.selectedOptionValue = this.options[value].value;
    this.dropdownList = false;
    this.changeDropdown.emit(this.selectedOptionValue);
  }
  ngOnInit() {
    console.log(this.options);
  }

}
