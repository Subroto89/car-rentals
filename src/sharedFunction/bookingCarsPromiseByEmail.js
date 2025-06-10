export const bookingCarsPromise = async (email) => {

    const response = await fetch(`http://localhost:3000/booked-cars?email=${email}`)
    const data = await response.json()
    return data
}
