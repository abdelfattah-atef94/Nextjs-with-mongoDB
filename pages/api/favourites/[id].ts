import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Favourite from '../../../models/Favourite';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;
    switch (method) {
        case 'DELETE':
            try {
                const deletedCard = await Favourite.deleteOne({ _id: id });

                if (!deletedCard) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}