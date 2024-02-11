import { ISlideBase } from './ISlideBase';
import { IChooseOption } from './IChooseOption';


export interface IChoose extends ISlideBase
{
    Title: string;
    Options: IChooseOption[];
}
