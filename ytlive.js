var ffmpeg = require('ffmpeg');

// from < location of file (full path)
// path < rtmp from youtube

exports.startStreaming = function(path,rtmp){
  try {
      new ffmpeg(path, function (err, video) {
        if (!err) {
                console.log('video loaded');
                video.addCommand('-vcodec', 'libx264');
                video.addCommand('-preset', 'medium');
                video.addCommand('-pix_fmt', 'yuv420p');
                video.addCommand('-r', '30');
                video.addCommand('-g', '60');
                video.addCommand('-b:v', '2500k');
                video.addCommand('-acodec', 'libmp3lame');
                video.addCommand('-ar', '44100');
                video.addCommand('-threads', '6');
                video.addCommand('-qscale', '3');
                video.addCommand('-b:a', '712000');
                video.addCommand('-bufsize', '512k');
                video.addCommand('-f', 'flv');
                video.save(rtmp,function(err,file){
                  if(err){
                    console.log(err)
                  }else{
                    console.log('uspesno');
                  }
                })
        } else {
          console.log('Error: ' + err);
        }
      });
  
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
}
