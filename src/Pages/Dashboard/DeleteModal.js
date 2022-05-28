import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteTool, setDeleteTool, refetch }) => {


    const { _id, name } = deleteTool;

    const handleDelete = () => {
        fetch(`http://localhost:5000/tool/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is deleted`);

                    // close the modal
                    setDeleteTool(null)

                    // update data in UI
                    refetch();
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-lg">Are You sure to {name}</h3>
                    <p className="py-4">If You Delete One then You can't get back the item.</p>
                    <div className="modal-action flex justify-center">
                        <button onClick={handleDelete} className="btn btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-primary">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;