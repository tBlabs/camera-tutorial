import { Div, Image, Span } from "@tblabs/truffle";
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
            // slide.NextId && new Span().Attribute("uk-icon", "icon: chevron-right; ratio: 1")
            //     .Class("uk-icon-button").Background("#ffa500")
            //     .Style(`color: #fff; position: fixed; width: 64px; height: 64px; bottom: 16px; right: 16px;`)
            //     .OnClick(() => _router.GoToSlide(slide.NextId))
            slide.NextId && new Div()
                .Style(`color: #fff; position: fixed; width: 64px; height: 64px; bottom: 16px; right: 16px; cursor: pointer`)
                .Html(`<svg fill="#f0506e" height="116px" width="116px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#000000" stroke-width="0.00512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="3.072"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.616,256-256S397.385,0,256,0z M346.899,280.959 l-85.594,85.594c-13.783,13.784-36.132,13.784-49.917,0c-13.784-13.784-13.784-36.133,0-49.917L272.023,256l-60.635-60.635 c-13.784-13.784-13.784-36.133,0-49.917s36.134-13.784,49.917,0l85.594,85.594C360.683,244.825,360.683,267.175,346.899,280.959z"></path> </g> </g> </g></svg>`)
                .OnClick(() =>
                {
                    _router.GoToSlide(slide.NextId);
                })
        )
    }
}
