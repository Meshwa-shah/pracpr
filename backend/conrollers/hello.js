export const hello = async (req, res) => {
   try {
      res.status(201).json({ message: "Hello", success: true });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}

export const name = async (req, res) => {
   try{
      const name = req.body.name;
      res.status(201).json({ message: `Hello ${name}`, success: true });
   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}

export const send = async (req, res) => {
   try{

   }

   catch (err) {
      res.status(500).json({ message: err.message });
   }
}