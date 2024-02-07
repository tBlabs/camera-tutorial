import { SlidePage } from './Page';
import { Router } from './Router';
import { Choose } from './Choose';
import { IChoosePage } from './IChoosePage';
import { ISlidePage } from './ISlidePage';
import { ISlide } from './ISlide';
import { Slide } from './Slide';



export class SlideFactory
{
    constructor(private _router: Router) { }

    public Create(slide: ISlide): SlidePage
    {
        switch (slide.Type)
        {
            case "choose": return new Choose(this._router, slide as IChoosePage);
            case "page": return new Slide(this._router, slide as ISlidePage);
            default: throw new Error("No slide for given type");
        }
    }
}
