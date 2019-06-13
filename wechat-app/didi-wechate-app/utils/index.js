//req 
const DEFAULT_OPT = {
  url: '',
  data: {},
  header: {
    'Content-Type': 'application/json'
  },
  method: 'get',
  dataType: 'json'
}
let util = {
  request(opt) {
    const options = {
      ...DEFAULT_OPT,
      ...OPT
    };
    const { url, data, header, method, dataType } = options;
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        data,
        header,
        method,
        dataType,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          reject(err)
        },
      })

    })
  }
}

export default util;