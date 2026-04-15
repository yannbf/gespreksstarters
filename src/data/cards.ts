export interface Card {
  id: string
  dutch: string
  english: string
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
      },
      {
        id: 'l2',
        dutch: 'Welk eten zou je elke dag kunnen eten?',
        english: 'What food could you eat every day?',
      },
      {
        id: 'l3',
        dutch: 'Wat is je guilty pleasure?',
        english: 'What is your guilty pleasure?',
      },
      {
        id: 'l4',
        dutch: 'Als je een dier kon zijn, welk dier zou je kiezen?',
        english: 'If you could be an animal, which one would you choose?',
      },
      {
        id: 'l5',
        dutch: 'Wat is het raarste talent dat je hebt?',
        english: 'What is the weirdest talent you have?',
      },
      {
        id: 'l6',
        dutch: 'Welk liedje ken je helemaal uit je hoofd?',
        english: 'Which song do you know entirely by heart?',
      },
      {
        id: 'l7',
        dutch: 'Wat is de beste serie die je ooit hebt gezien?',
        english: 'What is the best series you have ever watched?',
      },
      {
        id: 'l8',
        dutch: 'Ben je een ochtendmens of een avondmens?',
        english: 'Are you a morning person or a night owl?',
      },
      {
        id: 'l9',
        dutch: 'Wat is je favoriete seizoen en waarom?',
        english: 'What is your favorite season and why?',
      },
      {
        id: 'l10',
        dutch: 'Als je één superkracht kon hebben, welke zou het zijn?',
        english: 'If you could have one superpower, what would it be?',
      },
      {
        id: 'l11',
        dutch: 'Wat is het laatste waar je heel hard om moest lachen?',
        english: 'What is the last thing that made you laugh really hard?',
      },
      {
        id: 'l12',
        dutch: 'Welk gerecht kun je het beste koken?',
        english: 'What dish can you cook the best?',
      },
      {
        id: 'l13',
        dutch: 'Wat is de slechtste film die je ooit hebt gezien?',
        english: 'What is the worst movie you have ever seen?',
      },
      {
        id: 'l14',
        dutch: 'Heb je een onzinnige gewoonte waar je niet mee kunt stoppen?',
        english: 'Do you have a silly habit you cannot stop?',
      },
      {
        id: 'l15',
        dutch: 'Wat was je bijnaam als kind?',
        english: 'What was your nickname as a child?',
      },
      {
        id: 'l16',
        dutch:
          'Als je op een onbewoond eiland één ding mocht meenemen, wat zou het zijn?',
        english:
          'If you could bring one thing to a deserted island, what would it be?',
      },
      {
        id: 'l17',
        dutch: 'Wat is het vreemdste dat je ooit hebt gegoogeld?',
        english: 'What is the strangest thing you have ever googled?',
      },
      {
        id: 'l18',
        dutch: 'Welke snack kun je echt niet laten staan?',
        english: 'Which snack can you absolutely not resist?',
      },
      {
        id: 'l19',
        dutch: 'Wat is je favoriete bordspel of kaartspel?',
        english: 'What is your favorite board game or card game?',
      },
      {
        id: 'l20',
        dutch: 'Heb je ooit een hele slechte kapsel gehad?',
        english: 'Have you ever had a really bad haircut?',
      },
      {
        id: 'l21',
        dutch: 'Wat is iets dat iedereen leuk lijkt te vinden behalve jij?',
        english: 'What is something everyone seems to like except you?',
      },
      {
        id: 'l22',
        dutch:
          'Als je een emoji moest kiezen die jou beschrijft, welke zou het zijn?',
        english:
          'If you had to pick an emoji that describes you, which one would it be?',
      },
      {
        id: 'l23',
        dutch: 'Wat is het langste dat je ooit hebt binge-gewatched?',
        english: 'What is the longest you have ever binge-watched something?',
      },
      {
        id: 'l24',
        dutch: 'Welke beroemdheid zou je uitnodigen voor een etentje?',
        english: 'Which celebrity would you invite to dinner?',
      },
      {
        id: 'l25',
        dutch:
          'Ben je ooit ergens per ongeluk ingelopen waar je niet hoorde te zijn?',
        english:
          'Have you ever accidentally walked into somewhere you were not supposed to be?',
      },
      {
        id: 'l26',
        dutch: 'Wat is het meest nutteloze feitje dat je kent?',
        english: 'What is the most useless fact you know?',
      },
      {
        id: 'l27',
        dutch: 'Houd je van karaoke? Wat zou je nummer zijn?',
        english: 'Do you like karaoke? What would your go-to song be?',
      },
      {
        id: 'l28',
        dutch:
          'Wat is je favoriete manier om een regenachtige dag door te brengen?',
        english: 'What is your favorite way to spend a rainy day?',
      },
      {
        id: 'l29',
        dutch: 'Als je een cartoon-personage kon zijn, wie zou je kiezen?',
        english: 'If you could be a cartoon character, who would you choose?',
      },
      {
        id: 'l30',
        dutch: 'Wat is de raarste combinatie van eten die je lekker vindt?',
        english: 'What is the weirdest food combination you enjoy?',
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
      },
      {
        id: 'd2',
        dutch: 'Waar ben je het meest dankbaar voor in je leven?',
        english: 'What are you most grateful for in your life?',
      },
      {
        id: 'd3',
        dutch: 'Welk moment heeft je leven het meest veranderd?',
        english: 'Which moment changed your life the most?',
      },
      {
        id: 'd4',
        dutch: 'Wat zou je tegen je jongere zelf zeggen?',
        english: 'What would you say to your younger self?',
      },
      {
        id: 'd5',
        dutch: 'Wat betekent geluk voor jou?',
        english: 'What does happiness mean to you?',
      },
      {
        id: 'd6',
        dutch: 'Welke les heb je op de moeilijke manier geleerd?',
        english: 'What lesson did you learn the hard way?',
      },
      {
        id: 'd7',
        dutch: 'Waar ben je het meest trots op?',
        english: 'What are you most proud of?',
      },
      {
        id: 'd8',
        dutch: 'Wat is je grootste angst en waarom?',
        english: 'What is your biggest fear and why?',
      },
      {
        id: 'd9',
        dutch:
          'Als je één ding aan de wereld kon veranderen, wat zou het zijn?',
        english:
          'If you could change one thing about the world, what would it be?',
      },
      {
        id: 'd10',
        dutch: 'Wat wil je dat mensen onthouden over jou?',
        english: 'What do you want people to remember about you?',
      },
      {
        id: 'd11',
        dutch: 'Welk boek of film heeft je kijk op het leven veranderd?',
        english: 'Which book or movie changed your perspective on life?',
      },
      {
        id: 'd12',
        dutch: 'Wat is iets dat je altijd al wilde vragen maar nooit durfde?',
        english: 'What is something you always wanted to ask but never dared?',
      },
      {
        id: 'd13',
        dutch: 'Geloof je dat mensen fundamenteel kunnen veranderen?',
        english: 'Do you believe people can fundamentally change?',
      },
      {
        id: 'd14',
        dutch: 'Wat is iets waar je vroeger zeker van was, maar nu niet meer?',
        english:
          'What is something you used to be certain about, but no longer are?',
      },
      {
        id: 'd15',
        dutch: 'Wanneer heb je je voor het laatst echt kwetsbaar opgesteld?',
        english: 'When was the last time you made yourself truly vulnerable?',
      },
      {
        id: 'd16',
        dutch: 'Wat zou je doen als niemand je kon beoordelen?',
        english: 'What would you do if nobody could judge you?',
      },
      {
        id: 'd17',
        dutch: 'Hoe definieer je succes voor jezelf?',
        english: 'How do you define success for yourself?',
      },
      {
        id: 'd18',
        dutch: 'Welk gesprek heeft de grootste indruk op je gemaakt?',
        english: 'Which conversation made the biggest impression on you?',
      },
      {
        id: 'd19',
        dutch:
          'Wat is iets dat je hebt losgelaten en waar je achteraf blij mee bent?',
        english:
          'What is something you let go of that you are glad about in hindsight?',
      },
      {
        id: 'd20',
        dutch: 'Hoe ga je om met onzekerheid over de toekomst?',
        english: 'How do you deal with uncertainty about the future?',
      },
      {
        id: 'd21',
        dutch: 'Wat vind je het moeilijkst om te accepteren aan het leven?',
        english: 'What do you find hardest to accept about life?',
      },
      {
        id: 'd22',
        dutch: 'Is er iets waar je spijt van hebt dat je het niet hebt gezegd?',
        english: 'Is there something you regret not having said?',
      },
      {
        id: 'd23',
        dutch: 'Wat maakt jou uniek en hoe voel je je daarover?',
        english: 'What makes you unique and how do you feel about it?',
      },
      {
        id: 'd24',
        dutch: 'Hoe weet je of je de juiste keuze maakt?',
        english: 'How do you know if you are making the right choice?',
      },
      {
        id: 'd25',
        dutch: 'Wat is het belangrijkste dat je van een vreemde hebt geleerd?',
        english:
          'What is the most important thing you learned from a stranger?',
      },
      {
        id: 'd26',
        dutch: 'Waar vind je rust als alles om je heen chaotisch is?',
        english:
          'Where do you find peace when everything around you is chaotic?',
      },
      {
        id: 'd27',
        dutch: 'Heb je ooit een overtuiging volledig losgelaten? Wat was dat?',
        english: 'Have you ever completely abandoned a belief? What was it?',
      },
      {
        id: 'd28',
        dutch: 'Wat zou je willen begrijpen dat je nu nog niet begrijpt?',
        english:
          'What would you like to understand that you do not understand yet?',
      },
      {
        id: 'd29',
        dutch: 'Wanneer voelde je je voor het laatst helemaal op je plek?',
        english: 'When did you last feel completely in your element?',
      },
      {
        id: 'd30',
        dutch:
          'Als je leven een boek was, welk hoofdstuk ben je nu aan het schrijven?',
        english: 'If your life were a book, which chapter are you writing now?',
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
      },
      {
        id: 'r2',
        dutch: 'Hoe laat je iemand weten dat je om hen geeft?',
        english: 'How do you show someone you care about them?',
      },
      {
        id: 'r3',
        dutch: 'Wat is de beste relatie-advies die je ooit hebt gekregen?',
        english: 'What is the best relationship advice you ever received?',
      },
      {
        id: 'r4',
        dutch: 'Wat is jouw liefdestaal?',
        english: 'What is your love language?',
      },
      {
        id: 'r5',
        dutch: 'Beschrijf je ideale date.',
        english: 'Describe your ideal date.',
      },
      {
        id: 'r6',
        dutch: 'Wat vind je het belangrijkste in een relatie?',
        english: 'What do you find most important in a relationship?',
      },
      {
        id: 'r7',
        dutch: 'Welke eigenschap bewonder je het meest bij anderen?',
        english: 'Which quality do you admire most in others?',
      },
      {
        id: 'r8',
        dutch: 'Hoe ga je om met meningsverschillen?',
        english: 'How do you handle disagreements?',
      },
      {
        id: 'r9',
        dutch: 'Wat is het mooiste compliment dat je ooit hebt gekregen?',
        english: 'What is the nicest compliment you have ever received?',
      },
      {
        id: 'r10',
        dutch: 'Wie heeft de grootste invloed gehad op wie je bent?',
        english: 'Who has had the biggest influence on who you are?',
      },
      {
        id: 'r11',
        dutch: 'Wat zou je nooit kunnen vergeven?',
        english: 'What could you never forgive?',
      },
      {
        id: 'r12',
        dutch: 'Hoe weet je of je iemand echt vertrouwt?',
        english: 'How do you know if you truly trust someone?',
      },
      {
        id: 'r13',
        dutch: 'Wat is het beste dat een vriend ooit voor je heeft gedaan?',
        english: 'What is the best thing a friend has ever done for you?',
      },
      {
        id: 'r14',
        dutch: 'Hoe houd je een vriendschap levend op afstand?',
        english: 'How do you keep a friendship alive over distance?',
      },
      {
        id: 'r15',
        dutch: 'Wat heb je geleerd van een relatie die niet heeft gewerkt?',
        english:
          'What did you learn from a relationship that did not work out?',
      },
      {
        id: 'r16',
        dutch: 'Hoe laat je iemand weten dat je sorry bent?',
        english: 'How do you let someone know you are sorry?',
      },
      {
        id: 'r17',
        dutch: 'Wat is de mooiste herinnering die je met een vriend deelt?',
        english: 'What is the most beautiful memory you share with a friend?',
      },
      {
        id: 'r18',
        dutch: 'Hoe merk je dat je je echt op je gemak voelt bij iemand?',
        english:
          'How do you notice that you feel truly comfortable with someone?',
      },
      {
        id: 'r19',
        dutch: 'Wat is een klein gebaar dat veel voor je betekent?',
        english: 'What is a small gesture that means a lot to you?',
      },
      {
        id: 'r20',
        dutch: 'Hoe ga je om met het verliezen van een vriendschap?',
        english: 'How do you cope with losing a friendship?',
      },
      {
        id: 'r21',
        dutch: 'Wat maakt iemand tot een goede luisteraar?',
        english: 'What makes someone a good listener?',
      },
      {
        id: 'r22',
        dutch: 'Hoe belangrijk is humor in je relaties?',
        english: 'How important is humor in your relationships?',
      },
      {
        id: 'r23',
        dutch:
          'Ben je iemand die snel vergeeft of heb je daar tijd voor nodig?',
        english: 'Are you someone who forgives quickly or do you need time?',
      },
      {
        id: 'r24',
        dutch: 'Wat is het moeilijkste gesprek dat je ooit hebt gevoerd?',
        english: 'What is the hardest conversation you have ever had?',
      },
      {
        id: 'r25',
        dutch: 'Hoe weet je of iemand echt naar je luistert?',
        english: 'How do you know if someone is really listening to you?',
      },
      {
        id: 'r26',
        dutch:
          'Wat is iets dat je in een relatie pas later hebt leren waarderen?',
        english:
          'What is something in a relationship you only learned to appreciate later?',
      },
      {
        id: 'r27',
        dutch: 'Hoe balanceer je je eigen behoeften met die van de ander?',
        english:
          'How do you balance your own needs with those of the other person?',
      },
      {
        id: 'r28',
        dutch: 'Wat vind je het moeilijkst om te communiceren in een relatie?',
        english: 'What do you find hardest to communicate in a relationship?',
      },
      {
        id: 'r29',
        dutch: 'Hoe vier je de mensen om je heen?',
        english: 'How do you celebrate the people around you?',
      },
      {
        id: 'r30',
        dutch: 'Wat zou je willen dat meer mensen begrepen over jou?',
        english: 'What do you wish more people understood about you?',
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
      },
      {
        id: 'dr2',
        dutch: 'Waar zie je jezelf over vijf jaar?',
        english: 'Where do you see yourself in five years?',
      },
      {
        id: 'dr3',
        dutch: 'Wat is je droombaan?',
        english: 'What is your dream job?',
      },
      {
        id: 'dr4',
        dutch: 'Als geld geen rol speelde, wat zou je dan doen?',
        english: 'If money were no object, what would you do?',
      },
      {
        id: 'dr5',
        dutch: 'Welk land wil je het liefst bezoeken?',
        english: 'Which country would you most like to visit?',
      },
      {
        id: 'dr6',
        dutch: 'Wat wil je nog leren in je leven?',
        english: 'What do you still want to learn in your life?',
      },
      {
        id: 'dr7',
        dutch: 'Wat is een doel waar je nu aan werkt?',
        english: 'What is a goal you are currently working on?',
      },
      {
        id: 'dr8',
        dutch: 'Welke vaardigheid zou je willen beheersen?',
        english: 'What skill would you like to master?',
      },
      {
        id: 'dr9',
        dutch: 'Wat zou je doen als je wist dat je niet kon falen?',
        english: 'What would you do if you knew you could not fail?',
      },
      {
        id: 'dr10',
        dutch: 'Wat is je grootste ambitie?',
        english: 'What is your biggest ambition?',
      },
      {
        id: 'dr11',
        dutch: 'Welk avontuur wil je nog beleven?',
        english: 'What adventure do you still want to experience?',
      },
      {
        id: 'dr12',
        dutch: 'Als je een bedrijf kon starten, wat zou het zijn?',
        english: 'If you could start a business, what would it be?',
      },
      {
        id: 'dr13',
        dutch: 'Welk project zou je starten als je een heel jaar vrij had?',
        english: 'What project would you start if you had a whole year off?',
      },
      {
        id: 'dr14',
        dutch:
          'Wat is een droom die je hebt opgegeven en wil je die nog steeds?',
        english: 'What is a dream you gave up on and do you still want it?',
      },
      {
        id: 'dr15',
        dutch: 'In welke stad of welk dorp zou je het liefst willen wonen?',
        english: 'In which city or town would you most like to live?',
      },
      {
        id: 'dr16',
        dutch: 'Wat zou je willen uitvinden als je kon?',
        english: 'What would you like to invent if you could?',
      },
      {
        id: 'dr17',
        dutch: 'Welk probleem in de wereld zou je het liefst oplossen?',
        english: 'Which problem in the world would you most like to solve?',
      },
      {
        id: 'dr18',
        dutch: 'Wat is iets waar je naartoe spaart of naar uitkijkt?',
        english:
          'What is something you are saving up for or looking forward to?',
      },
      {
        id: 'dr19',
        dutch: 'Als je een boek kon schrijven, waar zou het over gaan?',
        english: 'If you could write a book, what would it be about?',
      },
      {
        id: 'dr20',
        dutch: 'Welke gewoonte wil je dit jaar ontwikkelen?',
        english: 'What habit do you want to develop this year?',
      },
      {
        id: 'dr21',
        dutch: 'Wat is een kleine droom die je makkelijk zou kunnen waarmaken?',
        english: 'What is a small dream you could easily make come true?',
      },
      {
        id: 'dr22',
        dutch:
          'Als je een cursus of opleiding kon volgen, welke zou je kiezen?',
        english:
          'If you could take any course or degree, which one would you choose?',
      },
      {
        id: 'dr23',
        dutch: 'Hoe ziet je ideale dagindeling eruit?',
        english: 'What does your ideal daily routine look like?',
      },
      {
        id: 'dr24',
        dutch: 'Wat wil je over tien jaar bereikt hebben?',
        english: 'What do you want to have achieved in ten years?',
      },
      {
        id: 'dr25',
        dutch: 'Als je een TED Talk mocht geven, waar zou die over gaan?',
        english: 'If you could give a TED Talk, what would it be about?',
      },
      {
        id: 'dr26',
        dutch: 'Welk talent zou je willen hebben dat je nu niet hebt?',
        english: 'What talent would you like to have that you do not have now?',
      },
      {
        id: 'dr27',
        dutch: 'Wat is je droomhuis? Beschrijf het.',
        english: 'What is your dream home? Describe it.',
      },
      {
        id: 'dr28',
        dutch:
          'Als je een jaar in het buitenland mocht werken, waar zou je naartoe gaan?',
        english: 'If you could work abroad for a year, where would you go?',
      },
      {
        id: 'dr29',
        dutch: 'Wat zou je willen nalaten aan de volgende generatie?',
        english: 'What would you like to leave behind for the next generation?',
      },
      {
        id: 'dr30',
        dutch: 'Wat houdt je tegen om je grootste droom na te jagen?',
        english: 'What is holding you back from chasing your biggest dream?',
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
      },
      {
        id: 'h2',
        dutch: 'Welke vakantie zul je nooit vergeten?',
        english: 'Which vacation will you never forget?',
      },
      {
        id: 'h3',
        dutch: 'Wat is het beste cadeau dat je ooit hebt gekregen?',
        english: 'What is the best gift you have ever received?',
      },
      {
        id: 'h4',
        dutch: 'Welk moment zou je opnieuw willen beleven?',
        english: 'Which moment would you like to relive?',
      },
      {
        id: 'h5',
        dutch: 'Wat is de gekste plek waar je ooit bent geweest?',
        english: 'What is the craziest place you have ever been?',
      },
      {
        id: 'h6',
        dutch: 'Welk familietradition is je het dierbaarst?',
        english: 'Which family tradition is dearest to you?',
      },
      {
        id: 'h7',
        dutch: 'Wat was je favoriete speelgoed als kind?',
        english: 'What was your favorite toy as a child?',
      },
      {
        id: 'h8',
        dutch: 'Welk concert of evenement zul je nooit vergeten?',
        english: 'Which concert or event will you never forget?',
      },
      {
        id: 'h9',
        dutch: 'Wat is de beste maaltijd die je ooit hebt gegeten?',
        english: 'What is the best meal you have ever eaten?',
      },
      {
        id: 'h10',
        dutch: 'Welke leraar heeft de meeste indruk op je gemaakt?',
        english: 'Which teacher made the biggest impression on you?',
      },
      {
        id: 'h11',
        dutch: 'Wat is je eerste herinnering?',
        english: 'What is your earliest memory?',
      },
      {
        id: 'h12',
        dutch: 'Welk lied brengt je meteen terug naar een bepaald moment?',
        english: 'Which song immediately takes you back to a certain moment?',
      },
      {
        id: 'h13',
        dutch: 'Wat is het stoutste dat je als kind hebt gedaan?',
        english: 'What is the naughtiest thing you did as a child?',
      },
      {
        id: 'h14',
        dutch: 'Welke geur doet je meteen aan vroeger denken?',
        english: 'Which smell immediately reminds you of the past?',
      },
      {
        id: 'h15',
        dutch: 'Wat is een herinnering die je altijd aan het lachen maakt?',
        english: 'What is a memory that always makes you laugh?',
      },
      {
        id: 'h16',
        dutch: 'Welke tv-serie of film keek je altijd als kind?',
        english: 'Which TV show or movie did you always watch as a child?',
      },
      {
        id: 'h17',
        dutch: 'Wat is het avontuurlijkste dat je ooit hebt meegemaakt?',
        english:
          'What is the most adventurous thing you have ever experienced?',
      },
      {
        id: 'h18',
        dutch: 'Welk verjaardagsfeestje ben je nooit vergeten?',
        english: 'Which birthday party have you never forgotten?',
      },
      {
        id: 'h19',
        dutch: 'Wat is een traditie uit je jeugd die je mist?',
        english: 'What is a tradition from your childhood that you miss?',
      },
      {
        id: 'h20',
        dutch:
          'Wie was je beste vriend op de basisschool en wat deden jullie samen?',
        english:
          'Who was your best friend in primary school and what did you do together?',
      },
      {
        id: 'h21',
        dutch: 'Wat is het meest bijzondere toeval dat je hebt meegemaakt?',
        english:
          'What is the most remarkable coincidence you have experienced?',
      },
      {
        id: 'h22',
        dutch:
          'Heb je een foto die je altijd bij je draagt of bewaart? Wat staat erop?',
        english: 'Do you have a photo you always carry or keep? What is on it?',
      },
      {
        id: 'h23',
        dutch: 'Wat is de langste reis die je ooit hebt gemaakt?',
        english: 'What is the longest trip you have ever taken?',
      },
      {
        id: 'h24',
        dutch: 'Welke smaak brengt je terug naar je kindertijd?',
        english: 'Which taste takes you back to your childhood?',
      },
      {
        id: 'h25',
        dutch: 'Wat is het mooiste natuurverschijnsel dat je ooit hebt gezien?',
        english:
          'What is the most beautiful natural phenomenon you have ever seen?',
      },
      {
        id: 'h26',
        dutch: 'Welk huisdier heb je gehad dat je nooit zult vergeten?',
        english: 'Which pet did you have that you will never forget?',
      },
      {
        id: 'h27',
        dutch:
          'Wat is een moment waarop je je echt volwassen voelde voor het eerst?',
        english:
          'What is a moment when you truly felt like an adult for the first time?',
      },
      {
        id: 'h28',
        dutch: 'Welke plek uit je jeugd zou je graag nog een keer bezoeken?',
        english:
          'Which place from your childhood would you like to visit again?',
      },
      {
        id: 'h29',
        dutch: 'Wat is het grappigste misverstand dat je ooit hebt meegemaakt?',
        english:
          'What is the funniest misunderstanding you have ever experienced?',
      },
      {
        id: 'h30',
        dutch: 'Welk moment met vrienden koester je het meest?',
        english: 'Which moment with friends do you cherish the most?',
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
      },
      {
        id: 'z2',
        dutch: 'Zou je liever altijd te laat of altijd te vroeg zijn?',
        english: 'Would you rather always be late or always be early?',
      },
      {
        id: 'z3',
        dutch: 'Zou je liever in de toekomst of het verleden leven?',
        english: 'Would you rather live in the future or the past?',
      },
      {
        id: 'z4',
        dutch:
          'Zou je liever nooit meer hoeven slapen of nooit meer hoeven eten?',
        english: 'Would you rather never have to sleep or never have to eat?',
      },
      {
        id: 'z5',
        dutch: 'Zou je liever alle talen spreken of elk instrument bespelen?',
        english:
          'Would you rather speak all languages or play every instrument?',
      },
      {
        id: 'z6',
        dutch: 'Zou je liever beroemd of heel rijk zijn?',
        english: 'Would you rather be famous or very rich?',
      },
      {
        id: 'z7',
        dutch: 'Zou je liever aan het strand of in de bergen wonen?',
        english: 'Would you rather live at the beach or in the mountains?',
      },
      {
        id: 'z8',
        dutch: 'Zou je liever gedachten kunnen lezen of de toekomst zien?',
        english: 'Would you rather read minds or see the future?',
      },
      {
        id: 'z9',
        dutch: 'Zou je liever altijd warm of altijd koud hebben?',
        english: 'Would you rather always be warm or always be cold?',
      },
      {
        id: 'z10',
        dutch:
          'Zou je liever een week zonder telefoon of zonder vrienden doorbrengen?',
        english:
          'Would you rather spend a week without your phone or without friends?',
      },
      {
        id: 'z11',
        dutch:
          'Zou je liever de slimste of de grappigste persoon in de kamer zijn?',
        english:
          'Would you rather be the smartest or the funniest person in the room?',
      },
      {
        id: 'z12',
        dutch: 'Zou je liever eeuwig leven of tien levens achter elkaar?',
        english: 'Would you rather live forever or live ten lives in a row?',
      },
      {
        id: 'z13',
        dutch:
          'Zou je liever nooit meer kunnen liegen of nooit meer de waarheid horen?',
        english:
          'Would you rather never be able to lie or never hear the truth?',
      },
      {
        id: 'z14',
        dutch:
          'Zou je liever altijd moeten zingen in plaats van praten of altijd moeten dansen in plaats van lopen?',
        english:
          'Would you rather always have to sing instead of talk or always have to dance instead of walk?',
      },
      {
        id: 'z15',
        dutch:
          'Zou je liever de hoofdpersoon zijn in een actiefilm of in een romantische komedie?',
        english:
          'Would you rather be the main character in an action movie or a romantic comedy?',
      },
      {
        id: 'z16',
        dutch:
          'Zou je liever elke dag hetzelfde weer hebben of elke dag ander weer?',
        english:
          'Would you rather have the same weather every day or different weather every day?',
      },
      {
        id: 'z17',
        dutch:
          'Zou je liever kunnen praten met dieren of alle computertalen beheersen?',
        english:
          'Would you rather be able to talk to animals or master every programming language?',
      },
      {
        id: 'z18',
        dutch:
          'Zou je liever een jaar in de ruimte doorbrengen of een jaar op de bodem van de oceaan?',
        english:
          'Would you rather spend a year in space or a year at the bottom of the ocean?',
      },
      {
        id: 'z19',
        dutch: 'Zou je liever altijd geluk hebben of altijd gelijk hebben?',
        english: 'Would you rather always be lucky or always be right?',
      },
      {
        id: 'z20',
        dutch:
          'Zou je liever je droomhuis hebben op een saaie plek of een klein huis op de mooiste plek ter wereld?',
        english:
          'Would you rather have your dream home in a boring location or a tiny house in the most beautiful place on earth?',
      },
      {
        id: 'z21',
        dutch:
          'Zou je liever alles weten over het verleden of alles over de toekomst?',
        english:
          'Would you rather know everything about the past or everything about the future?',
      },
      {
        id: 'z22',
        dutch:
          'Zou je liever nooit meer sociale media gebruiken of nooit meer televisie kijken?',
        english:
          'Would you rather never use social media again or never watch television again?',
      },
      {
        id: 'z23',
        dutch:
          'Zou je liever een perfect geheugen hebben of altijd het juiste antwoord weten?',
        english:
          'Would you rather have a perfect memory or always know the right answer?',
      },
      {
        id: 'z24',
        dutch:
          'Zou je liever kunnen teleporteren of de tijd kunnen stilzetten?',
        english: 'Would you rather be able to teleport or stop time?',
      },
      {
        id: 'z25',
        dutch:
          'Zou je liever de rest van je leven op reis zijn of voor altijd op je lievelingsplek blijven?',
        english:
          'Would you rather travel for the rest of your life or stay in your favorite place forever?',
      },
      {
        id: 'z26',
        dutch:
          'Zou je liever nooit meer hoeven werken of nooit meer hoeven koken?',
        english:
          'Would you rather never have to work again or never have to cook again?',
      },
      {
        id: 'z27',
        dutch:
          'Zou je liever de beste zijn in iets wat niemand kent of gemiddeld in iets wereldberoemds?',
        english:
          'Would you rather be the best at something nobody knows about or average at something world-famous?',
      },
      {
        id: 'z28',
        dutch:
          'Zou je liever maar vier uur per nacht slapen zonder moe te zijn of twaalf uur moeten slapen?',
        english:
          'Would you rather sleep only four hours a night without being tired or have to sleep twelve hours?',
      },
      {
        id: 'z29',
        dutch:
          'Zou je liever je hele leven in een grote stad wonen of op het platteland?',
        english:
          'Would you rather live your whole life in a big city or in the countryside?',
      },
      {
        id: 'z30',
        dutch: 'Zou je liever oneindig geduld hebben of oneindige energie?',
        english: 'Would you rather have infinite patience or infinite energy?',
      },
    ],
  },
]
