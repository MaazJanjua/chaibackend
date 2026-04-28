if (!process.env.PORT) {
    throw Error('PORT variable is not declared / available')
}

const config = {
    PORT: process.env.PORT
}

module.exports = config