
import excuteQuery from "../../../lib/db";

export default async (req,res) => {
    try {
        id = req.body.id
        console.log("attempts");
        const attempts = await excuteQuery({
            query: 'SELECT `attempts` FROM `user` WHERE `id` = ?;', 
            values: [id]
        });
        res.status(200).json(attempts);
        

    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": 'failed to save data', "err": error});
    }
};
