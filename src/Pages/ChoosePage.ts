import { Button, Div, Line } from "@tblabs/truffle";
import { Page } from './Page';
import { Router } from '../Services/Router';
import { ChooseOption, ChooseOptionCard } from '../Components/ChooseOption';
import { IChoose } from '../Core/IChoose';
import { Center } from "../Components/Center";
import { Markdown } from "../Components/Markdown";


export class ChoosePage extends Page
{
    constructor(_router: Router, slide: IChoose)
    {
        super(_router);

       
        if (slide.Title)
            this.middle.Append(
                new Markdown(slide.Title)//.Padding(16).PaddingLeft(32)
                .Class("uk-card")//.Border(4, "blue")
                ,
                new Line()
            )

        this.middle.Append(
            new Div().Class("uk-grid uk-child-width-expand uk-grid-match uk-text-center uk-grid-medium").Attribute("uk-grid")
            // .TextAlignCenter()
            .Append(
                ...slide.Options
                    .map(x => new ChooseOptionCard(_router, x))
            )
        );

        // this.bottom.Append(   
        //     // new Button("Wróć", () => _router.GoBack()).Color("#fff"),
        //     new Button("‹", () => _router.GoBack()).Class("nav-button left"),
        // )
    }
}
