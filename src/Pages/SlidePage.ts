import { Button, Div, Image, Link, Span } from "@tblabs/truffle";
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
            slide.ImageUrl && new Div().TextAlignCenter()
                .Append(
                    new Image(slide.ImageUrl)
                )
        )

        this.SetSlide(slide)

        this.bottom.Append(
            slide.NextId && new Span().Attribute("uk-icon", "icon: chevron-right; ratio: 1")
                .Class("uk-icon-button").Background("#ffa500")
                .Style(`color: #fff; position: fixed; width: 64px; height: 64px; bottom: 16px; right: 16px;`)
                .OnClick(() => _router.GoToSlide(slide.NextId))
        )
    }
}
