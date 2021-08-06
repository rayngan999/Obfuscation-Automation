/* eslint-disable */
// Client LiveChat Settings
// This file should be hosted by and modified by the client.
window.liveChatClientSettings = {
  endChat: { // Settings related to chat-end
    callback: null // Callback function to run when the chat session was ended by the agent or user
  },
  favIcon: { // Favicon settings
    type: 'image/x-icon', // The type of favicon (E.g. image/png)
    url: 'www.aeropostale.com/livechat/favicon.ico' // The URL to the favicon
  },
  inChat: { // Settings related to the in-chat window
    callback: null, // Callback function to run when the in-chat window is loaded
    headline: "WELCOME TO Aeropostale LIVE CHAT", // The headline text to display
    loadingText: "Please wait while you are connected with an agent...",
    messages: { // Settings related to chat messages
      animate: true, // Turn on/off chat message animation
      animationClass: "bounceIn", // The class to use for chat message animation
      animationTime: 0.6, // How long to run the animation (false for default)
      customClasses: "", // Additional classes to add to chat messages
      callback: null // Callback function to run when a chat message is sent/received
    },
    subText: "" // The text to display below the headline text (empty if none)
  },
  jQuery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', // jQuery 1.7.2+ is required. Specify which file you want to use, if not already included.
  preChat: { // Settings related to the pre-chat window
    callback: null, // Callback function to run when the pre-chat window is loaded
    headline: "WELCOME TO Aeropostale LIVE CHAT", // The headline text to display (empty if none)
    subText: "A customer service representative is standing by to provide real time assistance" // The text to display below the headline text (empty if none)
  },
  title: "Aeropostale Live Chat - Customer Service", // The browser title
  validation: { // Settings related to field validation
    errors: { // Settings related to field validation errors
      animate: true, // Turn on/off field error animation
      animationClass: "flipInX", // The class to use for field error animation
      animationTime: false, // How long to run the animation (false for default)
      customClasses: "", // Additional classes to add to field errors
      callback: null // Callback function to run when there are field errors
    }
  },
  windowHeight: 587, // The height of the popup chat window
  windowWidth: 400 // The width of the popup chat window
};
