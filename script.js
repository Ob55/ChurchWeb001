window.onload = () => {
    document.querySelector('.logo-container').classList.add('fade-out');

    setTimeout(() => {
        document.querySelector('.logo-container').style.display = 'none'; 

        document.querySelector('.main-content').style.display = 'block';

        
        setTimeout(() => {
            document.querySelector('.main-content').classList.add('show');
        }, 50); 
    }, 2000); 
};
