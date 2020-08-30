
// const https = require('https');

// let displayFancy = true;
// let metaTagRegEx = /<meta[^>]+>/g;

// const getMetaData = (reqUrl,callback) => {

//     console.log('inside getMetaData func')
//     // reqUrl = `https://${reqUrl}`;
//     console.log(reqUrl);

//     // let proxifiedUrl = `https://thingproxy.freeboard.io/fetch/${reqUrl}`;
//     let options = {
//         host : reqUrl,
//         headers : {
//             "User-Agent" : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
//             // "Access-Control-Allow-Origin" : '*',
//             // 'Access-Control-Allow-Methods' : 'OPTIONS,GET,PUT,POST,DELETE',
//             // 'Access-Control-Allow-Headers' : 'Content-Type,Depth,User-Agent,X-File-Size,X-Requested-With,If-Modified-Since,X-File-Name,Cache-Control'
//         }
//     };

// https.get(options , res => {

//     let htmlData = '';

//     console.log('-=-=-=------' + res.headers)

//     res.on('data' , chunk => {
//         htmlData += chunk;
//     });

//     res.on('end', () => {
         
//         if(!htmlData) return callback({data : 'noithing here...'});
        
//         let siteHeading = htmlData.match(metaTagRegEx);
//         console.log(siteHeading);
//         let count = siteHeading.length;

//         if(displayFancy === false) {
//            let responseObj = {
//             data : siteHeading,
//             count
//            }
//             return  callback(responseObj);
//         }
//         else {

//             let metaArr = []
//             siteHeading.forEach(tag => {
//                 tag = tag.slice(6,tag.length-2); //removing meta word and tags
//                 let metaData = tag.split('" ').map(item=> {
//                     const pair = item.split('="');
//                     return pair[1]; 
//             })

//             metaArr.push(metaData);
//         });
//             console.log(metaArr)
//             let responseObj = {
//                 data : metaArr,
//                 count
//             }
//             return callback(responseObj);
//         }
//     });
// }).on('error', (error) => console.log(error.message))
// }

// module.exports.getMetaData = getMetaData;



