const quotesData = [
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "type": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
      "type": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
      "type": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Success is not in what you have, but who you are. - Bo Bennett",
      "type": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {

      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 136,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
    "quote": "Why did the scarecrow win an award? Because he was outstanding in his field! - Tom Hanks",
    "type": "chaotic"
    },
    {
    "quote": "Why don't scientists trust atoms? Because they make up everything! - Morgan Freeman",
    "type": "chaotic"
    },
    {
    "quote": "Why don't some couples go to the gym? Because some relationships don't work out! - Brad Pitt",
    "type": "chaotic"
    },
    {
    "quote": "Why did the bicycle fall over? Because it was two-tired! - Will Smith",
    "type": "chaotic"
    },
    {
    "quote": "I used to play piano by ear, but now I use my hands! - Keanu Reeves",
    "type": "chaotic"
    },
    {
    "quote": "Why did the tomato turn red? Because it saw the salad dressing! - Jim Carrey",
    "type": "chaotic"
    },
    {
    "quote": "Why don't skeletons fight each other? They don't have the guts! - Johnny Depp",
    "type": "chaotic"
    },
    {
    "quote": "Did you hear about the guy who invented Lifesavers? They say he made a mint! - Leonardo DiCaprio",
    "type": "chaotic"
    },
    {
    "quote": "I'm on a seafood diet. I see food and eat it! - Robert Downey Jr.",
    "type": "chaotic"
    },
    {
    "quote": "What do you call fake spaghetti? An impasta! - Hugh Jackman",
    "type": "chaotic"
    },
    {
    "quote": "Oh great, another day of existence.",
    "type": "chaotic"
    },
    {
    "quote": "I'm not saying life is meaningless, but it does a pretty convincing impression.",
    "type": "chaotic"
    },
    {
    "quote": "Oh joy, another opportunity to experience the crushing weight of reality.",
    "type": "chaotic"
    },
    {
    "quote": "I'm not sure if I'm getting better at life or just getting used to the constant disappointment.",
    "type": "chaotic"
    },
    {
    "quote": "Sure, I have plans for the future. It's called surviving the present.",
    "type": "chaotic"
    },
    {
    "quote": "I used to be indecisive. Now, I'm not so sure.",
    "type": "chaotic"
    },
    {
    "quote": "Life is like a rollercoaster – thrilling for some, nauseating for others.",
    "type": "chaotic"
    },
    {
    "quote": "I'm not saying I have low expectations, but my life's theme song is 'Another One Bites the Dust.'",
    "type": "chaotic"
    },
    {
    "quote": "If only I could monetize my procrastination skills, I'd be a billionaire by now.",
    "type": "chaotic"
    },
    {
    "quote": "They say money can't buy happiness, but have you tried being broke?",
    "type": "chaotic"
    },
    {
    "quote": "Why bother dreaming when reality is so average?",
    "type": "chaotic"
    },
    {
    "quote": "Don't aim for the stars; the ground is just fine.",
    "type": "chaotic"
    },
    {
    "quote": "Mediocrity is the key to a stress-free life.",
    "type": "chaotic"
    },
    {
    "quote": "Settling for less is a surefire way to avoid disappointment.",
    "type": "chaotic"
    },
    {
    "quote": "Why strive for greatness when you can embrace adequacy?",
    "type": "chaotic"
    },
    {
    "quote": "Follow your dreams, unless they require effort, then just take a nap.",
    "type": "chaotic"
    },
    {
    "quote": "Success is overrated; failure is the new trend.",
    "type": "chaotic"
    },
    {
    "quote": "Ambition leads to hard work, and hard work leads to exhaustion.",
    "type": "chaotic"
    },
    {
    "quote": "Opportunity knocks, but I prefer not to answer.",
    "type": "chaotic"
    },
    {
    "quote": "They say life is a journey, but I'm stuck in a never-ending traffic jam.",
    "type": "chaotic"
    },
    {
    "quote": "Whispering clouds dance moonlight serenade.",
    "type": "chaotic"
    },
    {
    "quote": "Jellyfish symphony whispers sparkly zephyr.",
    "type": "chaotic"
    },
    {
    "quote": "Clockwise pineapple giggles polka-dotted gravity.",
    "type": "chaotic"
    },
    {
    "quote": "Chaos carousel giggles within marshmallow dreams.",
    "type": "chaotic"
    },
    {
    "quote": "Lollipop rainbow whistles between socks.",
    "type": "chaotic"
    },
    {
    "quote": "Zigzagging fireflies synchronize quantum jamboree.",
    "type": "chaotic"
    },
    {
    "quote": "Bubblegum waltzes tiptoe across starlight galaxies.",
    "type": "chaotic"
    },
    {
    "quote": "Unicorn whispers harmonize kaleidoscope shadows.",
    "type": "chaotic"
    },
    {
    "quote": "Gummy bear moonbeams sprinkle fizzy stardust.",
    "type": "chaotic"
    },
    {
    "quote": "Fluffy caterpillar acrobat moonwalks on rainbows.",
    "type": "chaotic"
    },
    {
    "quote": "Did you know that elephants can communicate using infrasound, sounds below the range of human hearing?",
    "type": "chaotic"
    },
    {
    "quote": "Octopuses have three hearts and blue blood, thanks to a copper-based molecule called hemocyanin.",
    "type": "chaotic"
    },
    {
    "quote": "A group of flamingos is called a 'flamboyance.'",
    "type": "chaotic"
    },
    {
    "quote": "Kangaroos cannot walk backward due to their unique muscular structure.",
    "type": "chaotic"
    },
    {
    "quote": "The tongue of a blue whale can weigh as much as an elephant!",
    "type": "chaotic"
    },
    {
    "quote": "Cows have best friends and form strong social bonds with each other.",
    "type": "chaotic"
    },
    {
    "quote": "Penguins engage in 'proposals' by presenting a pebble to their potential mate.",
    "type": "chaotic"
    },
    {
    "quote": "Honeybees communicate through complex dance movements to convey the location of nectar sources.",
    "type": "chaotic"
    },
    {
    "quote": "Sloths can move so slowly that algae can grow on their fur.",
    "type": "chaotic"
    },
    {
    "quote": "Cheetahs can accelerate from 0 to 60 miles per hour in just a few seconds, making them the fastest land animals.",
    "type": "chaotic"
    },
    {
    "quote": "The higher you soar, the farther you have to fall.",
    "type": "chaotic"
    },
    {
    "quote": "Every cloud has a silver lining, but sometimes, the clouds just keep coming.",
    "type": "chaotic"
    },
    {
    "quote": "Rise above the storm, but remember, the storm never really goes away.",
    "type": "chaotic"
    },
    {
    "quote": "In the darkest moments, you find the brightest stars. But darkness remains.",
    "type": "chaotic"
    },
    {
    "quote": "The greatest strength comes from the deepest scars, but scars never truly fade.",
    "type": "chaotic"
    },
    {
    "quote": "Embrace the journey, even if the road leads you astray.",
    "type": "chaotic"
    },
    {
    "quote": "Hope can move mountains, but some mountains are just too vast to conquer.",
    "type": "chaotic"
    },
    {
    "quote": "The world is full of possibilities, but not all possibilities lead to happiness.",
    "type": "chaotic"
    },
    {
    "quote": "You are stronger than you think, but strength doesn't shield you from pain.",
    "type": "chaotic"
    },
    {
    "quote": "Find the beauty in the broken, but remember, some pieces can never be repaired.",
    "type": "chaotic"
    },
    {
    "quote": "If tomatoes are a fruit, then isn't ketchup a smoothie?",
    "type": "chaotic"
    },
    {
    "quote": "I asked the librarian if she had any books on paranoia. She whispered, 'They're right behind you.'",
    "type": "chaotic"
    },
    {
    "quote": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "type": "chaotic"
    },
    {
    "quote": "How can mirrors be real if our eyes aren't real? - Jaden Smith",
    "type": "chaotic"
    },
    {
    "quote": "If two mind readers read each other's minds, whose mind are they reading?",
    "type": "chaotic"
    },
    {
    "quote": "If money doesn't grow on trees, then why do banks have branches?",
    "type": "chaotic"
    },
    {
    "quote": "I put my phone on airplane mode, but it didn't fly!",
    "type": "chaotic"
    },
    {
    "quote": "Do twins ever realize that one of them is unplanned?",
    "type": "chaotic"
    },
    {
    "quote": "I tried to catch fog yesterday, but I mist.",
    "type": "chaotic"
    },
    {
    "quote": "If a synchronized swimmer drowns, do the rest have to drown too?",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a flesh-monger, a fool, and a coward. - William Shakespeare, 'Measure for Measure'",
    "type": "chaotic"
    },
    {
    "quote": "I do desire that we may be better strangers. - William Shakespeare, 'As You Like It'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy worsted-stocking knave! - William Shakespeare, 'King Lear'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art as loathsome as a toad! - William Shakespeare, 'Titus Andronicus'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a saucy, impudent, slanderous, viperous, false, and treacherous knave. - William Shakespeare, 'Henry IV, Part 2'",
    "type": "chaotic"
    },
    {
    "quote": "Thou cream-faced loon! - William Shakespeare, 'Macbeth'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a plague-sore and an embossed carbuncle. - William Shakespeare, 'King Lear'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a sheep-biting rogue. - William Shakespeare, 'Henry IV, Part 1'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a very ragged, monstrous, and unwholesome beggar. - William Shakespeare, 'King Lear'",
    "type": "chaotic"
    },
    {
    "quote": "Thou art a natural coward without instinct. - William Shakespeare, 'Henry VI, Part 3'",
    "type": "chaotic"
    }
  ]


module.exports = quotesData;