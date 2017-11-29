function getRecentlyPlayedAnalysis(recentlyPlayedObject) {
    var analysisObject = {};
    var item;
    var playlistContextCount = 0;
    var albumContextCount = 0;
    var artistContextCount = 0;
    var playedAtArray = [];
    var tempArray = [];
    console.log('boo');
    console.log(recentlyPlayedObject.items);

    recentlyPlayedObject.items.forEach(function(item) {
        console.log('boo', item);

        //context
        if(item.context) {
            if(item.context.type == "playlist") {
                playlistContextCount++;
            }
            else if(item.context.type == "album") {
                albumContextCount++;
            }
            else if(item.context.type == "artist") {
                artistContextCount++;
            }
        }

        //playedAt
        tempArray.push(new Date(item.played_at));
        tempArray.push(1);
        playedAtArray.push(tempArray);
        tempArray = [];
    });

    analysisObject = {
        context: [
            playlistContextCount,
            albumContextCount,
            artistContextCount
        ],
        playedAt: playedAtArray
    }

    return analysisObject;
}

