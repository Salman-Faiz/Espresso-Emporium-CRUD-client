import { useLoaderData } from "react-router-dom";


const Update = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, photo } = coffee;
    return (
        <div>
   
            <h1>Update coffee {name}</h1>
        </div>
    );
};

export default Update;