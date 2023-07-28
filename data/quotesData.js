const quotesData = [
    {
      "id": 1,
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 2,
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 3,
      "quote": "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      "type": "wholesome"
    },
    {
      "id": 4,
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 5,
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 6,
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 7,
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 8,
      "quote": "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
      "type": "wholesome"
    },
    {
      "id": 9,
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "id": 10,
      "quote": "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
      "type": "wholesome"
    },
    {
      "id": 11,
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "id": 12,
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 13,
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "id": 14,
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "id": 15,
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 16,
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "id": 17,
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 18,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "id": 19,
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "id": 20,
      "quote": "Success is not in what you have, but who you are. - Bo Bennett",
      "type": "wholesome"
    },
    {
      "id": 21,
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "id": 22,
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "id": 23,
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "id": 24,
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "id": 25,
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "id": 26,
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "id": 27,
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "id": 28,
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 29,
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "id": 30,
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "id": 31,
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "id": 32,
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "id": 33,
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "id": 34,
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "id": 35,
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 36,
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 37,
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "id": 38,
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "id": 39,
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 40,
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "id": 41,
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "id": 42,
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 43,
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "id": 44,
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "id": 45,
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "id": 46,
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 47,
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "id": 48,
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "id": 49,
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "id": 50,
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 51,
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 52,
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "id": 53,
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "id": 54,
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 55,
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "id": 56,
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 57,
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 58,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "id": 59,
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "id": 60,
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "id": 61,
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "id": 62,
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "id": 63,
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "id": 64,
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "id": 65,
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "id": 66,
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "id": 67,
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 68,
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "id": 69,
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "id": 70,
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "id": 71,
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "id": 72,
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "id": 73,
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "id": 74,
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 75,
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 76,
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "id": 77,
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "id": 78,
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 79,
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "id": 80,
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "id": 81,
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 82,
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "id": 83,
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "id": 84,
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "id": 85,
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 86,
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "id": 87,
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "id": 88,
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "id": 89,
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 90,
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 91,
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "id": 92,
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "id": 93,
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 94,
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "id": 95,
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 96,
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 97,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "id": 98,
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "id": 99,
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "id": 100,
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "id": 101,
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "id": 102,
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "id": 103,
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "id": 104,
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "id": 105,
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "id": 106,
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 107,
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    },
    {
      "id": 108,
      "quote": "Don't let what you cannot do interfere with what you can do. - John R. Wooden",
      "type": "wholesome"
    },
    {
      "id": 109,
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "type": "wholesome"
    },
    {
      "id": 110,
      "quote": "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
      "type": "wholesome"
    },
    {
      "id": 111,
      "quote": "The journey of a thousand miles begins with one step. - Lao Tzu",
      "type": "wholesome"
    },
    {
      "id": 112,
      "quote": "Be yourself; everyone else is already taken. - Oscar Wilde",
      "type": "wholesome"
    },
    {
      "id": 113,
      "quote": "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 114,
      "quote": "Believe you can and you're halfway there. - Theodore Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 115,
      "quote": "Don't count the days, make the days count. - Muhammad Ali",
      "type": "wholesome"
    },
    {
      "id": 116,
      "quote": "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
      "type": "wholesome"
    },
    {
      "id": 117,
      "quote": "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 118,
      "quote": "If you want to achieve greatness, stop asking for permission. - Anonymous",
      "type": "wholesome"
    },
    {
      "id": 119,
      "quote": "You miss 100% of the shots you don't take. - Wayne Gretzky",
      "type": "wholesome"
    },
    {
      "id": 120,
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 121,
      "quote": "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
      "type": "wholesome"
    },
    {
      "id": 122,
      "quote": "The best way to predict the future is to create it. - Peter Drucker",
      "type": "wholesome"
    },
    {
      "id": 123,
      "quote": "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
      "type": "wholesome"
    },
    {
      "id": 124,
      "quote": "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 125,
      "quote": "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
      "type": "wholesome"
    },
    {
      "id": 126,
      "quote": "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
      "type": "wholesome"
    },
    {
      "id": 127,
      "quote": "Whatever the mind can conceive and believe, it can achieve. - Napoleon Hill",
      "type": "wholesome"
    },
    {
      "id": 128,
      "quote": "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "type": "wholesome"
    },
    {
      "id": 129,
      "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 130,
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
      "type": "wholesome"
    },
    {
      "id": 131,
      "quote": "If you can dream it, you can do it. - Walt Disney",
      "type": "wholesome"
    },
    {
      "id": 132,
      "quote": "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
      "type": "wholesome"
    },
    {
      "id": 133,
      "quote": "The harder I work, the luckier I get. - Samuel Goldwyn",
      "type": "wholesome"
    },
    {
      "id": 134,
      "quote": "The only way to do great work is to love what you do. - Steve Jobs",
      "type": "wholesome"
    },
    {
      "id": 135,
      "quote": "Success is not what you have, but who you are. - Zig Ziglar",
      "type": "wholesome"
    },
    {
      "id": 136,
      "quote": "Opportunities don't happen, you create them. - Chris Grosser",
      "type": "wholesome"
    },
    {
      "id": 137,
      "quote": "Don't let yesterday take up too much of today. - Will Rogers",
      "type": "wholesome"
    },
    {
      "id": 138,
      "quote": "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
      "type": "wholesome"
    },
    {
      "id": 139,
      "quote": "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
      "type": "wholesome"
    },
    {
      "id": 140,
      "quote": "The best revenge is massive success. - Frank Sinatra",
      "type": "wholesome"
    },
    {
      "id": 141,
      "quote": "A person who never made a mistake never tried anything new. - Albert Einstein",
      "type": "wholesome"
    },
    {
      "id": 142,
      "quote": "The future starts today, not tomorrow. - Pope John Paul II",
      "type": "wholesome"
    },
    {
      "id": 143,
      "quote": "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
      "type": "wholesome"
    },
    {
      "id": 144,
      "quote": "Believe in the power of positive thinking. - Norman Vincent Peale",
      "type": "wholesome"
    },
    {
      "id": 145,
      "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
      "type": "wholesome"
    },
    {
      "id": 146,
      "quote": "Don't be afraid to give up the good to go for the great. - Kenny Rogers",
      "type": "wholesome"
    }
  ]


module.exports = quotesData;