const error = (message = "") => ({
    response: "Error",
    message: message,
});

const ok = (message = "") => ({
    response: "OK",
    message: message,
});

module.exports = {
    ok,
    error,
};
