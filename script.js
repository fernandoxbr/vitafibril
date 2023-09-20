document.addEventListener('DOMContentLoaded', function() {
    const selectOption = document.getElementById('selectOption');
    const result = document.getElementById('result');
    const solutionText = document.getElementById('solutionText');
    const whatsappButton = document.getElementById('whatsappButton');
    const contactForm = document.getElementById('contactForm');

    selectOption.addEventListener('change', function() {
        const selectedOption = selectOption.value;
        result.style.display = 'block';

        if (selectedOption === 'quedaCabelo') {
            solutionText.textContent = 'O Vita Fibril contém componentes como biotina e cisteína que auxiliam na redução da queda de cabelo e no fortalecimento dos fios. Você merece ter cabelos lindos e saudáveis! 😃';
            solutionText.classList.add('solution');
            solutionText.classList.remove('solution', 'peleSemBrilho', 'unhasQuebradicas');
        } else if (selectedOption === 'unhasQuebradicas') {
            solutionText.textContent = 'O Vita Fibril contém componentes como queratina que auxiliam no fortalecimento das unhas, tornando-as menos quebradiças. Suas unhas podem ser fortes e deslumbrantes! 💅';
            solutionText.classList.add('solution');
            solutionText.classList.remove('solution', 'peleSemBrilho', 'quedaCabelo');
        } else if (selectedOption === 'peleSemBrilho') {
            solutionText.textContent = 'O Vita Fibril contém componentes como ácido pantotênico que auxiliam na melhoria da saúde da pele, proporcionando um aspecto mais brilhante e saudável. Tenha uma pele radiante! ✨';
            solutionText.classList.add('solution');
            solutionText.classList.remove('solution', 'quedaCabelo', 'unhasQuebradicas');
        } else {
            solutionText.textContent = '';
            result.style.display = 'none';
        }
    });

    whatsappButton.addEventListener('click', function() {
        const message = encodeURIComponent(contactForm.message.value);
        window.location.href = `https://wa.me/5543991171521?text=${message}`;
    });
});
