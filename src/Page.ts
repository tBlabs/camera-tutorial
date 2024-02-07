import { Div } from "@tblabs/truffle";
import { Center } from './Components/Center';


export class SlidePage extends Div
{
    public top = new Div("top")
    public middle = new Div("middle")
    public bottom = new Div("bottom")
        // .Append(
        //     new Center("Infolinia: ☎️ 507-293-714").Class("footer-phone"),
        //     new Center("pn - pt: 10:00 - 18:00, sob: 12:00 - 16:00").Class("footer-hours")
        // );

    constructor()
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
