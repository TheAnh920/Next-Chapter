const biographyAndAutobiography = {
    name: 'Biography & Autobiography',
    subTags: ['General', 'Adventurers & Explorers', 'African American & Black', 'Arab & Middle Eastern', 'Artists, Architects, Photographers', 'Asian & Asian American',
        'Aviation & Nautical', 'Business', 'Composers & Musicians', 'Criminals & Outlaws', 'Culinary', 'Cultural & Regional', 'Doctors', 'Editors, Journalists, Publishers',
        'Educators', 'Entertainment & Performing Arts', 'Environmentalists & Naturalists', 'Famous', 'Fashion', 'Fire & Emergency Services', 'Hispanic & Latino', 'Historical',
        'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'Judges', 'Law Enforcement', 'Lawyers & Judges', 'LGBTQ+', 'Literary Figures', 'Medical', 'Memoirs', 'Military',
        'Music', 'Native American', 'Nurses', 'People with Disabilities', 'Performing Arts', 'Philosophers', 'Photographers', 'Physicians', 'Political', 'Presidents & Heads of State',
        'Psychologists', 'Reference', 'Religious', 'Rich & Famous', 'Royalty', 'Science & Technology', 'Social Activists', 'Social Scientists & Psychologists', 'Sports', 'Surgeons',
        'Survival', 'Teachers', 'Women'
    ]
}
const manga = { name: 'Manga', subTags: ['General', 'Erotica & Hentai', 'Isekai', 'Magical Girl', 'Mecha', "Yaoi (Boys' Love)", "Yuri (Girls' Love)"] }
const eastAsianStyle = { name: 'East Asian Style', subTags: ['General', manga, 'Manhua', 'Manhwa'] }
const fantasy = { name: 'Fantasy', subTags: ['General', 'Dark Fantasy', 'Dragons & Mythical Creatures', 'Epic'] }
const historicalFiction = { name: 'Historical Fiction', subTags: ['General', 'Ancient', 'Medieval', 'World War II & Holocaust'] }
const lgbtqPlus = { name: 'LGBTQ+', subTags: ['General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const nonfiction = { name: 'Nonfiction', subTags: ['General', 'Biography & Memoir', 'History', 'Journalism', 'Medicine', 'Politics & Philosophy', 'Science & Nature', 'Self-Help'] }
const scienceFiction = { name: 'Science Fiction', subTags: ['General', 'Alien Contact', 'Apocalyptic & Post-Apocalyptic', 'Cyberpunk', 'Steampunk'] }
const comicsAndGraphicNovels = {
    name: 'Comics & Graphic Novels',
    subTags: ['General', 'Action & Adventure', 'Adaptations', 'African American & Black', 'Anthologies', 'Asian American & Pacific Islander', 'Comics & Cartoons', 'Coming of Age',
        'Contemporary Women', 'Crime & Mystery', 'Diversity & Multicultural', 'Dystopian', eastAsianStyle, 'European Style', 'Erotica', 'Fairy Tales, Folk Tales, Legends & Mythology',
        fantasy, 'Feminist', 'Food', 'Hispanic & Latino', historicalFiction, 'Horror', 'Humorous', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'Juvenile Fiction',
        'Juvenile Nonfiction', lgbtqPlus, 'Light Novel', 'Literary', 'Magical Realism', 'Media Tie-In', 'Native American', nonfiction, 'Occult & Supernatural',
        'Reference, Guides & Companions', 'Religious', 'Romance', 'Satire', 'School Life', scienceFiction, 'Slice of Life', 'Spies & Espionage', 'Sports', 'Superheroes',
        'Supervillains', 'Techniques', 'Young Adult Fiction', 'Young Adult Nonfiction'
    ]
}
const american = { name: 'American', subTags: ['General', 'African American & Black', 'Asian & Pacific Islander', 'Hispanic & Latino'] }
const asian = { name: 'Asian', subTags: ['General', 'Japanese'] }
const european = { name: 'European', subTags: ['General', 'Eastern', 'English, Irish, Scottish, Welsh', 'French', 'German', 'Italian', 'Spanish & Portuguese'] }
const type = { name: 'Type', subTags: ['Comedy', 'Historical', 'Religious & Liturgical', 'Tragedy', 'Tragicomedy'] }
const drama = {
    name: 'Drama',
    subTags: ['General', 'African', american, 'Ancient & Classical', 'Anthologies (multiple authors)', asian, 'Australian & Oceanian', 'Authorship & Technique', 'Canadian',
        'Caribbean & Latin American', 'Contemporary', european, 'History & Criticism', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'LGBTQ+', 'Medieval',
        'Middle Eastern', 'Monologues', 'Native American', 'Russian & Soviet', 'Shakespeare', type, 'Women Authors'
    ]
}
const actionAndAdventure = { name: 'Action & Adventure', subTags: ['', 'Fantasy', 'Romance'] }
const africanAmericanAndBlack = {
    name: 'African American & Black',
    subTags: ['General', 'Christian', 'Erotica', 'Historical', 'Mystery & Detective', 'Romance', 'Urban & Street Lit', 'Women']
}
const romance = { name: 'Romance', subTags: ['General', 'Historical', 'Suspense'] }
const christian = {
    name: 'Christian',
    subTags: ['General', 'African American & Black', 'Biblical', 'Classic & Allegory', 'Collections & Anthologies', 'Contemporary', 'Fantasy', 'Futuristic', 'Historical', romance,
        'Suspense', 'Western'
    ]
}
const fictionEroticaLgbtqPlus = { name: 'LGBTQ+', subTags: ['General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const erotica = {
    name: 'Erotica',
    subTags: ['General', 'African American & Black', 'BDSM', 'Collections & Anthologies', 'Historical', fictionEroticaLgbtqPlus, 'Science Fiction, Fantasy & Horror']
}
const familyLife = { name: 'Family Life', subTags: ['General', 'Marriage & Divorce', 'Siblings'] }
const fictionFantasy = {
    name: 'Fantasy',
    subTags: ['General', 'Action & Adventure', 'Arthurian', 'Christian', 'Collections & Anthologies', 'Contemporary', 'Dark Fantasy', 'Dragons & Mythical Creatures', 'Epic',
        'Gaslamp', 'Historical', 'Humorous', 'Indigenous', 'Military', 'Paranormal', 'Romance', 'Urban'
    ]
}
const hispanicAndLatino = {
    name: 'Hispanic & Latino',
    subTags: ['General', 'Christian', 'Erotica', 'Family Life', 'Fantasy', 'Historical', 'Horror', 'Inspirational', 'Mystery & Detective', 'Romance', 'Science Fiction',
        'Urban & Street Lit', 'Women'
    ]
}
const twentiethCentury = { name: '20th Century', subTags: ['General', 'World War I', 'World War II & Holocaust', 'Post-World War II'] }
const historical = {
    name: 'Historical',
    subTags: ['General', 'African American & Black', 'Ancient', 'Christian', 'Civil War Era', 'Colonial America & Revolution', 'Erotica', 'Fantasy', 'Medieval', 'Mystery & Detective',
        'Renaissance', 'Romance', 'Thrillers', twentiethCentury
    ]
}
const humorous = { name: 'Humorous', subTags: ['General', 'Dark Humor', 'Fantasy', 'Science Fiction'] }
const indigenous = {
    name: 'Indigenous',
    subTags: ['General', 'City Life', 'Elders', 'Erotica', 'Family Life', 'Historical', 'Horror', 'Indigenous Futurism', 'Life Stories', 'Mystery & Detective',
        'Oral Storytelling & Teachings', 'Science Fiction', 'Women'
    ]
}
const fictionLgbtqPlus = { name: 'LGBTQ+', subTags: ['General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const cozy = { name: 'Cozy', subTags: ['General', 'Animals', 'Books, Bookstores & Libraries', 'Crafts', 'Culinary', 'Holidays & Vacation', 'Paranormal'] }
const mysteryAndDetective = {
    name: 'Mystery & Detective',
    subTags: ['General', 'African American & Black', 'Amateur Sleuth', 'Collections & Anthologies', cozy, 'Hard-Boiled', 'Historical', 'International Crime & Mystery', 'Jewish',
        'Police Procedural', 'Private Investigators', 'Traditional', 'Women Sleuths'
    ]
}
const performingArts = { name: 'Performing Arts', subTags: ['General', 'Dance, Theater & Musicals', 'Film, Television & Radio', 'Music'] }
const fictionHistorical = {
    name: 'Historical',
    subTags: ['General', 'American', 'Ancient World', 'Gilded Age', 'Medieval', 'Regency', 'Renaissance', 'Scottish', 'Tudor', '20th Century', 'Victorian', 'Viking'
    ]
}
const fictionRomanceLgbtqPlus = { name: 'LGBTQ+', subTags: ['General', 'Bisexual', 'Gay', 'Lesbian', 'Transgender', 'Two-Spirited & Indigiqueer'] }
const paranormal = { name: 'Paranormal', subTags: ['General', 'Shifters', 'Vampires', 'Witches'] }
const fictionRomance = {
    name: 'Romance',
    subTags: ['General', 'Action & Adventure', 'African American & Black', 'Billionaires', 'Christian', 'Clean & Wholesome', 'Collections & Anthologies', 'Contemporary', 'Erotic',
        'Fantasy', 'Firefighters', 'Hispanic & Latino', fictionHistorical, 'Holiday', 'Indigenous', 'International', 'Later in Life', fictionRomanceLgbtqPlus, 'Medical', 'Military',
        'Multicultural & Interracial', 'New Adult', paranormal, 'Police & Law Enforcement', 'Polyamory', 'Rock Stars', 'Romantic Comedy', 'Royalty', 'Science Fiction', 'Sports',
        'Suspense', 'Time Travel', 'Western', 'Workplace'
    ]
}
const fictionScienceFiction = {
    name: 'Science Fiction',
    subTags: ['General', 'Action & Adventure', 'Alien Contact', 'Alternative History', 'Apocalyptic & Post-Apocalyptic', 'Christian', 'Collections & Anthologies', 'Crime & Mystery',
        'Cyberpunk', 'Genetic Engineering', 'Hard Science Fiction', 'Humorous', 'Military', 'Romance', 'Space Exploration', 'Space Opera', 'Steampunk', 'Time Travel'
    ]
}
const thrillers = {
    name: 'Thrillers',
    subTags: ['General', 'Christian', 'Crime', 'Domestic', 'Espionage', 'Historical', 'Legal', 'Medical', 'Military', 'Political', 'Psychological', 'Romance', 'Supernatural',
        'Suspense', 'Technological', 'Terrorism'
    ]
}
const westerns = { name: 'Westerns', subTags: ['', 'Christian', 'Romantic'] }
const africa = { name: 'Africa', subTags: ['General', 'East Africa', 'Nigeria', 'North Africa', 'Southern Africa', 'West Africa'] }
const fictionAmerican = { name: 'American', subTags: ['General', 'Colonial & Revolutionary Periods', '19th Century', '20th Century', '21st Century'] }
const canada = { name: 'Canada', subTags: ['General', 'Colonial & 19th Century', '20th Century', '21st Century'] }
const china = { name: 'China', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const england = { name: 'England', subTags: ['General', 'Early & Medieval Periods', '16th & 17th Century', '18th Century', '19th Century', '20th Century', '21st Century'] }
const france = { name: 'France', subTags: ['General', '18th Century', '19th Century', '20th Century', '21st Century'] }
const germany = { name: 'Germany', subTags: ['General', '20th Century', '21st Century'] }
const india = { name: 'India', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const ireland = { name: 'Ireland', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const middleEast = { name: 'Middle East', subTags: ['General', 'Arabian Peninsula', 'Egypt & North Africa', 'Israel'] }
const russia = { name: 'Russia', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const scotland = { name: 'Scotland', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const spain = { name: 'Spain', subTags: ['General', '19th Century', '20th Century', '21st Century'] }
const worldLiterature = {
    name: 'World Literature',
    subTags: [africa, fictionAmerican, 'Argentina', 'Asia (General)', 'Australia', 'Austria', 'Brazil', canada, 'Caribbean & West Indies', 'Central America', 'Central Asia', 'Chile',
        china, 'Colombia', 'Czech Republic', 'Denmark', england, 'Europe (General)', 'Finland', france, germany, 'Greece', 'Hungary', india, ireland, 'Italy', 'Japan', 'Korea',
        'Mexico', middleEast, 'Netherlands', 'New Zealand', 'Norway', 'Oceania', 'Pakistan', 'Peru', 'Poland', 'Portugal', russia, scotland, 'South America (General)',
        'Southeast Asia', spain, 'Sweden', 'Turkey', 'Uruguay', 'Wales'
    ]
}
const fiction = {
    name: 'Fiction',
    subTags: ['General', 'Absurdist', actionAndAdventure, 'Adaptations & Pastiche', 'Adventure', africanAmericanAndBlack, 'Alternative History', 'Amish & Mennonite', 'Animals',
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
const tagsList = ['Antiques & Collectibles', 'Architecture', 'Art', 'Bibles', biographyAndAutobiography, 'Body, Mind & Spirit', 'Business & Economics', comicsAndGraphicNovels,
    'Computers', 'Cooking', 'Crafts & Hobbies', 'Design', drama, 'Education', 'Family & Relationships', fiction, 'Foreign Language Study',
    'Games & Activities', 'Gardening', 'Health & Fitness', 'History', 'House & Home', 'Humor', 'Juvenile Fiction', 'Juvenile Nonfiction', 'Language Arts & Disciplines', 'Law',
    'Literary Collections', 'Literary Criticism', 'Mathematics', 'Medical', 'Music', 'Nature', 'Performing Arts', 'Pets', 'Philosophy', 'Photography', 'Poetry', 'Political Science',
    'Psychology', 'Reference', 'Religion', 'Science', 'Self-Help', 'Social Science', 'Sports & Recreation', 'Study Aids', 'Technology & Engineering', 'Transportation', 'Travel',
    'True Crime', 'Young Adult Fiction', 'Young Adult Nonfiction']

const uniqueTags = ['16th & 17th Century', '18th Century', '19th Century', '20th Century', '21st Century', 'Absurdist', 'Action & Adventure', 'Adaptations', 'Adaptations & Pastiche',
    'Adventure', 'Adventurers & Explorers', 'Africa', 'African', 'African American & Black', 'Alien Contact', 'Alternative History', 'Amateur Sleuth', 'American', 'Amish & Mennonite',
    'Ancient', 'Ancient & Classical', 'Ancient World', 'Animals', 'Anthologies', 'Anthologies (multiple authors)', 'Antiques & Collectibles', 'Apocalyptic & Post-Apocalyptic',
    'Aviation & Nautical', 'BDSM', 'Bibles', 'Biblical', 'Billionaires', 'Biographical', 'Biography & Autobiography', 'Biography & Memoir', 'Bisexual', 'Body, Mind & Spirit',
    'Books, Bookstores & Libraries', 'Brazil', 'Buddhist', 'Business', 'Business & Economics', 'Canada', 'Canadian', 'Caribbean & Latin American', 'Caribbean & West Indies',
    'Central America', 'Central Asia', 'Chile', 'China', 'Christian', 'City Life', 'Civil War Era', 'Classic & Allegory', 'Classics', 'Clean & Wholesome', 'Collections & Anthologies',
    'Colombia', 'Colonial & 19th Century', 'Colonial & Revolutionary Periods', 'Colonial America & Revolution', 'Comedy', 'Comics', 'Comics & Cartoons', 'Comics & Graphic Novels',
    'Coming of Age', 'Composers & Musicians', 'Computers', 'Contemporary', 'Contemporary Women', 'Cooking', 'Cozy', 'Crafts', 'Crafts & Hobbies', 'Crime', 'Crime & Mystery',
    'Criminals & Outlaws', 'Culinary', 'Cultural & Regional', 'Cultural Heritage', 'Cyberpunk', 'Czech Republic', 'Dance, Theater & Musicals', 'Dark Fantasy', 'Dark Humor', 'Denmark',
    'Design', 'Disabilities', 'Disaster', 'Diversity & Multicultural', 'Doctors', 'Domestic', 'Dragons & Mythical Creatures', 'Drama', 'Dystopian', 'Early & Medieval Periods',
    'East Africa', 'East Asian Style', 'Eastern', 'Editors, Journalists, Publishers', 'Education', 'Educators', 'Egypt & North Africa', 'Elders', 'England',
    'English, Irish, Scottish, Welsh', 'Entertainment & Performing Arts', 'Environmentalists & Naturalists', 'Epic', 'Epistolary', 'Erotic', 'Erotica', 'Erotica & Hentai',
    'Espionage', 'Europe (General)', 'European', 'European Style', 'Fairy Tales, Folk Tales, Legends & Mythology', 'Family & Relationships', 'Family Life', 'Family Saga', 'Famous',
    'Fantasy', 'Fashion', 'Feminist', 'Fiction', 'Film, Television & Radio', 'Finland', 'Fire & Emergency Services', 'Firefighters', 'Folklore', 'Food', 'Foreign Language Study',
    'France', 'French', 'Friendship', 'Futuristic', 'Games & Activities', 'Gardening', 'Gaslamp', 'Gay', 'Genetic Engineering', 'German', 'Germany', 'Ghost', 'Gilded Age', 'Gothic',
    'Graphic Novels', 'Greece', 'Hard Science Fiction', 'Hard-Boiled', 'Health & Fitness', 'Hispanic & Latino', 'Historical', 'Historical Fiction', 'History', 'History & Criticism',
    'Holiday', 'Holidays', 'Holidays & Vacation', 'Horror', 'House & Home', 'Humor', 'Humorous', 'Hungary', 'Immigration', 'India', 'Indigenous', 'Indigenous Futurism',
    'Indigenous Peoples of Turtle Island', 'Inspirational', 'International', 'International Crime & Mystery', 'Ireland', 'Isekai', 'Israel', 'Italian', 'Italy', 'Japan', 'Japanese',
    'Jewish', 'Journalism', 'Judges', 'Juvenile Fiction', 'Juvenile Nonfiction', 'Korea', 'LGBTQ+', 'Language Arts & Disciplines', 'Later in Life', 'Law', 'Law Enforcement',
    'Lawyers & Judges', 'Legal', 'Legends', 'Lesbian', 'Life Stories', 'Light Novel', 'LitRPG (Literary Role-Playing Game)', 'Literary', 'Literary Collections', 'Literary Criticism',
    'Literary Figures', 'Magical Girl', 'Magical Realism', 'Manga', 'Manhua', 'Manhwa', 'Marriage & Divorce', 'Mashups', 'Mathematics', 'Mecha', 'Media Tie-In', 'Medical', 'Medicine',
    'Medieval', 'Memoirs', 'Metaphysical', 'Mexico', 'Middle East', 'Middle Eastern', 'Middle Eastern & Arab American', 'Military', 'Monologues', 'Movie Tie-In',
    'Multicultural & Interracial', 'Multiple Timelines', 'Music', 'Muslim', 'Mystery & Detective', 'Mythology', 'Native American', 'Nature', 'Nature & the Environment', 'Netherlands',
    'Neurodiversity', 'New Adult', 'New Zealand', 'Nigeria', 'Noir', 'Nonfiction', 'North Africa', 'Norway', 'Nurses', 'Occult & Supernatural', 'Oceania',
    'Oral Storytelling & Teachings', 'Own Voices', 'Pakistan', 'Paranormal', 'People with Disabilities', 'Performing Arts', 'Peru', 'Pets', 'Philosophers', 'Philosophy',
    'Photographers', 'Photography', 'Physicians', 'Poetry', 'Poland', 'Police & Law Enforcement', 'Police Procedural', 'Political', 'Political Science', 'Politics & Philosophy',
    'Polyamory', 'Portugal', 'Post-World War II', 'Presidents & Heads of State', 'Private Investigators', 'Psychological', 'Psychologists', 'Psychology',
    'Reference', 'Reference, Guides & Companions', 'Regency', 'Religion', 'Religious', 'Religious & Liturgical', 'Renaissance', 'Rich & Famous', 'Rock Stars', 'Romance', 'Romantic',
    'Romantic Comedy', 'Royalty', 'Russia', 'Russian & Soviet', 'Sagas', 'Satire', 'School Life', 'Science', 'Science & Nature', 'Science & Technology', 'Science Fiction',
    'Science Fiction, Fantasy & Horror', 'Scotland', 'Scottish', 'Sea Stories', 'Self-Help', 'Shakespeare', 'Shifters', 'Short Stories (multiple authors)',
    'Short Stories (single author)', 'Siblings', 'Slice of Life', 'Small Town & Rural', 'Social Activists', 'Social Science', 'Social Scientists & Psychologists',
    'South America (General)', 'Southeast Asia', 'Southern', 'Southern Africa', 'Space Exploration', 'Space Opera', 'Spain', 'Spanish & Portuguese', 'Spies & Espionage', 'Sports',
    'Sports & Recreation', 'Sports Romance', 'Steampunk', 'Study Aids', 'Suburban', 'Superheroes', 'Supernatural', 'Supervillains', 'Surgeons', 'Survival', 'Suspense', 'Sweden',
    'Teachers', 'Techniques', 'Technological', 'Technology & Engineering', 'Television Tie-In', 'Terrorism', 'Thrillers', 'Time Travel', 'Traditional', 'Tragedy', 'Tragicomedy',
    'Transgender', 'Transportation', 'Travel', 'True Crime', 'Tudor', 'Turkey', 'Two-Spirited & Indigiqueer', 'Type', 'Urban', 'Urban & Street Lit', 'Urban Fantasy', 'Uruguay',
    'Vampires', 'Victorian', 'Viking', 'Visionary & Metaphysical', 'Wales', 'War & Military', 'West Africa', 'Western', 'Witches', 'Women', 'Women Authors',
    'Women Sleuths', 'Workplace', 'World Literature', 'World War I', 'World War II & Holocaust', "Yaoi (Boys' Love)", 'Young Adult Fiction', 'Young Adult Nonfiction',
    "Yuri (Girls' Love)"]

// export default tagsList
export { tagsList, uniqueTags }