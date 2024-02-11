import { Div, Link } from "@tblabs/truffle";
import { Center } from './Components/Center';
import { Router } from "./Router";


export class SlidePage extends Div
{
    public top = new Div("top").TextAlignCenter()
        .Append(
            // new Link("specTeam.pl", "https://specteam.pl").Margin(0),
            new Link("🏠 Start").OnClick(() => this._router.GoToStart()).FloatLeft(),
            new Link("Kontakt ☎️").OnClick(() => this._router.GoToHelp()).FloatRight(),
        )
    public middle = new Div("middle")
    public bottom = new Div("bottom")
        // .Append(
        //     new Center("Infolinia: ☎️ 507-293-714").Class("footer-phone"),
        //     new Center("pn - pt: 10:00 - 18:00, sob: 12:00 - 16:00").Class("footer-hours")
        // );

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
