import Mascara from "../models/mascara.js";

export const getMascaras = async (req, res) => {
  try {
    const mascaras = await Mascara.find();
    res.json(mascaras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMascara = async (req, res) => {
  try {
    const { id } = req.params;
    const mascara = await Mascara.findById(id);

    if (mascara) {
      return res.json(mascara);
    }

    res.stats(404).json({ message: "mascara not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createMascara = async (req, res) => {
  try {
    const mascara = new Mascara(req.body);
    await mascara.save();
    res.status(201).json(mascara);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMascara = async (req, res) => {
  try {
    const { id } = req.params;
    const mascara = await Mascara.findByIdAndUpdate(id, req.body);

    res.status(201).json(mascara);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteMascara = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Mascara.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("mascara deleted!");
    }

    throw new Error("mascara not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};