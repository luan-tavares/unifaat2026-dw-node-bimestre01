function novaPromise(time) {
    const callback = (resolve) => {
        setTimeout(() => {
            resolve('Promise resolvida!');
        }, time);
    };

    return new Promise(callback);
}

export default novaPromise;