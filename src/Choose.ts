import { Button } from "@tblabs/truffle";
import { SlidePage } from './Page';
import { Markdown } from './Components/Markdown';
import { Router } from './Router';
import { ChooseOption } from './ChooseOption';
import { IChoosePage } from './IChoosePage';
import { Center } from "./Components/Center";


export class Choose extends SlidePage
{
    constructor(_router: Router, slide: IChoosePage)
    {
        super();
        this.middle.Append(
            new Markdown(slide.Title),
            // "\n",
            new Center(
                ...slide.Options
                    .map(x => new ChooseOption(_router, x))
            )
        );

        this.bottom.Append(
            new Button("Wróć", () => _router.GoBack()).Color("#fff")
        );
    }
}
