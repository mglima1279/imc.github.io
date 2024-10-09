document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui você pode fazer uma chamada para um servidor ou API

    // Exemplo de resposta
    document.getElementById('responseMessage').innerText = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    
    // Limpa o formulário
    this.reset();
});
