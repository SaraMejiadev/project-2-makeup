import lipstick from "../models/lipstick.js";

export const getLipsticks = async (req, res) => {
  try {
    const lipsticks = await lipstick.find();
    res.json(lipsticks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getLipstick = async (req, res) => {
  try {
    const { id } = req.params;
    const lipstick = await lipstick.findById(id);

    if (lipstick) {
      return res.json(lipstick);
    }

    res.stats(404).json({ message: "lipstick not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createLipstick = async (req, res) => {
  try {
    const lipstick = new lipstick(req.body);
    await lipstick.save();
    res.status(201).json(lipstick);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateLipstick = async (req, res) => {
  try {
    const { id } = req.params;
    const lipstick = await lipstick.findByIdAndUpdate(id, req.body);

    res.status(201).json(lipstick);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteLipstick = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await lipstick.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("lipstick deleted!");
    }

    throw new Error("lipstick not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};