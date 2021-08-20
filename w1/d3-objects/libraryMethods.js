const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {
              const playlist = this.playlists;
              
       
                     for (key in playlist) {  
                      const play1 = (playlist[key])
                     let lists = ((play1.id + ': ' + play1.name) + ' - ' + ((play1.tracks).length + ' tracks'));
                    console.log(lists);  
                     } 
       },
  printTracks: function() {
    const tracks = this.tracks;
    
    for (key in tracks) {  
     const track1 = (tracks[key]);

    let songInfo = ((track1.id) + ': ' + (track1.name) + ' by ' + (track1.artist) + " (" + (track1.album) + ")");
   
    console.log(songInfo);  
    } 

    },
 printPlaylist: function(playlistId) {

  const playlist = this.playlists;
   const tracks = this.tracks;
  
         const choosePlaylist = playlist[playlistId];
         console.log((choosePlaylist.id) + ": " + (choosePlaylist.name) + " - " + (choosePlaylist.tracks).length + " tracks");
  
         tracksList = choosePlaylist.tracks;
                for(const songs of tracksList){
                      let songInfo = (tracks[songs]);
                      console.log(songInfo.id + ": " + songInfo.name + " by " + songInfo.artist + "(" + songInfo.album + ")");
                }          
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists;
    const tracks = this.tracks;

    const choosePlaylist = playlist[playlistId];
           (choosePlaylist.tracks).push(trackId);

           console.log(choosePlaylist);
},     
addTrack: function(name, artist, album) {

  const tracks = this.tracks;

  let newId = ("t" + generateUid());
  
  tracks[newId] = {
         'id': newId,
         'name': name,
         'artist': artist,
         'album': album,
  };

  console.log(tracks);
     
}

};