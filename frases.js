

const frases = [
    { frase: 'A amizade é um meio de nos isolarmos da humanidade cultivando algumas pessoas.', autor: 'Carlos Drummond de Andrade' },
    { frase: 'O homem não é nada além daquilo que a educação faz dele.', autor: 'Immanuel Kant' },
    { frase: 'A vida não é um problema a ser resolvido, mas uma realidade a ser experimentada.', autor: 'Soren Kierkegaard' },
    { frase: 'Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.', autor: 'William Shakespeare' },
    { frase: 'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.', autor: 'Oscar Wilde' },
    { frase: 'A alegria está na luta, na tentativa, no sofrimento envolvido e não na vitória propriamente dita.', autor: 'Mahatma Gandhi' },
    {frase: 'Se queremos progredir, não devemos repetir a história, mas fazer uma história nova', autor: 'Mahatma Gandhi'},
    {frase: 'O fracasso é a oportunidade de começar de novo, de forma mais inteligente.', autor: 'Henry Ford'},
    {frase: 'O sucesso é construído em cima de fracassos repetidos e persistentes.', autor: 'Robert Kiyosaki'},
    {frase: 'A vida não é sobre esperar que a tempestade passe, mas sobre aprender a dançar na chuva.', autor: 'Vivian Greene'},
    {frase: 'A força não provém da capacidade física. Provém de uma vontade indomável.', autor: 'Mahatma Gandhi'},
    {frase: 'Transportai um punhado de terra todos os dias e fareis uma montanha.', autor: 'Confúcio'},
    {frase: 'A felicidade não é a ausência de problemas, mas a habilidade de lidar com eles.', autor: 'Charles de Montesquieu'},
    {frase: 'O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.', autor: 'Albert Schweitzer'},
    {frase: 'O único lugar onde o sucesso vem antes do trabalho é no dicionário.', autor: 'Vidal Sassoon'}
     
]

const frase = document.getElementById('frase')
const autor = document.getElementById('autor')

let i = Math.round(Math.random() * frases.length)

if (i === frases.length) {
    i -= frases.length - 1
}

frase.innerHTML = frases[i].frase;
autor.innerHTML = frases[i].autor;