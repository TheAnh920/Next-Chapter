const fantasy = { name: 'Fantasy', subTags: ['All', 'General', 'Dark Fantasy', 'Dragons & Mythical Creatures', 'Epic'] }
const historicalFiction = { name: 'Historical Fiction', subTags: ['All', 'General', 'Ancient', 'Medieval', 'World War II & Holocaust'] }
const lgbtqPlus = { name: 'LGBTQ+', subTags: ['All', 'General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const nonfiction = {
  name: 'Nonfiction',
  subTags: ['All', 'General', 'Biography & Memoir', 'History', 'Journalism', 'Medicine', 'Politics & Philosophy', 'Science & Nature', 'Self-Help'
  ]
}
const scienceFiction = { name: 'Science Fiction', subTags: ['All', 'General', 'Alien Contact', 'Apocalyptic & Post-Apocalyptic', 'Cyberpunk', 'Steampunk'] }
const manga = {
  name: 'Manga',
  subTags: [
    'All', 'General', 'Action & Adventure', 'Adaptations', 'Anthologies', 'Comics & Cartoons', 'Coming of Age', 'Contemporary Women', 'Crime & Mystery', 'Diversity & Multicultural',
    'Dystopian', 'Erotica', 'Erotica & Hentai', 'Fairy Tales, Folk Tales, Legends & Mythology', fantasy, 'Feminist', 'Food', 'Hispanic & Latino', historicalFiction, 'Horror',
    'Humorous', 'Isekai', 'Juvenile Fiction', 'Juvenile Nonfiction', lgbtqPlus, 'Light Novel', 'Literary', 'Magical Girl', 'Magical Realism', 'Mecha', 'Media Tie-In',
    'Occult & Supernatural', 'Reference, Guides & Companions', 'Religious', 'Romance', 'Satire', 'School Life', scienceFiction, 'Slice of Life', 'Spies & Espionage', 'Sports',
    'Superheroes', 'Supernatural', 'Supervillains', 'Techniques', "Yaoi (Boys' Love)", 'Young Adult Fiction', 'Young Adult Nonfiction', "Yuri (Girls' Love)"
  ]
}
const comicsAndGraphicNovels = {
  name: 'Comics & Graphic Novels',
  subTags: ['All', 'General', 'Action & Adventure', 'Adaptations', 'African American & Black', 'Anthologies', 'Asian American & Pacific Islander', 'Comics & Cartoons',
    'Coming of Age', 'Contemporary Women', 'Crime & Mystery', 'Diversity & Multicultural', 'Dystopian', 'European Style', 'Erotica',
    'Fairy Tales, Folk Tales, Legends & Mythology', fantasy, 'Feminist', 'Food', 'Hispanic & Latino', historicalFiction, 'Horror', 'Humorous', 'Indigenous',
    'Indigenous Peoples of Turtle Island', 'Jewish', 'Juvenile Fiction', 'Juvenile Nonfiction', lgbtqPlus, 'Light Novel', 'Literary', 'Magical Realism', manga, 'Media Tie-In',
    'Native American', nonfiction, 'Occult & Supernatural', 'Reference, Guides & Companions', 'Religious', 'Romance', 'Satire', 'School Life', scienceFiction, 'Slice of Life',
    'Spies & Espionage', 'Sports', 'Superheroes', 'Supervillains', 'Techniques', 'Young Adult Fiction', 'Young Adult Nonfiction'
  ]
}
const american = { name: 'American', subTags: ['All', 'General', 'African American & Black', 'Asian & Pacific Islander', 'Hispanic & Latino'] }
const asian = { name: 'Asian', subTags: ['All', 'General', 'Japanese'] }
const european = { name: 'European', subTags: ['All', 'General', 'Eastern', 'English, Irish, Scottish, Welsh', 'French', 'German', 'Italian', 'Spanish & Portuguese'] }
const type = { name: 'Type', subTags: ['Comedy', 'Historical', 'Religious & Liturgical', 'Tragedy', 'Tragicomedy'] }
const drama = {
  name: 'Drama',
  subTags: ['All', 'General', 'African', american, 'Ancient & Classical', 'Anthologies (multiple authors)', asian, 'Australian & Oceanian', 'Authorship & Technique', 'Canadian',
    'Caribbean & Latin American', 'Contemporary', european, 'History & Criticism', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'LGBTQ+', 'Medieval',
    'Middle Eastern', 'Monologues', 'Native American', 'Russian & Soviet', 'Shakespeare', type, 'Women Authors'
  ]
}
const actionAndAdventure = { name: 'Action & Adventure', subTags: ['All', 'Fantasy', 'Romance'] }
const africanAmericanAndBlack = {
  name: 'African American & Black',
  subTags: ['All', 'General', 'Christian', 'Erotica', 'Historical', 'Mystery & Detective', 'Romance', 'Urban & Street Lit', 'Women']
}
const romance = { name: 'Romance', subTags: ['All', 'General', 'Historical', 'Suspense'] }
const christian = {
  name: 'Christian',
  subTags: ['All', 'General', 'African American & Black', 'Biblical', 'Classic & Allegory', 'Collections & Anthologies', 'Contemporary', 'Fantasy', 'Futuristic', 'Historical',
    romance, 'Suspense', 'Western'
  ]
}
const fictionEroticaLgbtqPlus = { name: 'LGBTQ+', subTags: ['All', 'General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const erotica = {
  name: 'Erotica',
  subTags: ['All', 'General', 'African American & Black', 'BDSM', 'Collections & Anthologies', 'Historical', fictionEroticaLgbtqPlus, 'Science Fiction, Fantasy & Horror']
}
const familyLife = { name: 'Family Life', subTags: ['All', 'General', 'Marriage & Divorce', 'Siblings'] }
const fictionFantasy = {
  name: 'Fantasy',
  subTags: ['All', 'General', 'Action & Adventure', 'Arthurian', 'Christian', 'Collections & Anthologies', 'Contemporary', 'Dark Fantasy', 'Dragons & Mythical Creatures', 'Epic',
    'Gaslamp', 'Historical', 'Humorous', 'Indigenous', 'Military', 'Paranormal', 'Romance', 'Urban'
  ]
}
const hispanicAndLatino = {
  name: 'Hispanic & Latino',
  subTags: ['All', 'General', 'Christian', 'Erotica', 'Family Life', 'Fantasy', 'Historical', 'Horror', 'Inspirational', 'Mystery & Detective', 'Romance', 'Science Fiction',
    'Urban & Street Lit', 'Women'
  ]
}
const twentiethCentury = { name: '20th Century', subTags: ['All', 'General', 'World War I', 'World War II & Holocaust', 'Post-World War II'] }
const historical = {
  name: 'Historical',
  subTags: ['All', 'General', 'African American & Black', 'Ancient', 'Christian', 'Civil War Era', 'Colonial America & Revolution', 'Erotica', 'Fantasy', 'Medieval',
    'Mystery & Detective', 'Renaissance', 'Romance', 'Thrillers', twentiethCentury
  ]
}
const humorous = { name: 'Humorous', subTags: ['All', 'General', 'Dark Humor', 'Fantasy', 'Science Fiction'] }
const indigenous = {
  name: 'Indigenous',
  subTags: ['All', 'General', 'City Life', 'Elders', 'Erotica', 'Family Life', 'Historical', 'Horror', 'Indigenous Futurism', 'Life Stories', 'Mystery & Detective',
    'Oral Storytelling & Teachings', 'Science Fiction', 'Women'
  ]
}
const fictionLgbtqPlus = { name: 'LGBTQ+', subTags: ['All', 'General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const cozy = { name: 'Cozy', subTags: ['All', 'General', 'Animals', 'Books, Bookstores & Libraries', 'Crafts', 'Culinary', 'Holidays & Vacation', 'Paranormal'] }
const mysteryAndDetective = {
  name: 'Mystery & Detective',
  subTags: ['All', 'General', 'African American & Black', 'Amateur Sleuth', 'Collections & Anthologies', cozy, 'Hard-Boiled', 'Historical', 'International Crime & Mystery',
    'Jewish', 'Police Procedural', 'Private Investigators', 'Traditional', 'Women Sleuths'
  ]
}
const performingArts = { name: 'Performing Arts', subTags: ['All', 'General', 'Dance, Theater & Musicals', 'Film, Television & Radio', 'Music'] }
const fictionHistorical = {
  name: 'Historical',
  subTags: ['All', 'General', 'American', 'Ancient World', 'Gilded Age', 'Medieval', 'Regency', 'Renaissance', 'Scottish', 'Tudor', '20th Century', 'Victorian', 'Viking'
  ]
}
const fictionRomanceLgbtqPlus = { name: 'LGBTQ+', subTags: ['All', 'General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const paranormal = { name: 'Paranormal', subTags: ['All', 'General', 'Shifters', 'Vampires', 'Witches'] }
const fictionRomance = {
  name: 'Romance',
  subTags: ['All', 'General', 'Action & Adventure', 'African American & Black', 'Billionaires', 'Christian', 'Clean & Wholesome', 'Collections & Anthologies', 'Contemporary',
    'Erotic', 'Fantasy', 'Firefighters', 'Hispanic & Latino', fictionHistorical, 'Holiday', 'Indigenous', 'International', 'Later in Life', fictionRomanceLgbtqPlus, 'Medical',
    'Military', 'Multicultural & Interracial', 'New Adult', paranormal, 'Police & Law Enforcement', 'Polyamory', 'Rock Stars', 'Romantic Comedy', 'Royalty', 'Science Fiction',
    'Sports', 'Suspense', 'Time Travel', 'Western', 'Workplace'
  ]
}
const fictionScienceFiction = {
  name: 'Science Fiction',
  subTags: ['All', 'General', 'Action & Adventure', 'Alien Contact', 'Alternative History', 'Apocalyptic & Post-Apocalyptic', 'Christian', 'Collections & Anthologies',
    'Crime & Mystery', 'Cyberpunk', 'Genetic Engineering', 'Hard Science Fiction', 'Humorous', 'Military', 'Romance', 'Space Exploration', 'Space Opera', 'Steampunk',
    'Time Travel'
  ]
}
const thrillers = {
  name: 'Thrillers',
  subTags: ['All', 'General', 'Christian', 'Crime', 'Domestic', 'Espionage', 'Historical', 'Legal', 'Medical', 'Military', 'Political', 'Psychological', 'Romance', 'Supernatural',
    'Suspense', 'Technological', 'Terrorism'
  ]
}
const westerns = { name: 'Westerns', subTags: ['All', 'Christian', 'Romantic'] }
const africa = { name: 'Africa', subTags: ['All', 'General', 'East Africa', 'Nigeria', 'North Africa', 'Southern Africa', 'West Africa'] }
const fictionAmerican = { name: 'American', subTags: ['All', 'General', 'Colonial & Revolutionary Periods', '19th Century', '20th Century', '21st Century'] }
const canada = { name: 'Canada', subTags: ['All', 'General', 'Colonial & 19th Century', '20th Century', '21st Century'] }
const china = { name: 'China', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const england = { name: 'England', subTags: ['All', 'General', 'Early & Medieval Periods', '16th & 17th Century', '18th Century', '19th Century', '20th Century', '21st Century'] }
const france = { name: 'France', subTags: ['All', 'General', '18th Century', '19th Century', '20th Century', '21st Century'] }
const germany = { name: 'Germany', subTags: ['All', 'General', '20th Century', '21st Century'] }
const india = { name: 'India', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const ireland = { name: 'Ireland', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const middleEast = { name: 'Middle East', subTags: ['All', 'General', 'Arabian Peninsula', 'Egypt & North Africa', 'Israel'] }
const russia = { name: 'Russia', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const scotland = { name: 'Scotland', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const spain = { name: 'Spain', subTags: ['All', 'General', '19th Century', '20th Century', '21st Century'] }
const worldLiterature = {
  name: 'World Literature',
  subTags: ['All', africa, fictionAmerican, 'Argentina', 'Asia (General)', 'Australia', 'Austria', 'Brazil', canada, 'Caribbean & West Indies', 'Central America', 'Central Asia',
    'Chile', china, 'Colombia', 'Czech Republic', 'Denmark', england, 'Europe (General)', 'Finland', france, germany, 'Greece', 'Hungary', india, ireland, 'Italy', 'Japan',
    'Korea', 'Mexico', middleEast, 'Netherlands', 'New Zealand', 'Norway', 'Oceania', 'Pakistan', 'Peru', 'Poland', 'Portugal', russia, scotland, 'South America (General)',
    'Southeast Asia', spain, 'Sweden', 'Turkey', 'Uruguay', 'Wales'
  ]
}
const fiction = {
  name: 'Fiction',
  subTags: ['All', 'General', 'Absurdist', actionAndAdventure, 'Adaptations & Pastiche', 'Adventure', africanAmericanAndBlack, 'Alternative History', 'Amish & Mennonite', 'Animals',
    'Anthologies (multiple authors)', 'Asian American & Pacific Islander', 'Biographical', 'Buddhist', christian, 'City Life', 'Classics', 'Comics', 'Coming of Age', 'Crime',
    'Cultural Heritage', 'Disabilities', 'Disaster', 'Diversity & Multicultural', 'Dystopian', 'Epistolary', erotica, 'Fairy Tales, Folk Tales, Legends & Mythology', familyLife,
    'Family Saga', fictionFantasy, 'Feminist', 'Folklore', 'Friendship', 'Ghost', 'Gothic', 'Graphic Novels', hispanicAndLatino, historical, 'Holidays', 'Horror', humorous,
    'Immigration', indigenous, 'Indigenous Peoples of Turtle Island', 'Jewish', 'Legal', 'Legends', fictionLgbtqPlus, 'Literary', 'LitRPG (Literary Role-Playing Game)',
    'Magical Realism', 'Mashups', 'Media Tie-In', 'Medical', 'Metaphysical', 'Middle Eastern & Arab American', 'Movie Tie-In', 'Multiple Timelines', 'Muslim', mysteryAndDetective,
    'Mythology', 'Native American', 'Nature & the Environment', 'Neurodiversity', 'Noir', 'Occult & Supernatural', 'Own Voices', performingArts, 'Political', 'Psychological',
    'Religious', fictionRomance, 'Sagas', 'Satire', fictionScienceFiction, 'Sea Stories', 'Short Stories (multiple authors)', 'Short Stories (single author)',
    'Small Town & Rural', 'Southern', 'Sports', 'Sports Romance', 'Suburban', 'Superheroes', 'Television Tie-In', thrillers, 'Urban & Street Lit', 'Urban Fantasy',
    'Visionary & Metaphysical', 'War & Military', westerns, 'Women', worldLiterature
  ]
}
const form = {
  name: 'Form',
  subTags: ['Anecdotes & Quotations', 'Comic Strips & Cartoons', 'Essays', 'Jokes & Riddles', 'Limericks & Verse', 'Parodies', 'Pictorial', 'Puns & Wordplay', 'Trivia'
  ]
}
const topic = {
  name: 'Topic',
  subTags: ['Adult', 'Animals', 'Business & Professional', ' Celebrity & Popular Culture', 'Health & Aging', 'History', 'Internet & Social Media', 'Language', 'LGBTQ+',
    'Marriage & Family', 'Men, Women & Relationships', 'Politics', 'Regional & Cultural', 'Religion', 'School & Education', 'Sports', 'Travel'
  ]
}
const humor = { name: 'Humor', subTags: ['All', 'General', form, topic] }
const juvenileFictionActionAndAdventure = { name: 'Action & Adventure', subTags: ['All', 'General', 'Pirates', 'Survival Stories'] }
const activityBooks = { name: 'Activity Books', subTags: ['All', 'General', 'Coloring', 'Sticker'] }
const animals = {
  name: 'Animals',
  subTags: ['All', 'General', 'Alligators & Crocodiles', 'Apes, Monkeys, etc.', 'Baby Animals', 'Bears', 'Birds', 'Butterflies, Moths & Caterpillars', 'Cats', 'Cows',
    'Deer, Moose & Caribou', 'Dinosaurs & Prehistoric Creatures', 'Dogs', 'Dragons, Unicorns & Mythical', 'Ducks, Geese, etc.', 'Elephants', 'Farm Animals', 'Fish', 'Foxes',
    'Frogs & Toads', 'Giraffes', 'Hippos & Rhinos', 'Horses', 'Insects, Spiders, etc', 'Jungle Animals', 'Kangaroos', 'Lions, Tigers, Leopards, etc.', 'Mammals', 'Marine Life',
    'Mice, Hamsters, Guinea Pigs, etc.', 'Nocturnal', 'Penguins', 'Pets', 'Pigs', 'Rabbits', 'Reptiles & Amphibians', 'Squirrels', 'Turtles & Tortoises',
    'Wolves, Coyotes & Wild Dogs', 'Worms', 'Zoos'
  ]
}
const biographical = { name: 'Biographical', subTags: ['All', 'General', 'Africa', 'Asia', 'Australia & Oceania', 'Canada', 'Europe', 'Latin America', 'United States'] }
const juvenileFictionComicsAndGraphicNovels = {
  name: 'Comics & Graphic Novels',
  subTags: ['All', 'General', 'Action & Adventure', 'African American & Black', 'Animals', 'Asian American & Pacific Islander', 'Classic Adaptation',
    'Fairy Tales, Folklore, Legends & Mythology', 'Fantasy', 'Hispanic & Latino', 'Historical', 'Horror', 'Humorous', 'Indigenous', 'Indigenous Peoples of Turtle Island',
    'LGBTQ+', 'Manga', 'Media Tie-In', 'Mystery & Detective', 'Native American', 'Paranormal', 'Science Fiction', 'Superheroes'
  ]
}
const concepts = {
  name: 'Concepts',
  subTags: ['All', 'General', 'Alphabet', 'Body', 'Colors', 'Counting & Numbers', 'Date & Time', 'Language', 'Money', 'Opposites', 'Seasons', 'Senses & Sensation', 'Size & Shape',
    'Sounds', 'Words'
  ]
}
const fairyTalesAndFolklore = { name: 'Fairy Tales & Folklore', subTags: ['All', 'General', 'Adaptations', 'Anthologies', 'Country & Cultural'] }
const family = {
  name: 'Family',
  subTags: ['All', 'General', 'Abuse', 'Adoption', 'Alternative Family', 'Blended Families', 'Grandparents', 'Marriage & Divorce', 'Multigenerational', 'New Baby',
    'Orphans & Foster Homes', 'Parents', 'Siblings'
  ]
}
const healthAndDailyLiving = {
  name: 'Health & Daily Living',
  subTags: ['All', 'General', 'Daily Activities', 'Depression & Mental Illness', 'Diseases, Illnesses & Injuries', 'Mental Health', 'Mindfulness & Meditation', 'Toilet Training'
  ]
}
const historicalCanada = { name: 'Canada', subTags: ['All', 'General', 'Pre-Confederation (to 1867)', 'Post-Confederation (1867-)'] }
const unitedStates = {
  name: 'United States',
  subTags: ['All', 'General', 'Colonial & Revolutionary Periods', '19th Century', 'Civil War Period (1850-1877)', '20th Century', '21st Century'
  ]
}
const juvenileFictionHistorical = {
  name: 'Historical',
  subTags: ['All', 'General', 'Africa', 'Ancient Civilizations', 'Asia', 'Australia & Oceania', historicalCanada, 'Caribbean & Latin America', 'Europe', 'Exploration & Discovery',
    'Holocaust', 'Medieval', 'Middle East', 'Military & Wars', 'Prehistory', 'Renaissance', unitedStates
  ]
}
const holidaysAndCelebrations = {
  name: 'Holidays & Celebrations',
  subTags: ['All', 'General', 'Birthdays', 'Christmas & Advent', 'Day of the Dead', 'Diwali', 'Easter & Lent', "Father's Day", 'Halloween', 'Hanukkah', 'Juneteenth', 'Kwanzaa',
    'Lunar New Year', "Mother's Day", 'Passover', 'Patriotic Holidays', 'Ramadan', 'Thanksgiving', "Valentine's Day", 'Other, Non-Religious', 'Other, Religious'
  ]
}
const juvenileFictionIndigenous = {
  name: 'Indigenous',
  subTags: ['All', 'General', 'Animal Stories', 'Cautionary Tales', 'Elders', 'Family Life', 'Historical', 'Life Stories', 'Oral Stories', 'Retellings', 'Teachings'
  ]
}
const legendsMythsFables = { name: 'Legends, Myths, Fables', subTags: ['All', 'General', 'African', 'Arthurian', 'Asian', 'Caribbean & Latin American', 'Greek & Roman', 'Norse'] }
const lifestyles = { name: 'Lifestyles', subTags: ['City & Town Life', 'Country Life', 'Farm & Ranch Life'] }
const juvenileFictionPerformingArts = { name: 'Performing Arts', subTags: ['All', 'General', 'Circus', 'Dance', 'Film', 'Music', 'Television & Radio', 'Theater & Musicals'] }
const places = {
  name: 'Places',
  subTags: ['All', 'General', 'Africa', 'Asia', 'Australia & Oceania', 'Canada', 'Caribbean & Latin America', 'Europe', 'Mexico', 'Middle East', 'Polar Regions', 'United States'
  ]
}
const readers = { name: 'Readers', subTags: ['All', 'Beginner', 'Intermediate', 'Chapter Books', 'Hi-Lo'] }
const religiousChristian = {
  name: 'Christian',
  subTags: ['All', 'General', 'Action & Adventure', 'Animals', 'Bedtime & Dreams', 'Comics & Graphic Novels', 'Early Readers', 'Emotions & Feelings', 'Family',
    'Fantasy & Science Fiction', 'Friendship', 'Historical', 'Holidays & Celebrations', 'Humorous', 'Inspirational', 'Learning Concepts', 'Mysteries & Detective Stories',
    'People & Places', 'Relationships', 'Social Issues', 'Sports & Recreation', 'Values & Virtues'
  ]
}
const religious = { name: 'Religious', subTags: ['All', 'General', 'Buddhist', religiousChristian, 'Hindu', 'Jewish', 'Muslim'] }
const scienceAndNature = { name: 'Science & Nature', subTags: ['All', 'General', 'Disasters', 'Environment', 'Flowers & Plants', 'Trees & Forests', 'Weather'] }
const juvenileFictionScienceFiction = { name: 'Science Fiction', subTags: ['All', 'General', 'Alien Contact', 'Space Exploration', 'Time Travel'] }
const socialThemes = {
  name: 'Social Themes',
  subTags: ['All', 'General', 'Abuse', 'Activism & Social Justice', 'Adolescence & Coming of Age', 'Bullying', 'Dating & Relationships', 'Death, Grief, Bereavement',
    'Depression & Mental Illness', 'Drugs, Alcohol, Substance Abuse', 'Emigration & Immigration', 'Emotions & Feelings', 'Friendship', 'Homosexuality', 'Manners & Etiquette',
    'New Experience', 'Peer Pressure', 'Physical & Emotional Abuse', 'Poverty & Homelessness', 'Prejudice & Racism', 'Religion & Faith', 'Runaways', 'Self-Esteem & Self-Reliance',
    'Sexual Abuse', 'Sexuality', 'Strangers', 'Substance Abuse', 'Values & Virtues', 'Violence'
  ]
}
const sportsAndRecreation = {
  name: 'Sports & Recreation',
  subTags: ['All', 'General', 'Baseball & Softball', 'Basketball', 'Camping & Outdoor Activities', 'Cheerleading', 'Cycling', 'Equestrian', 'Extreme Sports', 'Football', 'Games',
    'Golf', 'Gymnastics', 'Hockey', 'Ice Skating', 'Martial Arts', 'Motor Sports', 'Olympics & Paralympics', 'Skateboarding', 'Soccer', 'Track & Field', 'Water Sports',
    'Winter Sports', 'Wrestling'
  ]
}
const technology = { name: 'Technology', subTags: ['All', 'General', 'Astronauts & Space', 'Inventions'] }
const transportation = { name: 'Transportation', subTags: ['All', 'General', 'Aviation', 'Boats, Ships & Underwater Craft', 'Cars & Trucks', 'Railroads & Trains'] }
const juvenileFiction = {
  name: 'Juvenile Fiction',
  subTags: ['All', 'General', juvenileFictionActionAndAdventure, activityBooks, 'African American & Black', animals, 'Architecture', 'Art', 'Asian American & Pacific Islander',
    'Bedtime & Dreams', biographical, 'Biracial & Multiracial', 'Books & Libraries', 'Boys & Men', 'Business, Careers, Occupations', 'Celebrations', 'Circus', 'City Life',
    'Classics', 'Clothing & Dress', juvenileFictionComicsAndGraphicNovels, 'Computers & Digital Media', concepts, 'Cooking & Food', 'Country Life', 'Crime', 'Detective Stories',
    'Disabilities', 'Diversity & Multicultural', 'Dolls', 'Dreams', 'Dystopian', 'Education', 'Fables', fairyTalesAndFolklore, family, 'Fantasy & Magic', 'Farm Life',
    'First Nations', 'Folklore', 'Games', 'Ghost Stories', 'Girls & Women', 'Graphic Novels', healthAndDailyLiving, 'Hispanic & Latino', juvenileFictionHistorical,
    holidaysAndCelebrations, 'Horror', 'Humorous Stories', 'Imagination & Play', juvenileFictionIndigenous, 'Indigenous Peoples of Turtle Island', 'Interactive Adventures',
    'Inuit', 'Law & Crime', legendsMythsFables, 'LGBTQ+', lifestyles, 'Love & Romance', 'Magic', 'Mathematics', 'Media Tie-In', 'Medicine', 'Men', 'Mermaids & Mermen', 'Métis',
    'Middle Eastern & Arab American', 'Monsters', 'Music', 'Mysteries & Detective Stories', 'Myths', 'Native American', 'Neurodiversity', 'Night', 'Nursery Rhymes', 'Occupations',
    'Paranormal, Occult & Supernatural', juvenileFictionPerformingArts, places, 'Play', 'Poetry', 'Politics & Government', 'Puppets', readers, 'Recreation',
    'Recycling & Green Living', religious, 'Robots', 'Romance', 'Royalty', 'School & Education', scienceAndNature, juvenileFictionScienceFiction, 'Short Stories', 'Sleeping',
    socialThemes, 'Spies & Spying', sportsAndRecreation, 'Steampunk', 'Stories in Verse', 'Superheroes', technology, 'Television Tie-In', 'Thrillers & Suspense', 'Town Life',
    'Toys, Dolls & Puppets', transportation, 'Travel', 'Trickster Tales', 'Vampires', 'Visionary & Metaphysical', 'War & Military', 'Werewolves & Shifters', 'Westerns', 'Women',
    'Work', 'Zombies'
  ]
}
const literaryCollectionsAmerican = { name: 'American', subTags: ['All', 'General', 'African American & Black', 'Asian American & Pacific Islander', 'Hispanic & Latino'] }
const literaryCollectionsAsian = { name: 'Asian', subTags: ['All', 'General', 'Chinese', 'Indic', 'Japanese'] }
const literaryCollectionsEuropean = {
  name: 'European',
  subTags: ['All', 'General', 'Eastern', 'English, Irish, Scottish, Welsh', 'French', 'German', 'Italian', 'Scandinavian', 'Spanish & Portuguese'
  ]
}
const subjectsAndThemes = { name: 'Subjects & Themes', subTags: ['All', 'General', 'Animals & Nature', 'Love & Erotica', 'Places', 'Religious & Inspirational', 'War'] }
const literaryCollections = {
  name: 'Literary Collections',
  subTags: ['All', 'General', 'African', literaryCollectionsAmerican, 'Ancient & Classical', literaryCollectionsAsian, 'Australian & Oceanian', 'Canadian',
    'Caribbean & Latin American', 'Diaries & Journals', literaryCollectionsEuropean, 'Essays', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Interviews', 'Letters',
    'LGBTQ+', 'Medieval', 'Middle Eastern', 'Native American', "Prisoners' Writings", 'Russian & Soviet', 'Speeches', subjectsAndThemes, 'Women Authors'
  ]
}
const poetryAmerican = { name: 'American', subTags: ['All', 'General', 'African American & Black', 'Asian American & Pacific Islander', 'Hispanic & Latino'] }
const poetryAsian = { name: 'Asian', subTags: ['All', 'General', 'Chinese', 'Japanese'] }
const poetryEuropean = { name: 'European', subTags: ['All', 'General', 'Eastern', 'English, Irish, Scottish, Welsh', 'French', 'German', 'Italian', 'Spanish & Portuguese'] }
const poetrySubjectsAndThemes = {
  name: 'Subjects & Themes',
  subTags: ['All', 'General', 'Animals & Nature', 'Death, Grief, Loss', 'Family', 'Humorous', 'Love & Erotica', 'Motivational & Inspirational', 'Places', 'Political & Protest',
    'Religious', 'War'
  ]
}
const poetry = {
  name: 'Poetry',
  subTags: ['All', 'General', 'African', poetryAmerican, 'Ancient & Classical', 'Anthologies (multiple authors)', poetryAsian, 'Australian & Oceanian', 'Canadian',
    'Caribbean & Latin American', poetryEuropean, 'Epic', 'Haiku', 'History & Criticism', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'LGBTQ+', 'Medieval',
    'Middle Eastern', 'Native American', 'Nursery Rhymes', 'Russian & Soviet', 'Shakespeare', 'Sonnets', poetrySubjectsAndThemes, 'Turkic', 'Women Authors'
  ]
}
const youngAdultFictionActionAndAdventure = { name: 'Action & Adventure', subTags: ['All', 'General', 'Pirates', 'Survival Stories'] }
const youngAdultFictionAnimals = { name: 'Animals', subTags: ['All', 'General', 'Horses', 'Marine Life', 'Mythical Creatures', 'Pets'] }
const youngAdultFictionComicsAndGraphicNovels = {
  name: 'Comics & Graphic Novels',
  subTags: ['All', 'General', 'Action & Adventure', 'African American & Black', 'Asian American & Pacific Islander', 'Classic Adaptation', 'Coming of Age',
    'Diversity & Multicultural', 'Dystopian', 'Fairy Tales, Folklore, Legends & Mythology', 'Fantasy', 'Hispanic & Latino', 'Historical', 'Horror', 'Humorous', 'Indigenous',
    'Indigenous Peoples of Turtle Island', 'LGBTQ+', 'Light Novel', 'Manga', 'Media Tie-In', 'Mystery & Detective', 'Native American', 'Paranormal', 'Romance', 'Science Fiction',
    'Superheroes'
  ]
}
const youngAdultFictionFairyTalesAndFolklore = { name: 'Fairy Tales & Folklore', subTags: ['All', 'General', 'Adaptations', 'Anthologies', 'Country & Cultural'] }
const youngAdultFictionFamily = {
  name: 'Family',
  subTags: ['All', 'General', 'Adoption', 'Alternative Family', 'Blended Families', 'Marriage & Divorce', 'Multigenerational', 'Orphans & Foster Homes', 'Parents', 'Siblings'
  ]
}
const youngAdultFictionFantasy = { name: 'Fantasy', subTags: ['All', 'General', 'Contemporary', 'Dark Fantasy', 'Epic', 'Historical', 'Indigenous', 'Romance', 'Wizards & Witches'] }
const youngAdultFictionHealthAndDailyLiving = { name: 'Health & Daily Living', subTags: ['All', 'General', 'Diseases, Illnesses & Injuries'] }
const historicalUnitedStates = {
  name: 'United States',
  subTags: ['All', 'General', 'Colonial & Revolutionary Periods', '19th Century', 'Civil War Period (1850-1877)', '20th Century', '21st Century'
  ]
}
const youngAdultFictionHistorical = {
  name: 'Historical',
  subTags: ['All', 'General', 'Africa', 'Ancient Civilizations', 'Asia', 'Australia & Oceania', 'Canada', 'Europe', 'Exploration & Discovery', 'Holocaust', 'Medieval',
    'Middle East', 'Military & Wars', 'Prehistory', 'Renaissance', historicalUnitedStates
  ]
}
const youngAdultFictionHumorous = { name: 'Humorous', subTags: ['All', 'General', 'Dark Humor'] }
const youngAdultFictionIndigenous = {
  name: 'Indigenous',
  subTags: ['All', 'General', 'Cautionary Tales', 'City Life', 'Family Life', 'Historical', 'Life Stories', 'Oral Stories', 'Retellings', 'Teachings'
  ]
}
const youngAdultFictionLegendsMythsFables = { name: 'Legends, Myths, Fables', subTags: ['All', 'General', 'Arthurian', 'Greek & Roman'] }
const youngAdultFictionLgbtqPlus = { name: 'LGBTQ+', subTags: ['All', 'General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const youngAdultFictionLifestyles = { name: 'Lifestyles', subTags: ['City & Town Life', 'Country Life', 'Farm & Ranch Life'] }
const youngAdultFictionPerformingArts = { name: 'Performing Arts', subTags: ['All', 'General', 'Dance', 'Film', 'Music', 'Television & Radio', 'Theater & Musicals'] }
const youngAdultFictionPlaces = {
  name: 'Places',
  subTags: ['All', 'General', 'Africa', 'Asia', 'Australia & Oceania', 'Canada', 'Caribbean & Latin America', 'Europe', 'Mexico', 'Middle East', 'Polar Regions', 'United States'
  ]
}
const youngAdultFictionChristian = {
  name: 'Christian',
  subTags: ['All', 'General', 'Action & Adventure', 'Comics & Graphic Novels', 'Fantasy', 'Historical', 'Mysteries & Detective Stories', 'Relationships', 'Science Fiction',
    'Social Issues'
  ]
}
const youngAdultFictionReligious = { name: 'Religious', subTags: ['All', 'General', 'Agnostic & Atheist', 'Buddhist', youngAdultFictionChristian, 'Hindu', 'Jewish', 'Muslim'] }
const youngAdultFictionRomance = {
  name: 'Romance',
  subTags: ['All', 'General', 'Clean & Wholesome', 'Contemporary', 'Historical', 'Indigenous', 'LGBTQ+', 'Multicultural & Interracial', 'Paranormal', 'Romantic Comedy'
  ]
}
const schoolAndEducation = { name: 'School & Education', subTags: ['All', 'General', 'Boarding School & Prep School', 'College & University'] }
const youngAdultFictionScienceAndNature = { name: 'Science & Nature', subTags: ['All', 'General', 'Environment'] }
const youngAdultFictionScienceFiction = {
  name: 'Science Fiction',
  subTags: ['All', 'General', 'Alien Contact', 'Apocalyptic & Post-Apocalyptic', 'Indigenous Futurism', 'Romance', 'Space Opera', 'Time Travel'
  ]
}
const youngAdultFictionSocialThemes = {
  name: 'Social Themes',
  subTags: ['All', 'General', 'Activism & Social Justice', 'Assimilation', 'Bullying', 'Class Differences', 'Cutting & Self-Harm', 'Dating & Sex', 'Death, Grief, Bereavement',
    'Depression', 'Drugs, Alcohol, Substance Abuse', 'Eating Disorders & Body Image', 'Emigration & Immigration', 'Emotions & Feelings', 'Friendship', 'Mental Illness',
    'New Experience', 'Peer Pressure', 'Physical & Emotional Abuse', 'Poverty & Homelessness', 'Pregnancy', 'Prejudice & Racism', 'Religion & Faith', 'Runaways',
    'Self-Esteem & Self-Reliance', 'Sexual Abuse', 'Suicide', 'Values & Virtues', 'Violence'
  ]
}
const youngAdultFictionSportsAndRecreation = {
  name: 'Sports & Recreation',
  subTags: ['All', 'General', 'Baseball & Softball', 'Basketball', 'Camping & Outdoor Activities', 'Equestrian', 'Extreme Sports', 'Football', 'Gymnastics', 'Hockey',
    'Martial Arts', 'Skateboarding', 'Soccer', 'Track & Field', 'Water Sports', 'Winter Sports'
  ]
}
const thrillersAndSuspense = { name: 'Thrillers & Suspense', subTags: ['All', 'General', 'Crime', 'Espionage', 'Psychological', 'Supernatural'] }
const travelAndTransportation = { name: 'Travel & Transportation', subTags: ['All', 'General', 'Car & Road Trips'] }
const youngAdultFiction = {
  name: 'Young Adult Fiction',
  subTags: ['All', 'General', youngAdultFictionActionAndAdventure, 'African American & Black', 'Alternative History', youngAdultFictionAnimals, 'Art',
    'Asian American & Pacific Islander', 'Biographical', 'Biracial & Multiracial', 'Books & Libraries', 'Boys & Men', 'Careers, Occupations, Internships', 'Classics',
    'Clean & Nonviolent', youngAdultFictionComicsAndGraphicNovels, 'Coming of Age', 'Computers & Digital Media', 'Cooking & Food', 'Disabilities', 'Diversity & Multicultural',
    'Dystopian', 'Epistolary (Letters & Diaries)', youngAdultFictionFairyTalesAndFolklore, youngAdultFictionFamily, youngAdultFictionFantasy, 'Fashion & Beauty', 'First Nations',
    'Ghost Stories', 'Girls & Women', youngAdultFictionHealthAndDailyLiving, 'Hispanic & Latino', youngAdultFictionHistorical, 'Holidays & Celebrations', 'Horror',
    youngAdultFictionHumorous, youngAdultFictionIndigenous, 'Indigenous Peoples of Turtle Island', 'Interactive Adventures', 'Inuit', 'Law & Crime',
    youngAdultFictionLegendsMythsFables, youngAdultFictionLgbtqPlus, youngAdultFictionLifestyles, 'Literary', 'Loners & Outcasts', 'Magical Realism', 'Media Tie-In',
    'Mermaids & Mermen', 'Métis', 'Middle Eastern & Arab American', 'Monsters', 'Mysteries & Detective Stories', 'Native American', 'Neurodiversity', 'Novels in Verse',
    'Own Voices', 'Paranormal, Occult & Supernatural', youngAdultFictionPerformingArts, youngAdultFictionPlaces, 'Poetry', 'Politics & Government', 'Recycling & Green Living',
    youngAdultFictionReligious, youngAdultFictionRomance, 'Royalty', 'Satire', schoolAndEducation, youngAdultFictionScienceAndNature, youngAdultFictionScienceFiction,
    'Short Stories, Collections & Anthologies', youngAdultFictionSocialThemes, youngAdultFictionSportsAndRecreation, 'Steampunk', 'Superheroes', 'Technology',
    thrillersAndSuspense, travelAndTransportation, 'Urban & Street Lit', 'Vampires', 'Visionary & Metaphysical', 'War & Military', 'Werewolves & Shifters', 'Westerns', 'Zombies'
  ]
}
const tagsList = ['Antiques & Collectibles', 'Architecture', 'Art', 'Bibles', 'Biography & Autobiography', 'Body, Mind & Spirit', 'Business & Economics', comicsAndGraphicNovels,
  'Computers', 'Cooking', 'Crafts & Hobbies', 'Design', drama, 'Education', 'Family & Relationships', fiction, 'Foreign Language Study', 'Games & Activities', 'Gardening',
  'Health & Fitness', 'History', 'House & Home', humor, juvenileFiction, 'Juvenile Nonfiction', 'Language Arts & Disciplines', 'Law', literaryCollections, 'Literary Criticism',
  'Mathematics', 'Medical', 'Music', 'Nature', 'Performing Arts', 'Pets', 'Philosophy', 'Photography', poetry, 'Political Science',
  'Psychology', 'Reference', 'Religion', 'Science', 'Self-Help', 'Social Science', 'Sports & Recreation', 'Study Aids', 'Technology & Engineering', 'Transportation', 'Travel',
  'True Crime', youngAdultFiction, 'Young Adult Nonfiction']

export default tagsList