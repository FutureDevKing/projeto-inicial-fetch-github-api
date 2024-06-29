import { baseUrl, maxItems } from "../variables.js"

async function getUserEvents(userName){
    const events = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    return await events.json()
}

export { getUserEvents }