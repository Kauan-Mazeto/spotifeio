import { CanActivateFn, UrlTree, Router } from "@angular/router";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = async (rota, estado): Promise<boolean | UrlTree> => {


    const roteador = inject(Router);
    const acessToken = localStorage.getItem('access_token');

    if (!acessToken) {
        alert('Acesso negado');
        localStorage.removeItem('access_token');
        localStorage.removeItem('code_verifier');
        return roteador.createUrlTree(['/login']);
    }

    return true;
}