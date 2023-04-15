const batman = document.querySelector('.batman');
const loli = document.querySelector('.loli');

const jump = () =>{

    batman.classList.add('jump');

    setTimeout(()=>{
        batman.classList.remove('jump');
    }, 650);
}

const loop = setInterval(()=>{

    const loliPosition = loli.offsetLeft;
    const batmanPosition = +window.getComputedStyle(batman).bottom.replace('px','');

    if (loliPosition <= 120 && loliPosition > 0 && batmanPosition < 121) {

        loli.style.animation = 'none';
        loli.style.left=`${loliPosition}px`;

        batman.style.animation = 'none';
        batman.style.bottom=`${batmanPosition}px`;

        batman.src = 'sangue.png';
        batman.style.width='120px';
        batman.style.marginLeft='30px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown',jump);
