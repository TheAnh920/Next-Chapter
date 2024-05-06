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
    subTags: ['General', 'African', american, 'Ancient & Classical', 'Anthologies', asian, 'Australian & Oceanian', 'Authorship & Technique', 'Canadian', 'Caribbean & Latin American',
        'Contemporary', european, 'History & Criticism', 'Indigenous', 'Indigenous Peoples of Turtle Island', 'Jewish', 'LGBTQ+', 'Medieval', 'Middle Eastern', 'Monologues',
        'Native American', 'Russian & Soviet', 'Shakespeare', type, 'Women Authors'
    ]
}
const actionAndAdventure = { name: 'Action & Adventure', subTags: ['', 'Fantasy', 'Romance'] }
const africanAmericanAndBlack = {
    name: 'African American & Black',
    subTags: ['General', 'Christian', 'Erotica', 'Historical', 'Mystery & Detective', 'Romance', 'Urban & Street Lit', 'Women']
}
const christian = { name: 'Christian', subTags: ['General', 'African American & Black', 'Biblical', 'Classic & Allegory', 'Collections & Anthologies', 'Contemporary', 'Fantasy'] }
const fiction = {
    name: 'Fiction',
    subTags: ['General', 'Absurdist', actionAndAdventure, 'Adaptations & Pastiche', 'Adventure', africanAmericanAndBlack, 'Alternative History', 'Amish & Mennonite', 'Animals',
        'Anthologies', 'Asian American & Pacific Islander', 'Biographical', 'Buddhist']
}
const tagsList = ['Antiques & Collectibles', 'Architecture', 'Art', 'Bibles', biographyAndAutobiography, 'Body, Mind & Spirit', 'Business & Economics', comicsAndGraphicNovels,
    'Computers', 'Cooking', 'Crafts & Hobbies', 'Design', drama, 'Education', 'Family & Relationships', fiction, 'Foreign Language Study',
    'Games & Activities', 'Gardening', 'Health & Fitness', 'History', 'House & Home', 'Humor*', 'Juvenile Fiction*', 'Juvenile Nonfiction*', 'Language Arts & Disciplines', 'Law',
    'Literary Collections', 'Literary Criticism', 'Mathematics', 'Medical', 'Music', 'Nature', 'Performing Arts', 'Pets', 'Philosophy', 'Photography', 'Poetry', 'Political Science',
    'Psychology', 'Reference', 'Religion', 'Science', 'Self-Help', 'Social Science', 'Sports & Recreation', 'Study Aids', 'Technology & Engineering', 'Transportation', 'Travel',
    'True Crime', 'Young Adult Fiction*', 'Young Adult Nonfiction*']

const bigTags = [biographyAndAutobiography, manga, eastAsianStyle, fantasy, historicalFiction, lgbtqPlus, nonfiction, scienceFiction, comicsAndGraphicNovels, american, asian,
    european, type, drama, actionAndAdventure, africanAmericanAndBlack, fiction, tagsList]

// export { tagsList, bigTags }
export default tagsList