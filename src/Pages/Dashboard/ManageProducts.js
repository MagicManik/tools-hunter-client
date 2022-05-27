import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import Items from './Items';

const ManageProducts = () => {
    const [deleteTool, setDeleteTool] = useState(null);

    const { data: tools, isLoading, refetch } = useQuery('tools', () =>
        fetch(`https://agile-fortress-81625.herokuapp.com/tool`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-7'>
            <h4 className='text-4xl gradient-text-2 font-bold text-center pb-8'>Manage Product</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools?.map(tool => <Items
                        key={tool._id}
                        tool={tool}
                        setDeleteTool={setDeleteTool}
                    ></Items>)
                }
            </div>
            {deleteTool && <DeleteModal
                deleteTool={deleteTool}
                setDeleteTool={setDeleteTool}
                refetch={refetch}
            ></DeleteModal>}
        </div>
    );
};

export default ManageProducts;