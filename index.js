var urll = prompt("Enter a URL");
var data1;
var ID;


  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({url: urll})
  };

fetch('https://www.virustotal.com/api/v3/urls', options)
  .then(response => response.json())
  .then(response => {
    if(response){
      data1 = response.data;
      ID = data1.id;
      getData(ID);
    }
    })
    .catch(err => console.error(err));






    var analysis;

    const options2 = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502'
      }
    };


    function getData(id){
      fetch('https://www.virustotal.com/api/v3/analyses/' + id, options2)
      .then(response1 => response1.json())
      .then(response1 => {
        if(response1){
          analysis = response1.data;
          printData(analysis);
          console.log(analysis)
        }
      })
      .catch(err => console.error(err));
    }
    

    function printData( urlData){
      harmless = urlData.attributes.stats.harmless;
      malicious = urlData.attributes.stats.malicious;
      
      if( harmless > malicious){
        document.getElementsByTagName("h2")[0].innerHTML = 'URL is SAFE!!, checked by ' + harmless + '  parameteres';
      }
      else{
        document.getElementsByTagName("h2")[0].innerHTML = 'URL is UNSAFE!!, checked by ' + malicious + ' parameters';
      }
    }



























  // document.getElementsByTagName("h2")[0].innerHTML = ID;
   
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502'
  //   }
  // };
  
  // fetch('https://www.virustotal.com/api/v3/urls/' + ID, options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  
  


  // const options = {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'x-apikey': '6d96efe421861509b0b7ec99c33a98a7671b0b0d2c3af7d4f31eb31256796502',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: new URLSearchParams({url: 'hghgh'})
  // };
  
  // fetch('https://www.virustotal.com/api/v3/urls', options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));




    