import { ISlide } from './ISlide';
import { IChooseOption } from './IChooseOption';


export interface IChoosePage extends ISlide
{
    Title: string;
    Options: IChooseOption[];
}
