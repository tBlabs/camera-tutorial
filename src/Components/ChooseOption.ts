import { Div, Image, Paragraph, Span } from "@tblabs/truffle";
import { Router } from '../Services/Router';
import { IChooseOption } from '../Core/IChooseOption';


export class ChooseOptionCard extends Div
{
    constructor(_router: Router, option: IChooseOption)
    {
        super("uk-card uk-card-default uk-card-hover uk-margin-small uk-width-1-3@m")
        
        this.CursorPointer()
        this.OnClick(() => _router.GoToSlide(option.GoTo))

        this.Append(
            new Div().Class("uk-card-media-top").Append(
                option.Icon && new Span(option.Icon).Style("font-size: 48px;"),
                option.ImageUrl && new Image(option.ImageUrl).MaxHeight(200),
            ),
            new Div().Class("uk-card-body")
                .Append(
                    new Span(option.Label).Class("uk-card-title"),
                    option.Text && new Paragraph().Text(option.Text).Italic(),
                )
        )
    }
}