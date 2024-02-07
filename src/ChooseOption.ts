import { Div, Image } from "@tblabs/truffle";
import { Router } from './Router';
import { IChooseOption } from './IChooseOption';


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
            new Image(option.ImageUrl).Padding(0).WidthPercent(100),
            new Div().Text(option.Label).TextAlignCenter().Padding(8).Background("#fff")
        );

        this.OnClick(() => _router.GoToSlide(option.GoTo));
    }
}
