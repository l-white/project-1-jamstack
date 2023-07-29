const axios = require('axios')

module.export = async function () {
  // export the result of this
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes')
    //console.log(res.data.data)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}
