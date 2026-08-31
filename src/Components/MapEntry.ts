import { Div, Link } from "@tblabs/truffle";
import { ISlideBase } from "./Core/ISlideBase";


export class MapEntry extends Div
{
    constructor(slide: ISlideBase)
    {
        super();
        this.Append(
            new Link(slide.Id, `#slide/${slide.Id}`),
            new Div("uk-badge").Text(slide.Type).MarginLeft(8).Background("#aaa"),
            " → ", new Link(slide.NextId || "end", `#slide/${slide.NextId}`).FontSize(12)
        );
    }
}
