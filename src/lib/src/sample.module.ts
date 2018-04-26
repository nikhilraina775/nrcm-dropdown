import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';

export * from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule
    };
  }
}
