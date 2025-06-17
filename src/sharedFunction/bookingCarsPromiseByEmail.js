export const bookingCarsPromise = async (email) => {

    const response = await fetch(`https://car-rentals-seven-ebon.vercel.app/booked-cars?email=${email}`,{credentials:'include'})
    const data = await response.json()
    return data
}
