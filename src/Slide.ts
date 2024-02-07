import { Button, Div, Image } from "@tblabs/truffle";
import { SlidePage } from './Page';
import { Markdown } from './Components/Markdown';
import { Router } from './Router';
import { ISlidePage } from './ISlidePage';


export class Slide extends SlidePage
{
    constructor(_router: Router, slide: ISlidePage)
    {
        super();

        this.middle.Append(
            new Markdown(slide.Content),
            slide.ImageUrl && new Div().TextAlignCenter().Append(
                new Image(slide.ImageUrl).WidthPercent(70).Border(5, "#fff")
            )
        )

        this.bottom.Append(
            new Button("Cofnij", () => _router.GoBack()).Color("#fff"),
            slide.NextId && new Button("Dalej", () => _router.GoToSlide(slide.NextId)).Background("#ff7b0d").Color("#111").MarginLeft(8)
        )
    }
}