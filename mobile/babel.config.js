// const plugins = [
//     "@vue/babel-plugin-transform-vue-jsx",
//     ['import', {
//         libraryName: 'vant',
//         libraryDirectory: 'es',
//         style: true
//     }, 'vant']
// ];
const plugins = [
    "@vue/babel-plugin-transform-vue-jsx"

];
// 生产环境移除console
if (process.env.NODE_ENV === "production") {
    plugins.push("transform-remove-console");
}
module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: plugins
};
