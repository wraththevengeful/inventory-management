const db = require('../db/queries');

async function deleteAnItem(req,res) {
    const adminDetails = req.body;
    const itemID = Number(req.params.itemid);
    // console.log(itemID); 
    const admindets = await db.verifyAdmin(adminDetails);
    if(admindets && admindets.username == adminDetails.adminusername && admindets.password == adminDetails.adminpassword){
        console.log(`has`);
        await db.deleteAnItem(itemID);
        res.redirect('/');
    }
    else{
        console.log(`hasnt`);
        res.render("wrongadmin")
    }
    // console.log(adminDetails, admindets)
}

module.exports = {
    deleteAnItem,
}