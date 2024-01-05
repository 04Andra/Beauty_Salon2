import {MY_IP} from "../help/Ip_Help";

export async function fetchDataGetProduct() {
    const responseJson = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return await responseJson.json();
}

export async function fetchDataGetStock() {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stocks",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return await responseJson.json();
}


//add stock
export const fetchDataAddStock = async (name, price, quantity) => {
    try {
        const response = await fetch(
            "http://" + MY_IP + ":8080/addStock",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": name,
                    "quantity": quantity,
                    "price": price,
                })
            });

        const result = await response.json();

        // Handle the result as needed, e.g., update state or re-fetch data
        console.log(result);
    } catch (error) {
        console.error("Error adding stock:", error);
    }
}

//delete stock
export async function fetchDataDeleteStocks(id) {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/stock/delete/" + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return responseJson;
}