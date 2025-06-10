import { Div, Line } from "@tblabs/truffle";
import { Page } from './Page';
import { Router } from '../Services/Router';
import { OptionCard } from '../Components/OptionCard';
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
                    .Class("uk-card"),
            )

        this.middle.Append(
            new Div("cards-container")
                .Append(
                    ...slide.Options
                        .map(x => new OptionCard(_router, x))
                )
        )
    }
}
