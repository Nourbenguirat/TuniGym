import axios from 'axios';
 
export const fetchAllZenergy = async() =>{
    const {data} = await axios.get('http://localhost:4000/zenergy/allZenergy');
    return data;
}

export const postZenergy= async (values)=>{
    const addZenergy = await axios.post('http://localhost:4000/zenergy/addZenergy', {...values});

}
export const updateZenergy = async(id,values) =>{
    const updateZenergy = await axios.put(`http://localhost:400/zenergy/updateZenergy/${id}`,values);
}
export const deleteZenergy = async(id)=>{
    const deleteProgram = await axios.delete(`http://localhost:4000/zenergy/deleteZenergy/${id}`);
}

export const getUniqueZenergy = async(id)=>{
    const {data} = await axios.get(`htp://localhost:4000/zenergy/getZenergyById/${id}`);
    return data;

}
