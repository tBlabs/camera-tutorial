import { Div, Image, Paragraph, Span } from "@tblabs/truffle";
import { Router } from '../Services/Router';
import { IChooseOption } from '../Core/IChooseOption';


export class ChooseOption extends Div
{
    constructor(_router: Router, option: IChooseOption)
    {
        super();
        this.Border(1, "#888")
            .DisplayInlineBlock()
            .MarginRight(8)
            .MarginTop(8)
            .Background("#fff")
            .CursorPointer()

        this.Append(
            // option.ImageUrl.length < 4 && new Span(option.ImageUrl).FontSize(48).WidthPercent(100),
            // option.ImageUrl.length > 5 && new Image(option.ImageUrl).Height(260).Padding(0).WidthPercent(100),
            new Image(option.ImageUrl).Height(260).Padding(0).WidthPercent(100),
            new Div().Text(option.Label).TextAlignCenter().Padding(8).Background("#fff")
        )

        this.OnClick(() => _router.GoToSlide(option.GoTo));
    }
}

export class ChooseOptionCard extends Div
{
    constructor(_router: Router, option: IChooseOption)
    {
        super("uk-card uk-card-default uk-card-hover uk-margin-small uk-width-1-3@m")
        // this.Margin(16)
        this
        .CursorPointer()
        this.OnClick(() => _router.GoToSlide(option.GoTo))
       
        this.Append(
            new Div().Class("uk-card-media-top").Append(
                option.Icon && new Span(option.Icon).Style("font-size: 48px;"),
                option.ImageUrl && new Image(option.ImageUrl).MaxHeight(200)
                //.Width(260).Height(260).Attribute("alt", "")
            ),
            new Div().Class("uk-card-body")
                // .PaddingTop(16)
                // .PaddingBottom(16)
                .Append(
                    new Span(option.Label).Class("uk-card-title")
                    // .MarginBottom(8)
                    ,
                    option.Text && new Paragraph().Text(option.Text).Italic(),
                )
        )
    }
}