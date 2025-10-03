// Datos de la aplicación
const appData = {
  numeros: [
    {
      numero: 1,
      palabra: "uno",
      objetos: ["🍎"],
      color: "#E8F5E8"
    },
    {
      numero: 2,
      palabra: "dos",
      objetos: ["🐱", "🐱"],
      color: "#E1F5FE"
    },
    {
      numero: 3,
      palabra: "tres",
      objetos: ["⭐", "⭐", "⭐"],
      color: "#F1F8E9"
    },
    {
      numero: 4,
      palabra: "cuatro",
      objetos: ["🌸", "🌸", "🌸", "🌸"],
      color: "#FFF8E1"
    },
    {
      numero: 5,
      palabra: "cinco",
      objetos: ["🦋", "🦋", "🦋", "🦋", "🦋"],
      color: "#F3E5F5"
    },
    {
      numero: 6,
      palabra: "seis",
      objetos: ["🚗", "🚗", "🚗", "🚗", "🚗", "🚗"],
      color: "#E8F5E8"
    },
    {
      numero: 7,
      palabra: "siete",
      objetos: ["⚽", "⚽", "⚽", "⚽", "⚽", "⚽", "⚽"],
      color: "#E1F5FE"
    },
    {
      numero: 8,
      palabra: "ocho",
      objetos: ["🌳", "🌳", "🌳", "🌳", "🌳", "🌳", "🌳", "🌳"],
      color: "#F1F8E9"
    },
    {
      numero: 9,
      palabra: "nueve",
      objetos: ["🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈", "🎈"],
      color: "#FFF8E1"
    },
    {
      numero: 10,
      palabra: "diez",
      objetos: ["⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"],
      color: "#F3E5F5"
    }
  ],
  vocales: [
    {
      vocal: "A",
      palabra: "abeja",
      imagen: "🐝",
      ejemplos: ["árbol", "agua", "avión"],
      color: "#FFE4E1"
    },
    {
      vocal: "E",
      palabra: "estrella",
      imagen: "⭐",
      ejemplos: ["elefante", "escuela", "espejo"],
      color: "#E1F5FE"
    },
    {
      vocal: "I",
      palabra: "iguana",
      imagen: "🦎",
      ejemplos: ["iglesia", "imán", "isla"],
      color: "#F1F8E9"
    },
    {
      vocal: "O",
      palabra: "oso",
      imagen: "🐻",
      ejemplos: ["ojo", "oveja", "oro"],
      color: "#FFF8E1"
    },
    {
      vocal: "U",
      palabra: "uva",
      imagen: "🍇",
      ejemplos: ["unicornio", "uno", "universo"],
      color: "#F3E5F5"
    }
  ],
  cuentos: [
    {
      id: 1,
      titulo: "La Mariposa Luna",
      texto: "Luna es una mariposa pequeña y curiosa. Un día ve una flor azul muy bonita. Se acerca con cuidado y huele la flor. ¡Qué rico! Luna está muy contenta.",
      imagen: "🦋",
      preguntas: [
        {
          pregunta: "¿Cómo se llama la mariposa?",
          opciones: ["Luna", "Sol", "Estrella"],
          respuesta: 0
        }
      ]
    },
    {
      id: 2,
      titulo: "El Gato Coco",
      texto: "Coco es un gato muy juguetón. Le gusta correr y saltar. Su juguete favorito es una pelota roja. Cuando juega, está muy feliz y ronronea suave.",
      imagen: "🐱",
      preguntas: [
        {
          pregunta: "¿Qué le gusta hacer a Coco?",
          opciones: ["Dormir", "Correr y saltar", "Comer"],
          respuesta: 1
        }
      ]
    },
    {
      id: 3,
      titulo: "La Estrella Brillante",
      texto: "En el cielo vive una estrella que brilla mucho. Todas las noches sale a saludar a los niños. La estrella se llama Luz y es muy amigable.",
      imagen: "⭐",
      preguntas: [
        {
          pregunta: "¿Cómo se llama la estrella?",
          opciones: ["Brillo", "Luz", "Cielo"],
          respuesta: 1
        }
      ]
    },
    {
      id: 4,
      titulo: "El Perro Fiel",
      texto: "Toby es un perro grande y marrón. Le encanta jugar a la pelota en el parque. Toby siempre cuida a su familia. Es un perro muy bueno y leal.",
      imagen: "🐶",
      preguntas: [
        {
          pregunta: "¿De qué color es Toby?",
          opciones: ["Negro", "Marrón", "Blanco"],
          respuesta: 1
        }
      ]
    },
    {
      id: 5,
      titulo: "El Pez Veloz",
      texto: "Nemo es un pez muy rápido. Vive en el gran océano azul. Le gusta nadar entre las algas y jugar con las burbujas. Nemo es el pez más veloz de todos.",
      imagen: "🐠",
      preguntas: [
        {
          pregunta: "¿Dónde vive Nemo?",
          opciones: ["En un río", "En el océano", "En un lago"],
          respuesta: 1
        }
      ]
    }
  ],
  memoria: {
    nivel_basico: ["🍎", "🐱", "⭐", "🌸", "🦋", "🐝"],
    niveles: [
      { pares: 3, emojis: ["🍎", "🐱", "⭐"] },
      { pares: 4, emojis: ["🌸", "🦋", "🐝", "🐶"] },
      { pares: 6, emojis: ["🐠", "🎈", "🌳", "🚗", "⚽", "M"] }
    ]
  },
  consonantes: [
    { letra: "M", imagen: "🐵", palabra: "mono" },
    { letra: "P", imagen: "🐧", palabra: "pingüino" },
    { letra: "S", imagen: "🐍", palabra: "serpiente" },
    { letra: "L", imagen: "🦁", palabra: "león" },
    { letra: "T", imagen: "🐢", palabra: "tortuga" }
  ]
};

