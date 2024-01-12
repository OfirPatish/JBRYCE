// Promise

function getArtistInfo(artistName, songTitle) {
  const artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`;
  const lyricsUrl = `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`;

  const fetchArtist = new Promise((resolve, reject) => {
    fetch(artistUrl)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  const fetchLyrics = new Promise((resolve, reject) => {
    fetch(lyricsUrl)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  Promise.all([fetchArtist, fetchLyrics])
    .then(([dataArtist, dataLyrics]) => {
      if (dataArtist.artists) {
        console.log({
          idArtist: dataArtist.artists[0].idArtist,
          strArtist: dataArtist.artists[0].strArtist,
          strArtistStripped: dataArtist.artists[0].strArtistStripped,
          strArtistAlternate: dataArtist.artists[0].strArtistAlternate,
          strLabel: dataArtist.artists[0].strLabel,
          idLabel: dataArtist.artists[0].idLabel,
          intFormedYear: dataArtist.artists[0].intFormedYear,
          intBornYear: dataArtist.artists[0].intBornYear,
          intDiedYear: dataArtist.artists[0].intDiedYear,
          strDisbanded: dataArtist.artists[0].strDisbanded,
          strStyle: dataArtist.artists[0].strStyle,
          strGenre: dataArtist.artists[0].strGenre,
          strMood: dataArtist.artists[0].strMood,
          strWebsite: dataArtist.artists[0].strWebsite,
          strFacebook: dataArtist.artists[0].strFacebook,
          strTwitter: dataArtist.artists[0].strTwitter,
          strBiographyEN: dataArtist.artists[0].strBiographyEN,
          strGender: dataArtist.artists[0].strGender,
          intMembers: dataArtist.artists[0].intMembers,
          strCountry: dataArtist.artists[0].strCountry,
          strCountryCode: dataArtist.artists[0].strCountryCode,
          strArtistThumb: dataArtist.artists[0].strArtistThumb,
          strArtistLogo: dataArtist.artists[0].strArtistLogo,
          strArtistCutout: dataArtist.artists[0].strArtistCutout,
          strArtistClearart: dataArtist.artists[0].strArtistClearart,
          strArtistWideThumb: dataArtist.artists[0].strArtistWideThumb,
          strArtistFanart: dataArtist.artists[0].strArtistFanart,
          strArtistFanart2: dataArtist.artists[0].strArtistFanart2,
          strArtistFanart3: dataArtist.artists[0].strArtistFanart3,
          strArtistFanart4: dataArtist.artists[0].strArtistFanart4,
          strArtistBanner: dataArtist.artists[0].strArtistBanner,
          strMusicBrainzID: dataArtist.artists[0].strMusicBrainzID,
          strISNIcode: dataArtist.artists[0].strISNIcode,
          strLastFMChart: dataArtist.artists[0].strLastFMChart,
          intCharted: dataArtist.artists[0].intCharted,
          strLocked: dataArtist.artists[0].strLocked,
        });
      }

      console.log(dataLyrics.lyrics);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getArtistInfo("coldplay", "Adventure of a lifetime");

// Try/Catch

// async function getArtistInfo(artistName, songTitle) {
//   const artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artistName}`;
//   const lyricsUrl = `https://api.lyrics.ovh/v1/${artistName}/${songTitle}`;

//   try {
//     const responseArtist = await fetch(artistUrl);
//     const dataArtist = await responseArtist.json();

//     const responseLyrics = await fetch(lyricsUrl);
//     const dataLyrics = await responseLyrics.json();

//     if (dataArtist.artists) {
//       console.log({
//         idArtist: dataArtist.artists[0].idArtist,
//         strArtist: dataArtist.artists[0].strArtist,
//         strArtistStripped: dataArtist.artists[0].strArtistStripped,
//         strArtistAlternate: dataArtist.artists[0].strArtistAlternate,
//         strLabel: dataArtist.artists[0].strLabel,
//         idLabel: dataArtist.artists[0].idLabel,
//         intFormedYear: dataArtist.artists[0].intFormedYear,
//         intBornYear: dataArtist.artists[0].intBornYear,
//         intDiedYear: dataArtist.artists[0].intDiedYear,
//         strDisbanded: dataArtist.artists[0].strDisbanded,
//         strStyle: dataArtist.artists[0].strStyle,
//         strGenre: dataArtist.artists[0].strGenre,
//         strMood: dataArtist.artists[0].strMood,
//         strWebsite: dataArtist.artists[0].strWebsite,
//         strFacebook: dataArtist.artists[0].strFacebook,
//         strTwitter: dataArtist.artists[0].strTwitter,
//         strBiographyEN: dataArtist.artists[0].strBiographyEN,
//         strGender: dataArtist.artists[0].strGender,
//         intMembers: dataArtist.artists[0].intMembers,
//         strCountry: dataArtist.artists[0].strCountry,
//         strCountryCode: dataArtist.artists[0].strCountryCode,
//         strArtistThumb: dataArtist.artists[0].strArtistThumb,
//         strArtistLogo: dataArtist.artists[0].strArtistLogo,
//         strArtistCutout: dataArtist.artists[0].strArtistCutout,
//         strArtistClearart: dataArtist.artists[0].strArtistClearart,
//         strArtistWideThumb: dataArtist.artists[0].strArtistWideThumb,
//         strArtistFanart: dataArtist.artists[0].strArtistFanart,
//         strArtistFanart2: dataArtist.artists[0].strArtistFanart2,
//         strArtistFanart3: dataArtist.artists[0].strArtistFanart3,
//         strArtistFanart4: dataArtist.artists[0].strArtistFanart4,
//         strArtistBanner: dataArtist.artists[0].strArtistBanner,
//         strMusicBrainzID: dataArtist.artists[0].strMusicBrainzID,
//         strISNIcode: dataArtist.artists[0].strISNIcode,
//         strLastFMChart: dataArtist.artists[0].strLastFMChart,
//         intCharted: dataArtist.artists[0].intCharted,
//         strLocked: dataArtist.artists[0].strLocked,
//       });
//     }

//     console.log(dataLyrics.lyrics);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getArtistInfo("coldplay", "Adventure of a lifetime");
