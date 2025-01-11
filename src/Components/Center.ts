import { Div } from "@tblabs/truffle";
import { appendable } from "@tblabs/truffle/Core/appendable";


export class Center extends Div
{
    constructor(...components: appendable[])
    {
        super();

        this.TextAlignCenter().FullWidth()
            .Append(...components)
    }
}
