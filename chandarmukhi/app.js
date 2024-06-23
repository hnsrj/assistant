const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

let femaleVoice;

function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.gender === 'female' || 
        voice.name.includes('Google UK English Female') || 
        voice.name.includes('Microsoft Zira') && voice.lang === 'en-IN'
    );
}

window.speechSynthesis.onvoiceschanged = loadVoices;

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 0.9;
    text_speak.volume = 0.9;
    text_speak.pitch = 0.9;

    if (femaleVoice) {
        text_speak.voice = femaleVoice;
    }

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon baby...");
    } else {
        speak("Good Evening sweetheart...");
    }
}

window.addEventListener('load', () => {
    loadVoices(); // Load voices on load
    speak("Initializing CHANDARMUKHHI...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello') || message.includes('oye') || message.includes('chandramukhi')) {
        speak("hanji boliye");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('bye')) {
        const finalText = "bhaagoo jaldi seee jaldi yaha see ";
        speak(finalText);
    } else if (message.includes('CHANDARMUKHI') || message.includes('suno chandramukhi')) {
        const finalText = "kaya hae bool jaldi ";
        speak(finalText);
    } else if (message.includes('pagal')) {
        const finalText = "tum ho paagal";
        speak(finalText);
    } else if (message.includes('suno') || message.includes('sun')) {
        const finalText = "haa ustaad";
        speak(finalText);
    } 
    else if (message.includes('suno') || message.includes('sun')) {
        const finalText = "haa ustaad";
        speak(finalText);
    }
    else if (message.includes('kya hal hai') || message.includes('kaise ho')) {
        const finalText = "ak dum tip top aap batao";
        speak(finalText);
    } 
    else if (message.includes('kya kar rahe ho') || message.includes('k kre se')) {
        const finalText = "aapko yaad";
        speak(finalText);
    } 
    else if (message.includes('pagal')) {
        const finalText = "tum ho paagal";
        speak(finalText);
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
    
}
