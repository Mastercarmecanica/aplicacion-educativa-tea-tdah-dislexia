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
    parejas: [
      ["🍎", "🍎"],
      ["🐱", "🐱"],
      ["⭐", "⭐"]
    ]
  }
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
  matchedPairs: 0
};

// Utilidades de audio
const AudioUtils = {
  speak(text, rate = 1.0) {
    if (!currentState.audioEnabled || !('speechSynthesis' in window)) return;
    
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = rate;
    utterance.volume = 0.8;
    speechSynthesis.speak(utterance);
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
    for (let i = 1; i <= 4; i++) {
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
    // 1. Elegir un número aleatorio
    const randomIndex = Math.floor(Math.random() * appData.numeros.length);
    const currentNumberData = appData.numeros[randomIndex];
    this.correctAnswer = currentNumberData.numero;

    // 2. Mostrar los objetos en pantalla
    const objectsContainer = document.getElementById('number-objects-display');
    objectsContainer.innerHTML = '';
    currentNumberData.objetos.forEach(objeto => {
      const span = document.createElement('span');
      span.className = 'object';
      span.textContent = objeto;
      objectsContainer.appendChild(span);
    });

    // 3. Generar opciones de respuesta
    const choicesContainer = document.getElementById('number-choices');
    choicesContainer.innerHTML = '';
    const feedback = document.getElementById('number-feedback');
    feedback.innerHTML = '';

    const options = this.generateOptions(this.correctAnswer);

    // 4. Crear y mostrar los botones de opción
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
    
    // Mezclar las opciones
    return options.sort(() => Math.random() - 0.5);
  },

  checkAnswer(selectedNumber) {
    const feedback = document.getElementById('number-feedback');
    const buttons = document.querySelectorAll('#number-choices .btn');
    buttons.forEach(btn => btn.disabled = true); // Deshabilitar botones

    if (selectedNumber === this.correctAnswer) {
      feedback.textContent = '¡Muy bien! ¡Correcto! 🎉';
      feedback.style.color = '#27ae60';
      AudioUtils.speak('¡Correcto!');
      AudioUtils.playSound(523, 300);

      // Marcar el botón correcto
      document.querySelector(`#number-choices .btn[data-number="${selectedNumber}"]`).classList.add('correct');

      // Iniciar nueva ronda después de un momento
      setTimeout(() => {
        this.generateRound();
      }, 2000);

    } else {
      feedback.textContent = 'Ese no es. ¡Inténtalo de nuevo!';
      feedback.style.color = '#e74c3c';
      AudioUtils.speak('Inténtalo de nuevo');
      AudioUtils.playSound(200, 200);

      // Marcar el botón incorrecto y el correcto
      document.querySelector(`#number-choices .btn[data-number="${selectedNumber}"]`).classList.add('incorrect');
      document.querySelector(`#number-choices .btn[data-number="${this.correctAnswer}"]`).classList.add('correct');

      // Permitir un nuevo intento después de un momento
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
    // 1. Elegir una vocal aleatoria
    const randomIndex = Math.floor(Math.random() * appData.vocales.length);
    const currentVocalData = appData.vocales[randomIndex];
    this.correctVocal = currentVocalData.vocal;

    // 2. Mostrar la vocal de la pregunta
    const vocalQuestion = document.getElementById('vocal-question');
    vocalQuestion.textContent = this.correctVocal;

    // 3. Limpiar opciones y feedback anteriores
    const choicesContainer = document.getElementById('vocal-choices');
    choicesContainer.innerHTML = '';
    const feedback = document.getElementById('vocal-feedback');
    feedback.innerHTML = '';

    // 4. Generar opciones de imágenes
    const options = this.generateOptions(this.correctVocal);

    // 5. Crear y mostrar los botones de opción
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
    
    return options.sort(() => Math.random() - 0.5); // Mezclar
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
    
    // Ocultar pregunta inicialmente
    document.getElementById('story-question').style.display = 'none';
    
    // Actualizar navegación
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
      AudioUtils.playSound(523, 300); // Do mayor
      
      // Ganar estrella
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
    if (currentState.starsEarned < 4) {
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
      AudioUtils.speak(cuento.texto, 0.9);
      
      // Mostrar pregunta después de leer
      setTimeout(() => {
        this.showQuestion();
      }, cuento.texto.length * 50); // Estimación del tiempo de lectura
    });
    
    document.getElementById('back-from-cuentos').addEventListener('click', () => {
      ScreenManager.showScreen('main-menu');
      AudioUtils.playSound(350, 150);
    });
  }
};

const MemoryActivity = {
  init() {
    this.setupGame();
    this.bindEvents();
  },
  
  setupGame() {
    currentState.flippedCards = [];
    currentState.matchedPairs = 0;
    
    // Crear cartas (3 parejas)
    currentState.memoryCards = [...appData.memoria.parejas].flat();
    this.shuffleArray(currentState.memoryCards);
    
    this.updateDisplay();
    this.updateStats();
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
    
    if (currentState.memoryCards[first] === currentState.memoryCards[second]) {
      // Match encontrado
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      currentState.matchedPairs++;
      AudioUtils.playSound(523, 300); // Do mayor
      AudioUtils.speak('¡Muy bien!');
      
      if (currentState.matchedPairs === 3) {
        setTimeout(() => {
          AudioUtils.speak('¡Has completado el juego!');
          this.earnStar();
        }, 1000);
      }
    } else {
      // No match
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
    document.getElementById('pairs-found').textContent = currentState.matchedPairs;
  },
  
  earnStar() {
    if (currentState.starsEarned < 4) {
      currentState.starsEarned++;
      localStorage.setItem('starsEarned', currentState.starsEarned.toString());
      ScreenManager.showScreen('congratulations-screen');
      AudioUtils.speak('¡Has ganado una estrella!');
    }
  },
  
  bindEvents() {
    document.getElementById('reset-memory').addEventListener('click', () => {
      this.setupGame();
      AudioUtils.playSound(350, 150);
    });
    
    document.getElementById('memory-hint').addEventListener('click', () => {
      // Mostrar todas las cartas brevemente
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
  // Controles de accesibilidad
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
      
      // Inicializar actividad específica
      switch(activity) {
        case 'numeros':
          NumbersActivity.init();
          AudioUtils.speak('Vamos a aprender números');
          break;
        case 'vocales':
          VocalesActivity.init();
          AudioUtils.speak('Vamos a aprender vocales');
          break;
        case 'cuentos':
          StoriesActivity.init();
          AudioUtils.speak('Vamos a leer cuentos');
          break;
        case 'memoria':
          MemoryActivity.init();
          AudioUtils.speak('Vamos a jugar memoria');
          break;
      }
    });
  });
  
  // Botón de continuar en pantalla de felicitaciones
  document.getElementById('continue-btn').addEventListener('click', function() {
    ScreenManager.showScreen('main-menu');
    ScreenManager.updateStars();
    AudioUtils.playSound(440, 200);
  });
  
  // Navegación por teclado
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
        // Navegación izquierda en actividades
        if (document.getElementById('numeros-screen').classList.contains('active')) {
          document.getElementById('prev-number').click();
        } else if (document.getElementById('vocales-screen').classList.contains('active')) {
          document.getElementById('prev-vocal').click();
        } else if (document.getElementById('cuentos-screen').classList.contains('active')) {
          document.getElementById('prev-story').click();
        }
        break;
      case 'ArrowRight':
        // Navegación derecha en actividades
        if (document.getElementById('numeros-screen').classList.contains('active')) {
          document.getElementById('next-number').click();
        } else if (document.getElementById('vocales-screen').classList.contains('active')) {
          document.getElementById('next-vocal').click();
        } else if (document.getElementById('cuentos-screen').classList.contains('active')) {
          document.getElementById('next-story').click();
        }
        break;
    }
  });
  
  // Mensaje de bienvenida inicial
  if (currentState.audioEnabled) {
    setTimeout(() => {
      AudioUtils.speak('¡Hola! Bienvenido a tu aplicación de aprendizaje. Presiona el botón para empezar.');
    }, 1000);
  }
});