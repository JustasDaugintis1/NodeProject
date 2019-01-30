/*
*
* Helpers for various tasks
*/
//Dependencies
var crypto = require('crypto');
var config = require('./config')
//Container for all the helpers

var helpers ={};



// Pare a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = function(str){
    try
    {
        var obj = JSON.parse(str);
        return obj;
    }
    catch(e)
    {
        return {};
    }
}

//Create a SHA256 hash
helpers.hash = function(str){
    if(typeof(str) == 'string' && str.length > 0)
    {
        var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
        return hash;
    }
    else
    {
        return false;
    }
};
//Create a string of randomg alphanumeric characters, of a given length
helpers.createRandomString=function(strLength){
    strLength = typeof(strLength) =='number' && strLength > 0 ? strLength : false;
    if(strLength){
        var possibleCharacters='abcdefghijklmnopqrstuvqxyz1234567890';

        //Start the final string
        var str = '';
    for (let index = 1; index <= strLength; index++) {
        // Get a random character from the possible Characters string
    var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        //Append this characeter to the final string
        str+=randomCharacter;
    }
    //Return final string
    return str;
    }
    else{
        return false;
    }
};
//Export the module
module.exports = helpers;