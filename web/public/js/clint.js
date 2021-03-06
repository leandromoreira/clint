function Bitrate(kbps, width, height){
  var self    = this;

  self.kbps   = ko.observable(kbps);
  self.width  = ko.observable(width);
  self.height = ko.observable(height);
}

function AppViewModel() {
    var self           = this;

    self.videoInputs   = ko.observableArray(['/dev/video0', 'File', 'RTMP']);
    self.videoInput    = ko.observable("");
    self.audioInputs   = ko.observableArray(['/dev/audio0','File']);
    self.audioInput    = ko.observable("");
    self.videoFormats  = ko.observableArray(['H.264']);
    self.videoFormat   = ko.observable("");
    self.audioFormats  = ko.observableArray(['AAC']);
    self.audioFormat   = ko.observable("");
    self.bitrates      = ko.observableArray([]);
    self.uploadEnable  = ko.observable(false);
    self.kbpsAvailable = ["100", "150", "200", "250", "300", "350", "400", "450", "500", "700", "900", "1208"];
    self.rtmpAddress = ko.observable("");
    self.streamName  = ko.observable("");

    self.addBitrate = function(argument) {
     self.bitrates.push(new Bitrate(self.kbpsAvailable[0], "", ""));
    }

    self.videoInputChange = function() {
      if(self.videoInput() === 'File'){
        self.uploadEnable(true);
      }else{
        self.uploadEnable(false);
      }
    }

    self.removeBitrate = function(bitrate){
      self.bitrates.remove(bitrate);
    }

    self.stream = function(){
      console.debug(ko.toJSON(self));
      alert('look in your console');
    }

    self.maximumOfBitrates = function() {
      return self.bitrates().length < 5;
    }
}

ko.applyBindings(new AppViewModel());

