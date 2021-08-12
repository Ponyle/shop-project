import axios from 'axios'
//1.
// export function request(config,success,failure) {
//
//     const instance = axios.create({
//         baseURL: '',
//         timeout:5000,
//         params: {
//             no_conv: 1
//         },
//     });
//
//     instance(config).then(res=>{
//         success(res)
//     }).catch(err=>{
//         failure(err)
//     })
//
// }

//2
// export function request(config) {
//
//     const instance = axios.create({
//         baseURL: '',
//         timeout:5000,
//         params: {
//             no_conv: 1
//         },
//     });
//
//     instance(config.baseconfig).then(res=>{
//         config.success(res)
//     }).catch(err=>{
//         config.failure(err)
//     })
//
// }
//3
// export function request(config) {
//     return new Promise((resolve,reject)=>{
//         const instance = axios.create({
//             baseURL: '',
//             timeout:5000,
//             params: {
//                 no_conv: 1
//             },
//         })
//
//         instance(config).then(res=>{
//             resolve(res)
//         }).catch(err=>{
//             reject(err)
//         })
//
//     })
//
//
// }

//4
export function request(config) {
        const instance = axios.create({
            baseURL: '',
            timeout:5000,
            params: {
                no_conv: 1
            },
        })
        return instance(config)
}