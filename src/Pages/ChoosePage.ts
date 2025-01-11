import { Div, Line } from "@tblabs/truffle";
import { Page } from './Page';
import { Router } from '../Services/Router';
import { ChooseOptionCard } from '../Components/ChooseOption';
import { IChoose } from '../Core/IChoose';
import { Markdown } from "../Components/Markdown";


export class ChoosePage extends Page
{
    constructor(_router: Router, slide: IChoose)
    {
        super(_router);

       
        if (slide.Title)
            this.middle.Append(
                new Markdown(slide.Title)
                .Class("uk-card")
                ,
                new Line()
            )

        this.middle.Append(
            new Div().Class("uk-grid uk-child-width-expand uk-grid-match uk-text-center uk-grid-medium").Attribute("uk-grid")
            .Append(
                ...slide.Options
                    .map(x => new ChooseOptionCard(_router, x))
            )
        )
    }
}
