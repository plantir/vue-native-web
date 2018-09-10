module.exports = {
    outputDir: process.env.NODE_ENV === 'app' ? 'app_dist' : 'web_dist',
    configureWebpack: config => {

    }
}