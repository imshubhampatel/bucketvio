function getFormData(form, req) {
    return new Promise(async (resolve, reject) => {
        await form.parse(req, (formErr, fields, files) => {
            if (formErr) {
                reject(formErr)
                return;
            }
            if (fields || files) {
                resolve({ fields, files })
                return;
            }
        })
    })
}

module.exports = getFormData;