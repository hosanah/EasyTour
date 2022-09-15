import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    
    public url = 'https://localhost:7216/';
    constructor(private http: HttpClient) {}

    public composeHeader(){
        const token = localStorage.getItem('easytour.token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return headers;
    }

    getProducts(){
        return this.http.get<any[]>(`${this.url}/produtos`);
    }

    autenticar(data: any) {
        return this.http.post(`${this.url}auth/autenticar`, data)
    }

    reautenticar() {
        return this.http.post(
            `${this.url}/auth/refreshtoken`, 
        null,
        {headers: this.composeHeader()}
        )
    }
}