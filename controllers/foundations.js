import foundation from "../models/foundation.js";

export const getFoundations = async (req, res) => {
  try {
    const foundations = await foundation.find();
    res.json(foundations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getFoundation = async (req, res) => {
  try {
    const { id } = req.params;
    const foundation = await foundation.findById(id);

    if (foundation) {
      return res.json(foundation);
    }

    res.stats(404).json({ message: "foundation not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createFoundation = async (req, res) => {
  try {
    const foundation = new foundation(req.body);
    await foundation.save();
    res.status(201).json(foundation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateFoundation = async (req, res) => {
  try {
    const { id } = req.params;
    const foundation = await foundation.findByIdAndUpdate(id, req.body);

    res.status(201).json(foundation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteFoundation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await foundation.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("foundation deleted!");
    }

    throw new Error("foundation not found!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};