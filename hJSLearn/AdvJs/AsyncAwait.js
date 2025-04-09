function getApiResponse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let successfulResponse = false;
            if (successfulResponse) {
               resolve({name: "arun", isActive: true});
            } else {
               reject({response: "failureAPI"});
            }
        }, 3000);
    });
}

const APIResultCheck = async() =>{
    await getApiResponse()
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.error("Error is", err);
        });
    } 

// async function APIResultCheck() {
//     try {
//         await getApiResponse()
//         .then((data)=>{
//             console.log(data);
//     });
//     } catch (error) {
//         console.error("Error is ", error);
//     }
// }

// async function APIResultCheck() {
//     try {
//         console.log("Inside the Try block");
//         const apiResp = await getApiResponse();
//         console.log(apiResp);
//     } catch (error) {
//         console.error("Error is ", error);
//     }
// }

APIResultCheck();