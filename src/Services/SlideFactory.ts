import { Page } from '../Pages/Page';
import { Router } from './Router';
import { ChoosePage } from '../Pages/ChoosePage';
import { ISlideBase } from '../Core/ISlideBase';
import { SlidePage } from '../Pages/SlidePage';
import { ISlide } from '../Core/ISlide';
import { IChoose } from '../Core/IChoose';


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
                case "choose": return new ChoosePage(this._router, slide as IChoose);
                case "page": return new SlidePage(this._router, slide as ISlide);
                default: throw new Error("No slide for given type");
            }
        }
        catch (ex: any)
        {
            console.error("SlideFactory error", ex)
            const errorPage = new Page(this._router);
            errorPage.middle.Append("Błąd podczas ładowania treści: nieznany rodzaj slajdu")
            return errorPage;
        }
    }
}
