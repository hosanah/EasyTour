import { Usuario } from "../models/usuario.model";

export class Security {
    public static set(usuario: Usuario, token: string) {
        const data = JSON.stringify(usuario);

        localStorage.setItem('easytouruser', btoa(data));
        localStorage.setItem('easytourtoken', token);
    }

    public static setUser(usuario: Usuario) {
        const data = JSON.stringify(usuario);
        localStorage.setItem('easytouruser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('easytourtoken', token);
    }

    public static getUser(): Usuario {
        const data = localStorage.getItem('easytouruser');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return new Usuario('','','','');
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('easytourtoken');
        if (data) {
            return data;
        } else {
            return '';
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('easytouruser');
        localStorage.removeItem('easytourtoken');
    }
}