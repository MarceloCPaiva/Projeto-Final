import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  beneficios = [
    'Melhora da coordenação motora',
    'Aumenta a concentração',
    'Noções de espaço e localização',
    'Aumenta a flexibilidade',
    'Mais resistência corporal',
    'Corrige e melhora a postura',
    'Estimula o desenvolvimento intelectual',
    'Ajuda a expressão e memória;',
    'Aumenta a autoestima',
    'Ajuda a fazer amigos inibindo a timidez',
    'Melhora o equilíbrio e reflexos',
  ];

  cel = 219999 - 9898;
  constructor() {}

  getBeneficios() {
    return this.beneficios;
  }
}
