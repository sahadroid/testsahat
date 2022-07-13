
const axios = require('axios');

exports.testtwo = (req, res) => {
    const obj = {
        url: 'https://developers.onemap.sg/commonapi/search',
        search: req.body.search,
        pagenum: req.body.pagenum,
    }

    var config = {
        method: 'GET',
        url: obj.url+'?searchVal='+obj.search+'&returnGeom=Y&getAddrDetails=N&pageNum='+obj.pagenum,
        headers: {
            'Cookie':'Domain=developers.onemap.sg; _toffuid=rB8CEmLNRoJC3WMDA3KGAg==; onemap2=CgAQCmLNRoJmVgWYGeq4Ag=='
        }
    };

    axios(config)
        .then(function (response) {
            console.log(response.data)
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

};
exports.testone = (req, res) => {
    const obj = {
        totalSum : 0,
        leftSum : 0,
        inputs : req.body.inputs
    }
    obj.inputs.forEach((element) => obj.totalSum += element);   
    for (let i = 0; i < obj.inputs.length; i++) {
      if (obj.totalSum - obj.leftSum - obj.inputs[i] === obj.leftSum) {
        console.log(i.toString());
        res.json('The pivot index is : ' + i.toString());
        return;
      }
      obj.leftSum += obj.inputs[i]
    }
    console.log('-1');
    res.json('The pivot index is :  -1');
   
};


