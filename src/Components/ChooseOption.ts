import { Div, Image, Span } from "@tblabs/truffle";
import { Router } from '../Services/Router';
import { IChooseOption } from '../Core/IChooseOption';


export class ChooseOption extends Div
{
    constructor(_router: Router, option: IChooseOption)
    {
        super();
        this.Border(1, "#888")
            .Width(42, "%")
            .DisplayInlineBlock()
            .MarginRight(8)
            .MarginTop(8)
            .Background("#fff")
            .CursorPointer()
            
        this.Append(
            option.ImageUrl.length < 4 && new Span(option.ImageUrl).FontSize(48).WidthPercent(100),
            option.ImageUrl.length > 5 && new Image(option.ImageUrl).Padding(0).WidthPercent(100),
            new Div().Text(option.Label).TextAlignCenter().Padding(8).Background("#fff")
        );

        this.OnClick(() => _router.GoToSlide(option.GoTo));
    }
}
