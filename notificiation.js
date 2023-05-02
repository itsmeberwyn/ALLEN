function mention(post, username) {

    notifCounter = 0;
    for (let key in post) {
        console.log(post[key])
        if (post[key].includes(username)) {
            notifCounter++;
        }
    }

    return notifCounter > 0 ? `You have ${notifCounter} ${notifCounter > 1 ? 'notifications' : 'notification'}` : null;

}
let p = ["Which one is better in streaming S1MPLE or HARP3R ???!", "woah @HARP3R! this is so lit!"]
let u = "@HARP3R"

console.log(mention(p, u))