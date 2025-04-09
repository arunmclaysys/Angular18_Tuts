function responseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let responseFlag = false;
            if (responseFlag) {
                resolve("API Response was Successful");
            } else {
                reject("API Failed to Respond");
            }
        }, 3000);
    });
}

responseFromAPI()
    .then((somevar)=>{
        console.log(somevar);
        return "hmmm";
    })
    .then((againsomeVar)=>{
        console.log(againsomeVar);
    })
    .catch((err)=>{
        console.error(`Catched: the ${err}. Please fix it.`);
    });