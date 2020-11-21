import dbConnect from '../../../utils/dbConnect';
import Favourite from '../../../models/Favourite';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const favouriteCards = await Favourite.find({});

                res.status(200).json({ success: true, data: favouriteCards });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        case 'POST':
            try {
                const favouriteCard = await Favourite.create(req.body);
                res.status(200).json({ success: true, data: favouriteCard });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;

        default:
            res.status(400).json({ success: false });
            break;
    }
}