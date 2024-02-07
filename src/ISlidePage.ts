import { ISlide } from './ISlide';


export interface ISlidePage extends ISlide
{
    Content: string;
    ImageUrl: string;
    NextId: string;
}
