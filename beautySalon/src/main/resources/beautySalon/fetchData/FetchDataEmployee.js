import {MY_IP} from "../help/Ip_Help";

export async function fetchDataAddEmployee(employeeName, serviceName, email, telNo, fieldName, servicePrice, wallet){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addEmployee",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "employeeName": employeeName,
                "serviceName": serviceName,
                "email": email,
                "telNo": telNo,
                "fieldName": fieldName,
                "servicePrice": servicePrice,
                "wallet": wallet
            })
        });
    // return responseJson.json();
}

export async function fetchDataUpdateEmployee(id, employeeName, serviceName, email, telNo, fieldName, servicePrice, wallet){

    const responseJson = await fetch(
        "http://" + MY_IP + ":8080/addEmployee",
        {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "employeeName": employeeName,
                "serviceName": serviceName,
                "email": email,
                "telNo": telNo,
                "fieldName": fieldName,
                "servicePrice": servicePrice,
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