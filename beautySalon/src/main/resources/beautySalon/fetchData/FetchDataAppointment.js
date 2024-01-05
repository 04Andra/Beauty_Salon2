import {MY_IP} from "../help/Ip_Help";

export async function fetchDataAddAppointment(firstName, lastName, emailAddress, telNo, day, month, year, service, massage, productName, productPrice){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addAppointment",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "emailAddress": emailAddress,
                "telNo": telNo,
                "day": day,
                "month": month,
                "year": year,
                "service": service,
                "massage": massage,
                "productName": productName,
                "productPrice": productPrice,
            })
        });
    // return responseJson.json();
}

export async function fetchDataGetAppointment() {
    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/appointments",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

    return await responseJson.json();
}
