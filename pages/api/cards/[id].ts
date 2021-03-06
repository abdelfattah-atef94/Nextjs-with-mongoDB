import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/dbConnect';
import Card from '../../../models/Card';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { id },
        method
    } = req;
    switch (method) {
        case 'PUT':
            try {
                const card = await Card.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!card) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: card });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE':
            try {
                const deletedCard = await Card.deleteOne({ _id: id });

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