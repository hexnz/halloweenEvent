const potions = {
  esquecimento: {
    name: 'Poção do Esquecimento', color: '#e4ae46', icon: '<path d="M206 158c-15-17 6-31 18-14s-8 31-19 16m40-5c14-18 31 1 15 15s-29-4-15-15"/>',
    meaning: 'Você sabe deixar para trás o que já cumpriu seu papel. Sua magia é abrir espaço para uma história nova.',
    ingredients: ['1 lembrança transformada em papel', '3 estrelas de papel dourado', 'um fio de névoa desenhado'],
    ritual: 'Coloque os ingredientes num frasco vazio, feche com uma rolha e deixe perto de uma janela durante uma noite. Depois, guarde como lembrança ou descarte no papel reciclável.'
  },
  amor: {
    name: 'Poção do Amor', color: '#d74846', icon: '<path d="M230 178c-8-11-26-21-26-34 0-12 16-17 26-4 10-13 26-8 26 4 0 13-18 23-26 34Z"/>',
    meaning: 'Você valoriza afeto, gentileza e conexão. A sua poção lembra que o carinho mais forte começa no respeito e na reciprocidade.',
    ingredients: ['pétalas de papel vermelho', 'um pequeno coração de feltro', 'fita cor de vinho'],
    ritual: 'Arrume tudo num frasco transparente e amarre uma fita no gargalo. Ofereça como enfeite ou mantenha na sua mesa.'
  },
  invisibilidade: {
    name: 'Poção da Invisibilidade', color: '#4c9a63', icon: '<path d="M207 174c4-27 17-42 23-42s19 15 23 42m-46-19c-12 5-18 13-21 21m65-21c12 5 18 13 21 21m-39-37v28m-12 0h24"/>',
    meaning: 'Você percebe muito, mas não precisa estar no centro de tudo. A sua magia é observar com calma e escolher quando aparecer.',
    ingredients: ['papel vegetal', 'uma folha seca', 'brilho verde para artesanato'],
    ritual: 'Enrole a folha no papel vegetal, coloque num frasco vazio e acrescente um pouco de brilho. Exiba sob uma luz suave.'
  },
  coragem: {
    name: 'Poção da Coragem', color: '#b96be0', icon: '<path d="m230 130 8 19 20 2-15 13 5 20-18-11-18 11 5-20-15-13 20-2 8-19Z"/>',
    meaning: 'Mesmo com frio na barriga, você encontra um passo possível. Coragem, para você, é seguir com cuidado e intenção.',
    ingredients: ['um recorte de estrela violeta', 'fio dourado', 'uma pedrinha decorativa'],
    ritual: 'Monte as peças num frasco e escreva num papel uma pequena coisa que você quer tentar. Deixe o papel ao lado do frasco.'
  },
  sono: {
    name: 'Poção do Sono', color: '#758ed8', icon: '<path d="M246 129c-23 4-35 31-25 51 8 17 28 23 45 14-14 19-44 22-62 5-19-18-16-49 5-63 11-8 25-10 37-7Z"/>',
    meaning: 'Você está buscando pausa, silêncio e um pouco mais de gentileza com o próprio ritmo.',
    ingredients: ['lua de papel creme', 'algodão para artesanato', 'uma fita preta macia'],
    ritual: 'Acomode a lua de papel e o algodão num frasco e coloque a fita. Use como enfeite de cabeceira; não substitui descanso ou cuidado de saúde.'
  },
  sorte: {
    name: 'Poção da Sorte', color: '#7da64e', icon: '<path d="M230 178c-9-11-28-22-28-36 0-13 18-17 28-3 10-14 28-10 28 3 0 14-19 25-28 36Zm0 0v16m0-16-20-8m20 8 20-8"/>',
    meaning: 'Você gosta de manter a esperança por perto e criar oportunidades com curiosidade e leveza.',
    ingredients: ['trevo de papel verde', 'três estrelinhas', 'um fio de cobre decorativo'],
    ritual: 'Enrole o fio ao redor do frasco, coloque o trevo e as estrelas dentro e escolha um desejo simples para acompanhar.'
  },
  medo: {
    name: 'Poção do Medo', color: '#f07829', icon: '<path d="M230 132c-5-8 5-12 0-20m-12 24c-12-10-28 0-28 17 0 18 16 30 40 30s40-12 40-30c0-17-16-27-28-17m-33 12 11 7m34-7-11 7m-23 15c6 5 20 5 26 0"/>',
    meaning: 'Você encara o suspense de frente e até encontra diversão no arrepio. O seu susto favorito tem sempre uma saída segura.',
    ingredients: ['abóbora de papel', 'papel celofane laranja', 'um morcego recortado'],
    ritual: 'Forre o frasco com celofane por fora, cole o morcego e a abóbora de papel. Deixe a luz do ambiente criar as sombras.'
  },
  energia: {
    name: 'Poção da Energia', color: '#ff674c', icon: '<path d="m238 126-31 37h22l-7 34 32-43h-22l6-28Z"/>',
    meaning: 'Você se anima com movimento, ideias novas e projetos que saem do papel. Sua poção celebra o impulso criativo.',
    ingredients: ['espirais de papel coral', 'confetes de papel', 'uma estrela laranja'],
    ritual: 'Agite os enfeites dentro de um frasco bem fechado e use como peça decorativa para lembrar de começar por uma tarefa pequena.'
  },
  riso: {
    name: 'Poção do Riso', color: '#c36de1', icon: '<path d="M204 143c0-14 12-24 26-24s26 10 26 24-12 25-26 25-26-11-26-25Zm8 12c8 11 28 11 36 0m-34-14h2m28 0h2"/>',
    meaning: 'Você encontra humor nas surpresas e gosta de dividir momentos leves com quem está por perto.',
    ingredients: ['carinhas sorridentes de papel', 'fitilho violeta', 'bolinhas de papel colorido'],
    ritual: 'Encha o frasco com as carinhas e as bolinhas, amarre o fitilho e deixe-o à vista para puxar uma ideia divertida.'
  },
  memoria: {
    name: 'Poção da Memória', color: '#55b9b0', icon: '<path d="M230 131c-7-12-25-8-25 6-13-2-19 13-10 21-8 12 2 26 16 23 5 12 20 12 25 1m-6-51c7-12 25-8 25 6 13-2 19 13 10 21 8 12-2 26-16 23-5 12-20 12-25 1m0-48v48m-20-27h14m26 0h-14m-21 16h15m26 0h-15"/>',
    meaning: 'Você guarda detalhes, histórias e pequenos sinais de que as pessoas importam. A sua magia é recordar com carinho.',
    ingredients: ['um bilhete de papel', 'uma flor prensada decorativa', 'fita azul-petróleo'],
    ritual: 'Escreva uma memória boa no bilhete, coloque-o com a flor no frasco e feche com a fita. Faça disso um pequeno relicário.'
  }
};

