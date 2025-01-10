import { Button, Div, Link, Span } from "@tblabs/truffle";
import { Router } from "../Services/Router";
import { ISlide } from "../Core/ISlide";


export class Page extends Div
{
    public top = new Div("top").TextAlignCenter()
        .Append(
            // new Link("🏠 Start").OnClick(() => this._router.GoToStart()).FloatLeft(),
            // new Link("Kontakt ☎️").OnClick(() => this._router.GoToHelp()).FloatRight(),
            new Span().Attribute("uk-icon", "icon: chevron-left; ratio: 1").Class("uk-icon-button btn-color").FloatLeft().OnClick(() => this._router.GoBack()),
            new Span().Attribute("uk-icon", "icon: home; ratio: 1").Class("uk-icon-button btn-color").OnClick(() => this._router.GoToStart()),
            new Span().Attribute("uk-icon", "icon: receiver; ratio: 1").Class("uk-icon-button btn-color").MarginLeft(8).OnClick(() => this._router.GoToHelp()),
            new Span().Attribute("uk-icon", "icon: chevron-right; ratio: 1").Class("uk-icon-button btn-color")
            .FloatRight().OnClick(() => this._router.GoToSlide(this.slide?.NextId ?? "error-page"))
            .Enable(!!this.slide?.NextId)
            ,
        )
    public middle = new Div("middle")
    public bottom = new Div("bottom")

    private slide!: ISlide | undefined;
    public SetSlide(slide: ISlide): this
    {
        this.slide = slide;
        return this;
    }
    constructor(private _router: Router)
    {
        super("SlidePage uk-background-default");

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
