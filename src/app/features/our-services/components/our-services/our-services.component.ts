import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  constructor(private objetivo: ServiceService) {}

  ngOnInit(): void {}
}
