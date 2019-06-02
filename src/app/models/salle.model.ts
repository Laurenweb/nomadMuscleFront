import {Deserializable} from './deserializable.model';
import { Bailleur } from './bailleur.model';


export class Salle implements Deserializable{
    public bailleur: Bailleur;
    public libelle: String;
    public adresse: any;
    public dimensions: Number;
    public equipement: any;
    public nombreUtilisateurs: Number;
    public calendrier: any;
    public services: any;
    public photos: any;
    public reservationAuto: Boolean;
    public tarifHoraire: Number;
    public porcentageRemboursement: Number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}