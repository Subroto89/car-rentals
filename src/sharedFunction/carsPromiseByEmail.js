export const myCarsPromise = async (email) => {  
    const response = await fetch(`https://car-rentals-seven-ebon.vercel.app/cars?email=${email}`);
    const data = await response.json(); 
    return data; 
};