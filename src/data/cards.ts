export interface Card {
  id: string
  dutch: string
  english: string
  portuguese: string
  french: string
  spanish: string
}

export interface Theme {
  id: string
  name: string
  emoji: string
  color: string
  gradient: string
  cards: Card[]
}

export const themes: Theme[] = [
  {
    id: 'luchtig',
    name: 'Luchtig',
    emoji: '☀️',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 50%, #fbbf24 100%)',
    cards: [
      {
        id: 'l1',
        dutch: 'Wat is het grappigste dat je ooit is overkomen?',
        english: 'What is the funniest thing that ever happened to you?',
        portuguese: 'Qual é a coisa mais engraçada que já aconteceu com você?',
        french: 'Quelle est la chose la plus drôle qui vous soit jamais arrivée ?',
        spanish: '¿Cuál es la cosa más divertida que te ha pasado?',
      },
      {
        id: 'l2',
        dutch: 'Welk eten zou je elke dag kunnen eten?',
        english: 'What food could you eat every day?',
        portuguese: 'Que comida você conseguiria comer todos os dias?',
        french: 'Quel aliment pourriez-vous manger tous les jours ?',
        spanish: '¿Qué comida podrías comer todos los días?',
      },
      {
        id: 'l3',
        dutch: 'Wat is je guilty pleasure?',
        english: 'What is your guilty pleasure?',
        portuguese: 'Qual é o seu guilty pleasure?',
        french: 'Quel est votre plaisir coupable ?',
        spanish: '¿Cuál es tu placer culposo?',
      },
      {
        id: 'l4',
        dutch: 'Als je een dier kon zijn, welk dier zou je kiezen?',
        english: 'If you could be an animal, which one would you choose?',
        portuguese: 'Se você pudesse ser um animal, qual escolheria?',
        french: 'Si vous pouviez être un animal, lequel choisiriez-vous ?',
        spanish: 'Si pudieras ser un animal, ¿cuál elegirías?',
      },
      {
        id: 'l5',
        dutch: 'Wat is het raarste talent dat je hebt?',
        english: 'What is the weirdest talent you have?',
        portuguese: 'Qual é o talento mais estranho que você tem?',
        french: 'Quel est le talent le plus bizarre que vous possédez ?',
        spanish: '¿Cuál es el talento más raro que tienes?',
      },
      {
        id: 'l6',
        dutch: 'Welk liedje ken je helemaal uit je hoofd?',
        english: 'Which song do you know entirely by heart?',
        portuguese: 'Qual música você sabe completamente de cor?',
        french: 'Quelle chanson connaissez-vous entièrement par cœur ?',
        spanish: '¿Qué canción te sabes completamente de memoria?',
      },
      {
        id: 'l7',
        dutch: 'Wat is de beste serie die je ooit hebt gezien?',
        english: 'What is the best series you have ever watched?',
        portuguese: 'Qual é a melhor série que você já assistiu?',
        french: 'Quelle est la meilleure série que vous ayez jamais regardée ?',
        spanish: '¿Cuál es la mejor serie que has visto?',
      },
      {
        id: 'l8',
        dutch: 'Ben je een ochtendmens of een avondmens?',
        english: 'Are you a morning person or a night owl?',
        portuguese: 'Você é uma pessoa matutina ou noturna?',
        french: 'Êtes-vous plutôt du matin ou du soir ?',
        spanish: '¿Eres una persona mañanera o nocturna?',
      },
      {
        id: 'l9',
        dutch: 'Wat is je favoriete seizoen en waarom?',
        english: 'What is your favorite season and why?',
        portuguese: 'Qual é a sua estação favorita e por quê?',
        french: 'Quelle est votre saison préférée et pourquoi ?',
        spanish: '¿Cuál es tu estación favorita y por qué?',
      },
      {
        id: 'l10',
        dutch: 'Als je één superkracht kon hebben, welke zou het zijn?',
        english: 'If you could have one superpower, what would it be?',
        portuguese: 'Se você pudesse ter um superpoder, qual seria?',
        french: 'Si vous pouviez avoir un super-pouvoir, lequel serait-ce ?',
        spanish: 'Si pudieras tener un superpoder, ¿cuál sería?',
      },
      {
        id: 'l11',
        dutch: 'Wat is het laatste waar je heel hard om moest lachen?',
        english: 'What is the last thing that made you laugh really hard?',
        portuguese: 'Qual foi a última coisa que te fez rir muito?',
        french: 'Quelle est la dernière chose qui vous a fait vraiment rire ?',
        spanish: '¿Qué fue lo último que te hizo reír a carcajadas?',
      },
      {
        id: 'l12',
        dutch: 'Welk gerecht kun je het beste koken?',
        english: 'What dish can you cook the best?',
        portuguese: 'Qual prato você cozinha melhor?',
        french: 'Quel plat cuisinez-vous le mieux ?',
        spanish: '¿Qué plato cocinas mejor?',
      },
      {
        id: 'l13',
        dutch: 'Wat is de slechtste film die je ooit hebt gezien?',
        english: 'What is the worst movie you have ever seen?',
        portuguese: 'Qual é o pior filme que você já assistiu?',
        french: 'Quel est le pire film que vous ayez jamais vu ?',
        spanish: '¿Cuál es la peor película que has visto?',
      },
      {
        id: 'l14',
        dutch: 'Heb je een onzinnige gewoonte waar je niet mee kunt stoppen?',
        english: 'Do you have a silly habit you cannot stop?',
        portuguese: 'Você tem algum hábito bobo do qual não consegue parar?',
        french: 'Avez-vous une habitude idiote dont vous ne pouvez pas vous défaire ?',
        spanish: '¿Tienes algún hábito tonto del que no puedes parar?',
      },
      {
        id: 'l15',
        dutch: 'Wat was je bijnaam als kind?',
        english: 'What was your nickname as a child?',
        portuguese: 'Qual era o seu apelido quando criança?',
        french: 'Quel était votre surnom quand vous étiez enfant ?',
        spanish: '¿Cuál era tu apodo de niño?',
      },
      {
        id: 'l16',
        dutch:
          'Als je op een onbewoond eiland één ding mocht meenemen, wat zou het zijn?',
        english:
          'If you could bring one thing to a deserted island, what would it be?',
        portuguese:
          'Se você pudesse levar uma coisa para uma ilha deserta, o que seria?',
        french:
          'Si vous pouviez emporter une chose sur une île déserte, ce serait quoi ?',
        spanish:
          'Si pudieras llevar una cosa a una isla desierta, ¿qué sería?',
      },
      {
        id: 'l17',
        dutch: 'Wat is het vreemdste dat je ooit hebt gegoogeld?',
        english: 'What is the strangest thing you have ever googled?',
        portuguese: 'Qual é a coisa mais estranha que você já pesquisou no Google?',
        french: 'Quelle est la chose la plus étrange que vous ayez jamais googlée ?',
        spanish: '¿Cuál es la cosa más rara que has buscado en Google?',
      },
      {
        id: 'l18',
        dutch: 'Welke snack kun je echt niet laten staan?',
        english: 'Which snack can you absolutely not resist?',
        portuguese: 'Qual petisco você simplesmente não consegue resistir?',
        french: 'Quel snack ne pouvez-vous absolument pas résister ?',
        spanish: '¿A qué snack simplemente no puedes resistirte?',
      },
      {
        id: 'l19',
        dutch: 'Wat is je favoriete bordspel of kaartspel?',
        english: 'What is your favorite board game or card game?',
        portuguese: 'Qual é o seu jogo de tabuleiro ou baralho favorito?',
        french: 'Quel est votre jeu de société ou jeu de cartes préféré ?',
        spanish: '¿Cuál es tu juego de mesa o de cartas favorito?',
      },
      {
        id: 'l20',
        dutch: 'Heb je ooit een hele slechte kapsel gehad?',
        english: 'Have you ever had a really bad haircut?',
        portuguese: 'Você já teve um corte de cabelo horrível?',
        french: 'Avez-vous déjà eu une très mauvaise coupe de cheveux ?',
        spanish: '¿Alguna vez has tenido un corte de pelo horrible?',
      },
      {
        id: 'l21',
        dutch: 'Wat is iets dat iedereen leuk lijkt te vinden behalve jij?',
        english: 'What is something everyone seems to like except you?',
        portuguese: 'Qual é algo que todo mundo parece gostar, menos você?',
        french: "Qu'est-ce que tout le monde semble aimer sauf vous ?",
        spanish: '¿Qué es algo que a todos les gusta menos a ti?',
      },
      {
        id: 'l22',
        dutch:
          'Als je een emoji moest kiezen die jou beschrijft, welke zou het zijn?',
        english:
          'If you had to pick an emoji that describes you, which one would it be?',
        portuguese:
          'Se você tivesse que escolher um emoji que te descreve, qual seria?',
        french:
          'Si vous deviez choisir un emoji qui vous décrit, lequel serait-ce ?',
        spanish:
          'Si tuvieras que elegir un emoji que te describa, ¿cuál sería?',
      },
      {
        id: 'l23',
        dutch: 'Wat is het langste dat je ooit hebt binge-gewatched?',
        english: 'What is the longest you have ever binge-watched something?',
        portuguese: 'Qual foi o maior maratona de série que você já fez?',
        french: 'Quelle est la plus longue session de binge-watching que vous ayez faite ?',
        spanish: '¿Cuánto tiempo llevas viendo series de una sola vez?',
      },
      {
        id: 'l24',
        dutch: 'Welke beroemdheid zou je uitnodigen voor een etentje?',
        english: 'Which celebrity would you invite to dinner?',
        portuguese: 'Qual famoso você convidaria para jantar?',
        french: 'Quelle célébrité inviteriez-vous à dîner ?',
        spanish: '¿A qué famoso invitarías a cenar?',
      },
      {
        id: 'l25',
        dutch:
          'Ben je ooit ergens per ongeluk ingelopen waar je niet hoorde te zijn?',
        english:
          'Have you ever accidentally walked into somewhere you were not supposed to be?',
        portuguese:
          'Você já entrou acidentalmente em algum lugar onde não deveria estar?',
        french:
          "Avez-vous déjà pénétré accidentellement dans un endroit où vous n'étiez pas censé être ?",
        spanish:
          '¿Alguna vez entraste accidentalmente a algún lugar donde no debías estar?',
      },
      {
        id: 'l26',
        dutch: 'Wat is het meest nutteloze feitje dat je kent?',
        english: 'What is the most useless fact you know?',
        portuguese: 'Qual é o fato mais inútil que você conhece?',
        french: 'Quel est le fait le plus inutile que vous connaissez ?',
        spanish: '¿Cuál es el dato más inútil que conoces?',
      },
      {
        id: 'l27',
        dutch: 'Houd je van karaoke? Wat zou je nummer zijn?',
        english: 'Do you like karaoke? What would your go-to song be?',
        portuguese: 'Você gosta de karaokê? Qual seria a sua música favorita?',
        french: 'Aimez-vous le karaoké ? Quelle serait votre chanson incontournable ?',
        spanish: '¿Te gusta el karaoke? ¿Cuál sería tu canción estrella?',
      },
      {
        id: 'l28',
        dutch:
          'Wat is je favoriete manier om een regenachtige dag door te brengen?',
        english: 'What is your favorite way to spend a rainy day?',
        portuguese: 'Qual é a sua forma favorita de passar um dia chuvoso?',
        french: "Quelle est votre façon préférée de passer une journée pluvieuse ?",
        spanish: '¿Cuál es tu forma favorita de pasar un día lluvioso?',
      },
      {
        id: 'l29',
        dutch: 'Als je een cartoon-personage kon zijn, wie zou je kiezen?',
        english: 'If you could be a cartoon character, who would you choose?',
        portuguese: 'Se você pudesse ser um personagem de desenho animado, quem escolheria?',
        french: 'Si vous pouviez être un personnage de dessin animé, qui choisiriez-vous ?',
        spanish: 'Si pudieras ser un personaje de dibujos animados, ¿quién elegirías?',
      },
      {
        id: 'l30',
        dutch: 'Wat is de raarste combinatie van eten die je lekker vindt?',
        english: 'What is the weirdest food combination you enjoy?',
        portuguese: 'Qual é a combinação de alimentos mais estranha que você gosta?',
        french: "Quelle est la combinaison d'aliments la plus bizarre que vous appréciez ?",
        spanish: '¿Cuál es la combinación de comida más rara que te gusta?',
      },
    ],
  },
  {
    id: 'diepgaand',
    name: 'Diepgaand',
    emoji: '🌊',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
    cards: [
      {
        id: 'd1',
        dutch: 'Wat is het moedigste dat je ooit hebt gedaan?',
        english: 'What is the bravest thing you have ever done?',
        portuguese: 'Qual é a coisa mais corajosa que você já fez?',
        french: 'Quelle est la chose la plus courageuse que vous ayez jamais faite ?',
        spanish: '¿Cuál es la cosa más valiente que has hecho?',
      },
      {
        id: 'd2',
        dutch: 'Waar ben je het meest dankbaar voor in je leven?',
        english: 'What are you most grateful for in your life?',
        portuguese: 'Pelo que você é mais grato na sua vida?',
        french: 'Pour quoi êtes-vous le plus reconnaissant dans votre vie ?',
        spanish: '¿Por qué estás más agradecido en tu vida?',
      },
      {
        id: 'd3',
        dutch: 'Welk moment heeft je leven het meest veranderd?',
        english: 'Which moment changed your life the most?',
        portuguese: 'Qual momento mudou mais a sua vida?',
        french: 'Quel moment a le plus changé votre vie ?',
        spanish: '¿Qué momento cambió más tu vida?',
      },
      {
        id: 'd4',
        dutch: 'Wat zou je tegen je jongere zelf zeggen?',
        english: 'What would you say to your younger self?',
        portuguese: 'O que você diria para o seu eu mais jovem?',
        french: 'Que diriez-vous à votre moi plus jeune ?',
        spanish: '¿Qué le dirías a tu yo más joven?',
      },
      {
        id: 'd5',
        dutch: 'Wat betekent geluk voor jou?',
        english: 'What does happiness mean to you?',
        portuguese: 'O que significa felicidade para você?',
        french: 'Que signifie le bonheur pour vous ?',
        spanish: '¿Qué significa la felicidad para ti?',
      },
      {
        id: 'd6',
        dutch: 'Welke les heb je op de moeilijke manier geleerd?',
        english: 'What lesson did you learn the hard way?',
        portuguese: 'Qual lição você aprendeu da maneira difícil?',
        french: 'Quelle leçon avez-vous apprise à la dure ?',
        spanish: '¿Qué lección aprendiste a las malas?',
      },
      {
        id: 'd7',
        dutch: 'Waar ben je het meest trots op?',
        english: 'What are you most proud of?',
        portuguese: 'Do que você tem mais orgulho?',
        french: 'De quoi êtes-vous le plus fier ?',
        spanish: '¿De qué estás más orgulloso?',
      },
      {
        id: 'd8',
        dutch: 'Wat is je grootste angst en waarom?',
        english: 'What is your biggest fear and why?',
        portuguese: 'Qual é o seu maior medo e por quê?',
        french: 'Quelle est votre plus grande peur et pourquoi ?',
        spanish: '¿Cuál es tu mayor miedo y por qué?',
      },
      {
        id: 'd9',
        dutch:
          'Als je één ding aan de wereld kon veranderen, wat zou het zijn?',
        english:
          'If you could change one thing about the world, what would it be?',
        portuguese:
          'Se você pudesse mudar uma coisa no mundo, o que seria?',
        french:
          'Si vous pouviez changer une chose dans le monde, ce serait quoi ?',
        spanish:
          'Si pudieras cambiar una cosa del mundo, ¿qué sería?',
      },
      {
        id: 'd10',
        dutch: 'Wat wil je dat mensen onthouden over jou?',
        english: 'What do you want people to remember about you?',
        portuguese: 'O que você quer que as pessoas lembrem sobre você?',
        french: 'Que voulez-vous que les gens retiennent de vous ?',
        spanish: '¿Qué quieres que la gente recuerde de ti?',
      },
      {
        id: 'd11',
        dutch: 'Welk boek of film heeft je kijk op het leven veranderd?',
        english: 'Which book or movie changed your perspective on life?',
        portuguese: 'Qual livro ou filme mudou sua perspectiva sobre a vida?',
        french: 'Quel livre ou film a changé votre vision de la vie ?',
        spanish: '¿Qué libro o película cambió tu perspectiva de la vida?',
      },
      {
        id: 'd12',
        dutch: 'Wat is iets dat je altijd al wilde vragen maar nooit durfde?',
        english: 'What is something you always wanted to ask but never dared?',
        portuguese: 'O que você sempre quis perguntar mas nunca teve coragem?',
        french: "Qu'avez-vous toujours voulu demander mais n'avez jamais osé ?",
        spanish: '¿Qué es algo que siempre quisiste preguntar pero nunca te atreviste?',
      },
      {
        id: 'd13',
        dutch: 'Geloof je dat mensen fundamenteel kunnen veranderen?',
        english: 'Do you believe people can fundamentally change?',
        portuguese: 'Você acredita que as pessoas podem mudar fundamentalmente?',
        french: 'Croyez-vous que les gens peuvent fondamentalement changer ?',
        spanish: '¿Crees que las personas pueden cambiar fundamentalmente?',
      },
      {
        id: 'd14',
        dutch: 'Wat is iets waar je vroeger zeker van was, maar nu niet meer?',
        english:
          'What is something you used to be certain about, but no longer are?',
        portuguese:
          'Sobre o que você tinha certeza antes, mas não tem mais?',
        french:
          "De quoi étiez-vous certain autrefois, mais ne l'êtes plus maintenant ?",
        spanish:
          '¿De qué estabas seguro antes pero ya no lo estás?',
      },
      {
        id: 'd15',
        dutch: 'Wanneer heb je je voor het laatst echt kwetsbaar opgesteld?',
        english: 'When was the last time you made yourself truly vulnerable?',
        portuguese: 'Quando foi a última vez que você se mostrou verdadeiramente vulnerável?',
        french: 'La dernière fois que vous vous êtes vraiment rendu vulnérable, c\'était quand ?',
        spanish: '¿Cuándo fue la última vez que te mostraste verdaderamente vulnerable?',
      },
      {
        id: 'd16',
        dutch: 'Wat zou je doen als niemand je kon beoordelen?',
        english: 'What would you do if nobody could judge you?',
        portuguese: 'O que você faria se ninguém pudesse te julgar?',
        french: 'Que feriez-vous si personne ne pouvait vous juger ?',
        spanish: '¿Qué harías si nadie pudiera juzgarte?',
      },
      {
        id: 'd17',
        dutch: 'Hoe definieer je succes voor jezelf?',
        english: 'How do you define success for yourself?',
        portuguese: 'Como você define o sucesso para si mesmo?',
        french: 'Comment définissez-vous le succès pour vous-même ?',
        spanish: '¿Cómo defines el éxito para ti mismo?',
      },
      {
        id: 'd18',
        dutch: 'Welk gesprek heeft de grootste indruk op je gemaakt?',
        english: 'Which conversation made the biggest impression on you?',
        portuguese: 'Qual conversa causou a maior impressão em você?',
        french: 'Quelle conversation vous a le plus marqué ?',
        spanish: '¿Qué conversación te ha dejado la mayor impresión?',
      },
      {
        id: 'd19',
        dutch:
          'Wat is iets dat je hebt losgelaten en waar je achteraf blij mee bent?',
        english:
          'What is something you let go of that you are glad about in hindsight?',
        portuguese:
          'O que você deixou ir que, olhando para trás, está feliz de ter largado?',
        french:
          "Qu'avez-vous lâché prise et dont vous êtes content rétrospectivement ?",
        spanish:
          '¿Qué es algo que dejaste ir y de lo que te alegras en retrospectiva?',
      },
      {
        id: 'd20',
        dutch: 'Hoe ga je om met onzekerheid over de toekomst?',
        english: 'How do you deal with uncertainty about the future?',
        portuguese: 'Como você lida com a incerteza sobre o futuro?',
        french: "Comment gérez-vous l'incertitude face à l'avenir ?",
        spanish: '¿Cómo manejas la incertidumbre sobre el futuro?',
      },
      {
        id: 'd21',
        dutch: 'Wat vind je het moeilijkst om te accepteren aan het leven?',
        english: 'What do you find hardest to accept about life?',
        portuguese: 'O que você acha mais difícil de aceitar na vida?',
        french: "Qu'est-ce que vous trouvez le plus difficile à accepter dans la vie ?",
        spanish: '¿Qué es lo más difícil de aceptar de la vida?',
      },
      {
        id: 'd22',
        dutch: 'Is er iets waar je spijt van hebt dat je het niet hebt gezegd?',
        english: 'Is there something you regret not having said?',
        portuguese: 'Há algo que você se arrepende de não ter dito?',
        french: "Y a-t-il quelque chose que vous regrettez de ne pas avoir dit ?",
        spanish: '¿Hay algo de lo que te arrepientas de no haber dicho?',
      },
      {
        id: 'd23',
        dutch: 'Wat maakt jou uniek en hoe voel je je daarover?',
        english: 'What makes you unique and how do you feel about it?',
        portuguese: 'O que te torna único e como você se sente em relação a isso?',
        french: 'Qu\'est-ce qui vous rend unique et comment vous sentez-vous par rapport à ça ?',
        spanish: '¿Qué te hace único y cómo te sientes al respecto?',
      },
      {
        id: 'd24',
        dutch: 'Hoe weet je of je de juiste keuze maakt?',
        english: 'How do you know if you are making the right choice?',
        portuguese: 'Como você sabe se está fazendo a escolha certa?',
        french: 'Comment savez-vous si vous faites le bon choix ?',
        spanish: '¿Cómo sabes si estás tomando la decisión correcta?',
      },
      {
        id: 'd25',
        dutch: 'Wat is het belangrijkste dat je van een vreemde hebt geleerd?',
        english:
          'What is the most important thing you learned from a stranger?',
        portuguese:
          'Qual é a coisa mais importante que você aprendeu com um estranho?',
        french:
          "Quelle est la chose la plus importante que vous ayez apprise d'un inconnu ?",
        spanish:
          '¿Qué es lo más importante que aprendiste de un desconocido?',
      },
      {
        id: 'd26',
        dutch: 'Waar vind je rust als alles om je heen chaotisch is?',
        english:
          'Where do you find peace when everything around you is chaotic?',
        portuguese:
          'Onde você encontra paz quando tudo ao seu redor é caótico?',
        french:
          'Où trouvez-vous la paix quand tout autour de vous est chaotique ?',
        spanish:
          '¿Dónde encuentras paz cuando todo a tu alrededor es caótico?',
      },
      {
        id: 'd27',
        dutch: 'Heb je ooit een overtuiging volledig losgelaten? Wat was dat?',
        english: 'Have you ever completely abandoned a belief? What was it?',
        portuguese: 'Você já abandonou completamente uma crença? Qual foi ela?',
        french: 'Avez-vous déjà complètement abandonné une croyance ? Laquelle ?',
        spanish: '¿Alguna vez abandonaste por completo una creencia? ¿Cuál fue?',
      },
      {
        id: 'd28',
        dutch: 'Wat zou je willen begrijpen dat je nu nog niet begrijpt?',
        english:
          'What would you like to understand that you do not understand yet?',
        portuguese:
          'O que você gostaria de entender que ainda não entende?',
        french:
          "Qu'aimeriez-vous comprendre que vous ne comprenez pas encore ?",
        spanish:
          '¿Qué te gustaría entender que todavía no entiendes?',
      },
      {
        id: 'd29',
        dutch: 'Wanneer voelde je je voor het laatst helemaal op je plek?',
        english: 'When did you last feel completely in your element?',
        portuguese: 'Quando foi a última vez que você se sentiu completamente no seu elemento?',
        french: 'Quand vous êtes-vous senti pour la dernière fois totalement dans votre élément ?',
        spanish: '¿Cuándo fue la última vez que te sentiste completamente en tu elemento?',
      },
      {
        id: 'd30',
        dutch:
          'Als je leven een boek was, welk hoofdstuk ben je nu aan het schrijven?',
        english: 'If your life were a book, which chapter are you writing now?',
        portuguese: 'Se a sua vida fosse um livro, qual capítulo você está escrevendo agora?',
        french: 'Si votre vie était un livre, quel chapitre êtes-vous en train d\'écrire ?',
        spanish: 'Si tu vida fuera un libro, ¿qué capítulo estás escribiendo ahora?',
      },
    ],
  },
  {
    id: 'relaties',
    name: 'Relaties',
    emoji: '💕',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)',
    cards: [
      {
        id: 'r1',
        dutch: 'Wat waardeer je het meest in een vriendschap?',
        english: 'What do you value most in a friendship?',
        portuguese: 'O que você valoriza mais em uma amizade?',
        french: "Qu'est-ce que vous appréciez le plus dans une amitié ?",
        spanish: '¿Qué valoras más en una amistad?',
      },
      {
        id: 'r2',
        dutch: 'Hoe laat je iemand weten dat je om hen geeft?',
        english: 'How do you show someone you care about them?',
        portuguese: 'Como você mostra a alguém que se importa com ela?',
        french: 'Comment montrez-vous à quelqu\'un que vous tenez à lui ?',
        spanish: '¿Cómo le demuestras a alguien que te importa?',
      },
      {
        id: 'r3',
        dutch: 'Wat is de beste relatie-advies die je ooit hebt gekregen?',
        english: 'What is the best relationship advice you ever received?',
        portuguese: 'Qual é o melhor conselho de relacionamento que você já recebeu?',
        french: 'Quel est le meilleur conseil en matière de relation que vous ayez jamais reçu ?',
        spanish: '¿Cuál es el mejor consejo de relación que has recibido?',
      },
      {
        id: 'r4',
        dutch: 'Wat is jouw liefdestaal?',
        english: 'What is your love language?',
        portuguese: 'Qual é a sua linguagem do amor?',
        french: "Quelle est votre langue de l'amour ?",
        spanish: '¿Cuál es tu lenguaje del amor?',
      },
      {
        id: 'r5',
        dutch: 'Beschrijf je ideale date.',
        english: 'Describe your ideal date.',
        portuguese: 'Descreva o seu encontro ideal.',
        french: 'Décrivez votre rendez-vous idéal.',
        spanish: 'Describe tu cita ideal.',
      },
      {
        id: 'r6',
        dutch: 'Wat vind je het belangrijkste in een relatie?',
        english: 'What do you find most important in a relationship?',
        portuguese: 'O que você considera mais importante em um relacionamento?',
        french: "Qu'est-ce que vous trouvez le plus important dans une relation ?",
        spanish: '¿Qué es lo más importante para ti en una relación?',
      },
      {
        id: 'r7',
        dutch: 'Welke eigenschap bewonder je het meest bij anderen?',
        english: 'Which quality do you admire most in others?',
        portuguese: 'Qual qualidade você mais admira nos outros?',
        french: 'Quelle qualité admirez-vous le plus chez les autres ?',
        spanish: '¿Qué cualidad admiras más en los demás?',
      },
      {
        id: 'r8',
        dutch: 'Hoe ga je om met meningsverschillen?',
        english: 'How do you handle disagreements?',
        portuguese: 'Como você lida com divergências de opinião?',
        french: 'Comment gérez-vous les désaccords ?',
        spanish: '¿Cómo manejas los desacuerdos?',
      },
      {
        id: 'r9',
        dutch: 'Wat is het mooiste compliment dat je ooit hebt gekregen?',
        english: 'What is the nicest compliment you have ever received?',
        portuguese: 'Qual é o elogio mais bonito que você já recebeu?',
        french: 'Quel est le plus beau compliment que vous ayez jamais reçu ?',
        spanish: '¿Cuál es el mejor cumplido que has recibido?',
      },
      {
        id: 'r10',
        dutch: 'Wie heeft de grootste invloed gehad op wie je bent?',
        english: 'Who has had the biggest influence on who you are?',
        portuguese: 'Quem teve a maior influência em quem você é?',
        french: 'Qui a eu la plus grande influence sur qui vous êtes ?',
        spanish: '¿Quién ha tenido la mayor influencia en quien eres?',
      },
      {
        id: 'r11',
        dutch: 'Wat zou je nooit kunnen vergeven?',
        english: 'What could you never forgive?',
        portuguese: 'O que você jamais conseguiria perdoar?',
        french: 'Qu\'est-ce que vous ne pourriez jamais pardonner ?',
        spanish: '¿Qué es algo que nunca podrías perdonar?',
      },
      {
        id: 'r12',
        dutch: 'Hoe weet je of je iemand echt vertrouwt?',
        english: 'How do you know if you truly trust someone?',
        portuguese: 'Como você sabe se realmente confia em alguém?',
        french: 'Comment savez-vous si vous faites vraiment confiance à quelqu\'un ?',
        spanish: '¿Cómo sabes si realmente confías en alguien?',
      },
      {
        id: 'r13',
        dutch: 'Wat is het beste dat een vriend ooit voor je heeft gedaan?',
        english: 'What is the best thing a friend has ever done for you?',
        portuguese: 'Qual é a melhor coisa que um amigo já fez por você?',
        french: 'Quelle est la meilleure chose qu\'un ami ait jamais faite pour vous ?',
        spanish: '¿Qué es lo mejor que un amigo ha hecho por ti?',
      },
      {
        id: 'r14',
        dutch: 'Hoe houd je een vriendschap levend op afstand?',
        english: 'How do you keep a friendship alive over distance?',
        portuguese: 'Como você mantém uma amizade viva à distância?',
        french: 'Comment entretenez-vous une amitié à distance ?',
        spanish: '¿Cómo mantienes una amistad viva a distancia?',
      },
      {
        id: 'r15',
        dutch: 'Wat heb je geleerd van een relatie die niet heeft gewerkt?',
        english:
          'What did you learn from a relationship that did not work out?',
        portuguese:
          'O que você aprendeu com um relacionamento que não deu certo?',
        french:
          "Qu'avez-vous appris d'une relation qui n'a pas fonctionné ?",
        spanish:
          '¿Qué aprendiste de una relación que no funcionó?',
      },
      {
        id: 'r16',
        dutch: 'Hoe laat je iemand weten dat je sorry bent?',
        english: 'How do you let someone know you are sorry?',
        portuguese: 'Como você faz para pedir desculpas a alguém?',
        french: 'Comment faites-vous savoir à quelqu\'un que vous êtes désolé ?',
        spanish: '¿Cómo le haces saber a alguien que lo sientes?',
      },
      {
        id: 'r17',
        dutch: 'Wat is de mooiste herinnering die je met een vriend deelt?',
        english: 'What is the most beautiful memory you share with a friend?',
        portuguese: 'Qual é a memória mais bonita que você compartilha com um amigo?',
        french: 'Quel est le plus beau souvenir que vous partagez avec un ami ?',
        spanish: '¿Cuál es el recuerdo más bonito que compartes con un amigo?',
      },
      {
        id: 'r18',
        dutch: 'Hoe merk je dat je je echt op je gemak voelt bij iemand?',
        english:
          'How do you notice that you feel truly comfortable with someone?',
        portuguese:
          'Como você percebe que realmente se sente à vontade com alguém?',
        french:
          'Comment remarquez-vous que vous vous sentez vraiment à l\'aise avec quelqu\'un ?',
        spanish:
          '¿Cómo notas que te sientes verdaderamente cómodo con alguien?',
      },
      {
        id: 'r19',
        dutch: 'Wat is een klein gebaar dat veel voor je betekent?',
        english: 'What is a small gesture that means a lot to you?',
        portuguese: 'Qual é um pequeno gesto que significa muito para você?',
        french: 'Quel est un petit geste qui compte beaucoup pour vous ?',
        spanish: '¿Cuál es un pequeño gesto que significa mucho para ti?',
      },
      {
        id: 'r20',
        dutch: 'Hoe ga je om met het verliezen van een vriendschap?',
        english: 'How do you cope with losing a friendship?',
        portuguese: 'Como você lida com a perda de uma amizade?',
        french: 'Comment faites-vous face à la perte d\'une amitié ?',
        spanish: '¿Cómo afrontas la pérdida de una amistad?',
      },
      {
        id: 'r21',
        dutch: 'Wat maakt iemand tot een goede luisteraar?',
        english: 'What makes someone a good listener?',
        portuguese: 'O que torna alguém um bom ouvinte?',
        french: 'Qu\'est-ce qui fait de quelqu\'un un bon auditeur ?',
        spanish: '¿Qué hace que alguien sea un buen oyente?',
      },
      {
        id: 'r22',
        dutch: 'Hoe belangrijk is humor in je relaties?',
        english: 'How important is humor in your relationships?',
        portuguese: 'Qual é a importância do humor nos seus relacionamentos?',
        french: 'Quelle est l\'importance de l\'humour dans vos relations ?',
        spanish: '¿Qué tan importante es el humor en tus relaciones?',
      },
      {
        id: 'r23',
        dutch:
          'Ben je iemand die snel vergeeft of heb je daar tijd voor nodig?',
        english: 'Are you someone who forgives quickly or do you need time?',
        portuguese: 'Você é alguém que perdoa rápido ou precisa de tempo?',
        french: 'Êtes-vous quelqu\'un qui pardonne vite ou avez-vous besoin de temps ?',
        spanish: '¿Eres alguien que perdona rápido o necesitas tiempo?',
      },
      {
        id: 'r24',
        dutch: 'Wat is het moeilijkste gesprek dat je ooit hebt gevoerd?',
        english: 'What is the hardest conversation you have ever had?',
        portuguese: 'Qual é a conversa mais difícil que você já teve?',
        french: 'Quelle est la conversation la plus difficile que vous ayez jamais eue ?',
        spanish: '¿Cuál es la conversación más difícil que has tenido?',
      },
      {
        id: 'r25',
        dutch: 'Hoe weet je of iemand echt naar je luistert?',
        english: 'How do you know if someone is really listening to you?',
        portuguese: 'Como você sabe se alguém está realmente te ouvindo?',
        french: 'Comment savez-vous si quelqu\'un vous écoute vraiment ?',
        spanish: '¿Cómo sabes si alguien te está escuchando de verdad?',
      },
      {
        id: 'r26',
        dutch:
          'Wat is iets dat je in een relatie pas later hebt leren waarderen?',
        english:
          'What is something in a relationship you only learned to appreciate later?',
        portuguese:
          'O que você só aprendeu a valorizar em um relacionamento mais tarde?',
        french:
          "Qu'avez-vous appris à apprécier dans une relation seulement plus tard ?",
        spanish:
          '¿Qué es algo que solo aprendiste a valorar en una relación más adelante?',
      },
      {
        id: 'r27',
        dutch: 'Hoe balanceer je je eigen behoeften met die van de ander?',
        english:
          'How do you balance your own needs with those of the other person?',
        portuguese:
          'Como você equilibra suas próprias necessidades com as da outra pessoa?',
        french:
          'Comment équilibrez-vous vos propres besoins avec ceux de l\'autre ?',
        spanish:
          '¿Cómo equilibras tus propias necesidades con las de la otra persona?',
      },
      {
        id: 'r28',
        dutch: 'Wat vind je het moeilijkst om te communiceren in een relatie?',
        english: 'What do you find hardest to communicate in a relationship?',
        portuguese: 'O que você acha mais difícil de comunicar em um relacionamento?',
        french: 'Qu\'est-ce que vous trouvez le plus difficile à communiquer dans une relation ?',
        spanish: '¿Qué es lo más difícil de comunicar en una relación?',
      },
      {
        id: 'r29',
        dutch: 'Hoe vier je de mensen om je heen?',
        english: 'How do you celebrate the people around you?',
        portuguese: 'Como você celebra as pessoas ao seu redor?',
        french: 'Comment célébrez-vous les personnes qui vous entourent ?',
        spanish: '¿Cómo celebras a las personas que te rodean?',
      },
      {
        id: 'r30',
        dutch: 'Wat zou je willen dat meer mensen begrepen over jou?',
        english: 'What do you wish more people understood about you?',
        portuguese: 'O que você gostaria que mais pessoas entendessem sobre você?',
        french: 'Qu\'aimeriez-vous que plus de gens comprennent à votre sujet ?',
        spanish: '¿Qué desearías que más personas entendieran sobre ti?',
      },
    ],
  },
  {
    id: 'dromen',
    name: 'Dromen & Doelen',
    emoji: '✨',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
    cards: [
      {
        id: 'dr1',
        dutch: 'Wat staat er bovenaan je bucketlist?',
        english: 'What is at the top of your bucket list?',
        portuguese: 'O que está no topo da sua lista de realizações?',
        french: 'Qu\'y a-t-il en tête de votre liste de choses à faire avant de mourir ?',
        spanish: '¿Qué encabeza tu lista de cosas por hacer antes de morir?',
      },
      {
        id: 'dr2',
        dutch: 'Waar zie je jezelf over vijf jaar?',
        english: 'Where do you see yourself in five years?',
        portuguese: 'Onde você se vê daqui a cinco anos?',
        french: 'Où vous voyez-vous dans cinq ans ?',
        spanish: '¿Dónde te ves dentro de cinco años?',
      },
      {
        id: 'dr3',
        dutch: 'Wat is je droombaan?',
        english: 'What is your dream job?',
        portuguese: 'Qual é o seu emprego dos sonhos?',
        french: 'Quel est votre emploi de rêve ?',
        spanish: '¿Cuál es tu trabajo soñado?',
      },
      {
        id: 'dr4',
        dutch: 'Als geld geen rol speelde, wat zou je dan doen?',
        english: 'If money were no object, what would you do?',
        portuguese: 'Se o dinheiro não fosse problema, o que você faria?',
        french: 'Si l\'argent n\'était pas un problème, que feriez-vous ?',
        spanish: 'Si el dinero no fuera un problema, ¿qué harías?',
      },
      {
        id: 'dr5',
        dutch: 'Welk land wil je het liefst bezoeken?',
        english: 'Which country would you most like to visit?',
        portuguese: 'Qual país você mais gostaria de visitar?',
        french: 'Quel pays aimeriez-vous le plus visiter ?',
        spanish: '¿Qué país te gustaría visitar más?',
      },
      {
        id: 'dr6',
        dutch: 'Wat wil je nog leren in je leven?',
        english: 'What do you still want to learn in your life?',
        portuguese: 'O que você ainda quer aprender na vida?',
        french: 'Qu\'est-ce que vous voulez encore apprendre dans votre vie ?',
        spanish: '¿Qué más quieres aprender en tu vida?',
      },
      {
        id: 'dr7',
        dutch: 'Wat is een doel waar je nu aan werkt?',
        english: 'What is a goal you are currently working on?',
        portuguese: 'Qual é um objetivo que você está trabalhando agora?',
        french: 'Quel est un objectif sur lequel vous travaillez en ce moment ?',
        spanish: '¿Cuál es un objetivo en el que estás trabajando actualmente?',
      },
      {
        id: 'dr8',
        dutch: 'Welke vaardigheid zou je willen beheersen?',
        english: 'What skill would you like to master?',
        portuguese: 'Qual habilidade você gostaria de dominar?',
        french: 'Quelle compétence aimeriez-vous maîtriser ?',
        spanish: '¿Qué habilidad te gustaría dominar?',
      },
      {
        id: 'dr9',
        dutch: 'Wat zou je doen als je wist dat je niet kon falen?',
        english: 'What would you do if you knew you could not fail?',
        portuguese: 'O que você faria se soubesse que não poderia falhar?',
        french: 'Que feriez-vous si vous saviez que vous ne pouviez pas échouer ?',
        spanish: '¿Qué harías si supieras que no puedes fracasar?',
      },
      {
        id: 'dr10',
        dutch: 'Wat is je grootste ambitie?',
        english: 'What is your biggest ambition?',
        portuguese: 'Qual é a sua maior ambição?',
        french: 'Quelle est votre plus grande ambition ?',
        spanish: '¿Cuál es tu mayor ambición?',
      },
      {
        id: 'dr11',
        dutch: 'Welk avontuur wil je nog beleven?',
        english: 'What adventure do you still want to experience?',
        portuguese: 'Que aventura você ainda quer viver?',
        french: 'Quelle aventure voulez-vous encore vivre ?',
        spanish: '¿Qué aventura aún quieres vivir?',
      },
      {
        id: 'dr12',
        dutch: 'Als je een bedrijf kon starten, wat zou het zijn?',
        english: 'If you could start a business, what would it be?',
        portuguese: 'Se você pudesse abrir um negócio, qual seria?',
        french: 'Si vous pouviez créer une entreprise, ce serait quoi ?',
        spanish: 'Si pudieras iniciar un negocio, ¿cuál sería?',
      },
      {
        id: 'dr13',
        dutch: 'Welk project zou je starten als je een heel jaar vrij had?',
        english: 'What project would you start if you had a whole year off?',
        portuguese: 'Que projeto você iniciaria se tivesse um ano livre?',
        french: 'Quel projet lanceriez-vous si vous aviez toute une année de libre ?',
        spanish: '¿Qué proyecto iniciarías si tuvieras un año entero libre?',
      },
      {
        id: 'dr14',
        dutch:
          'Wat is een droom die je hebt opgegeven en wil je die nog steeds?',
        english: 'What is a dream you gave up on and do you still want it?',
        portuguese:
          'Qual é um sonho que você abandonou e você ainda o quer?',
        french:
          'Quel est un rêve auquel vous avez renoncé et le voulez-vous encore ?',
        spanish:
          '¿Cuál es un sueño que abandonaste y todavía lo deseas?',
      },
      {
        id: 'dr15',
        dutch: 'In welke stad of welk dorp zou je het liefst willen wonen?',
        english: 'In which city or town would you most like to live?',
        portuguese: 'Em qual cidade ou vila você mais gostaria de morar?',
        french: 'Dans quelle ville ou quel village aimeriez-vous le plus vivre ?',
        spanish: '¿En qué ciudad o pueblo te gustaría vivir más?',
      },
      {
        id: 'dr16',
        dutch: 'Wat zou je willen uitvinden als je kon?',
        english: 'What would you like to invent if you could?',
        portuguese: 'O que você gostaria de inventar se pudesse?',
        french: 'Qu\'aimeriez-vous inventer si vous le pouviez ?',
        spanish: '¿Qué te gustaría inventar si pudieras?',
      },
      {
        id: 'dr17',
        dutch: 'Welk probleem in de wereld zou je het liefst oplossen?',
        english: 'Which problem in the world would you most like to solve?',
        portuguese: 'Qual problema no mundo você mais gostaria de resolver?',
        french: 'Quel problème dans le monde aimeriez-vous le plus résoudre ?',
        spanish: '¿Qué problema del mundo te gustaría resolver más?',
      },
      {
        id: 'dr18',
        dutch: 'Wat is iets waar je naartoe spaart of naar uitkijkt?',
        english:
          'What is something you are saving up for or looking forward to?',
        portuguese:
          'O que você está poupando ou esperando ansiosamente?',
        french:
          'Qu\'est-ce que vous épargnez ou attendez avec impatience ?',
        spanish:
          '¿Para qué estás ahorrando o qué esperas con ansias?',
      },
      {
        id: 'dr19',
        dutch: 'Als je een boek kon schrijven, waar zou het over gaan?',
        english: 'If you could write a book, what would it be about?',
        portuguese: 'Se você pudesse escrever um livro, sobre o que seria?',
        french: 'Si vous pouviez écrire un livre, de quoi parlerait-il ?',
        spanish: 'Si pudieras escribir un libro, ¿de qué trataría?',
      },
      {
        id: 'dr20',
        dutch: 'Welke gewoonte wil je dit jaar ontwikkelen?',
        english: 'What habit do you want to develop this year?',
        portuguese: 'Qual hábito você quer desenvolver este ano?',
        french: 'Quelle habitude voulez-vous développer cette année ?',
        spanish: '¿Qué hábito quieres desarrollar este año?',
      },
      {
        id: 'dr21',
        dutch: 'Wat is een kleine droom die je makkelijk zou kunnen waarmaken?',
        english: 'What is a small dream you could easily make come true?',
        portuguese: 'Qual é um pequeno sonho que você poderia facilmente realizar?',
        french: 'Quel est un petit rêve que vous pourriez facilement réaliser ?',
        spanish: '¿Cuál es un pequeño sueño que podrías hacer realidad fácilmente?',
      },
      {
        id: 'dr22',
        dutch:
          'Als je een cursus of opleiding kon volgen, welke zou je kiezen?',
        english:
          'If you could take any course or degree, which one would you choose?',
        portuguese:
          'Se você pudesse fazer qualquer curso ou graduação, qual escolheria?',
        french:
          'Si vous pouviez suivre n\'importe quel cours ou diplôme, lequel choisiriez-vous ?',
        spanish:
          'Si pudieras tomar cualquier curso o carrera, ¿cuál elegirías?',
      },
      {
        id: 'dr23',
        dutch: 'Hoe ziet je ideale dagindeling eruit?',
        english: 'What does your ideal daily routine look like?',
        portuguese: 'Como é a sua rotina diária ideal?',
        french: 'À quoi ressemble votre routine quotidienne idéale ?',
        spanish: '¿Cómo es tu rutina diaria ideal?',
      },
      {
        id: 'dr24',
        dutch: 'Wat wil je over tien jaar bereikt hebben?',
        english: 'What do you want to have achieved in ten years?',
        portuguese: 'O que você quer ter conquistado em dez anos?',
        french: 'Qu\'est-ce que vous voulez avoir accompli dans dix ans ?',
        spanish: '¿Qué quieres haber logrado en diez años?',
      },
      {
        id: 'dr25',
        dutch: 'Als je een TED Talk mocht geven, waar zou die over gaan?',
        english: 'If you could give a TED Talk, what would it be about?',
        portuguese: 'Se você pudesse dar uma palestra TED, sobre o que seria?',
        french: 'Si vous pouviez donner un TED Talk, de quoi parlerait-il ?',
        spanish: 'Si pudieras dar una charla TED, ¿de qué sería?',
      },
      {
        id: 'dr26',
        dutch: 'Welk talent zou je willen hebben dat je nu niet hebt?',
        english: 'What talent would you like to have that you do not have now?',
        portuguese: 'Qual talento você gostaria de ter que ainda não tem?',
        french: 'Quel talent aimeriez-vous avoir que vous n\'avez pas maintenant ?',
        spanish: '¿Qué talento te gustaría tener que no tienes ahora?',
      },
      {
        id: 'dr27',
        dutch: 'Wat is je droomhuis? Beschrijf het.',
        english: 'What is your dream home? Describe it.',
        portuguese: 'Qual é a sua casa dos sonhos? Descreva-a.',
        french: 'Quelle est votre maison de rêve ? Décrivez-la.',
        spanish: '¿Cuál es tu casa soñada? Descríbela.',
      },
      {
        id: 'dr28',
        dutch:
          'Als je een jaar in het buitenland mocht werken, waar zou je naartoe gaan?',
        english: 'If you could work abroad for a year, where would you go?',
        portuguese: 'Se você pudesse trabalhar no exterior por um ano, para onde iria?',
        french: 'Si vous pouviez travailler à l\'étranger pendant un an, où iriez-vous ?',
        spanish: 'Si pudieras trabajar en el extranjero por un año, ¿adónde irías?',
      },
      {
        id: 'dr29',
        dutch: 'Wat zou je willen nalaten aan de volgende generatie?',
        english: 'What would you like to leave behind for the next generation?',
        portuguese: 'O que você gostaria de deixar para a próxima geração?',
        french: 'Que voudriez-vous laisser à la prochaine génération ?',
        spanish: '¿Qué te gustaría dejarle a la próxima generación?',
      },
      {
        id: 'dr30',
        dutch: 'Wat houdt je tegen om je grootste droom na te jagen?',
        english: 'What is holding you back from chasing your biggest dream?',
        portuguese: 'O que te impede de perseguir o seu maior sonho?',
        french: 'Qu\'est-ce qui vous retient de poursuivre votre plus grand rêve ?',
        spanish: '¿Qué te impide perseguir tu mayor sueño?',
      },
    ],
  },
  {
    id: 'herinneringen',
    name: 'Herinneringen',
    emoji: '📸',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%)',
    cards: [
      {
        id: 'h1',
        dutch: 'Wat is je mooiste jeugdherinnering?',
        english: 'What is your most beautiful childhood memory?',
        portuguese: 'Qual é a sua memória de infância mais bonita?',
        french: 'Quel est votre plus beau souvenir d\'enfance ?',
        spanish: '¿Cuál es tu recuerdo de infancia más bonito?',
      },
      {
        id: 'h2',
        dutch: 'Welke vakantie zul je nooit vergeten?',
        english: 'Which vacation will you never forget?',
        portuguese: 'Qual férias você nunca vai esquecer?',
        french: 'Quelles vacances n\'oublierez-vous jamais ?',
        spanish: '¿Qué vacaciones nunca olvidarás?',
      },
      {
        id: 'h3',
        dutch: 'Wat is het beste cadeau dat je ooit hebt gekregen?',
        english: 'What is the best gift you have ever received?',
        portuguese: 'Qual é o melhor presente que você já recebeu?',
        french: 'Quel est le meilleur cadeau que vous ayez jamais reçu ?',
        spanish: '¿Cuál es el mejor regalo que has recibido?',
      },
      {
        id: 'h4',
        dutch: 'Welk moment zou je opnieuw willen beleven?',
        english: 'Which moment would you like to relive?',
        portuguese: 'Qual momento você gostaria de reviver?',
        french: 'Quel moment aimeriez-vous revivre ?',
        spanish: '¿Qué momento te gustaría revivir?',
      },
      {
        id: 'h5',
        dutch: 'Wat is de gekste plek waar je ooit bent geweest?',
        english: 'What is the craziest place you have ever been?',
        portuguese: 'Qual é o lugar mais louco onde você já esteve?',
        french: 'Quel est l\'endroit le plus fou où vous ayez jamais été ?',
        spanish: '¿Cuál es el lugar más loco al que has ido?',
      },
      {
        id: 'h6',
        dutch: 'Welk familietradition is je het dierbaarst?',
        english: 'Which family tradition is dearest to you?',
        portuguese: 'Qual tradição de família é a mais querida para você?',
        french: 'Quelle tradition familiale vous est la plus chère ?',
        spanish: '¿Qué tradición familiar es la más querida para ti?',
      },
      {
        id: 'h7',
        dutch: 'Wat was je favoriete speelgoed als kind?',
        english: 'What was your favorite toy as a child?',
        portuguese: 'Qual era o seu brinquedo favorito quando criança?',
        french: 'Quel était votre jouet préféré quand vous étiez enfant ?',
        spanish: '¿Cuál era tu juguete favorito de niño?',
      },
      {
        id: 'h8',
        dutch: 'Welk concert of evenement zul je nooit vergeten?',
        english: 'Which concert or event will you never forget?',
        portuguese: 'Qual show ou evento você nunca vai esquecer?',
        french: 'Quel concert ou événement n\'oublierez-vous jamais ?',
        spanish: '¿Qué concierto o evento nunca olvidarás?',
      },
      {
        id: 'h9',
        dutch: 'Wat is de beste maaltijd die je ooit hebt gegeten?',
        english: 'What is the best meal you have ever eaten?',
        portuguese: 'Qual é a melhor refeição que você já comeu?',
        french: 'Quel est le meilleur repas que vous ayez jamais mangé ?',
        spanish: '¿Cuál es la mejor comida que has probado?',
      },
      {
        id: 'h10',
        dutch: 'Welke leraar heeft de meeste indruk op je gemaakt?',
        english: 'Which teacher made the biggest impression on you?',
        portuguese: 'Qual professor causou a maior impressão em você?',
        french: 'Quel professeur vous a le plus marqué ?',
        spanish: '¿Qué profesor te dejó la mayor impresión?',
      },
      {
        id: 'h11',
        dutch: 'Wat is je eerste herinnering?',
        english: 'What is your earliest memory?',
        portuguese: 'Qual é a sua primeira memória?',
        french: 'Quel est votre premier souvenir ?',
        spanish: '¿Cuál es tu primer recuerdo?',
      },
      {
        id: 'h12',
        dutch: 'Welk lied brengt je meteen terug naar een bepaald moment?',
        english: 'Which song immediately takes you back to a certain moment?',
        portuguese: 'Qual música te leva imediatamente de volta a um determinado momento?',
        french: 'Quelle chanson vous ramène immédiatement à un certain moment ?',
        spanish: '¿Qué canción te transporta de inmediato a un momento específico?',
      },
      {
        id: 'h13',
        dutch: 'Wat is het stoutste dat je als kind hebt gedaan?',
        english: 'What is the naughtiest thing you did as a child?',
        portuguese: 'Qual é a coisa mais travessa que você fez quando era criança?',
        french: 'Quelle est la chose la plus coquine que vous ayez faite étant enfant ?',
        spanish: '¿Cuál es la travesura más grande que hiciste de niño?',
      },
      {
        id: 'h14',
        dutch: 'Welke geur doet je meteen aan vroeger denken?',
        english: 'Which smell immediately reminds you of the past?',
        portuguese: 'Qual cheiro te faz lembrar imediatamente do passado?',
        french: 'Quelle odeur vous rappelle immédiatement le passé ?',
        spanish: '¿Qué olor te recuerda inmediatamente al pasado?',
      },
      {
        id: 'h15',
        dutch: 'Wat is een herinnering die je altijd aan het lachen maakt?',
        english: 'What is a memory that always makes you laugh?',
        portuguese: 'Qual é uma memória que sempre te faz rir?',
        french: 'Quel est un souvenir qui vous fait toujours rire ?',
        spanish: '¿Cuál es un recuerdo que siempre te hace reír?',
      },
      {
        id: 'h16',
        dutch: 'Welke tv-serie of film keek je altijd als kind?',
        english: 'Which TV show or movie did you always watch as a child?',
        portuguese: 'Qual série de TV ou filme você sempre assistia quando criança?',
        french: 'Quelle série télévisée ou quel film regardiez-vous toujours enfant ?',
        spanish: '¿Qué serie de TV o película veías siempre de niño?',
      },
      {
        id: 'h17',
        dutch: 'Wat is het avontuurlijkste dat je ooit hebt meegemaakt?',
        english:
          'What is the most adventurous thing you have ever experienced?',
        portuguese:
          'Qual é a coisa mais aventureira que você já viveu?',
        french:
          'Quelle est la chose la plus aventureuse que vous ayez jamais vécue ?',
        spanish:
          '¿Cuál es la aventura más grande que has vivido?',
      },
      {
        id: 'h18',
        dutch: 'Welk verjaardagsfeestje ben je nooit vergeten?',
        english: 'Which birthday party have you never forgotten?',
        portuguese: 'Qual festa de aniversário você nunca esqueceu?',
        french: 'Quelle fête d\'anniversaire n\'avez-vous jamais oubliée ?',
        spanish: '¿Qué fiesta de cumpleaños nunca has olvidado?',
      },
      {
        id: 'h19',
        dutch: 'Wat is een traditie uit je jeugd die je mist?',
        english: 'What is a tradition from your childhood that you miss?',
        portuguese: 'Qual é uma tradição da sua infância que você sente falta?',
        french: 'Quelle est une tradition de votre enfance qui vous manque ?',
        spanish: '¿Qué tradición de tu infancia echas de menos?',
      },
      {
        id: 'h20',
        dutch:
          'Wie was je beste vriend op de basisschool en wat deden jullie samen?',
        english:
          'Who was your best friend in primary school and what did you do together?',
        portuguese:
          'Quem era o seu melhor amigo na escola primária e o que vocês faziam juntos?',
        french:
          'Qui était votre meilleur ami à l\'école primaire et que faisiez-vous ensemble ?',
        spanish:
          '¿Quién era tu mejor amigo en la escuela primaria y qué hacían juntos?',
      },
      {
        id: 'h21',
        dutch: 'Wat is het meest bijzondere toeval dat je hebt meegemaakt?',
        english:
          'What is the most remarkable coincidence you have experienced?',
        portuguese:
          'Qual é a coincidência mais extraordinária que você já viveu?',
        french:
          'Quelle est la coïncidence la plus remarquable que vous ayez vécue ?',
        spanish:
          '¿Cuál es la coincidencia más extraordinaria que has vivido?',
      },
      {
        id: 'h22',
        dutch:
          'Heb je een foto die je altijd bij je draagt of bewaart? Wat staat erop?',
        english: 'Do you have a photo you always carry or keep? What is on it?',
        portuguese: 'Você tem uma foto que sempre carrega ou guarda? O que há nela?',
        french: 'Avez-vous une photo que vous portez ou gardez toujours ? Que contient-elle ?',
        spanish: '¿Tienes una foto que siempre llevas o guardas? ¿Qué hay en ella?',
      },
      {
        id: 'h23',
        dutch: 'Wat is de langste reis die je ooit hebt gemaakt?',
        english: 'What is the longest trip you have ever taken?',
        portuguese: 'Qual é a viagem mais longa que você já fez?',
        french: 'Quel est le plus long voyage que vous ayez jamais fait ?',
        spanish: '¿Cuál es el viaje más largo que has hecho?',
      },
      {
        id: 'h24',
        dutch: 'Welke smaak brengt je terug naar je kindertijd?',
        english: 'Which taste takes you back to your childhood?',
        portuguese: 'Qual sabor te leva de volta à sua infância?',
        french: 'Quel goût vous ramène à votre enfance ?',
        spanish: '¿Qué sabor te transporta de vuelta a tu infancia?',
      },
      {
        id: 'h25',
        dutch: 'Wat is het mooiste natuurverschijnsel dat je ooit hebt gezien?',
        english:
          'What is the most beautiful natural phenomenon you have ever seen?',
        portuguese:
          'Qual é o fenômeno natural mais bonito que você já viu?',
        french:
          'Quel est le plus beau phénomène naturel que vous ayez jamais vu ?',
        spanish:
          '¿Cuál es el fenómeno natural más hermoso que has visto?',
      },
      {
        id: 'h26',
        dutch: 'Welk huisdier heb je gehad dat je nooit zult vergeten?',
        english: 'Which pet did you have that you will never forget?',
        portuguese: 'Qual animal de estimação você teve que nunca vai esquecer?',
        french: 'Quel animal de compagnie avez-vous eu que vous n\'oublierez jamais ?',
        spanish: '¿Qué mascota tuviste que nunca olvidarás?',
      },
      {
        id: 'h27',
        dutch:
          'Wat is een moment waarop je je echt volwassen voelde voor het eerst?',
        english:
          'What is a moment when you truly felt like an adult for the first time?',
        portuguese:
          'Qual é um momento em que você se sentiu verdadeiramente adulto pela primeira vez?',
        french:
          'Quel est un moment où vous vous êtes vraiment senti adulte pour la première fois ?',
        spanish:
          '¿Cuál es un momento en que te sentiste verdaderamente adulto por primera vez?',
      },
      {
        id: 'h28',
        dutch: 'Welke plek uit je jeugd zou je graag nog een keer bezoeken?',
        english:
          'Which place from your childhood would you like to visit again?',
        portuguese:
          'Qual lugar da sua infância você gostaria de visitar novamente?',
        french:
          'Quel endroit de votre enfance aimeriez-vous revisiter ?',
        spanish:
          '¿Qué lugar de tu infancia te gustaría volver a visitar?',
      },
      {
        id: 'h29',
        dutch: 'Wat is het grappigste misverstand dat je ooit hebt meegemaakt?',
        english:
          'What is the funniest misunderstanding you have ever experienced?',
        portuguese:
          'Qual é o mal-entendido mais engraçado que você já viveu?',
        french:
          'Quel est le malentendu le plus drôle que vous ayez jamais vécu ?',
        spanish:
          '¿Cuál es el malentendido más gracioso que has vivido?',
      },
      {
        id: 'h30',
        dutch: 'Welk moment met vrienden koester je het meest?',
        english: 'Which moment with friends do you cherish the most?',
        portuguese: 'Qual momento com amigos você mais valoriza?',
        french: 'Quel moment avec des amis chérissez-vous le plus ?',
        spanish: '¿Qué momento con amigos atesoras más?',
      },
    ],
  },
  {
    id: 'zou-je-liever',
    name: 'Zou je liever',
    emoji: '🤔',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
    cards: [
      {
        id: 'z1',
        dutch: 'Zou je liever kunnen vliegen of onzichtbaar zijn?',
        english: 'Would you rather be able to fly or be invisible?',
        portuguese: 'Você preferiria poder voar ou ser invisível?',
        french: 'Préféreriez-vous pouvoir voler ou être invisible ?',
        spanish: '¿Preferirías poder volar o ser invisible?',
      },
      {
        id: 'z2',
        dutch: 'Zou je liever altijd te laat of altijd te vroeg zijn?',
        english: 'Would you rather always be late or always be early?',
        portuguese: 'Você preferiria sempre chegar atrasado ou sempre adiantado?',
        french: 'Préféreriez-vous toujours être en retard ou toujours en avance ?',
        spanish: '¿Preferirías llegar siempre tarde o siempre temprano?',
      },
      {
        id: 'z3',
        dutch: 'Zou je liever in de toekomst of het verleden leven?',
        english: 'Would you rather live in the future or the past?',
        portuguese: 'Você preferiria viver no futuro ou no passado?',
        french: 'Préféreriez-vous vivre dans le futur ou dans le passé ?',
        spanish: '¿Preferirías vivir en el futuro o en el pasado?',
      },
      {
        id: 'z4',
        dutch:
          'Zou je liever nooit meer hoeven slapen of nooit meer hoeven eten?',
        english: 'Would you rather never have to sleep or never have to eat?',
        portuguese: 'Você preferiria nunca mais precisar dormir ou nunca mais precisar comer?',
        french: 'Préféreriez-vous ne plus jamais avoir à dormir ou ne plus jamais avoir à manger ?',
        spanish: '¿Preferirías no tener que dormir nunca o no tener que comer nunca?',
      },
      {
        id: 'z5',
        dutch: 'Zou je liever alle talen spreken of elk instrument bespelen?',
        english:
          'Would you rather speak all languages or play every instrument?',
        portuguese:
          'Você preferiria falar todos os idiomas ou tocar todos os instrumentos?',
        french:
          'Préféreriez-vous parler toutes les langues ou jouer de tous les instruments ?',
        spanish:
          '¿Preferirías hablar todos los idiomas o tocar todos los instrumentos?',
      },
      {
        id: 'z6',
        dutch: 'Zou je liever beroemd of heel rijk zijn?',
        english: 'Would you rather be famous or very rich?',
        portuguese: 'Você preferiria ser famoso ou muito rico?',
        french: 'Préféreriez-vous être célèbre ou très riche ?',
        spanish: '¿Preferirías ser famoso o muy rico?',
      },
      {
        id: 'z7',
        dutch: 'Zou je liever aan het strand of in de bergen wonen?',
        english: 'Would you rather live at the beach or in the mountains?',
        portuguese: 'Você preferiria morar na praia ou nas montanhas?',
        french: 'Préféreriez-vous vivre à la plage ou à la montagne ?',
        spanish: '¿Preferirías vivir en la playa o en las montañas?',
      },
      {
        id: 'z8',
        dutch: 'Zou je liever gedachten kunnen lezen of de toekomst zien?',
        english: 'Would you rather read minds or see the future?',
        portuguese: 'Você preferiria ler mentes ou ver o futuro?',
        french: 'Préféreriez-vous lire dans les pensées ou voir l\'avenir ?',
        spanish: '¿Preferirías leer mentes o ver el futuro?',
      },
      {
        id: 'z9',
        dutch: 'Zou je liever altijd warm of altijd koud hebben?',
        english: 'Would you rather always be warm or always be cold?',
        portuguese: 'Você preferiria ter sempre calor ou sempre frio?',
        french: 'Préféreriez-vous toujours avoir chaud ou toujours avoir froid ?',
        spanish: '¿Preferirías tener siempre calor o siempre frío?',
      },
      {
        id: 'z10',
        dutch:
          'Zou je liever een week zonder telefoon of zonder vrienden doorbrengen?',
        english:
          'Would you rather spend a week without your phone or without friends?',
        portuguese:
          'Você preferiria passar uma semana sem celular ou sem amigos?',
        french:
          'Préféreriez-vous passer une semaine sans téléphone ou sans amis ?',
        spanish:
          '¿Preferirías pasar una semana sin teléfono o sin amigos?',
      },
      {
        id: 'z11',
        dutch:
          'Zou je liever de slimste of de grappigste persoon in de kamer zijn?',
        english:
          'Would you rather be the smartest or the funniest person in the room?',
        portuguese:
          'Você preferiria ser a pessoa mais inteligente ou a mais engraçada da sala?',
        french:
          'Préféreriez-vous être la personne la plus intelligente ou la plus drôle dans la pièce ?',
        spanish:
          '¿Preferirías ser la persona más inteligente o la más graciosa de la sala?',
      },
      {
        id: 'z12',
        dutch: 'Zou je liever eeuwig leven of tien levens achter elkaar?',
        english: 'Would you rather live forever or live ten lives in a row?',
        portuguese: 'Você preferiria viver eternamente ou viver dez vidas seguidas?',
        french: 'Préféreriez-vous vivre éternellement ou vivre dix vies d\'affilée ?',
        spanish: '¿Preferirías vivir eternamente o vivir diez vidas seguidas?',
      },
      {
        id: 'z13',
        dutch:
          'Zou je liever nooit meer kunnen liegen of nooit meer de waarheid horen?',
        english:
          'Would you rather never be able to lie or never hear the truth?',
        portuguese:
          'Você preferiria nunca mais poder mentir ou nunca mais ouvir a verdade?',
        french:
          'Préféreriez-vous ne plus jamais pouvoir mentir ou ne plus jamais entendre la vérité ?',
        spanish:
          '¿Preferirías no poder mentir nunca o no escuchar la verdad nunca?',
      },
      {
        id: 'z14',
        dutch:
          'Zou je liever altijd moeten zingen in plaats van praten of altijd moeten dansen in plaats van lopen?',
        english:
          'Would you rather always have to sing instead of talk or always have to dance instead of walk?',
        portuguese:
          'Você preferiria ter que cantar em vez de falar ou ter que dançar em vez de andar?',
        french:
          'Préféreriez-vous toujours devoir chanter au lieu de parler ou toujours devoir danser au lieu de marcher ?',
        spanish:
          '¿Preferirías tener que cantar en vez de hablar o tener que bailar en vez de caminar?',
      },
      {
        id: 'z15',
        dutch:
          'Zou je liever de hoofdpersoon zijn in een actiefilm of in een romantische komedie?',
        english:
          'Would you rather be the main character in an action movie or a romantic comedy?',
        portuguese:
          'Você preferiria ser o personagem principal de um filme de ação ou de uma comédia romântica?',
        french:
          'Préféreriez-vous être le personnage principal d\'un film d\'action ou d\'une comédie romantique ?',
        spanish:
          '¿Preferirías ser el personaje principal de una película de acción o de una comedia romántica?',
      },
      {
        id: 'z16',
        dutch:
          'Zou je liever elke dag hetzelfde weer hebben of elke dag ander weer?',
        english:
          'Would you rather have the same weather every day or different weather every day?',
        portuguese:
          'Você preferiria ter o mesmo tempo todos os dias ou um tempo diferente cada dia?',
        french:
          'Préféreriez-vous avoir le même temps chaque jour ou un temps différent chaque jour ?',
        spanish:
          '¿Preferirías tener el mismo clima todos los días o uno diferente cada día?',
      },
      {
        id: 'z17',
        dutch:
          'Zou je liever kunnen praten met dieren of alle computertalen beheersen?',
        english:
          'Would you rather be able to talk to animals or master every programming language?',
        portuguese:
          'Você preferiria poder falar com animais ou dominar todas as linguagens de programação?',
        french:
          'Préféreriez-vous pouvoir parler aux animaux ou maîtriser tous les langages informatiques ?',
        spanish:
          '¿Preferirías poder hablar con animales o dominar todos los lenguajes de programación?',
      },
      {
        id: 'z18',
        dutch:
          'Zou je liever een jaar in de ruimte doorbrengen of een jaar op de bodem van de oceaan?',
        english:
          'Would you rather spend a year in space or a year at the bottom of the ocean?',
        portuguese:
          'Você preferiria passar um ano no espaço ou um ano no fundo do oceano?',
        french:
          'Préféreriez-vous passer un an dans l\'espace ou un an au fond de l\'océan ?',
        spanish:
          '¿Preferirías pasar un año en el espacio o un año en el fondo del océano?',
      },
      {
        id: 'z19',
        dutch: 'Zou je liever altijd geluk hebben of altijd gelijk hebben?',
        english: 'Would you rather always be lucky or always be right?',
        portuguese: 'Você preferiria ter sempre sorte ou sempre ter razão?',
        french: 'Préféreriez-vous toujours avoir de la chance ou toujours avoir raison ?',
        spanish: '¿Preferirías tener siempre suerte o tener siempre razón?',
      },
      {
        id: 'z20',
        dutch:
          'Zou je liever je droomhuis hebben op een saaie plek of een klein huis op de mooiste plek ter wereld?',
        english:
          'Would you rather have your dream home in a boring location or a tiny house in the most beautiful place on earth?',
        portuguese:
          'Você preferiria ter a sua casa dos sonhos em um lugar monótono ou uma casinha no lugar mais bonito do mundo?',
        french:
          'Préféreriez-vous avoir votre maison de rêve dans un endroit ennuyeux ou une petite maison dans le plus bel endroit du monde ?',
        spanish:
          '¿Preferirías tener tu casa soñada en un lugar aburrido o una casita en el lugar más bonito del mundo?',
      },
      {
        id: 'z21',
        dutch:
          'Zou je liever alles weten over het verleden of alles over de toekomst?',
        english:
          'Would you rather know everything about the past or everything about the future?',
        portuguese:
          'Você preferiria saber tudo sobre o passado ou tudo sobre o futuro?',
        french:
          'Préféreriez-vous tout savoir sur le passé ou tout sur l\'avenir ?',
        spanish:
          '¿Preferirías saberlo todo sobre el pasado o todo sobre el futuro?',
      },
      {
        id: 'z22',
        dutch:
          'Zou je liever nooit meer sociale media gebruiken of nooit meer televisie kijken?',
        english:
          'Would you rather never use social media again or never watch television again?',
        portuguese:
          'Você preferiria nunca mais usar redes sociais ou nunca mais assistir televisão?',
        french:
          'Préféreriez-vous ne plus jamais utiliser les réseaux sociaux ou ne plus jamais regarder la télévision ?',
        spanish:
          '¿Preferirías no usar nunca más las redes sociales o no ver nunca más la televisión?',
      },
      {
        id: 'z23',
        dutch:
          'Zou je liever een perfect geheugen hebben of altijd het juiste antwoord weten?',
        english:
          'Would you rather have a perfect memory or always know the right answer?',
        portuguese:
          'Você preferiria ter uma memória perfeita ou sempre saber a resposta certa?',
        french:
          'Préféreriez-vous avoir une mémoire parfaite ou toujours connaître la bonne réponse ?',
        spanish:
          '¿Preferirías tener una memoria perfecta o saber siempre la respuesta correcta?',
      },
      {
        id: 'z24',
        dutch:
          'Zou je liever kunnen teleporteren of de tijd kunnen stilzetten?',
        english: 'Would you rather be able to teleport or stop time?',
        portuguese: 'Você preferiria poder se teleportar ou parar o tempo?',
        french: 'Préféreriez-vous pouvoir vous téléporter ou arrêter le temps ?',
        spanish: '¿Preferirías poder teletransportarte o detener el tiempo?',
      },
      {
        id: 'z25',
        dutch:
          'Zou je liever de rest van je leven op reis zijn of voor altijd op je lievelingsplek blijven?',
        english:
          'Would you rather travel for the rest of your life or stay in your favorite place forever?',
        portuguese:
          'Você preferiria viajar pelo resto da sua vida ou ficar para sempre no seu lugar favorito?',
        french:
          'Préféreriez-vous voyager pour le reste de votre vie ou rester pour toujours dans votre endroit préféré ?',
        spanish:
          '¿Preferirías viajar el resto de tu vida o quedarte para siempre en tu lugar favorito?',
      },
      {
        id: 'z26',
        dutch:
          'Zou je liever nooit meer hoeven werken of nooit meer hoeven koken?',
        english:
          'Would you rather never have to work again or never have to cook again?',
        portuguese:
          'Você preferiria nunca mais precisar trabalhar ou nunca mais precisar cozinhar?',
        french:
          'Préféreriez-vous ne plus jamais avoir à travailler ou ne plus jamais avoir à cuisiner ?',
        spanish:
          '¿Preferirías no tener que trabajar nunca más o no tener que cocinar nunca más?',
      },
      {
        id: 'z27',
        dutch:
          'Zou je liever de beste zijn in iets wat niemand kent of gemiddeld in iets wereldberoemds?',
        english:
          'Would you rather be the best at something nobody knows about or average at something world-famous?',
        portuguese:
          'Você preferiria ser o melhor em algo que ninguém conhece ou ser mediano em algo mundialmente famoso?',
        french:
          'Préféreriez-vous être le meilleur dans quelque chose que personne ne connaît ou être moyen dans quelque chose de mondialement célèbre ?',
        spanish:
          '¿Preferirías ser el mejor en algo que nadie conoce o ser mediocre en algo mundialmente famoso?',
      },
      {
        id: 'z28',
        dutch:
          'Zou je liever maar vier uur per nacht slapen zonder moe te zijn of twaalf uur moeten slapen?',
        english:
          'Would you rather sleep only four hours a night without being tired or have to sleep twelve hours?',
        portuguese:
          'Você preferiria dormir apenas quatro horas por noite sem ficar cansado ou ter que dormir doze horas?',
        french:
          'Préféreriez-vous ne dormir que quatre heures par nuit sans être fatigué ou devoir dormir douze heures ?',
        spanish:
          '¿Preferirías dormir solo cuatro horas por noche sin cansarte o tener que dormir doce horas?',
      },
      {
        id: 'z29',
        dutch:
          'Zou je liever je hele leven in een grote stad wonen of op het platteland?',
        english:
          'Would you rather live your whole life in a big city or in the countryside?',
        portuguese:
          'Você preferiria viver sua vida toda em uma grande cidade ou no campo?',
        french:
          'Préféreriez-vous vivre toute votre vie dans une grande ville ou à la campagne ?',
        spanish:
          '¿Preferirías vivir toda tu vida en una gran ciudad o en el campo?',
      },
      {
        id: 'z30',
        dutch: 'Zou je liever oneindig geduld hebben of oneindige energie?',
        english: 'Would you rather have infinite patience or infinite energy?',
        portuguese: 'Você preferiria ter paciência infinita ou energia infinita?',
        french: 'Préféreriez-vous avoir une patience infinie ou une énergie infinie ?',
        spanish: '¿Preferirías tener paciencia infinita o energía infinita?',
      },
    ],
  },
]
