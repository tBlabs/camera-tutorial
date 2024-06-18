import { Page } from '../Pages/Page';
import { Router } from './Router';
import { ChoosePage } from '../Pages/ChoosePage';
import { ISlideBase } from '../Core/ISlideBase';
import { SlidePage } from '../Pages/SlidePage';


export class SlideFactory
{
    constructor(private _router: Router) 
    { }

    public Create(slide: ISlideBase): Page
    {
        try
        {
            switch (slide.Type)
            {
                case "choose": return new ChoosePage(this._router, slide );
                case "page": return new SlidePage(this._router, slide );
                default: throw new Error("No slide for given type");
            }
        }
        catch (ex: any)
        {
            const errorPage = new Page(this._router);
            errorPage.middle.Append("Error: " + ex.message)
            return errorPage;
        }
    }
}
