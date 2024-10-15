import shortid from 'shortid';
import urlModel from "../../DB/models/urlModel.js";

export const generateShortCode = async (req, res, next) => {
    try {
        const { url } = req.body;
        console.log("IN");
        
        const shortCode = shortid.generate();
        
        const originalurl = new urlModel({ url, shortCode });
        await originalurl.save();
        
        res.send(`Shortened URL: http://yoururlshortener.com/${shortCode}`);
    } catch (err) {
      res.json({ message: 'Fail', err })
    }
}

export const getShortCode = async (req, res, next) => {
    try {
        const { shortcode } = req.params;
        const urlRecord = await urlModel.findOne({ shortCode: shortcode });  
        
        //console.log(urlRecord.url);
        
    
        if (urlRecord) {
            //res.json({message : urlRecord.url});
            res.redirect(urlRecord.url);
        } else {
            res.sendStatus(404); 
        }
    } catch (err) {
      res.json({ message: 'Fail', err })
    }
}
