import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { DataService } from 'src/app/services/data.service';
import { Security } from 'src/app/utils/security.utils';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  public form: FormGroup;
  public busy: false | boolean;
  public erros: [] | any;
  public deuCerto: '' | any;
  
  constructor(
    private service: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.busy = true;
    this.erros = [];
    this.form = this.fb.group({
      usuario: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required,
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ])],
    });
    this.busy = false;
  }

  ngOnInit() {
    const token = Security.getToken();
    if (token) {
      this.busy = true;
      this
        .service
        .reautenticar()
        .subscribe(
          (data: any) => {
            this.busy = false;
            this.setUser(data.customer, data.token);
          },
          () => {
            localStorage.clear();
            this.busy = false;
          }
        );
    }
  }

  submit(){
    this
    .service
    .autenticar(this.form.value)
    .subscribe(
      (data: any) => {
        localStorage.setItem('easytour.token',data.data.token);
        this.deuCerto = data.data.usuario.nome;
      },
      (err) => {
        console.log(err);
        this.erros = err.error
      }
    );
  }

  setUser(usuario: Usuario, token: string) {
    Security.set(usuario, token);
    this.router.navigate(['/']);
  }

}
