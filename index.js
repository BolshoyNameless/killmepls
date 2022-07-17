var express = require('express');

const axios = require('axios').default;

let router = express();
const port = 3003

// Make this a post request because having a 64 char as a query param is kinda wack.
router.get("/browse/continue", async (req, res, next) => {
    //http://127.0.0.1:3001/browse/continue?continuetoken=${continuationToken}
    // continuationToken = 4qmFsgLJAxIPRkV3aGF0X3RvX3dhdGNoGpgDaWdNaU1pQkRaMjlMUTBNNWRFeDZRWGxqUkdzelIyZHdTMWxZV21oVk1rNTVZVmhDTU1JRWhBSkhTVjl4ZDBwbFVUaG1aME5YYlRCTFlYZHZXbVZZVW1aalIwWnVXbFk1ZW1KdFJuZGpNbWgyWkVZNWVWcFhaSEJpTWpWb1lrSkpabG96WkcxVmEwNVRVVlJXTkU5WVRtMU5SV2hLVFRKR1psRnJTazFhYkc5MFUyeFNNbHBGYUc5YWVHOTBRVUZDYkdKblFVSldWazFCUVZaV1ZFRkJSVUZTYTFZellVZEdNRmd6VW5aWU0yUm9aRWRPYjBGQlJVRkJVVVZCUVVGRlFVRlJRVUZCVVVWQldXdEZTVUZDU1ZSYWJXeHpaRWRXZVZwWFVtWmpSMFp1V2xZNU1HSXlkR3hpYUc5VVExQnlVVGxhWVZFNFptZERSbGt3Y0ZwQmIyUTVja0ZCTTNsSlZFTlFjbEU1V21GUk9HWm5RMFpaTUhCYVFXOWtPWEpCUVRNNWNqWjZOVkZMUVdkblFRJTNEJTNEmgIaYnJvd3NlLWZlZWRGRXdoYXRfdG9fd2F0Y2g%3D
    let continuation_token = req.query.continuetoken;
    let q;
    let newData = [];



    await axios.post('https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8&prettyPrint=false', {
        // Ignore headers and such. It's long and annoying and idk what goes.
    "context": {
            "client": {
                "hl": "en",
                "gl": "US",
                "remoteHost": "148.72.164.203",
                "deviceMake": "",
                "deviceModel": "",
                "visitorData": "CgtuTmxvalF5cWVySSia6bCWBg%3D%3D",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0,gzip(gfe)",
                "clientName": "WEB",
                "clientVersion": "2.20220708.01.00",
                "osName": "Windows",
                "osVersion": "10.0",
                "originalUrl": "https://www.youtube.com/",
                "platform": "DESKTOP",
                "clientFormFactor": "UNKNOWN_FORM_FACTOR",
                "configInfo": {
                    "appInstallData": "CJrpsJYGEMuirgUQuIuuBRDYmq4FELfLrQUQmN79EhDUg64FEMvs_RIQrp6uBRDQ8v0SEI_z_RIQkfj8EhDYvq0F"
                },
                "userInterfaceTheme": "USER_INTERFACE_THEME_DARK",
                "timeZone": "America/New_York",
                "browserName": "Firefox",
                "browserVersion": "102.0",
                "screenWidthPoints": 1920,
                "screenHeightPoints": 283,
                "screenPixelDensity": 1,
                "screenDensityFloat": 1,
                "utcOffsetMinutes": -240,
                "mainAppWebInfo": {
                    "graftUrl": "https://www.youtube.com/",
                    "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER",
                    "isWebNativeShareAvailable": false
                }
            },
            "user": {
                "lockedSafetyMode": false
            },
            "request": {
                "useSsl": true,
                "internalExperimentFlags": [],
                "consistencyTokenJars": []
            },
            "clickTracking": {
                "clickTrackingParams": "CAAQhGciEwiK6e39hvH4AhUywHIJHUp_BK8="
            },
            "adSignalsInfo": {
                "params": [
                    {
                        "key": "dt",
                        "value": "1657549989026"
                    },
                    {
                        "key": "flash",
                        "value": "0"
                    },
                    {
                        "key": "frm",
                        "value": "0"
                    },
                    {
                        "key": "u_tz",
                        "value": "-240"
                    }, {
                        "key": "u_his",
                        "value": "4"
                    }, {
                        "key": "u_h",
                        "value": "1080"
                    }, {
                        "key": "u_w",
                        "value": "1920"
                    }, {
                        "key": "u_ah",
                        "value": "1040"
                    }, {
                        "key": "u_aw",
                        "value": "1920"
                    }, {
                        "key": "u_cd",
                        "value": "24"
                    }, {
                        "key": "bc",
                        "value": "31"
                    }, {
                        "key": "bih",
                        "value": "283"
                    }, {
                        "key": "biw",
                        "value": "1903"
                    }, {
                        "key": "brdim",
                        "value": "-8,-8,-8,-8,1920,0,1936,1056,1920,283"
                    }, {
                        "key": "vis",
                        "value": "1"
                    }, {
                        "key": "wgl",
                        "value": "true"
                    }, {
                        "key": "ca_type",
                        "value": "image"
                    }
                ]
            }
        },
        "continuation": continuation_token,
       
    }, {
        headers: {
            Host: "www.youtube.com"


        }
    },).then(res => {
        // Start code
        const d = res.data;
        console.log(d)

        try {
            q = d.onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems;
        } catch {
            q = d.onResponseReceivedActions[0].reloadContinuationItemsCommand.continuationItems
        } q.map((s, i) => { // Detect if map is on the last index
            let isLastIndex = q.length === i + 1
            if (isLastIndex) { // If last index, push the continuationToken as the last index of the array
                try {
                    
                    if(s.continuationItemRenderer.continuationEndpoint.continuationCommand.token){
                        // Add last index if it IS a token
                        newData.push({continuationToken: s.continuationItemRenderer.continuationEndpoint.continuationCommand.token})
                    }

                    else if(s.richItemRenderer.content.videoRenderer.videoId){
                        // Add last index if it ISNT a token
                        console.log("FUCKY WUCKY")
                        newData.push({
                            videoId: s.richItemRenderer.content.videoRenderer.videoId,
                            thumbnail: s.richItemRenderer.content.videoRenderer.thumbnail.thumbnails[0].url,
                            title: s.richItemRenderer.content.videoRenderer.title.runs[0].text,
                            date: s.richItemRenderer.content.videoRenderer.publishedTimeText.simpleText || null,
                            length: s.richItemRenderer.content.videoRenderer.lengthText.simpleText,
                            views: s.richItemRenderer.content.videoRenderer.viewCountText.simpleText,
                            shortViews: s.richItemRenderer.content.videoRenderer.shortViewCountText.simpleText,
                            owner: s.richItemRenderer.content.videoRenderer.ownerText.runs[0].text,
                            avatar: s.richItemRenderer.content.videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url
                        })
                    }
                    
                } catch {
                    newData.push(
                        {continuationToken: ""}
                    )
                }} else {

                    try{
 
                        newData.push({
                            videoId: s.richItemRenderer.content.videoRenderer.videoId,
                            thumbnail: s.richItemRenderer.content.videoRenderer.thumbnail.thumbnails[0].url,
                            title: s.richItemRenderer.content.videoRenderer.title.runs[0].text,
                            date: s.richItemRenderer.content.videoRenderer.publishedTimeText.simpleText || null,
                            length: s.richItemRenderer.content.videoRenderer.lengthText.simpleText,
                            views: s.richItemRenderer.content.videoRenderer.viewCountText.simpleText,
                            shortViews: s.richItemRenderer.content.videoRenderer.shortViewCountText.simpleText,
                            owner: s.richItemRenderer.content.videoRenderer.ownerText.runs[0].text,
                            avatar: s.richItemRenderer.content.videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0].url
                        })
                    }catch{
                        console.log("Error")
                    }

            }

        });

        // uncomment this out to get data straight from youtube without editing it. For testing
        newData = []
        newData = d


    }).catch(error => {
        console.error(error);
    });

    res.json(newData)
})




router.listen(port, () => {
    console.log(`Working on port ${port}`)
})
