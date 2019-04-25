let friends = require('../data/friends');
 
module.exports = function (app) {
 
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
 
    app.post('/api/friends', function (req, res) {
        //survey logic 
        let newFriend = req.body;
        console.log(newFriend);
      
        let lowestDifference = null;
        let bestMatch = null;
        for(let i = 0; i < friends.length; i++ ){
            let currentFriend = friends[i];
            let totalDifference = 0;
            
            for(let i = 0; i < currentFriend.scores.length; i++) {
               let scoreDifference = currentFriend.scores[i] - newFriend.scores[i];
               totalDifference += Math.abs(scoreDifference);
                
            }
            console.log(totalDifference, "total difference");
 
            if( lowestDifference === null || totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                bestMatch = currentFriend;
                console.log(bestMatch, " this is the best match");
            }
 
                
        } 
        console.log(bestMatch);
        // Friends.push(newFriend);
        res.json(bestMatch);
    });
 
}