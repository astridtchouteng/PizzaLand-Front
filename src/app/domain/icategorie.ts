import { IProduit } from './iproduit';

export interface ICategorie {
  id: number;
  titre: string;
  produits: Array<IProduit>;

}
