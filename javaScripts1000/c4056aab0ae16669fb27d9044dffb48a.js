// Radial LiveChat Settings
window.liveChatSettings = {
  brandCode: 'Aero', // The client's brand code
  buttonId: '573j0000000L9tC', // The button ID provided by SalesForce
  chatUrl: 'https://use.secure.force.com/ArticleSearch/apex/AEROBrandChat', // The URL that the pre-chat form will submit to
  deploymentId: '572j0000000L8MG', // The deployment ID provided by SalesForce
  deploymentScript: 'https://c.la3-c1-phx.salesforceliveagent.com/content/g/js/43.0/deployment.js', // The SalesForce deployment script
  endChat: { // Settings related to chat-end
    callback: null // A custom callback function to run when the chat session is ended by the agent or user
  },
  inChat: { // Settings related to the in-chat window
    callback: null // A custom callback function to be executed when chat starts
  },
  initUrl: 'https://d.la3-c1-phx.salesforceliveagent.com/chat', // The SalesForce initialize URL. This is used in the liveagent.init() call
  orgId: '00Dj0000000Jdpt', // The organization ID provided by SalesForce
  preChat: { // Settings related to the pre-chat window
    callback: null // A custom callback function to be executed when pre-chat starts
  }
};

