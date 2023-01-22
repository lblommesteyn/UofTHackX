function score( data ){
    var score = 0;
    for (var i = 0; i < data.length; i++) {
        if (sentiment(data[i]).localeCompare("positive")) score += sent_score(data[i]);
    }
    return score;
}