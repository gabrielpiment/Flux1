export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const WEBHOOK_URL = 'https://back.fluxconversa.com.br/api/webhooks/f8086251-c7a8-4d53-80dd-da0f507c567c'

    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
        return { success: true }
    } catch (error) {
        console.error('Webhook proxy error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Error forwarding webhook'
        })
    }
})
