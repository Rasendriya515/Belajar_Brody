const background = document.getElementsByName('body');
const saklar = document.getElementById('saklar');

saklar.addEventListener('click', function() {
    
    if (document.body.style.backgroundColor === 'black') {

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        
        saklar.style.backgroundColor = 'black';
        saklar.style.color = 'white';
        saklar.textContent = "Matikan Lampu";
    } else {

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

        saklar.style.backgroundColor = 'white';
        saklar.style.color = 'black';
        saklar.textContent = "Nyalakan Lampu";
    }

    console.log('Saklar berfungsi!');
});
