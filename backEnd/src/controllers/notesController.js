export const getAllNotes = (req, res) => {
    res.status(200).send("You just fetched the Notes");
};
export function createNote(req, res){
    res.status(201).json({ message: "Note is created successfully" });
};
export const updateNote = (req, res) => {
    res.status(201).json({ message: "Note is updated successfully" });
};
export const deleteNote = (req, res) => {
    res.status(200).json({ message: "Note is deleted successfully" });
};