// Estado de la aplicación
let currentState = {
  audioEnabled: true,
  easyReading: false,
  currentNumber: 0,
  currentVocal: 0,
  currentStory: 0,
  starsEarned: parseInt(localStorage.getItem('starsEarned') || '0'),
  memoryCards: [],
  flippedCards: [],
  matchedPairs: 0,
  memoryLevel: 0
};

// Utilidades de audio
let currentUtterance = null;
const AudioUtils = {
  speak(text, rate = 1.0, callback = null) {
    if (!currentState.audioEnabled || !('speechSynthesis' in window)) {
      if (callback) callback();
      return;
    }
    
    speechSynthesis.cancel();
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'es-ES';
    currentUtterance.rate = rate;
    currentUtterance.volume = 0.8;
    
    currentUtterance.onend = () => {
      currentUtterance = null;
      if (callback) {
        callback();
      }
    };
    
    speechSynthesis.speak(currentUtterance);
  },
  
  playSound(frequency = 440, duration = 200) {
    if (!currentState.audioEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (e) {
      console.log('Audio no disponible');
    }
  }
};

// Gestión de pantallas
const ScreenManager = {
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  },
  
  updateStars() {
    for (let i = 1; i <= 5; i++) {
      const star = document.getElementById(`star-${i}`);
      if (star) {
        if (i <= currentState.starsEarned) {
          star.classList.add('earned');
        } else {
          star.classList.remove('earned');
        }
      }
    }
  }
};

