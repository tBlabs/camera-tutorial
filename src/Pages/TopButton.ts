import { Span } from "@tblabs/truffle";



export class TopButton extends Span
{
    constructor(icon: string, onClick: () => void, enabled: () => boolean = () => true)
    {
        super();

        this.Text(icon).Class("uk-icon-button btn-color")
            .CursorPointer();

        this.OnClick(() => enabled() && onClick());
    }
}
