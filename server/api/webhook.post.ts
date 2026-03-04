export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const TARGET_URLS = [
        'https://back.fluxconversa.com.br/api/webhooks/f8086251-c7a8-4d53-80dd-da0f507c567c',
        'https://webhook.elevenapp.com.br/webhook/cadastro'
    ]

    // Send to all webhooks in parallel
    const results = await Promise.allSettled(
        TARGET_URLS.map(url => fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }))
    )

    // Log errors if any
    results.forEach((res, index) => {
        if (res.status === 'rejected') {
            console.error(`Webhook failed for ${TARGET_URLS[index]}:`, res.reason)
        }
    })

    return { success: true }
})
