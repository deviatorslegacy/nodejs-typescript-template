/* 
 * Code by DeviatorsLegacy
 * Github: https://github.com/deviatorslegacy/
 */

// Initialize websocket
let socket = io()

// Listen for incoming messages
socket.on('msg', (msg: string) => {
    const text: HTMLSpanElement | null = document.querySelector('span.server-message')
    if (text) { text.innerText = msg }
})
