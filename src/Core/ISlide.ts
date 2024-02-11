import { ISlideBase } from './ISlideBase';


export interface ISlide extends ISlideBase
{
    Content: string;
    ImageUrl: string;
    NextId: string;
}
