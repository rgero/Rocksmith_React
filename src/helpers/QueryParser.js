export function generateURL(params){
    var url = "http://localhost:8000/api/rocksmith"

    if (params !== { artistNames: "", songNames: "", leadTunings: "", rhythmTunings: "", bassTunings: "" }) {
      url = url + "?"

      if (params["artistNames"])
      { 
        url = url + "artist=" + params["artistNames"]
      }

      if (params["songNames"])
      {
        url = url + "&song=" + params["songNames"]
      }

      if (params["leadTunings"])
      {
        url = url + "&leadTuning=" + params["leadTunings"]
      }

      if (params["leadTunings"])
      {
        url = url + "&rhythmTuning=" + params["rhythmTunings"]
      }
      if (params["bassTunings"])
      {
        url = url + "&bassTuning=" + params["bassTunings"]
      }
    }

    console.log(url);
    return url;
  }