const questions = [
  { q: 'A noite de Halloween começa. Qual é o seu primeiro impulso?', a: [['coragem', 'Explorar a casa mal-assombrada'], ['riso', 'Encontrar os amigos e inventar uma brincadeira'], ['memoria', 'Registrar as fantasias e os detalhes'], ['sono', 'Preparar um cantinho aconchegante']] },
  { q: 'Você encontra uma porta rangendo no corredor. O que faz?', a: [['coragem', 'Abro devagar e vejo o que há'], ['medo', 'Espero um susto — e entro mesmo assim'], ['invisibilidade', 'Observo primeiro, sem chamar atenção'], ['sorte', 'Procuro um sinal que indique o caminho']] },
  { q: 'Escolha um ingrediente para o seu frasco misterioso.', a: [['amor', 'Pétalas cor de vinho'], ['energia', 'Faíscas de papel coral'], ['memoria', 'Uma flor prensada'], ['invisibilidade', 'Folhas e névoa desenhada']] },
  { q: 'Qual som combina com sua noite perfeita?', a: [['sono', 'Chuva leve batendo na janela'], ['medo', 'Uma risada ecoando no corredor'], ['riso', 'Gargalhadas em boa companhia'], ['coragem', 'Uma trilha de aventura']] },
  { q: 'O que você guardaria num relicário encantado?', a: [['memoria', 'Uma lembrança de alguém querido'], ['esquecimento', 'Um capítulo que já terminou'], ['amor', 'Uma palavra gentil'], ['sorte', 'Um desejo para o futuro']] },
  { q: 'Uma abóbora iluminada aparece no seu caminho. Você...', a: [['energia', 'Pego a lanterna e sigo em frente'], ['coragem', 'Respiro fundo e dou o próximo passo'], ['riso', 'Faço uma careta para ela'], ['sono', 'Procuro um lugar quentinho para descansar']] },
  { q: 'Qual esconderijo secreto você escolheria?', a: [['invisibilidade', 'Uma biblioteca silenciosa'], ['sorte', 'Um jardim cheio de trevos'], ['sono', 'Uma cabana com cobertores'], ['medo', 'Um sótão cheio de mistérios']] },
  { q: 'Que feitiço seria mais útil numa festa de monstros?', a: [['amor', 'Fazer todo mundo se sentir acolhido'], ['riso', 'Transformar qualquer silêncio em risada'], ['invisibilidade', 'Sumir da pista quando eu quiser'], ['energia', 'Manter a festa animada até o fim']] },
  { q: 'Uma criatura aparece no jardim. Como reage?', a: [['medo', 'Dou um grito — e depois quero conhecê-la'], ['coragem', 'Chego perto com cuidado'], ['memoria', 'Reparo em cada detalhe para contar depois'], ['sorte', 'Deixo que ela escolha o caminho']] },
  { q: 'Quando o relógio bate meia-noite, o que você deseja?', a: [['esquecimento', 'Leveza para começar de novo'], ['sono', 'Uma sensação de calma'], ['energia', 'Vontade de criar algo amanhã'], ['amor', 'A lembrança de quem estava comigo']] }
];

