const getValue = new Promise((resolve, reject) => {
    const value = '';
    setTimeout(() => {
        if (value) {
            resolve(value);
        } else {
            reject('no funca');
        }
    }, 3000);
});

// getValue
//     .then(res => {
//         console.log(res); 
//     })
//     .catch(err => {
//         console.log(err); 
//     })
//     .finally(() => {
//         console.log('ya fue loko'); 
//     });

const getData = async () => {
    try{
        const response = await getValue;
        console.log(response);
    } catch (e){
        console.log(e);
    } finally {
        console.log('me ejecuto igual');
        
    }
    
    
}

getData();
console.log('Promesa iniciada');
