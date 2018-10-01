importScripts('https://cdn.jsdelivr.net/npm/comlinkjs@3.0.2/umd/comlink.js');
importScripts('../ffmpeg-webm.js');


Comlink.expose(ffmpegjs, self);

/*
ffmpegjs({
  arguments: ['-y','-i', file.name, 'output.webm'],
  MEMFS: [{name: file.name, data: data}],
  stdin: () => {},
  onfilesready: (e) => {
    let data = e.MEMFS[0].data;
    output.src = URL.createObjectURL(new Blob([data]))
    console.log('ready', e)
  },
  print: function(data) { console.log(data); stdout += data + "\n"; },
  printErr: function(data) { console.log('error', data); stderr += data + "\n"; },
  postRun: function(result) { console.log('DONE', result); },
  onExit: function(code) {
    console.log("Process exited with code " + code);
    console.log(stdout);
  },
});*/