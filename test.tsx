import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts"
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js"
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

const app = createApp()

app.handle("/", async (req: any) => {
    return await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8"
        }),
        body: ReactDOMServer.renderToString(<Count/>)
    })
})

app.listen({ port: 3000 })

const Count: React.FC = () => {
    const [count, setCount] = React.useState(Number)
    const handleClick = (): void => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>
                {count}
            </button>
        </div>
    )
}