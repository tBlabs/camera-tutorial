import { Div, UnorderedList } from "@tblabs/truffle";
import { SLIDES } from "../slides";
import { MapEntry } from "../Components/MapEntry";


export class MapPage extends Div
{
    constructor()
    {
        super();

        this.Append(
            new Div().Text("Mapa").Margin(32).Bold(),
            new UnorderedList(
                SLIDES.map(slide => new MapEntry(slide))
            )
        )
    }
}