interface Self {
    essence: number;
}

async function getPromise(id: string): Promise<Self> {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Promise ${id} has returned.`);
            resolve({essence: Math.PI})
        }, Math.random()*10000);
    })   
}

const promiseA = getPromise("A");
const promiseB = getPromise("B");

Promise.all([promiseA, promiseB]).then((selves) => {
    console.log(selves[0].essence + selves[1].essence);
});