import { Div, ComponentBase } from "@tblabs/truffle";


export class Center extends Div
{
    constructor(...components: (ComponentBase<any> | string | boolean | undefined | number)[])
    {
        super();

        this.TextAlignCenter().FullWidth()
            .Append(...components);
    }
}
