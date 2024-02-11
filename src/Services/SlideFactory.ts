import { Page } from '../Pages/Page';
import { Router } from './Router';
import { ChoosePage } from '../Pages/ChoosePage';
import { IChoose } from '../Core/IChoose';
import { ISlide } from '../Core/ISlide';
import { ISlideBase } from '../Core/ISlideBase';
import { SlidePage } from '../Pages/SlidePage';


export class SlideFactory
{
    constructor(private _router: Router) 
    { }

    public Create(slide: ISlideBase): Page
    {
        switch (slide.Type)
        {
            case "choose": return new ChoosePage(this._router, slide as IChoose);
            case "page": return new SlidePage(this._router, slide as ISlide);
            default: throw new Error("No slide for given type");
        }
    }
}
