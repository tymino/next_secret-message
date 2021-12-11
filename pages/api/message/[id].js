import connectDB from '../../../utils/connectDB';
import Messages from '../../../models/Messages';
import { verify, decrypt } from '../../../utils/myCrypto';

connectDB();

const messageAPI = async (req, res) => {
  const {
    query: { id },
    method,
    body: { password },
  } = req;

  if (id.length !== 6) return;

  switch (method) {
    case 'POST':
      try {
        const data = await Messages.findOne({ url: id });
        const checkPassword = await verify(password, data.password);

        if (checkPassword) {
          const message = decrypt(data.message);
          res.status(200).json({ success: true, data: message });
          return;
        }
      } catch (error) {
        console.log(error, 'index api');
        res.status(400).json({ success: false });
      }
  }
};

export default messageAPI;
