export const myCarsPromise = async (email) => {  
    const response = await fetch(`http://localhost:3000/cars?email=${email}`);
    const data = await response.json(); 
    return data; 
};