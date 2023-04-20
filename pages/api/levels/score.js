import excuteQuery from "../../../lib/db";


export default async (req,res) => {
    try {

        // Get the sessionId cookie value
        console.log("req", req.body.newScore);
        console.log("id", req.body.userid);
        if (req.body.level == 1) {
        const result = await excuteQuery({
            query: 'UPDATE user SET level1 = ? WHERE email IN (id)',
            values: [req.body.newScore],
            id: [req.body.userid]
        });
        }
        if (req.body.level == 2) {
            const result = await excuteQuery({
                query: 'UPDATE user SET level2 = ? WHERE email IN (id)',
                values: [req.body.newScore],
                id: [req.body.userid]
            });
        }
        if (req.body.level == 3) {
            const result = await excuteQuery({
                query: 'UPDATE user SET level3 = ? WHERE email IN (id)',
                values: [req.body.newScore],
                id: [req.body.userid]
            });
        }
        res.status(200).json({  });

    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": error, "err": 'failed to save data'});
    }
};
