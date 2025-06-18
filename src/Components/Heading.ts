import { ComponentBase, Ref } from "@tblabs/truffle";



export class Heading extends ComponentBase<HTMLHeadingElement> {
    constructor(text: string | Ref<string>, level: number, className?: string) {
        super(`h${level}`);

        this.Text(text instanceof Ref ? text.value : text);

        this.Class(className);
    }
}
