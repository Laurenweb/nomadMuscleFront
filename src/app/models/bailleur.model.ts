import {Deserializable} from './deserializable.model';

export class Bailleur implements Deserializable {
    public nom: String;
    public prenom: String;
    public dateNaissance: Number;
    public adresse: any;
    public pieceIdentite: Number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