let current = 0;
const chosen = Array(questions.length).fill(null);
const questionTitle = document.getElementById('questionTitle');
const answersEl = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');
const counter = document.getElementById('counter');
const progressBar = document.getElementById('progressBar');
const progress = document.querySelector('.progress-track');
const result = document.getElementById('result');

function renderQuestion() {
  const item = questions[current];
  questionTitle.textContent = item.q;
  counter.innerHTML = `${String(current + 1).padStart(2, '0')} <span>/ ${questions.length}</span>`;
  progressBar.style.width = `${(current / questions.length) * 100}%`;
  progress.setAttribute('aria-valuenow', String(current));
  answersEl.replaceChildren();

  item.a.forEach(([key, label], index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.setAttribute('aria-pressed', String(chosen[current] === key));
    button.innerHTML = `<span class="answer-key">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.lastElementChild.textContent = label;
    button.addEventListener('click', () => {
      chosen[current] = key;
      [...answersEl.children].forEach((answer) => answer.setAttribute('aria-pressed', 'false'));
      button.setAttribute('aria-pressed', 'true');
      nextButton.disabled = false;
    });
    answersEl.append(button);
  });

  nextButton.disabled = !chosen[current];
  nextButton.innerHTML = current === questions.length - 1 ? 'Revelar minha poção <span aria-hidden="true">✦</span>' : 'Próxima pergunta <span aria-hidden="true">→</span>';
  backButton.disabled = current === 0;
  backButton.style.visibility = current === 0 ? 'hidden' : 'visible';
}

function makePotionDrawing(key, potion) {
  const safeKey = key.replace(/[^a-z0-9-]/gi, '');
  const gradientId = `liquid-${safeKey}`;
  const clipId = `bottle-${safeKey}`;
  return `
    <svg class="potion-drawing" viewBox="0 0 460 350" role="img" aria-label="Desenho ilustrado de um frasco brilhante da ${potion.name}">
      <defs>
        <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${potion.color}" stop-opacity=".54"/><stop offset="1" stop-color="${potion.color}" stop-opacity=".95"/></linearGradient>
        <linearGradient id="glass-${safeKey}" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff4d6" stop-opacity=".48"/><stop offset=".34" stop-color="#fff4d6" stop-opacity=".08"/><stop offset="1" stop-color="#b89cdd" stop-opacity=".2"/></linearGradient>
        <radialGradient id="glow-${safeKey}"><stop stop-color="${potion.color}" stop-opacity=".48"/><stop offset="1" stop-color="${potion.color}" stop-opacity="0"/></radialGradient>
        <clipPath id="${clipId}"><path d="M194 72h72v48c0 12 7 19 22 28 27 17 42 38 42 72v70c0 16-12 28-28 28H158c-16 0-28-12-28-28v-70c0-34 15-55 42-72 15-9 22-16 22-28V72Z"/></clipPath>
      </defs>
      <circle class="bottle-glow" cx="230" cy="195" r="165" fill="url(#glow-${safeKey})"/>
      <circle cx="73" cy="66" r="31" fill="#f5dfaa" opacity=".84"/><circle cx="85" cy="55" r="29" fill="#23182a"/>
      <path d="m74 31 3 8 8 1-7 5 3 8-7-5-7 5 3-8-7-5 9-1 2-8Zm298 86 2 6 7 1-5 4 2 6-6-4-5 4 2-6-5-4 6-1 2-6ZM112 167l2 5 5 1-4 3 1 5-4-3-5 3 2-5-4-3 5-1 2-5Z" fill="#f5cf78"/>
      <path d="M339 68c8-12 18-12 26 0l9-7 14 11-14 8-10-5-9 5-15-7 12-4-13-1Zm-285 95c7-10 15-10 22 0l8-6 12 9-12 7-8-4-8 4-13-6 10-4-11-1Z" fill="#17101e" stroke="#a77ec0" stroke-width="2"/>
      <ellipse cx="230" cy="314" rx="111" ry="13" fill="#07050a" opacity=".58"/>
      <g clip-path="url(#${clipId})">
        <path d="M120 213Q160 203 191 213T263 213T336 213V331H120Z" fill="url(#${gradientId})"/>
        <path d="M120 213Q160 203 191 213T263 213T336 213" fill="none" stroke="${potion.color}" stroke-width="4" opacity=".95"/>
        <circle class="bubble" cx="184" cy="264" r="7" fill="none" stroke="#fff1c9" stroke-width="2" opacity=".74"/>
        <circle class="bubble" cx="276" cy="245" r="5" fill="none" stroke="#fff1c9" stroke-width="2" opacity=".7"/>
        <circle class="bubble" cx="215" cy="294" r="4" fill="#fff1c9" opacity=".65"/>
        <circle class="bubble" cx="297" cy="284" r="8" fill="none" stroke="#fff1c9" stroke-width="2" opacity=".56"/>
      </g>
      <path d="M194 72h72v48c0 12 7 19 22 28 27 17 42 38 42 72v70c0 16-12 28-28 28H158c-16 0-28-12-28-28v-70c0-34 15-55 42-72 15-9 22-16 22-28V72Z" fill="url(#glass-${safeKey})" stroke="#e7cc93" stroke-width="5"/>
      <path d="M198 79v41c0 15-10 25-25 35-23 15-37 36-37 67v65c0 15 9 24 24 24" fill="none" stroke="#fff5da" stroke-width="7" stroke-linecap="round" opacity=".5"/>
      <path d="M191 69h78v17h-78z" fill="#4b2a1e" stroke="#e0a84e" stroke-width="4"/><path d="M198 65h64v12h-64z" fill="#704027" stroke="#e8c778" stroke-width="3"/>
      <rect x="167" y="184" width="126" height="74" rx="5" fill="#241629" stroke="#e6bd6d" stroke-width="3"/>
      <path d="M177 194h106v54H177z" fill="none" stroke="#b87d43" stroke-width="1.5"/>
      <g fill="none" stroke="${potion.color}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">${potion.icon}</g>
      <text x="230" y="272" text-anchor="middle" fill="#f1d9a1" font-family="Georgia,serif" font-size="10" letter-spacing="2">ELIXIR DA MEIA-NOITE</text>
      <path d="M161 306h138" stroke="#e9d5aa" stroke-width="2" opacity=".7"/>
    </svg>`;
}

function showResult() {
  const scores = Object.fromEntries(Object.keys(potions).map((key) => [key, 0]));
  chosen.forEach((key) => { scores[key] += 1; });
  const maxScore = Math.max(...Object.values(scores));
  const finalists = Object.keys(scores).filter((key) => scores[key] === maxScore);
  const winner = finalists[Math.floor(Math.random() * finalists.length)];
  const potion = potions[winner];

  result.innerHTML = `
    <div class="result-kicker">✧ O caldeirão revelou ✧</div>
    ${makePotionDrawing(winner, potion)}
    <h3 id="resultTitle">${potion.name}</h3>
    <p class="result-copy">${potion.meaning}</p>
    <div class="recipe">
      <div><h4>Ingredientes de cenário</h4><ul>${potion.ingredients.map((item) => `<li>${item}</li>`).join('')}</ul></div>
      <div><h4>Ritual decorativo</h4><p>${potion.ritual}</p></div>
    </div>
    <p class="result-warning"><strong>☠ Atenção:</strong> isto é uma brincadeira de fantasia. Use somente materiais decorativos. Não ingira nem aplique nada na pele; mantenha os frascos identificados e fora do alcance de crianças e animais.</p>
    <div class="result-actions"><button class="button button-primary" id="restartButton" type="button">Fazer o quiz de novo <span aria-hidden="true">↻</span></button><button class="button button-ghost" id="shareButton" type="button">Compartilhar resultado</button></div>`;

  result.classList.add('visible');
  document.getElementById('quizContent').hidden = true;
  document.querySelector('.privacy-note').hidden = true;
  progressBar.style.width = '100%';
  progress.setAttribute('aria-valuenow', String(questions.length));
  counter.innerHTML = '10 <span>/ 10</span>';
  document.getElementById('restartButton').addEventListener('click', restart);
  document.getElementById('shareButton').addEventListener('click', async (event) => {
    const shareText = `Meu resultado no Caldeirão da Meia-Noite: ${potion.name}!`;
    try {
      if (navigator.share) await navigator.share({ title: 'O Caldeirão da Meia-Noite', text: shareText, url: location.href });
      else if (navigator.clipboard) { await navigator.clipboard.writeText(`${shareText} ${location.href}`); event.currentTarget.textContent = 'Copiado ✦'; }
      else event.currentTarget.textContent = shareText;
    } catch (_) { /* A janela de compartilhamento pode ser fechada sem enviar. */ }
  });
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function restart() {
  current = 0;
  chosen.fill(null);
  result.classList.remove('visible');
  result.replaceChildren();
  document.getElementById('quizContent').hidden = false;
  document.querySelector('.privacy-note').hidden = false;
  renderQuestion();
  document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

nextButton.addEventListener('click', () => {
  if (!chosen[current]) return;
  if (current < questions.length - 1) { current += 1; renderQuestion(); }
  else showResult();
});
backButton.addEventListener('click', () => {
  if (current > 0) { current -= 1; renderQuestion(); }
});

renderQuestion();
