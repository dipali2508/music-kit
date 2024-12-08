
let shreya = new Audio('./audio/shreya.mp3');
let neha = new Audio('./audio/neha.mp3');
let Ajayatual= new Audio('./audio/Ajayatual.mp3')
let udit= new Audio('./audio/udit.mp3')
let Arya =new Audio('./audio/arya.mp3')

let images=document.querySelectorAll('.audio-design');
let imageNumber = images.length;

console.log(imageNumber)
for(let i=0;i<imageNumber;i++)
{
    images[i].addEventListener('click',function(){
        let singer=this.getAttribute('value');
        console.log(singer);
        images[i].classList.toggle('active');
        for(let j=0; j<imageNumber; j++){
            if(j==i) continue;
            images[j].classList.remove('active')
        }
        
          pauseMusic()
          playMusic(singer)

    });
}

function playMusic(singer){
    switch(singer){
        case 'shreya':
             shreya.play();
            break;
         case 'neha':
             neha.play();
            break;
            case 'Ajayatual':
                Ajayatual.play();
                break;
                case 'udit':
                    udit.play();
                break;
                case 'Arya':
                    Arya.play();
                break;
             default:
                break;
                
    }
}
function pauseMusic()
{
    shreya.pause();
    neha.pause();
    Ajayatual.pause();
    udit.pause();
    Arya.pause();
}
