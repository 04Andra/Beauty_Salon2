import {MY_IP} from "../help/Ip_Help";

export async function fetchDataAddEmployee(firstName, service, email, telNo, picURL, massage, wallet){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addEmployee",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": service,
                "email": email,
                "telNo": telNo,
                "picURL": picURL,
                "massage": massage,
                "wallet": wallet
            })
        });
    // return responseJson.json();
}

export async function fetchDataUpdateEmployee(id, firstName, service, email, telNo, picURL, massage, wallet){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addEmployee",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "firstName": firstName,
                "lastName": service,
                "email": email,
                "telNo": telNo,
                "picURL": picURL,
                "massage": massage,
                "wallet": wallet
            })
        });
    // return responseJson.json();
}

export async function fetchDataGetEmployee() {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/employees",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return await responseJson.json();
}