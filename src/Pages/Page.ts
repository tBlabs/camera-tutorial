import { Div, Span } from "@tblabs/truffle";
import { Router } from "../Services/Router";
import { ISlide } from "../Core/ISlide";


export class TopButtonV1 extends Span
{
    constructor(icon: string, onClick: () => void)
    {
        super();

        this.Attribute("uk-icon", `icon: ${icon};`)
            .Class("uk-icon-button btn-color")
            .OnClick(onClick)
    }
}

export class TopButton extends Span
{
    constructor(icon: string, onClick: () => void, enabled: ()=> boolean = ()=>true)
    {
        super();
        console.log('enabled', enabled);

        this.Text(icon).Class("uk-icon-button btn-color")
        .CursorPointer()
     
        this.OnClick(()=>enabled() && onClick())
    }
}

export class Page extends Div
{
    public top = new Div("top").TextAlignCenter()
        .Append(
            // new TopButton("chevron-left", () => this._router.GoBack()).FloatLeft(),
            // new TopButton("home", () => this._router.GoToStart()),
            // new TopButton("receiver", () => this._router.GoToHelp()).MarginLeft(8),
            // new TopButton("chevron-right", () => this._router.GoToSlide(this.slide?.NextId ?? "error-page")).FloatRight()
            new TopButton("◂", () => this._router.GoBack()).FloatLeft(),
            new TopButton("🏠", () => this._router.GoToStart()),
            new TopButton("☎️", () => this._router.GoToHelp()).MarginLeft(8),
            new TopButton("▸", () => this._router.GoToSlide(this.slide?.NextId ?? "error-page"), ()=>!!this.slide?.NextId).FloatRight()
        )
    public middle = new Div("middle")
    public bottom = new Div("bottom")

    private slide: ISlide | undefined;
    public SetSlide(slide: ISlide): this
    {
        this.slide = slide;
        console.log('SetSlide', !!this.slide?.NextId);
        return this;
    }
    constructor(private _router: Router)
    {
        super("SlidePage uk-background-default");
        console.log("Page constructor");

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
