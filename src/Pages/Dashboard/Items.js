import React from 'react';

const Items = ({ tool, setDeleteTool }) => {
    const { name, img, _id } = tool;
    return (
        <div className="card lg:max-w-lg bg-base-100 custom-bg shadow-xl">
            <div className="card-body text-center">
                <p className="text-white">Product Name: {name}</p>
                <h2 className="text-white">Product Id: {_id}</h2>
                <img className='block mx-auto w-36' src={img} alt="" />

                <div className="card-actions justify-center">
                    <label
                        htmlFor="delete-confirm-modal"
                        onClick={() => setDeleteTool(tool)}
                        className="btn btn-primary"
                    >Delete Product</label>
                </div>
            </div>
        </div>
    );
};

export default Items;