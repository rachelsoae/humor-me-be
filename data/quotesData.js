const quotesData = [
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "category": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
      "category": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "category": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
      "category": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "category": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "category": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "category": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "category": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "category": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Success is not in what you have, but who you are. - Bo Bennett",
      "category": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "category": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "category": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "category": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "category": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "category": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "category": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "category": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "category": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "category": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "category": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "category": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "category": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "category": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "category": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "category": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "category": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "category": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "category": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "category": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "category": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "category": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "category": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "category": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "category": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "category": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "category": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "category": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "category": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "category": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "category": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "category": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "category": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "category": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "category": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "category": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "category": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "category": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "category": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "category": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "category": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "category": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "category": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "category": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "category": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "category": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "category": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "category": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "category": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "category": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "category": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "category": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "category": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "category": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "category": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "category": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "category": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "category": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "category": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "category": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {

      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "category": "wholesome"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "category": "wholesome"
    },
    {
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "category": "wholesome"
    },
    {
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "category": "wholesome"
    },
    {
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "category": "wholesome"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "category": "wholesome"
    },
    {
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "category": "wholesome"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "category": "wholesome"
    },
    {
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "category": "wholesome"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "category": "wholesome"
    },
    {
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "category": "wholesome"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "category": "wholesome"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "category": "wholesome"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "category": "wholesome"
    },
    {
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "category": "wholesome"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "category": "wholesome"
    },
    {
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "category": "wholesome"
    },
    {
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "category": "wholesome"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "category": "wholesome"
    },
    {
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "category": "wholesome"
    },
    {
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "category": "wholesome"
    },
    {
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "category": "wholesome"
    },
    {
      "id": 136,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "category": "wholesome"
    },
    {
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "category": "wholesome"
    },
    {
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "category": "wholesome"
    },
    {
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "category": "wholesome"
    },
    {
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "category": "wholesome"
    },
    {
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "category": "wholesome"
    },
    {
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "category": "wholesome"
    },
    {
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "category": "wholesome"
    },
    {
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "category": "wholesome"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "category": "wholesome"
    },
    {
      "quote": "Why did the scarecrow win an award? Because he was outstanding in his field! - Tom Hanks",
      "category": "chaotic"
      },
      {
      "quote": "Why don't scientists trust atoms? Because they make up everything! - Morgan Freeman",
      "category": "chaotic"
      },
      {
      "quote": "Why don't some couples go to the gym? Because some relationships don't work out! - Brad Pitt",
      "category": "chaotic"
      },
      {
      "quote": "Why did the bicycle fall over? Because it was two-tired! - Will Smith",
      "category": "chaotic"
      },
      {
      "quote": "I used to play piano by ear, but now I use my hands! - Keanu Reeves",
      "category": "chaotic"
      },
      {
      "quote": "Why did the tomato turn red? Because it saw the salad dressing! - Jim Carrey",
      "category": "chaotic"
      },
      {
      "quote": "Why don't skeletons fight each other? They don't have the guts! - Johnny Depp",
      "category": "chaotic"
      },
      {
      "quote": "Did you hear about the guy who invented Lifesavers? They say he made a mint! - Leonardo DiCaprio",
      "category": "chaotic"
      },
      {
      "quote": "I'm on a seafood diet. I see food and eat it! - Robert Downey Jr.",
      "category": "chaotic"
      },
      {
      "quote": "What do you call fake spaghetti? An impasta! - Hugh Jackman",
      "category": "chaotic"
      },
      {
      "quote": "Oh great, another day of existence.",
      "category": "chaotic"
      },
      {
      "quote": "I'm not saying life is meaningless, but it does a pretty convincing impression.",
      "category": "chaotic"
      },
      {
      "quote": "Oh joy, another opportunity to experience the crushing weight of reality.",
      "category": "chaotic"
      },
      {
      "quote": "I'm not sure if I'm getting better at life or just getting used to the constant disappointment.",
      "category": "chaotic"
      },
      {
      "quote": "Sure, I have plans for the future. It's called surviving the present.",
      "category": "chaotic"
      },
      {
      "quote": "I used to be indecisive. Now, I'm not so sure.",
      "category": "chaotic"
      },
      {
      "quote": "Life is like a rollercoaster – thrilling for some, nauseating for others.",
      "category": "chaotic"
      },
      {
      "quote": "I'm not saying I have low expectations, but my life's theme song is 'Another One Bites the Dust.'",
      "category": "chaotic"
      },
      {
      "quote": "If only I could monetize my procrastination skills, I'd be a billionaire by now.",
      "category": "chaotic"
      },
      {
      "quote": "They say money can't buy happiness, but have you tried being broke?",
      "category": "chaotic"
      },
      {
      "quote": "Why bother dreaming when reality is so average?",
      "category": "chaotic"
      },
      {
      "quote": "Don't aim for the stars; the ground is just fine.",
      "category": "chaotic"
      },
      {
      "quote": "Mediocrity is the key to a stress-free life.",
      "category": "chaotic"
      },
      {
      "quote": "Settling for less is a surefire way to avoid disappointment.",
      "category": "chaotic"
      },
      {
      "quote": "Why strive for greatness when you can embrace adequacy?",
      "category": "chaotic"
      },
      {
      "quote": "Follow your dreams, unless they require effort, then just take a nap.",
      "category": "chaotic"
      },
      {
      "quote": "Success is overrated; failure is the new trend.",
      "category": "chaotic"
      },
      {
      "quote": "Ambition leads to hard work, and hard work leads to exhaustion.",
      "category": "chaotic"
      },
      {
      "quote": "Opportunity knocks, but I prefer not to answer.",
      "category": "chaotic"
      },
      {
      "quote": "They say life is a journey, but I'm stuck in a never-ending traffic jam.",
      "category": "chaotic"
      },
      {
      "quote": "Whispering clouds dance moonlight serenade.",
      "category": "chaotic"
      },
      {
      "quote": "Jellyfish symphony whispers sparkly zephyr.",
      "category": "chaotic"
      },
      {
      "quote": "Clockwise pineapple giggles polka-dotted gravity.",
      "category": "chaotic"
      },
      {
      "quote": "Chaos carousel giggles within marshmallow dreams.",
      "category": "chaotic"
      },
      {
      "quote": "Lollipop rainbow whistles between socks.",
      "category": "chaotic"
      },
      {
      "quote": "Zigzagging fireflies synchronize quantum jamboree.",
      "category": "chaotic"
      },
      {
      "quote": "Bubblegum waltzes tiptoe across starlight galaxies.",
      "category": "chaotic"
      },
      {
      "quote": "Unicorn whispers harmonize kaleidoscope shadows.",
      "category": "chaotic"
      },
      {
      "quote": "Gummy bear moonbeams sprinkle fizzy stardust.",
      "category": "chaotic"
      },
      {
      "quote": "Fluffy caterpillar acrobat moonwalks on rainbows.",
      "category": "chaotic"
      },
      {
      "quote": "Did you know that elephants can communicate using infrasound, sounds below the range of human hearing?",
      "category": "chaotic"
      },
      {
      "quote": "Octopuses have three hearts and blue blood, thanks to a copper-based molecule called hemocyanin.",
      "category": "chaotic"
      },
      {
      "quote": "A group of flamingos is called a 'flamboyance.'",
      "category": "chaotic"
      },
      {
      "quote": "Kangaroos cannot walk backward due to their unique muscular structure.",
      "category": "chaotic"
      },
      {
      "quote": "The tongue of a blue whale can weigh as much as an elephant!",
      "category": "chaotic"
      },
      {
      "quote": "Cows have best friends and form strong social bonds with each other.",
      "category": "chaotic"
      },
      {
      "quote": "Penguins engage in 'proposals' by presenting a pebble to their potential mate.",
      "category": "chaotic"
      },
      {
      "quote": "Honeybees communicate through complex dance movements to convey the location of nectar sources.",
      "category": "chaotic"
      },
      {
      "quote": "Sloths can move so slowly that algae can grow on their fur.",
      "category": "chaotic"
      },
      {
      "quote": "Cheetahs can accelerate from 0 to 60 miles per hour in just a few seconds, making them the fastest land animals.",
      "category": "chaotic"
      },
      {
      "quote": "The higher you soar, the farther you have to fall.",
      "category": "chaotic"
      },
      {
      "quote": "Every cloud has a silver lining, but sometimes, the clouds just keep coming.",
      "category": "chaotic"
      },
      {
      "quote": "Rise above the storm, but remember, the storm never really goes away.",
      "category": "chaotic"
      },
      {
      "quote": "In the darkest moments, you find the brightest stars. But darkness remains.",
      "category": "chaotic"
      },
      {
      "quote": "The greatest strength comes from the deepest scars, but scars never truly fade.",
      "category": "chaotic"
      },
      {
      "quote": "Embrace the journey, even if the road leads you astray.",
      "category": "chaotic"
      },
      {
      "quote": "Hope can move mountains, but some mountains are just too vast to conquer.",
      "category": "chaotic"
      },
      {
      "quote": "The world is full of possibilities, but not all possibilities lead to happiness.",
      "category": "chaotic"
      },
      {
      "quote": "You are stronger than you think, but strength doesn't shield you from pain.",
      "category": "chaotic"
      },
      {
      "quote": "Find the beauty in the broken, but remember, some pieces can never be repaired.",
      "category": "chaotic"
      },
      {
      "quote": "If tomatoes are a fruit, then isn't ketchup a smoothie?",
      "category": "chaotic"
      },
      {
      "quote": "I asked the librarian if she had any books on paranoia. She whispered, 'They're right behind you.'",
      "category": "chaotic"
      },
      {
      "quote": "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "category": "chaotic"
      },
      {
      "quote": "How can mirrors be real if our eyes aren't real? - Jaden Smith",
      "category": "chaotic"
      },
      {
      "quote": "If two mind readers read each other's minds, whose mind are they reading?",
      "category": "chaotic"
      },
      {
      "quote": "If money doesn't grow on trees, then why do banks have branches?",
      "category": "chaotic"
      },
      {
      "quote": "I put my phone on airplane mode, but it didn't fly!",
      "category": "chaotic"
      },
      {
      "quote": "Do twins ever realize that one of them is unplanned?",
      "category": "chaotic"
      },
      {
      "quote": "I tried to catch fog yesterday, but I mist.",
      "category": "chaotic"
      },
      {
      "quote": "If a synchronized swimmer drowns, do the rest have to drown too?",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a flesh-monger, a fool, and a coward. - William Shakespeare, 'Measure for Measure'",
      "category": "chaotic"
      },
      {
      "quote": "I do desire that we may be better strangers. - William Shakespeare, 'As You Like It'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a base, proud, shallow, beggarly, three-suited, hundred-pound, filthy worsted-stocking knave! - William Shakespeare, 'King Lear'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art as loathsome as a toad! - William Shakespeare, 'Titus Andronicus'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a saucy, impudent, slanderous, viperous, false, and treacherous knave. - William Shakespeare, 'Henry IV, Part 2'",
      "category": "chaotic"
      },
      {
      "quote": "Thou cream-faced loon! - William Shakespeare, 'Macbeth'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a plague-sore and an embossed carbuncle. - William Shakespeare, 'King Lear'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a sheep-biting rogue. - William Shakespeare, 'Henry IV, Part 1'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a very ragged, monstrous, and unwholesome beggar. - William Shakespeare, 'King Lear'",
      "category": "chaotic"
      },
      {
      "quote": "Thou art a natural coward without instinct. - William Shakespeare, 'Henry VI, Part 3'",
      "category": "chaotic"
      }
  ]


module.exports = quotesData;