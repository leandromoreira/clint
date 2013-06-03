function Bitrate(kbps, width, height){
  var self    = this;

  self.kbps   = kbps;
  self.width  = width;
  self.height = height;
}

function AppViewModel() {
    var self = this;

    self.videoInputs = ko.observableArray(['/dev/video0', 'File', 'RTMP']);
    self.videoInput = ko.observable("");
    self.audioInputs  = ko.observableArray(['/dev/audio0','File']);
    self.audioInput  = ko.observable("");
    self.videoFormats = ko.observableArray(['H.264']);
    self.videoFormat = ko.observable("");
    self.audioFormats = ko.observableArray(['AAC']);
    self.audioFormat  = ko.observable("");
    self.bitrates    = ko.observableArray([]);
    self.rtmpAddress = "";
    self.streamName  = "";

    self.stream = function(){
      console.debug(self);
      console.log(self);
    }
}

ko.applyBindings(new AppViewModel());
