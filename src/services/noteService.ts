// noteService.ts
import axios from 'axios';
import Notes from '../models/notes';

const addNotes = (newNote: Notes) => {
    return axios.post("http://localhost:4000/data", newNote);
}

const getAllNotes = () => {
    return axios.get("http://localhost:4000/data");
}

const deleteNotes = (id: Number) => {
    return axios.delete(`http://localhost:4000/data/${id}`);
}

const updateNotes = (id: Number, newNote: any) => {
    return axios.put(`http://localhost:4000/data/${id}`, {
        title: newNote.title,
        note: newNote.note
    });
}

export { addNotes, getAllNotes, deleteNotes, updateNotes }