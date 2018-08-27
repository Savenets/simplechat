const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 });

const messages = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
};

wss.on('connection', ws => {
  ws.send(JSON.stringify({type: 'MESSAGE_HISTORY', previousMessages:messages}));
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case 'ADD_MESSAGE': {
        messages.push({message: data.message, author: data.author});
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author,
        }, ws);
      }
        break;
      default:
        break
    }
  });

  ws.on('close', (e) => {
    console.log("on close on close", e);
  });

  ws.on('error', () => console.log('error'));
});
