export interface Card {
  id: string;
  dutch: string;
  english: string;
}

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  color: string;
  gradient: string;
  cards: Card[];
}

export const themes: Theme[] = [
  {
    id: 'diepgaand',
    name: 'Diepgaand',
    emoji: '🌊',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)',
    cards: [
      { id: 'd1', dutch: 'Wat is het moedigste dat je ooit hebt gedaan?', english: 'What is the bravest thing you have ever done?' },
      { id: 'd2', dutch: 'Waar ben je het meest dankbaar voor in je leven?', english: 'What are you most grateful for in your life?' },
      { id: 'd3', dutch: 'Welk moment heeft je leven het meest veranderd?', english: 'Which moment changed your life the most?' },
      { id: 'd4', dutch: 'Wat zou je tegen je jongere zelf zeggen?', english: 'What would you say to your younger self?' },
      { id: 'd5', dutch: 'Wat betekent geluk voor jou?', english: 'What does happiness mean to you?' },
      { id: 'd6', dutch: 'Welke les heb je op de moeilijke manier geleerd?', english: 'What lesson did you learn the hard way?' },
      { id: 'd7', dutch: 'Waar ben je het meest trots op?', english: 'What are you most proud of?' },
      { id: 'd8', dutch: 'Wat is je grootste angst en waarom?', english: 'What is your biggest fear and why?' },
      { id: 'd9', dutch: 'Als je één ding aan de wereld kon veranderen, wat zou het zijn?', english: 'If you could change one thing about the world, what would it be?' },
      { id: 'd10', dutch: 'Wat wil je dat mensen onthouden over jou?', english: 'What do you want people to remember about you?' },
      { id: 'd11', dutch: 'Welk boek of film heeft je kijk op het leven veranderd?', english: 'Which book or movie changed your perspective on life?' },
      { id: 'd12', dutch: 'Wat is iets dat je altijd al wilde vragen maar nooit durfde?', english: 'What is something you always wanted to ask but never dared?' },
    ],
  },
  {
    id: 'luchtig',
    name: 'Luchtig',
    emoji: '☀️',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 50%, #fbbf24 100%)',
    cards: [
      { id: 'l1', dutch: 'Wat is het grappigste dat je ooit is overkomen?', english: 'What is the funniest thing that ever happened to you?' },
      { id: 'l2', dutch: 'Welk eten zou je elke dag kunnen eten?', english: 'What food could you eat every day?' },
      { id: 'l3', dutch: 'Wat is je guilty pleasure?', english: 'What is your guilty pleasure?' },
      { id: 'l4', dutch: 'Als je een dier kon zijn, welk dier zou je kiezen?', english: 'If you could be an animal, which one would you choose?' },
      { id: 'l5', dutch: 'Wat is het raarste talent dat je hebt?', english: 'What is the weirdest talent you have?' },
      { id: 'l6', dutch: 'Welk liedje ken je helemaal uit je hoofd?', english: 'Which song do you know entirely by heart?' },
      { id: 'l7', dutch: 'Wat is de beste serie die je ooit hebt gezien?', english: 'What is the best series you have ever watched?' },
      { id: 'l8', dutch: 'Ben je een ochtendmens of een avondmens?', english: 'Are you a morning person or a night owl?' },
      { id: 'l9', dutch: 'Wat is je favoriete seizoen en waarom?', english: 'What is your favorite season and why?' },
      { id: 'l10', dutch: 'Als je één superkracht kon hebben, welke zou het zijn?', english: 'If you could have one superpower, what would it be?' },
      { id: 'l11', dutch: 'Wat is het laatste waar je heel hard om moest lachen?', english: 'What is the last thing that made you laugh really hard?' },
      { id: 'l12', dutch: 'Welk gerecht kun je het beste koken?', english: 'What dish can you cook the best?' },
    ],
  },
  {
    id: 'relaties',
    name: 'Relaties',
    emoji: '💕',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 50%, #fb7185 100%)',
    cards: [
      { id: 'r1', dutch: 'Wat waardeer je het meest in een vriendschap?', english: 'What do you value most in a friendship?' },
      { id: 'r2', dutch: 'Hoe laat je iemand weten dat je om hen geeft?', english: 'How do you show someone you care about them?' },
      { id: 'r3', dutch: 'Wat is de beste relatie-advies die je ooit hebt gekregen?', english: 'What is the best relationship advice you ever received?' },
      { id: 'r4', dutch: 'Wat is jouw liefdestaal?', english: 'What is your love language?' },
      { id: 'r5', dutch: 'Beschrijf je ideale date.', english: 'Describe your ideal date.' },
      { id: 'r6', dutch: 'Wat vind je het belangrijkste in een relatie?', english: 'What do you find most important in a relationship?' },
      { id: 'r7', dutch: 'Welke eigenschap bewonder je het meest bij anderen?', english: 'Which quality do you admire most in others?' },
      { id: 'r8', dutch: 'Hoe ga je om met meningsverschillen?', english: 'How do you handle disagreements?' },
      { id: 'r9', dutch: 'Wat is het mooiste compliment dat je ooit hebt gekregen?', english: 'What is the nicest compliment you have ever received?' },
      { id: 'r10', dutch: 'Wie heeft de grootste invloed gehad op wie je bent?', english: 'Who has had the biggest influence on who you are?' },
      { id: 'r11', dutch: 'Wat zou je nooit kunnen vergeven?', english: 'What could you never forgive?' },
      { id: 'r12', dutch: 'Hoe weet je of je iemand echt vertrouwt?', english: 'How do you know if you truly trust someone?' },
    ],
  },
  {
    id: 'dromen',
    name: 'Dromen & Doelen',
    emoji: '✨',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
    cards: [
      { id: 'dr1', dutch: 'Wat staat er bovenaan je bucketlist?', english: 'What is at the top of your bucket list?' },
      { id: 'dr2', dutch: 'Waar zie je jezelf over vijf jaar?', english: 'Where do you see yourself in five years?' },
      { id: 'dr3', dutch: 'Wat is je droombaan?', english: 'What is your dream job?' },
      { id: 'dr4', dutch: 'Als geld geen rol speelde, wat zou je dan doen?', english: 'If money were no object, what would you do?' },
      { id: 'dr5', dutch: 'Welk land wil je het liefst bezoeken?', english: 'Which country would you most like to visit?' },
      { id: 'dr6', dutch: 'Wat wil je nog leren in je leven?', english: 'What do you still want to learn in your life?' },
      { id: 'dr7', dutch: 'Wat is een doel waar je nu aan werkt?', english: 'What is a goal you are currently working on?' },
      { id: 'dr8', dutch: 'Welke vaardigheid zou je willen beheersen?', english: 'What skill would you like to master?' },
      { id: 'dr9', dutch: 'Wat zou je doen als je wist dat je niet kon falen?', english: 'What would you do if you knew you could not fail?' },
      { id: 'dr10', dutch: 'Wat is je grootste ambitie?', english: 'What is your biggest ambition?' },
      { id: 'dr11', dutch: 'Welk avontuur wil je nog beleven?', english: 'What adventure do you still want to experience?' },
      { id: 'dr12', dutch: 'Als je een bedrijf kon starten, wat zou het zijn?', english: 'If you could start a business, what would it be?' },
    ],
  },
  {
    id: 'herinneringen',
    name: 'Herinneringen',
    emoji: '📸',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 50%, #c4b5fd 100%)',
    cards: [
      { id: 'h1', dutch: 'Wat is je mooiste jeugdherinnering?', english: 'What is your most beautiful childhood memory?' },
      { id: 'h2', dutch: 'Welke vakantie zul je nooit vergeten?', english: 'Which vacation will you never forget?' },
      { id: 'h3', dutch: 'Wat is het beste cadeau dat je ooit hebt gekregen?', english: 'What is the best gift you have ever received?' },
      { id: 'h4', dutch: 'Welk moment zou je opnieuw willen beleven?', english: 'Which moment would you like to relive?' },
      { id: 'h5', dutch: 'Wat is de gekste plek waar je ooit bent geweest?', english: 'What is the craziest place you have ever been?' },
      { id: 'h6', dutch: 'Welk familietradition is je het dierbaarst?', english: 'Which family tradition is dearest to you?' },
      { id: 'h7', dutch: 'Wat was je favoriete speelgoed als kind?', english: 'What was your favorite toy as a child?' },
      { id: 'h8', dutch: 'Welk concert of evenement zul je nooit vergeten?', english: 'Which concert or event will you never forget?' },
      { id: 'h9', dutch: 'Wat is de beste maaltijd die je ooit hebt gegeten?', english: 'What is the best meal you have ever eaten?' },
      { id: 'h10', dutch: 'Welke leraar heeft de meeste indruk op je gemaakt?', english: 'Which teacher made the biggest impression on you?' },
      { id: 'h11', dutch: 'Wat is je eerste herinnering?', english: 'What is your earliest memory?' },
      { id: 'h12', dutch: 'Welk lied brengt je meteen terug naar een bepaald moment?', english: 'Which song immediately takes you back to a certain moment?' },
    ],
  },
  {
    id: 'zou-je-liever',
    name: 'Zou je liever',
    emoji: '🤔',
    color: '#ef4444',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
    cards: [
      { id: 'z1', dutch: 'Zou je liever kunnen vliegen of onzichtbaar zijn?', english: 'Would you rather be able to fly or be invisible?' },
      { id: 'z2', dutch: 'Zou je liever altijd te laat of altijd te vroeg zijn?', english: 'Would you rather always be late or always be early?' },
      { id: 'z3', dutch: 'Zou je liever in de toekomst of het verleden leven?', english: 'Would you rather live in the future or the past?' },
      { id: 'z4', dutch: 'Zou je liever nooit meer hoeven slapen of nooit meer hoeven eten?', english: 'Would you rather never have to sleep or never have to eat?' },
      { id: 'z5', dutch: 'Zou je liever alle talen spreken of elk instrument bespelen?', english: 'Would you rather speak all languages or play every instrument?' },
      { id: 'z6', dutch: 'Zou je liever beroemd of heel rijk zijn?', english: 'Would you rather be famous or very rich?' },
      { id: 'z7', dutch: 'Zou je liever aan het strand of in de bergen wonen?', english: 'Would you rather live at the beach or in the mountains?' },
      { id: 'z8', dutch: 'Zou je liever gedachten kunnen lezen of de toekomst zien?', english: 'Would you rather read minds or see the future?' },
      { id: 'z9', dutch: 'Zou je liever altijd warm of altijd koud hebben?', english: 'Would you rather always be warm or always be cold?' },
      { id: 'z10', dutch: 'Zou je liever een week zonder telefoon of zonder vrienden doorbrengen?', english: 'Would you rather spend a week without your phone or without friends?' },
      { id: 'z11', dutch: 'Zou je liever de slimste of de grappigste persoon in de kamer zijn?', english: 'Would you rather be the smartest or the funniest person in the room?' },
      { id: 'z12', dutch: 'Zou je liever eeuwig leven of tien levens achter elkaar?', english: 'Would you rather live forever or live ten lives in a row?' },
    ],
  },
];
