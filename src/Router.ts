import { HashRef } from "@tblabs/truffle";

export class Router
{
    public Hash = new HashRef();

    public GoToSlide(id)
    {
        this.Hash.value = `slide/${id}`;
    }

    public GoBack()
    {
        history.back();
    }
}
