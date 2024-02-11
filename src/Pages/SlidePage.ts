import { Button, Div, Image, Link } from "@tblabs/truffle";
import { Page } from './Page';
import { Markdown } from '../Components/Markdown';
import { Router } from '../Services/Router';
import { ISlide } from '../Core/ISlide';


export class SlidePage extends Page
{
    constructor(_router: Router, slide: ISlide)
    {
        super(_router);

        this.middle.Append(
            new Markdown(slide.Content),
            slide.ImageUrl && new Div().TextAlignCenter().Append(
                new Image(slide.ImageUrl).WidthPercent(70).Border(5, "#fff")
            )
        )

        this.bottom.Append(
            new Button("Cofnij", () => _router.GoBack()).Color("#fff"),
            slide.NextId && new Button("Dalej", () => _router.GoToSlide(slide.NextId)).Background("#ff7b0d").Color("#111").MarginLeft(8),
        )
    }
}
