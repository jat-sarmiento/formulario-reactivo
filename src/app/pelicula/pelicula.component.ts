
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


interface tipoGenero {
  name: string,
  code: string
}



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})



export class PeliculaComponent {

  tipoGenero: tipoGenero[] = [];

  selectedGenero: tipoGenero[] = [];

  countries: any[] = [];

  selectedCity: any;
  lenguaje: any[] = [];

  formGroup: FormGroup | undefined;

  value!: number;

  paymentOptions: any[] = [
    { name: 'Sala 1', value: 1 },
    { name: 'Sala 2', value: 2 },
    { name: 'Sala 3', value: 3 }
  ];


  ngOnInit() {

    this.lenguaje = [
      { name: 'Español', code: 'ESP' },
      { name: 'Ingles', code: 'ENG' },
    ];

    this.formGroup = new FormGroup({
      value: new FormControl(32)
    });

    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
      value: new FormControl(4),
      selectedLenguaje: new FormControl<string | null>(null)
    });


    this.tipoGenero = [
      { name: 'Comedia', code: 'Comedy' },
      { name: 'Terror', code: 'Terror' },
      { name: 'Accion', code: 'Accion' },
      { name: 'Anime', code: 'Anime' },
      { name: 'Ciencia Ficcion', code: 'Ciencia Ficcion' }
    ];
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<object | null>(null)
    });

    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' }
            ]
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' }
            ]
          }
        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' }
            ]
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' }
            ]
          }
        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' }
            ]
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' }
            ]
          }
        ]
      }
    ];

  }



  pelicula: string = '';
  genero: string = '';
  fechaEstreno: Date = new Date();
  pais: string = '';
  restriccionEdad: string = '';
  estado: boolean = false;
  calificacion: string = '';
  sala: string = '';
  idioma: string = '';
  aforo: number = 0;


  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      pelicula: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required, Validators.minLength(3)]],
      fechaEstreno: [new Date()],
      pais: ['', [Validators.required, Validators.minLength(3)]],
      restriccionEdad: ['', [Validators.min(1)]],
      estado: [false, [Validators.requiredTrue]],
      calificacion: ['', [Validators.requiredTrue]],
      sala: ['', [Validators.requiredTrue]],
      formato: ['', [Validators.requiredTrue]],
      idioma: ['', [Validators.requiredTrue]],
      aforo: [0, [Validators.requiredTrue]],

    })
  }


  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }


  validateForm() {
    if (this.pelicula === '' && this.pelicula.length <= 3) {

    }
  }
}

