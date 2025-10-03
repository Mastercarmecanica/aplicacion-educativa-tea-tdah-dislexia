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
    for (let i = 1; i <= 5; i++) { // Aumentado a 5 para el nuevo juego
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
    // ... (código existente sin cambios)
  },

  generateOptions(correct) {
    // ... (código existente sin cambios)
  },

  checkAnswer(selectedNumber) {
    // ... (código existente sin cambios)
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
    // ... (código existente sin cambios)
  },

  generateOptions(correctVocal) {
    // ... (código existente sin cambios)
  },

  checkAnswer(selectedVocal) {
    // ... (código existente sin cambios)
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
      button.className = 'btn btn--secondary vocal-choice-btn'; // Reutilizando estilos
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
  // ... (código existente sin cambios)
};

const MemoryActivity = {
  // ... (código existente con dificultad progresiva)
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  // ... (controles de accesibilidad existentes)
  
  // Botón de inicio
  document.getElementById('start-btn').addEventListener('click', function() {
    ScreenManager.showScreen('main-menu');
    ScreenManager.updateStars();
    AudioUtils.speak('¡Bienvenido! Elige una actividad');
    AudioUtils.playSound(440, 200);
  });
  
  // Botones de actividades
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
        case 'consonantes': // Nuevo caso
          ConsonantsActivity.init();
          AudioUtils.speak('Vamos a jugar con las consonantes');
          break;
        case 'cuentos':
          StoriesActivity.init();
          AudioUtils.speak('Vamos a leer cuentos');
          break;
        case 'memoria':
          MemoryActivity.init();
          // El audio se maneja dentro de setupGame
          break;
      }
    });
  });
  
  // ... (resto del código existente)
});
