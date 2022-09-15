import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos-page.component.html'
})
export class ProdutosPageComponent implements OnInit {
  
  //public produtos$!: Observable<any[]>;
  
  constructor(private data: DataService) { }
  
  ngOnInit() {
    //this.produtos$ = this.data.getProducts();
    
  }

}
