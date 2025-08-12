// dentro do handler, no lugar do DEMO:
const data = {
  title: 'Meu vídeo autorizado',
  thumbnail: 'https://meu-cdn.com/thumbs/abc.jpg',
  author: 'minha-conta',
  duration: 42,
  formats: [
    { quality: '1080p', url: 'https://meu-cdn.com/videos/abc-1080p.mp4', size: 12345678 },
    { quality: '720p',  url: 'https://meu-cdn.com/videos/abc-720p.mp4',  size: 9876543 }
  ]
};
return res.status(200).json(data);
