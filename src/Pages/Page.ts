import { Div, Link } from "@tblabs/truffle";
import { Router } from "../Router";


export class Page extends Div
{
    public top = new Div("top").TextAlignCenter()
        .Append(
            new Link("🏠 Start").OnClick(() => this._router.GoToStart()).FloatLeft(),
            new Link("Kontakt ☎️").OnClick(() => this._router.GoToHelp()).FloatRight(),
        )
    public middle = new Div("middle")
    public bottom = new Div("bottom")

    constructor(private _router: Router)
    {
        super("SlidePage");

        this.Append(
            this.top,
            this.middle,
            this.bottom);
    }

    public Clear(): this
    {
        this.top.Clear();
        this.middle.Clear();
        this.bottom.Clear();

        return this;
    }
}
