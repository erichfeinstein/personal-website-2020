export const projects = [
  {
    title: 'SoundSpace',
    description: [
      'SoundSpace is a platform for sharing and discovering new music together. It was created in collaboration with three other developers at Fullstack Academy. As a team, we wanted to merge the best parts of radio and streaming services like Spotify. On SoundSpace, anyone can be the DJ, create their own listening space, and share their music tastes with the world in real-time.',
      'SoundSpace is a web app created with React, a Node & Express server, and a PostgreSQL database. On it, users can sign in using their Spotify Premium accounts, which was made possible using OAuth. The ability to stream music in SoundSpace is enabled by Spotify Web Playback SDK, and our server takes advantage of the Spotify recommendation API to queue up songs in channels that listeners can vote on.',
      `The inclusion of WebSocket-based features is one of my personal favorite aspects of SoundSpace. WebSockets allow SoundSpace users to have a synced-up listening experience, no matter where they are in the real world. Each channel also has its own chat room! With all of these features, SoundSpace makes it easy to find new music you'll love, all while making it a fun and social experience!`,
    ],
    short:
      'Full stack web app for discovering and sharing music in a social listening space',
    image: 'images/SoundSpace_Logo.png',
    github: 'https://github.com/sound-space/SoundSpace',
  },
  {
    title: 'TurfWar.io',
    description: [
      `TurfWar.io is a GPS-based, global game of territory control. It was developed as a hackathon project during my time studying at Fullstack Academy. It is currently deployed and available via Expo, and the server is launched on Heroku. The game was inspired by territory-based games like Splatoon and Planetside, and its incorporation of GPS as a game mechanic was inspired by Pokemon Go. Its diverse tech stack, architecture, and fluid UI made it a project I greatly enjoyed working on, and will always be proud of.`,
      `The technologies used to create the TurfWar.io app include React Native, Socket.io, Geolocation API, and various other npm modules. The TurfWar.io server uses Node.js, Socket.io, PostgreSQL, cron scheduling, and a React app for delivering meta information about the game and its current state.`,
    ],
    short: 'GPS-based global game of territory control',
    image: 'images/TurfWar.png',
    github: 'https://github.com/erichfeinstein/TurfWar.io',
  },
  {
    title: 'Fight or Fright',
    description: [
      `Fight or Fright is a 4-player online dungeon crawler battle royale game, featuring a comical cast of characters who find themselves in a hanted house and must battle to be the last survivor.  Each round features a randomly generated map of rooms to explore and enemies to fight in order to level up your stats.  Along the way, you'll also find magical powers and weapons to help in your battle against your opponents.`,
      `As Lead Programmer for this game project, I led and coordinated a team of 12 programmers and worked closely with students from the Cleveland Institute of Art and faculty to bring our game idea to life using the Unity Engine and C#.  As part of my role as Lead Programmer, I led team meetings in which we divided ourselves into subteams to develop the specific aspects of the game, such as environments, player controls, and multiplayer networking.`,
      `Working on Fight or Fright strengthened my organization and leadership skills, and the final product is one I'm very proud of. My friends still have a blast playing it today!`,
    ],
    short:
      'Online multiplayer game in Unity engine with battle royale and dungeon crawler elements',
    image: 'images/fight_or_fright.png',
    link: 'https://cwru-eecs390.itch.io/fight-or-fright',
  },
  {
    title: 'MunchBox',
    description: [
      `MunchBox is an Android application published on the Google Play Store.  Using the Google Cloud Platform, MunchBox is able to detect restaurants in your area as well as analyze images to generate a list of tags to describe your meal, which makes it easy to search your MunchBox for your favorite food when you're hungry!`,
      `As my interest in creating mobile apps grew, I decided to create MunchBox as my capstone project at Case Western. While working on this project, I acquired the skills for developing on the Android platform, like understanding the Android Activity Lifecycle, Android SDK, XML, and use of the Google Cloud Platform.  Additionally, working on MunchBox strengthened my understanding of UI/UX design for consumer-facing apps.`,
    ],
    short:
      'Android food journal application which uses image analysis and location services ',
    image: 'images/MunchBox_Title.png',
    github: 'https://github.com/erichfeinstein/MunchBox',
  },
  {
    title: 'Twitter Sentiment Analysis',
    description: [
      `The Twitter Sentiment Analysis tool is a simple website that analyzes the sentimnet of a selection of Tweets in real-time and charts the results. The inspiration for the website came from an interest in real-time social media trends and data visualization.`,
      `The tool was built with Node, Express and a sentiment analysis NPM library on the backend, and React and D3 on the frontend. D3 is a powerful tool that I've been learning, and the Twitter Sentiment Analysis tool makes great use of it!`,
    ],
    short: 'Charting real-time Twitter sentiment using D3.js',
    image: 'images/twit-viz.png',
    github: 'https://github.com/erichfeinstein/twitter-sentiment',
  },
  {
    title: 'MusiQuest',
    description: [
      `MusiQuest is a music suggestion tool that uses Spotify's API to generate recommendations.  It was originally developed for iOS using Swift and Xcode after I intially developed my interest in mobile app development during my undergraduate career at Case Western.`,
      `Developing MusiQuest exposed me to kits like AVFoundation for playing audio, HTTP requests, and JSON objects.  Since then, I have continued development of MusiQuest in the form of a React-based web application, with a more powerful suggestion system.`,
    ],
    short: 'Streamlined music suggestions using Spotify API',
    image: 'images/spotify_for_devs.png',
    github: 'https://github.com/erichfeinstein/MusiQuest',
  },
];
