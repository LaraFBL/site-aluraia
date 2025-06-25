const caixaPerguntas = document.querySelector(".texto-pergunta");
const caixaAlternativas = document.querySelector(".alternativas");
const caixaResultado = document.querySelector(".resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você acorda em um mundo onde a IA controla a maioria dos sistemas. Qual a sua primeira reação?",
    alternativas: [
      {
        texto: "Buscar formas de se adaptar e aprender com ela",
        afirmacao:
          "Você se tornou um especialista em integração entre humanos e IA."
      },
      {
        texto: "Desconfiar e procurar grupos de resistência",
        afirmacao:
          "Você começou a estudar segurança e ética em IA para entender seus riscos."
      }
    ]
  },
  {
    enunciado:
      "Você precisa resolver um grande problema ambiental. Como a IA pode ajudar?",
    alternativas: [
      {
        texto:
          "Usando sensores e algoritmos para prever desastres",
        afirmacao:
          "Você implementou projetos sustentáveis com apoio da IA."
      },
      {
        texto:
          "Divulgando informações para mobilizar a sociedade",
        afirmacao:
          "Você criou campanhas educativas com IA para engajar pessoas no tema."
      }
    ]
  },
  {
    enunciado:
      "Uma empresa quer usar IA para avaliar estudantes. O que você pensa?",
    alternativas: [
      {
        texto:
          "Pode ser justo, desde que bem programada",
        afirmacao:
          "Você ajudou a desenvolver IA mais justa e inclusiva."
      },
      {
        texto:
          "Isso pode reforçar desigualdades",
        afirmacao:
          "Você defendeu a criação de comitês humanos para revisar decisões automatizadas."
      }
    ]
  },
  {
    enunciado:
      "Você vai apresentar um projeto sobre IA na escola. Qual sua ideia?",
    alternativas: [
      {
        texto: "Criar um assistente virtual para ajudar colegas",
        afirmacao:
          "Seu projeto virou exemplo de uso prático de IA na educação."
      },
      {
        texto: "Debater os limites éticos da IA",
        afirmacao:
          "Seu trabalho gerou reflexões importantes sobre tecnologia e sociedade."
      }
    ]
  },
  {
    enunciado:
      "Você está em uma entrevista de emprego e o entrevistador é uma IA. O que faz?",
    alternativas: [
      {
        texto: "Interage normalmente, sabendo que é programada para isso",
        afirmacao:
          "Você passou na entrevista e agora colabora com sistemas de seleção mais humanos."
      },
      {
        texto: "Fica nervoso e tenta se adaptar à situação",
        afirmacao:
          "Você aprendeu com a experiência e agora ajuda outras pessoas a se prepararem para entrevistas com IA."
      }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const pergunta = perguntas[atual];
  caixaPerguntas.textContent = pergunta.enunciado;
  caixaAlternativas.innerHTML = "";

  pergunta.alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.onclick = () => respostaSelecionada(alternativa);
    caixaAlternativas.appendChild(botao);
  });
}

function respostaSelecionada(opcao) {
  historiaFinal += opcao.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  document.querySelector(".pergunta").style.display = "none";
  document.querySelector(".alternativas").style.display = "none";
  caixaResultado.style.display = "flex";
  digitarTexto(textoResultado, historiaFinal, 0, 25);
}

function digitarTexto(elemento, texto, i = 0, delay = 30) {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    setTimeout(() => digitarTexto(elemento, texto, i + 1, delay), delay);
  }
}

mostraPergunta();
