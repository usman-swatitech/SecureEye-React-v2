const Stream = require('node-rtsp-stream');

const streamConfigs = [
  {
    name: 'stream01',
    streamUrl: 'rtsp://admin:Secure+123@192.168.20.2:554',
    wsPort: 9999,
  },
  {
    name: 'stream02',
    streamUrl: 'rtsp://React:Live+123@192.168.20.215:554',
    wsPort: 9998,
  },
  {
    name: 'stream03',
    streamUrl: 'rtsp://React:Live+123@192.168.20.231:554',
    wsPort: 9997,
  },
  {
    name: 'stream04',
    streamUrl: 'rtsp://React:Live+123@192.168.20.233:554',
    wsPort: 9996,
  },
  {
    name: 'stream05',
    streamUrl: 'rtsp://React:Live+123@192.168.20.218:554',
    wsPort: 9995,
  },
  {
    name: 'stream06',
    streamUrl: 'rtsp://React:Live+123@192.168.20.227:554',
    wsPort: 9994,
  },
  {
    name: 'stream07',
    streamUrl: 'rtsp://React:Live+123@192.168.20.226:554',
    wsPort: 9993,
  },
  {
    name: 'stream08',
    streamUrl: 'rtsp://React:Live+123@192.168.20.232:554',
    wsPort: 9992,
  },
  {
    name: 'stream09',
    streamUrl: 'rtsp://React:Live+123@192.168.20.222:554',
    wsPort: 9991,
  },
  {
    name: 'stream10',
    streamUrl: 'rtsp://React:Live+123@192.168.20.234:554',
    wsPort: 9990,
  },
  {
    name: 'stream11',
    streamUrl: 'rtsp://admin:Secure+1234@192.168.20.217:554',
    wsPort: 9989,
  },
  {
    name: 'stream12',
    streamUrl: 'rtsp://React:Live+123@192.168.20.228:554',
    wsPort: 9988,
  },
  
];

const streams = [];

streamConfigs.forEach(config => {
  const stream = new Stream({
    ...config,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30,
      ...(config.ffmpegOptions || {}),
    },
  });

  // Handle errors during stream creation
  stream.on('error', err => {
    console.error(`Error creating stream ${config.name}:`, err);
  });

  streams.push(stream);
});

// Optionally, handle process termination gracefully
process.on('SIGINT', () => {
  console.log('Closing streams gracefully...');
  streams.forEach(stream => stream.stop());
  process.exit();
});


//testing
