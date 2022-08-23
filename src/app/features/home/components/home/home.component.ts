import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  title = 'Dança e Educação';
  subTitle = 'Raphaella Albuquerque ballet';
  horarios = {
    segunda: 9.3,
    terca: 17.3,
    quarta: 13.3,
    quinta: 10.4,
    sexta: 16.0,
  };

  ngOnInit(): void {}

  saibaMais() {
    this.router.navigateByUrl('sobre');
  }
  maisServicos() {
    this.router.navigateByUrl('nosso-servico');
  }
  maisContato() {
    this.router.navigateByUrl('contato');
  }
}
