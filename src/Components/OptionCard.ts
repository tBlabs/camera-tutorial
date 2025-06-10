import { ComponentBase, Div, Image, Paragraph, Ref, Span, Text } from "@tblabs/truffle";
import { Router } from '../Services/Router';
import { IChooseOption } from '../Core/IChooseOption';


export class Heading extends ComponentBase<HTMLHeadingElement>
{
    constructor(text: string | Ref<string>, level: number, className?: string)
    {
        super(`h${level}`);

        this.Text(text instanceof Ref ? text.value : text);

        this.Class(className);
    }
}

export class OptionCard extends Div
{
    constructor(_router: Router, option: IChooseOption)
    {
        super("card")

        this.OnClick(() => _router.GoToSlide(option.GoTo))

        this.Append(
            option.Icon && new Span(option.Icon).Class("card-icon"),
            option.ImageUrl && new Image(option.ImageUrl).Class("card-image"),
            new Div("card-caption")
                .Append(
                    new Heading(option.Label, 3),
                    option.Text && new Paragraph().Text(option.Text).Italic(),
                )
        )
    }
}