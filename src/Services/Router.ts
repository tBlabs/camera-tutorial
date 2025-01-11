import { HashRef } from "@tblabs/truffle";


export class Router
{
    public Hash = new HashRef();

    public GoToHelp(): void
    {
        this.Hash.value = `slide/contact`;
    }

    public GoToStart(): void
    {
        this.Hash.value = `slide/start`;
    }

    public GoToSlide(id: string)
    {
        this.Hash.value = `slide/${id}`;
    }

    public GoBack()
    {
        history.back();
    }
}
