const day = document.getElementById('days')
const hour = document.getElementById('hours')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')
const button = document.getElementById('inscreva')
const conteudo = document.getElementById('conteudo')

const newEvent = "16 Sept 2023"

const Countdown = () => {
    const newEventDate = new Date(newEvent);
    currentDate = new Date();

    const totalSeconds = (newEventDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60;

    day.innerHTML = days;
    hour.innerHTML = formatTime(hours);
    min.innerHTML = formatTime(mins);
    sec.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

Countdown();
setInterval(Countdown, 1000);

const form = ()=>{
   conteudo.innerHTML = `<section>
   <div>
       <p>Name:</p>
       <input  class="inputForm" type="text" placeholder="Digite seu nome">
   </div>
   <div>
       <p>Tel:</p>
       <input id="number" class="inputForm" type="tel" inputmode="numeric" placeholder="Ex: (70) 99999-5548">
   </div>
   <div>
       <p>Email:</p>
       <input class="inputForm" type="email" placeholder="Ex: exemplo@exem.com">
   </div>
   <button>Send</button>
</section>` 


}


button.addEventListener('click',form)
