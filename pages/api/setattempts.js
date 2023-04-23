import excuteQuery from "../../../lib/db";


export default async (req,res) => {
    try {

        // Get the sessionId cookie value
        console.log("req", req.body.newScore);
        console.log("id", req.body.userid);

        const current_attempts = await excuteQuery({
            query: 'SELECT attempts FROM user WHERE email IN (id)'
        });

        const result = await excuteQuery({
            query: 'UPDATE user SET attempts = ? WHERE email IN (id)',
            values: current_attempts+=1,
        
        });
    
        res.status(200).json({  });

    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error, "err": 'failed to save data'});
    }
};


