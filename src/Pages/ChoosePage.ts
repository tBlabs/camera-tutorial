import { Button, Link } from "@tblabs/truffle";
import { Page } from './Page';
import { Markdown } from '../Components/Markdown';
import { Router } from '../Services/Router';
import { ChooseOption } from '../Components/ChooseOption';
import { IChoose } from '../Core/IChoose';
import { Center } from "../Components/Center";


export class ChoosePage extends Page
{
    constructor(_router: Router, slide: IChoose)
    {
        super(_router);

        this.middle.Append(
            new Markdown(slide.Title),
            new Center(
                ...slide.Options
                    .map(x => new ChooseOption(_router, x))
            )
        );

        this.bottom.Append(   
            new Button("Wróć", () => _router.GoBack()).Color("#fff"),
        );
    }
}
