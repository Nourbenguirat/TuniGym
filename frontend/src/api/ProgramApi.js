import axios from 'axios';
 
export const fetchAllProgram = async() =>{
    const {data} = await axios.get('http://localhost:4000/program/allProgram');
    return data;
}

export const postProgram = async (values)=>{
    const addProgram = await axios.post('http://localhost:4000/program/addProgram', {...values});

}
export const updateProgram = async(id,values) =>{
    const updateProgram = await axios.put(`http://localhost:400/program/updateProgram/${id}`,values);
}
export const deleteProgram = async(id)=>{
    const deleteProgram = await axios.delete(`http://localhost:4000/program/deleteProgram/${id}`);
}

export const getUniqueAdvert = async(id)=>{
    const {data} = await axios.get(`htp://localhost:4000/program/getProgramById/${id}`);
    return data;

}

