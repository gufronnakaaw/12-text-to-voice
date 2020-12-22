// author: @gufronnakaaw
// date: 22-12-2020

const btnVoice = document.querySelector('.btn-voice');
const selectLang = document.querySelector('.select-lang');

const doTextToVoice = () => {
    let msg = document.querySelector('.get-text').value;
    let speech = new SpeechSynthesisUtterance;

    speech.lang = selectLang.value;
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

btnVoice.addEventListener('click', doTextToVoice);
