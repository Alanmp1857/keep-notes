import React, { useEffect } from 'react';
import AddNotes from './addNotes/AddNotes';
import DisplayNotes from './displayNotes/DisplayNotes';
import { getAllNotes } from '../../services/noteService';

const Dashboard = () => {
    const [noteList, setNoteList] = React.useState([]);
    useEffect(() => {
        getAllNotes().then((res) => {
            setNoteList(res.data)

        })
            .catch((err) => {
                console.log(err);
            })

    }, [noteList])

    return (
        <div style={{ backgroundColor: "lightyellow", minHeight: "70vh", maxHeight: "100%", margin: "100px 50px", paddingBottom: "10px" }}>
            <h2 style={{ textAlign: "center" }}>Dashboard</h2>
            <AddNotes />
            <DisplayNotes noteList={noteList} />
        </div>
    );
}

export default Dashboard;
