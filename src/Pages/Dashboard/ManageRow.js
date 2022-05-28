import React from 'react';
import { toast } from 'react-toastify';

const ManageRow = ({ user, refetch }) => {
    const { email, role } = user;


    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/manage/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }


    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            {/* যদি ইউজার এডমিন না হয় তাহলে তার ইমেইল এর পাশে আমরা Make Admin বাটনটাকে দেখাবো।  */}
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default ManageRow;