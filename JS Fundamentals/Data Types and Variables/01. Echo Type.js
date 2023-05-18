function EchoType(data) {
    console.log(typeof (data))
    if (typeof (data) === "number" || typeof (data) === "string") {
        console.log(data)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}
EchoType('Hello, JavaScript!')