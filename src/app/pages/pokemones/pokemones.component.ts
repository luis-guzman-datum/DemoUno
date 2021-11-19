import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
declare var $: any;

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.scss'],
})
export class PokemonesComponent implements OnInit, AfterViewInit {
  listaPokemons: any[] = [];

  pagina1: number = 1;
  buscar: string = '';

  infoPokemon: any;

  constructor(private pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.metodoParaObtenerpokemones();
  }

  ngAfterViewInit() {
    $('.modal').modal();
  }

  metodoParaObtenerpokemones() {
    this.pokeApi.getPokemones().subscribe((respuesta) => {
      console.log(respuesta);
      this.listaPokemons = respuesta.results;
    });
  }

  getInfoPokemon(url: string) {
    this.pokeApi.getInfoPokemon(url).subscribe((respuesta) => {
      this.infoPokemon = respuesta;
      $('.modal').modal('open');
    });
  }

  cerrarModal() {
    $('.modal').modal('close');
  }
}
