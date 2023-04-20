import excuteQuery from "../../lib/db"

export default async (req,res) => {
    try {
        const id = req.body.id
        const result = await excuteQuery({
            query: 'SELECT `level1`, `level2`,`level3` FROM `user` WHERE `email` = ?;', 
            values: [id]
        });
        console.log(result)
        res.status(200).json(result);
        
        

    } catch (error) {
        console.log(error);
        res.status(500).json({ "error": 'failed to save data', "err": error});
    }
};
