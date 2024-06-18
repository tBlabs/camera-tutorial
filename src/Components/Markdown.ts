import { Div } from "@tblabs/truffle";
import showdown from "showdown";

//
// ADD
//
//      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.11.1/dist/css/uikit.min.css" />
//
// TO MAKE IT WORK
//

export class Markdown extends Div
{
    private options = { tables: true, tasklists: true, underline: true, strikethrough: true, backslashEscapesHTMLTags: true };
    private converter = new showdown.Converter(this.options);

    constructor(markdown?: string)
    {
        super();
        this.Style("padding: 0; margin: 0;");

        const html = this.converter.makeHtml(markdown);
        this.Html(html);
    }
}
