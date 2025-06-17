let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 0.6
    text_speak.pitch = 1
    text_speak.volume = 1
    //text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir")
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir")
    } else {
        speak("Good Evening Sir")
    }

}
// window.addEventListener('load', () => {
//     wishMe()
// })

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello")) {
        speak("Hello sir, what can I help you with?")
    } else if (message.includes("who are you") || message.includes("hu r u")) {
        speak("i am virtual assistant, Jarvis, created by Ajeet Sir")
    } else if (message.includes("why your name is jarvis")) {
        speak("because i am virtual assistant and My sir created me with Jarvis Name ")
    } else if (message.includes("how are you") || message.includes("how r u")) {
        speak("I am fine and what about you")
    } else if (message.includes("open youtube")) {
        speak("opening youtube...")
        window.open("https://www.youtube.com", "_blank")
    } else if (message.includes("open google")) {
        speak("opening google...")
        window.open("https://www.google.com", "_blank")
    } else if (message.includes("open calculator")) {
        speak("opening calculator...")
        window.open("calculator://")
    } else if (message.includes("recycle bin") || message.includes("open recycle bin") || message.includes("recyclebin")) {
        speak("Sorry, I cannot access the Recycle Bin from the browser. Please run me as a desktop application.")
    } else if (message.includes("what is time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak("The time is " + time)
    } else if (message.includes("what is date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short", year: "numeric" })
        speak("Today's date is " + date)
    } else if (message.includes("sing a song")) {
        speak("La la laaa... Sorry, I'm still training for Indian Idol. hahahahahahaha");
    } else {
        speak("I did not understand that. You said " + message)
    }
}

