const jsdom = require("jsdom");     // npm from https://github.com/jsdom/jsdom
const { JSDOM } = jsdom;

var url_tagrget = "https://www.carmudi.co.id/mobilbaru/merek/toyota/kijang-innova/";
// if I change 'url_tagrget' to my website it's working 

var options = {
    referrer: "https://www.carmudi.co.id",
    pretendToBeVisual: true,
    includeNodeLocations: true,
    storageQuota: 987123123,
    resources: "usable",      
    runScripts: "dangerously"
};

JSDOM.fromURL(url_tagrget).then(dom =>{
    setTimeout(function() {
        console.log("completed to get html document in jsdom"); 
        var myhtml = dom.serialize();
        var fs = require('fs');
        fs.writeFile("detailcarmudi.html", myhtml, function(err){
            if(!err){
                console.log("completed to write html document");
                process.exit();
            }
        });
    }, 49);      // wait for 49 minutes to make sure html has been completed rendered 
});  

can you pay for me outside?
I cannot receive your money in this site.
There is special case.
As you know, now my account is not ready payment verify.
So I asked you.
If it is possible , please chat followings:
live:.cid.7b71ea7b875eed59
https://t.me/greengreen12334
sayjun0505@gmail.com
