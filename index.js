// Random psychographic generator

// Define psychographic categories with descriptions
const psychographics = [
  {
    category: "Social Media Enthusiasts",
    description: "Engage heavily with social media platforms, such as Instagram, Snapchat, TikTok, and YouTube. They enjoy creating and consuming content, connecting with friends, and staying updated on the latest trends."
  },
  {
    category: "Tech-Savvy",
    description: "Comfortable and proficient in using digital devices, including smartphones, tablets, and computers. They adapt quickly to new technologies and eagerly explore digital innovations."
  },
  {
    category: "Peer Influenced",
    description: "Highly influenced by their peers' opinions, preferences, and behaviors. They seek validation and acceptance within their social circles and often adopt trends and interests based on peer influence."
  },
  {
    category: "Brand Conscious",
    description: "Pay attention to brand names, logos, and trends. They value brands that align with their personal style and self-expression and may actively seek out brands that resonate with their values."
  },
  {
    category: "Adventure Seekers",
    description: "Interested in trying new experiences and seeking adventure. They may enjoy outdoor activities, travel, and exploring new places and cultures."
  },
  {
    category: "Pop Culture Followers",
    description: "Stay updated on the latest movies, music, celebrities, and entertainment trends. They are likely to participate in conversations related to popular culture and engage with media content."
  },
  {
    category: "Activism and Social Causes",
    description: "Show an increased awareness of social issues and may actively participate in or support causes related to environmental sustainability, human rights, equality, or mental health."
  },
  {
    category: "Personal Development",
    description: "Display a growing interest in self-improvement, personal growth, and discovering their passions and talents. They may engage in activities such as reading, journaling, or attending workshops to enhance their skills."
  },
  {
    category: "Health and Wellness",
    description: "Demonstrate an interest in maintaining a healthy lifestyle, including physical fitness, nutrition, and mental well-being. They may engage in sports, fitness activities, and follow healthy eating habits."
  },
  {
    category: "Academic Achievers",
    description: "Emphasize academic performance and strive for high grades. They may be goal-oriented, focused on future educational opportunities, and participate in extracurricular activities or clubs related to their academic interests."
  },
  {
    category: "Creative Expressionists",
    description: "Enjoy expressing themselves through various creative outlets, such as art, music, writing, or performing arts. They may engage in activities like drawing, painting, playing musical instruments, or writing poetry or stories."
  },
  {
    category: "Sports Enthusiasts",
    description: "Active participants in sports activities, either through school teams, recreational leagues, or personal hobbies. They may follow sports events, admire athletes, and enjoy physical challenges and competition."
  },
  {
    category: "Fashion and Style Conscious",
    description: "Display an interest in fashion trends, personal style, and grooming. They enjoy experimenting with clothing, accessories, hairstyles, and may stay updated on fashion influencers or designers."
  },
  {
    category: "Adventure Readers",
    description: "Show a love for books and engage with adventure, fantasy, or science fiction genres. They enjoy escaping into imaginative worlds and may be members of book clubs or avid readers of popular book series."
  },
  {
    category: "Technology Innovators",
    description: "Demonstrate an interest in technology beyond consumption. They may engage in coding, programming, robotics, or other tech-related activities, exploring their curiosity and problem-solving skills."
  },
  {
    category: "Cultural Explorers",
    description: "Show an interest in different cultures, languages, and traditions. They may engage in activities such as learning new languages, attending cultural festivals, or traveling to experience diverse cultures firsthand."
  },
  {
    category: "Music Lovers",
    description: "Passionate about music, they actively explore various genres, attend concerts or music festivals, and may even play musical instruments or engage in singing or songwriting."
  },
  {
    category: "Future Entrepreneurs",
    description: "Show an entrepreneurial spirit and interest in starting their own businesses or ventures. They may engage in activities like selling handmade products, participating in entrepreneurship programs, or developing innovative ideas."
  }
];

// Pick a random psychographic category
const pickRandomPsychographic = (listOfPsychographics) => {
  const randomNum = Math.floor(Math.random() * listOfPsychographics.length);
  return listOfPsychographics[randomNum];
};

// Generate a random psychographic category
function generateRandomPsychographic() {
  return pickRandomPsychographic(psychographics);
}

// Display a random psychographic category and its description on the page
function displayPsychographic() {
  const { category, description } = generateRandomPsychographic();

  const categoryElem = document.querySelector(".category");
  categoryElem.innerText = category;

  const descriptionElem = document.querySelector(".description");
  descriptionElem.innerText = description;
}

// Set up event listener on button
function listenToClicks() {
  const button = document.querySelector(".generate-psychographic");
  button.addEventListener("click", () => {
    displayPsychographic();
  });
}

// Call listenToClicks to start listening for button clicks
listenToClicks();