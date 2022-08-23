import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OurServicesComponent],
  imports: [CommonModule, SharedModule],
})
export class OurServicesModule {}
