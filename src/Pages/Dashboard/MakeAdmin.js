import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch('https://agile-fortress-81625.herokuapp.com/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="overflow-x-auto bg-accent pt-9">
                <table class="table w-11/12 mx-auto">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Add User Role</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <MakeAdminRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></MakeAdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;