import eyeshadow from "../models/eyeshadow.js";

export const getEyeshadows = async (req, res) => {
  try {
    const eyeshadows = await eyeshadow.find();
    res.json(eyeshadows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getEyeshadow = async (req, res) => {
  try {
    const { id } = req.params;
    const eyeshadow = await eyeshadow.findById(id);

    if (eyeshadow) {
      return res.json(eyeshadow);
    }

    res.stats(404).json({ message: "eyeshadow not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createEyeshadow = async (req, res) => {
  try {
    const eyeshadow = new eyeshadow(req.body);
    await eyeshadow.save();
    res.status(201).json(eyeshadow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateEyeshadow = async (req, res) => {
  try {
    const { id } = req.params;
    const eyeshadow = await eyeshadow.findByIdAndUpdate(id, req.body);

    res.status(201).json(eyeshadow);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteEyeshadow = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await eyeshadow.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("eyeshadow deleted!");
    }

    throw new Error("eyeshadow not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};