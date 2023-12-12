const Stream = require('node-rtsp-stream');

const streamConfigs = [
  {
    name: 'stream1',
    streamUrl: 'rtsp://React:Live+123@192.168.20.222:554',
    wsPort: 9999,
  },
  {
    name: 'stream2',
    streamUrl: 'rtsp://React:Live+123@192.168.20.218:554',
    wsPort: 9998,
  },
  {
    name: 'stream3',
    streamUrl: 'rtsp://React:Live+123@192.168.20.232:554',
    wsPort: 9997,
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
