import connectDB from '../../../utils/connectDB';
import Messages from '../../../models/Messages';
import { hash, verify, encrypt, decrypt } from '../../../utils/myCrypto';
import urlGenerator from '../../../utils/urlGenerator';

connectDB();

const mainAPI = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      // try {
      //   const notes = await Messages.find({});

      //   res.status(200).json({ success: true, data: notes });
      // } catch (err) {
      //   res.status(400).json({ success: false });
      // }
      break;
    case 'POST':
      try {
        const { message, password } = req.body;

        const hashPassword = await hash(password);
        const hashMessage = encrypt(message);
        const newURL = urlGenerator();

        const newMessage = await Messages.create({
          url: newURL,
          message: hashMessage,
          password: hashPassword,
          date: new Date(),
        });
        res.status(200).json({ success: true, data: newMessage });
      } catch (error) {
        console.log(error, 'index api');
        res.status(400).json({ success: false });
      }
  }
};

export default mainAPI;
