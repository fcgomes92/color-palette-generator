function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateName() {
  const firstName = [
    'Strawberries And Cream',
    'NSP Theme Song',
    'The Decision',
    'Dinosaur Laser Fight',
    'Objects Of Desire',
    'If We Were Gay',
    'No Reason Boner',
    'Puppies In Space',
    'Sex Training',
    'Manticore',
    'You Can Do Us!',
    'I Just Want To (Dance)',
    'Three Minutes Of Ecstasy',
    'Accept My Shaft',
    'Outroduction',
    'Best Friends Forever!',
    'Unicorn Wizard',
    "Let's Get This Terrible Party Started",
    'Next To You',
    'Symphony In P Minor',
    'The Sacred Chalice, Pt. 1',
    'Everybody Shut Up (I Have An Erection)',
    'FYI I Wanna F Your A',
    'Shredded Metal',
    'Rhinoceratops Vs. Superpuma',
    'The Ultimate Sandwich',
    'Attitude City',
    'NSFW',
    'Road Trip',
    'Attitude City',
    'Why I Cry',
    'Dubstep',
    'Dragon Slayer',
    'Party Of Three',
    'Buttsex Goldilocks',
    'Samurai Abstinence Patrol',
    'Peppermint Creams',
    'Cookies!',
    '6969',
    'Take On Me',
    'Everybody Wants To Rule The World',
    'Subdivisions',
    'Your Love',
    'Misunderstanding',
    'Rock With You',
    'Madrigal',
    'The Burning Down',
    'Jump',
    'We Close Our Eyes',
    'The Last Unicorn',
    'Wish You Were Here',
    'Under The Covers',
    'Africa',
    'More Than A Feeling',
    'Limelight',
    'Pour Some Sugar On Me',
    'Something About You',
    'In Your Eyes',
    'Heat Of The Moment',
    'You Spin Me Round (Like A Record)',
    "Don't Lose My Number",
    'I Wish',
    'Your Wildest Dreams',
    'Rocket Man',
    'Cool Patrol',
    'Cool Patrol',
    'Orgy For One',
    "Danny Don't You Know",
    'Release The Kraken',
    'Ninja Brian Goes to Soccer Practice',
    'First Date',
    "Smooth Talkin'",
    'Heart Boner (Part II Of The Boner Trilogy)',
    'Romance Novel',
    'Eating Food In The Shower',
    'Courtship Of The Mermaid',
    'GFY',
    'Mansion Party',
    'We Built This City',
    'Photograph',
    'Down Under',
    'Sledgehammer',
    'Glory Of Love',
    'Always Something There To Remind Me',
    'Closer To The Heart',
    'Nights On Broadway',
    'Owner Of A Lonely Heart',
    'When You Were Mine',
    'Safety Dance',
    "I Won't Back Down",
    "Don't Fear The Reaper",
    "There's Nothing Left, Pt. 1",
    'The Hand Of John L. Sullivan',
    'Welcome To Adamstown',
    'Reptiles (We Woke Up)',
    "The Days We've Yet To Meet",
    'Life Is Good',
    'The Last Serenade (Sailors And Fishermen)',
    'The Guns Of Jericho',
    'Crushed (Hostile Nations)',
    'Hope',
    'The Bride Wore Black',
    'Until We Meet Again',
    'Speed Of Darkness',
    'Revolution',
    'The Heart Of The Sea',
    "Don't Shut 'Em Down",
    "The Power's Out",
    'So Sail On',
    'Saints & Sinners',
    'This Present State Of Grace',
    'The Cradle Of Humankind',
    'Oliver Boy (All Of Our Boys)',
    'A Prayer For Me In Silence',
    'Rise Up',
    'Requiem For A Dying Song',
    "(No More) Paddy's Lament",
    'Float',
    "You Won't Make A Fool Out Of Me",
    'Lightning Storm',
    'Punch Drunk Grinning Soul',
    'Us Of Lesser Gods',
    'Between A Man And A Woman',
    'On The Back Of A Broken Dream',
    'Man With No Country',
    'The Story So Far',
    'Screaming At The Wailing Wall',
    'Seven Deadly Sins',
    'Factory Girls',
    'To Youth (My Sweet Roisin Dubh)',
    'Whistles The Wind',
    'Light Of A Fading Star',
    'Tobacco Island',
    'The Wrong Company',
    'Tomorrow Comes A Day Too Soon',
    "Queen Anne's Revenge",
    'Wanderlust',
    'Within A Mile Of Home',
    'The Spoken Wheel',
    'With A Wonder And A Wild Desire',
    "Don't Let Me Die",
    'Drunken Lullabies',
    "What's Left Of The Flag",
    'May The Living Be Dead (In Our Wake)',
    'If I Ever Leave This World Alive',
    'The Kilburn High Road',
    'Rebels Of The Sacred Heart',
    'Cruel Mistress',
    'Death Valley Queen',
    'Another Bag Of Bricks',
    'The Son Never Shines (On Closed Doors)',
    'Salty Dog',
    'Selfish Man',
    'The Worst Day Since Yesterday',
    'Every Dog Has Its Day',
    'Life In A Tenement Square',
    "The Ol' Beggars Bush",
    'The Likes Of You Again',
    'Black Friday Rule',
    'Grace Of God Go I',
    "Devil's Dance Floor",
    'These Exiled Years',
    'Sentimental Johnny',
    'Far Away Boys',
    'The Boys Are Back',
    "Prisoner's Song",
    'Rose Tattoo',
    'Burn',
    "Jimmy Collins' Wake",
    "The Season's Upon Us",
    'The Battle Rages On',
    "Don't Tear Us Apart",
    'My Hero',
    'Out On The Town',
    'Out Of Our Heads',
    'End Of The Night',
    'Shark Attack',
    "Hang 'Em High",
    'Going Out In Style',
    'The Hardest Mile',
    'Cruel',
    'Memorial Day',
    'Climbing A Chair To Bed',
    'Broken Hymns',
    'Deeds Not Words',
    "Take 'Em Down",
    'Sunday Hardcore Matinee',
    '1953',
    "Peg O' My Heart",
    'The Irish Rover',
    'Famous For Nothing',
    'God Willing',
    'The State Of Massachusetts',
    "Tomorrow's Industry",
    'Echoes On A. Street',
    'Vices And Virtues',
    'Surrender',
    "(F)lannigan's Ball",
    "I'll Begin Again",
    'Fairmount Hill',
    'Loyal To No-One',
    'Shattered',
    'Rude Awakenings',
    'Johnny, I Hardly Knew Ya',
    'Never Forget',
    'Jailbreak',
    "Your Spirit's Alive",
    "The Warrior's Code",
    "Captain Kelly's Kitchen",
    'The Walking Dead',
    'Sunshine Highway',
    'Wicked Sensitive Crew',
    'The Burden',
    'Citizen C.I.A.',
    'The Green Fields Of France',
    'Take It And Run',
    "I'm Shipping Up To Boston",
    'The Auld Triangle',
    'Last Letter Home',
    'Tessie',
    'Walk Away',
    "Worker's Song",
    'The Outcast',
    'Black Velvet Band',
    'Gonna Be A Blackout Tonight',
    'World Full Of Hate',
    'Buried Alive',
    'The Dirty Glass',
    'Fields Of Athenry',
    'Bastards On Parade',
    'As One',
    'This Is Your Life',
    'Time To Go',
    "Kiss Me, I'm Shitfaced",
    'For Boston',
    'The Legend Of Finn MacCumhail',
    'Which Side Are You On?',
    'The Rocky Road To Dublin (Traditional)',
    'Heroes From Our Past',
    'Forever',
    'The Gauntlet',
    'Good Rats',
    'The New American Way',
    'The Torch',
    'The Fortunes Of War',
    'A Few Good Men',
    'Ramble And Roll',
    'Caps And Bottles',
    'The Wild Rover (Traditional)',
    'The Spicy McHaggis Jig',
  ];

  return capFirst(firstName[getRandomInt(0, firstName.length + 1)]);
}
