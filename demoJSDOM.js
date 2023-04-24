const jsdom = require("jsdom");     // npm from https://github.com/jsdom/jsdom
const { JSDOM } = jsdom;

var url_tagrget = "https://www.carmudi.co.id/dijual/toyota-veloz-q-jawa-barat-bekasi-barat/11731180";
// if I change 'url_tagrget' to my website it's working 

var options = {
    referrer: "https://www.carmudi.co.id",
    pretendToBeVisual: true,
    includeNodeLocations: true,
    storageQuota: 987123123,
    // resources: "usable",      
    runScripts: "dangerously"
};

JSDOM.fromURL(url_tagrget, options).then(dom =>{
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
// My skype       Live:.cid.7b71ea7b875eed59        Creativity
// MyGmail        sayjun0505@gmail.com
// Tel                 https://t.me/greengreen12334