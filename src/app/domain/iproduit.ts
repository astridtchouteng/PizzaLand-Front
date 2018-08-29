import { ICategorie } from './icategorie';

export interface IProduit {

    id: number;
    description: string;
    nom: string;
    prix: number;
    categorie: ICategorie;
}