// Actividades
const NumbersActivity = {
  correctAnswer: 0,

  init() {
    this.generateRound();
    this.bindEvents();
  },

  generateRound() {
    const randomIndex = Math.floor(Math.random() * appData.numeros.length);
    const currentNumberData = appData.numeros[randomIndex];
    this.correctAnswer = currentNumberData.numero;

    const objectsContainer = document.getElementById('number-objects-display');
    objectsContainer.innerHTML = '';
    currentNumberData.objetos.forEach(objeto => {
      const span = document.createElement('span');
      span.className = 'object';
      span.textContent = objeto;
      objectsContainer.appendChild(span);
    });

    const choicesContainer = document.getElementById('number-choices');
    choicesContainer.innerHTML = '';
    const feedback = document.getElementById('number-feedback');
    feedback.innerHTML = '';

    const options = this.generateOptions(this.correctAnswer);

    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'btn btn--secondary choice-btn';
      button.textContent = option;
      button.setAttribute('data-number', option);
      button.addEventListener('click', () => this.checkAnswer(option));
      choicesContainer.appendChild(button);
    });

    AudioUtils.speak('¿Cuántos objetos ves?');
  },

  generateOptions(correct) {
    let options = [correct];
    const allNumbers = appData.numeros.map(n => n.numero);
    
    while (options.length < 3) {
      const randomNumber = allNumbers[Math.floor(Math.random() * allNumbers.length)];
      if (!options.includes(randomNumber)) {
        options.push(randomNumber);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  },

  checkAnswer(selectedNumber) {
    const feedback = document.getElementById('number-feedback');
    const buttons = document.querySelectorAll('#number-choices .btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedNumber === this.correctAnswer) {
      feedback.textContent = '¡Muy bien! ¡Correcto! 🎉';
      feedback.style.color = '#27ae60';
      AudioUtils.speak('¡Correcto!');
      AudioUtils.playSound(523, 300);

      document.querySelector(`#number-choices .btn[data-number="${selectedNumber}"]`).classList.add('correct');

      setTimeout(() => {
        this.generateRound();
      }, 2000);

    } else {
      feedback.textContent = 'Ese no es. ¡Inténtalo de nuevo!';
      feedback.style.color = '#e74c3c';
      AudioUtils.speak('Inténtalo de nuevo');
      AudioUtils.playSound(200, 200);

      document.querySelector(`#number-choices .btn[data-number="${selectedNumber}"]`).classList.add('incorrect');
      document.querySelector(`#number-choices .btn[data-number="${this.correctAnswer}"]`).classList.add('correct');

      setTimeout(() => {
        this.generateRound();
      }, 2500);
    }
  },

  bindEvents() {
    document.getElementById('back-from-numeros').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

const VocalesActivity = {
  correctVocal: '',

  init() {
    this.generateRound();
    this.bindEvents();
  },

  generateRound() {
    const randomIndex = Math.floor(Math.random() * appData.vocales.length);
    const currentVocalData = appData.vocales[randomIndex];
    this.correctVocal = currentVocalData.vocal;

    const vocalQuestion = document.getElementById('vocal-question');
    vocalQuestion.textContent = this.correctVocal;

    const choicesContainer = document.getElementById('vocal-choices');
    choicesContainer.innerHTML = '';
    const feedback = document.getElementById('vocal-feedback');
    feedback.innerHTML = '';

    const options = this.generateOptions(this.correctVocal);

    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'btn btn--secondary vocal-choice-btn';
      button.innerHTML = `<span class="vocal-choice-img">${option.imagen}</span>`;
      button.setAttribute('data-vocal', option.vocal);
      button.addEventListener('click', () => this.checkAnswer(option.vocal));
      choicesContainer.appendChild(button);
    });

    AudioUtils.speak(`Busca la imagen que empieza con la vocal ${this.correctVocal}`);
  },

  generateOptions(correctVocal) {
    const correctOption = appData.vocales.find(v => v.vocal === correctVocal);
    let options = [correctOption];
    
    while (options.length < 3) {
      const randomVocal = appData.vocales[Math.floor(Math.random() * appData.vocales.length)];
      if (!options.some(opt => opt.vocal === randomVocal.vocal)) {
        options.push(randomVocal);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  },

  checkAnswer(selectedVocal) {
    const feedback = document.getElementById('vocal-feedback');
    const buttons = document.querySelectorAll('#vocal-choices .btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedVocal === this.correctVocal) {
      feedback.textContent = '¡Excelente! ¡Respuesta correcta! ✅';
      feedback.style.color = '#27ae60';
      AudioUtils.speak('¡Correcto!');
      AudioUtils.playSound(523, 300);
      document.querySelector(`#vocal-choices .btn[data-vocal="${selectedVocal}"]`).classList.add('correct');

      setTimeout(() => this.generateRound(), 2000);
    } else {
      feedback.textContent = '¡Ups! Esa no es. Intenta de nuevo.';
      feedback.style.color = '#e74c3c';
      AudioUtils.speak('Inténtalo de nuevo');
      AudioUtils.playSound(200, 200);
      document.querySelector(`#vocal-choices .btn[data-vocal="${selectedVocal}"]`).classList.add('incorrect');
      document.querySelector(`#vocal-choices .btn[data-vocal="${this.correctVocal}"]`).classList.add('correct');

      setTimeout(() => this.generateRound(), 2500);
    }
  },

  bindEvents() {
    document.getElementById('back-from-vocales').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

const ConsonantsActivity = {
  correctConsonant: '',

  init() {
    this.generateRound();
    this.bindEvents();
  },

  generateRound() {
    const randomIndex = Math.floor(Math.random() * appData.consonantes.length);
    const currentConsonantData = appData.consonantes[randomIndex];
    this.correctConsonant = currentConsonantData.letra;

    document.getElementById('consonant-question').textContent = this.correctConsonant;

    const choicesContainer = document.getElementById('consonant-choices');
    choicesContainer.innerHTML = '';
    document.getElementById('consonant-feedback').innerHTML = '';

    const options = this.generateOptions(this.correctConsonant);

    options.forEach(option => {
      const button = document.createElement('button');
      button.className = 'btn btn--secondary vocal-choice-btn';
      button.innerHTML = `<span class="vocal-choice-img">${option.imagen}</span>`;
      button.setAttribute('data-letra', option.letra);
      button.addEventListener('click', () => this.checkAnswer(option.letra));
      choicesContainer.appendChild(button);
    });

    AudioUtils.speak(`Busca la imagen que empieza con la letra ${this.correctConsonant}`);
  },

  generateOptions(correctLetter) {
    const correctOption = appData.consonantes.find(c => c.letra === correctLetter);
    let options = [correctOption];
    
    while (options.length < 3) {
      const randomConsonant = appData.consonantes[Math.floor(Math.random() * appData.consonantes.length)];
      if (!options.some(opt => opt.letra === randomConsonant.letra)) {
        options.push(randomConsonant);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  },

  checkAnswer(selectedLetter) {
    const feedback = document.getElementById('consonant-feedback');
    const buttons = document.querySelectorAll('#consonant-choices .btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedLetter === this.correctConsonant) {
      feedback.textContent = '¡Genial! ¡Correcto! 👍';
      feedback.style.color = '#27ae60';
      AudioUtils.speak('¡Correcto!');
      AudioUtils.playSound(523, 300);
      document.querySelector(`#consonant-choices .btn[data-letra="${selectedLetter}"]`).classList.add('correct');
      setTimeout(() => this.generateRound(), 2000);
    } else {
      feedback.textContent = 'Esa no es. ¡Sigue intentando!';
      feedback.style.color = '#e74c3c';
      AudioUtils.speak('Inténtalo de nuevo');
      AudioUtils.playSound(200, 200);
      document.querySelector(`#consonant-choices .btn[data-letra="${selectedLetter}"]`).classList.add('incorrect');
      document.querySelector(`#consonant-choices .btn[data-letra="${this.correctConsonant}"]`).classList.add('correct');
      setTimeout(() => this.generateRound(), 2500);
    }
  },

  bindEvents() {
    document.getElementById('back-from-consonantes').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

const StoriesActivity = {
  init() {
    this.updateDisplay();
    this.bindEvents();
  },
  
  updateDisplay() {
    const cuento = appData.cuentos[currentState.currentStory];
    document.getElementById('story-icon').textContent = cuento.imagen;
    document.getElementById('story-title').textContent = cuento.titulo;
    document.getElementById('story-text').textContent = cuento.texto;
    
    document.getElementById('story-question').style.display = 'none';
    
    document.getElementById('prev-story').disabled = currentState.currentStory === 0;
    document.getElementById('next-story').disabled = currentState.currentStory === appData.cuentos.length - 1;
  },
  
  showQuestion() {
    const cuento = appData.cuentos[currentState.currentStory];
    const pregunta = cuento.preguntas[0];
    
    document.getElementById('question-text').textContent = pregunta.pregunta;
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    pregunta.opciones.forEach((opcion, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = opcion;
      button.setAttribute('data-option', index);
      button.addEventListener('click', () => this.checkAnswer(index, pregunta.respuesta));
      optionsContainer.appendChild(button);
    });
    
    document.getElementById('story-question').style.display = 'block';
    AudioUtils.speak(pregunta.pregunta);
  },
  
  checkAnswer(selected, correct) {
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
      if (index === correct) {
        btn.classList.add('correct');
      } else if (index === selected && index !== correct) {
        btn.classList.add('incorrect');
      }
      btn.disabled = true;
    });
    
    const feedback = document.getElementById('question-feedback');
    if (selected === correct) {
      feedback.textContent = '¡Muy bien! 🎉';
      feedback.style.color = '#27ae60';
      AudioUtils.speak('¡Muy bien!');
      AudioUtils.playSound(523, 300);
      
      setTimeout(() => {
        this.earnStar();
      }, 1500);
    } else {
      feedback.textContent = '¡Inténtalo de nuevo! 😊';
      feedback.style.color = '#e74c3c';
      AudioUtils.speak('¡Inténtalo de nuevo!');
    }
  },
  
  earnStar() {
    if (currentState.starsEarned < 5) {
      currentState.starsEarned++;
      localStorage.setItem('starsEarned', currentState.starsEarned.toString());
      ScreenManager.showScreen('congratulations-screen');
      AudioUtils.speak('¡Has ganado una estrella!');
    }
  },
  
  bindEvents() {
    document.getElementById('prev-story').addEventListener('click', () => {
      if (currentState.currentStory > 0) {
        currentState.currentStory--;
        this.updateDisplay();
        AudioUtils.playSound(300, 100);
      }
    });
    
    document.getElementById('next-story').addEventListener('click', () => {
      if (currentState.currentStory < appData.cuentos.length - 1) {
        currentState.currentStory++;
        this.updateDisplay();
        AudioUtils.playSound(400, 100);
      }
    });
    
    document.getElementById('play-story-audio').addEventListener('click', () => {
      const cuento = appData.cuentos[currentState.currentStory];
      AudioUtils.speak(cuento.texto, 0.9, () => this.showQuestion());
    });
    
    document.getElementById('back-from-cuentos').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

const MemoryActivity = {
  init() {
    currentState.memoryLevel = 0;
    this.setupGame();
    this.bindEvents();
  },
  
  setupGame() {
    currentState.flippedCards = [];
    currentState.matchedPairs = 0;

    const nivel = appData.memoria.niveles[currentState.memoryLevel];
    if (!nivel) {
      console.log("Todos los niveles completados.");
      this.earnStar();
      return;
    }

    let emojisParaNivel = nivel.emojis.slice(0, nivel.pares);
    currentState.memoryCards = [...emojisParaNivel, ...emojisParaNivel];
    this.shuffleArray(currentState.memoryCards);
    
    this.updateDisplay();
    this.updateStats();
    AudioUtils.speak(`Nivel ${currentState.memoryLevel + 1}. Encuentra ${nivel.pares} pares.`);
  },
  
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  
  updateDisplay() {
    const grid = document.getElementById('memory-grid');
    grid.innerHTML = '';

    const numCards = currentState.memoryCards.length;
    if (numCards <= 6) {
      grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
      grid.style.maxWidth = '400px';
    } else if (numCards <= 8) {
      grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
      grid.style.maxWidth = '500px';
    } else {
      grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
      grid.style.maxWidth = '500px';
    }
    
    currentState.memoryCards.forEach((emoji, index) => {
      const card = document.createElement('button');
      card.className = 'memory-card hidden';
      card.setAttribute('data-index', index);
      card.setAttribute('data-emoji', emoji);
      card.textContent = emoji;
      card.addEventListener('click', () => this.flipCard(index));
      grid.appendChild(card);
    });
  },
  
  flipCard(index) {
    const card = document.querySelector(`[data-index="${index}"]`);
    
    if (card.classList.contains('flipped') || 
        card.classList.contains('matched') || 
        currentState.flippedCards.length >= 2) {
      return;
    }
    
    card.classList.remove('hidden');
    card.classList.add('flipped');
    currentState.flippedCards.push(index);
    AudioUtils.playSound(440, 100);
    
    if (currentState.flippedCards.length === 2) {
      setTimeout(() => this.checkMatch(), 1000);
    }
  },
  
  checkMatch() {
    const [first, second] = currentState.flippedCards;
    const firstCard = document.querySelector(`[data-index="${first}"]`);
    const secondCard = document.querySelector(`[data-index="${second}"]`);
    const nivel = appData.memoria.niveles[currentState.memoryLevel];
    
    if (currentState.memoryCards[first] === currentState.memoryCards[second]) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      currentState.matchedPairs++;
      AudioUtils.playSound(523, 300);
      AudioUtils.speak('¡Bien!');
      
      if (currentState.matchedPairs === nivel.pares) {
        currentState.memoryLevel++;
        if (currentState.memoryLevel < appData.memoria.niveles.length) {
          AudioUtils.speak('¡Nivel completado! Pasando al siguiente.');
          setTimeout(() => this.setupGame(), 2000);
        } else {
          AudioUtils.speak('¡Has completado todos los niveles!');
          setTimeout(() => this.earnStar(), 1000);
        }
      }
    } else {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.classList.add('hidden');
      secondCard.classList.add('hidden');
      AudioUtils.playSound(200, 200);
    }
    
    currentState.flippedCards = [];
    this.updateStats();
  },
  
  updateStats() {
    const nivel = appData.memoria.niveles[currentState.memoryLevel];
    if(nivel) {
        document.getElementById('pairs-found').textContent = `${currentState.matchedPairs} / ${nivel.pares}`;
    }
  },
  
  earnStar() {
    if (currentState.starsEarned < 5) {
      currentState.starsEarned++;
      localStorage.setItem('starsEarned', currentState.starsEarned.toString());
      ScreenManager.showScreen('congratulations-screen');
      AudioUtils.speak('¡Has ganado una estrella!');
    }
  },
  
  bindEvents() {
    document.getElementById('reset-memory').addEventListener('click', () => {
      currentState.memoryLevel = 0;
      this.setupGame();
      AudioUtils.playSound(350, 150);
    });
    
    document.getElementById('memory-hint').addEventListener('click', () => {
      document.querySelectorAll('.memory-card').forEach(card => {
        if (!card.classList.contains('matched')) {
          card.classList.remove('hidden');
        }
      });
      
      setTimeout(() => {
        document.querySelectorAll('.memory-card').forEach(card => {
          if (!card.classList.contains('matched') && !card.classList.contains('flipped')) {
            card.classList.add('hidden');
          }
        });
      }, 2000);
      
      AudioUtils.speak('Mira y recuerda');
    });
    
    document.getElementById('back-from-memoria').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('toggle-audio').addEventListener('click', function() {
    currentState.audioEnabled = !currentState.audioEnabled;
    this.setAttribute('aria-pressed', currentState.audioEnabled);
    this.innerHTML = `
      <span class="control-icon">${currentState.audioEnabled ? '🔊' : '🔇'}</span>
      <span>Audio ${currentState.audioEnabled ? 'Activado' : 'Desactivado'}</span>
    `;
    AudioUtils.speak(currentState.audioEnabled ? 'Audio activado' : 'Audio desactivado');
  });
  
  document.getElementById('toggle-easy-reading').addEventListener('click', function() {
    currentState.easyReading = !currentState.easyReading;
    this.setAttribute('aria-pressed', currentState.easyReading);
    this.innerHTML = `
      <span class="control-icon">📖</span>
      <span>Lectura ${currentState.easyReading ? 'Fácil' : 'Normal'}</span>
    `;
    
    if (currentState.easyReading) {
      document.body.classList.add('easy-reading');
    } else {
      document.body.classList.remove('easy-reading');
    }
    
    AudioUtils.speak(currentState.easyReading ? 'Modo lectura fácil activado' : 'Modo lectura normal');
  });
  
  document.getElementById('start-btn').addEventListener('click', function() {
    ScreenManager.showScreen('main-menu');
    ScreenManager.updateStars();
    AudioUtils.speak('¡Bienvenido! Elige una actividad');
    AudioUtils.playSound(440, 200);
  });
  
  document.querySelectorAll('.activity-card').forEach(card => {
    card.addEventListener('click', function() {
      const activity = this.getAttribute('data-activity');
      ScreenManager.showScreen(`${activity}-screen`);
      AudioUtils.playSound(500, 150);
      
      switch(activity) {
        case 'numeros':
          NumbersActivity.init();
          AudioUtils.speak('Vamos a aprender números');
          break;
        case 'vocales':
          VocalesActivity.init();
          AudioUtils.speak('Vamos a aprender vocales');
          break;
        case 'consonantes':
          ConsonantsActivity.init();
          AudioUtils.speak('Vamos a jugar con las consonantes');
          break;
        case 'cuentos':
          StoriesActivity.init();
          AudioUtils.speak('Vamos a leer cuentos');
          break;
        case 'memoria':
          MemoryActivity.init();
          break;
      }
    });
  });
  
  document.getElementById('continue-btn').addEventListener('click', function() {
    ScreenManager.showScreen('main-menu');
    ScreenManager.updateStars();
    AudioUtils.playSound(440, 200);
  });
  
  document.addEventListener('keydown', function(e) {
    switch(e.key) {
      case 'Escape':
        ScreenManager.showScreen('main-menu');
        break;
      case ' ':
      case 'Enter':
        if (e.target.classList.contains('btn') || e.target.classList.contains('activity-card')) {
          e.preventDefault();
          e.target.click();
        }
        break;
      case 'ArrowLeft':
        if (document.getElementById('cuentos-screen').classList.contains('active')) {
          document.getElementById('prev-story').click();
        }
        break;
      case 'ArrowRight':
        if (document.getElementById('cuentos-screen').classList.contains('active')) {
          document.getElementById('next-story').click();
        }
        break;
    }
  });
  
  if (currentState.audioEnabled) {
    setTimeout(() => {
      AudioUtils.speak('¡Hola! Bienvenido a tu aplicación de aprendizaje. Presiona el botón para empezar.');
    }, 1000);
  }
});
