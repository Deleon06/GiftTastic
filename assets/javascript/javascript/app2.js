  //adding the date picker in our code, new technology

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
 
  //creating an empty array that we will use to store the volunteering opportunities
  var randomOrg = [];
  //creating objects to link the cities with the volunteering opportunities and type of volunteering opportunity
  var volunteerOrgDestination = [{city: "Tokyo", Choices: ["http://telljp.com", "https://www.nacsj.or.jp/english/index.com", "https://www.habitatjp.org"], imageArray: ["SupportOutreach1a9b10c26c31c.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "HousingHomeless1c18b.png"]},
    {city: "Jakarta", Choices: ["http://cleanupjakartaday.org/en", "https://www.komunitastaufan.org/en", "https://jakartaanimalaid.com"], imageArray: ["Conservation2a4a11c15a.png", "ChildrensHealth2b6c8b19a30c.png", "Aquisition2c5b34a17b.png"]},
    {city: "Delhi", Choices: ["http://www.wwoofindia.org/home.htm", "http://volunteeringindiahimalayarosekanda.org", "http://sadhana-village.org"], imageArray: ["CulturalExchange3a.png", "CulturalAwareness3b11b22c.png", "Charitable3c12a16a21b23a29a32b34c35a.png"]},
    {city: "Manila", Choices: ["https://goharibon.wordpress.com", "http://www.gk1world.com/home", "http://angelcity.findangel.org"], imageArray: ["Conservation2a4a11c15a.png", "EndingPoverty4b7a24c27c.png", "EmotionalSupport4c21c29b.png"]},
    {city: "Seoul", Choices: ["http://www.rainbowyouth.or.kr/eng", "https://www.wwfkorea.or.kr", "https://www.amnesty.org/en/countries/asia-and-the-pacific/south-korea"], imageArray: ["YouthDevelopmemt5a8c16c20a26b28c.png", "Aquisition2c5b34a17b.png", "AmnestyInternational5c.png"]},
    {city: "Shanghai", Choices: ["http://steppingstoneschina.net", "http://morningtears.org", "http://www.baobeifoundation.or"], imageArray: ["TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "ChildrensWelfare6b13b17a22b28a30a.png", "ChildrensHealth2b6c8b19a30c.png"]},
    {city: "Karachi", Choices: ["http://una.org.pk", "http://www.kasbfoundation.org.pk", "http://www.concernforchildren.org.pk"], imageArray: ["EndingPoverty4b7a24c27c.png", "DisasterRelief7b14c.png", "ChildrensCharity7c17c.png"]},
    {city: "Beijing", Choices: ["http://en.bnvs.cn/Application.asp", "https://www.bethelchina.org", "https://www.unitedplanet.org"], imageArray: ["TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "ChildrensHealth2b6c8b19a30c.png", "YouthDevelopmemt5a8c16c20a26b28c.png"]},
    {city: "New York", Choices: ["https://www.citymeals.org", "https://help.rescue.org", "https://www.bigsnyc.org"], imageArray: ["EndHunger9a18a.png", "SupportOutreach9b10c26c31c.png", "BigBrothers9c.png"]},
    {city: "Guangzhou", Choices: ["http://www.helpx.net", "https://www.internations.org", "http://www.capfa.org.cn"], imageArray: ["Farming10a14a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "SupportOutreach9b10c26c31c.png"]},
    {city: "San Paulo", Choices: ["http://www.bowlesvolunteering.com", "http://www.partnershipvolunteers.org/volunteer-in-brazil", "www.volunteerworld.com/review/ipbio-reserva-betary"], imageArray: ["Enrichment11a.png", "CulturalAwareness3b11b22c.png", "Conservation2a4a11c15a.png"]},
    {city: "Mexico City", Choices: ["http://www.charity-coalition.org", "http://www.americanbenevolentsociety.com", "https://www.elpozodevida.org.mx"], imageArray: ["Charitable3c12a16a21b23a29a32b34c35a.png", "Assistance12b24b32c.png", "Conscientiousness12c13c32a.png"]},
    {city: "Mumbai", Choices: ["https://www.akanksha.org", "https://www.cry.org/volunteer-with-cry-old/internships", "http://www.aawc.in/act/intern.html"], imageArray: ["TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "ChildrensWelfare6b13b17a22b28a30a.png", "Conscientiousness12c13c32a.png"]},
    {city: "Osaka", Choices: ["https://hellofarmorganics.com/projects-volunteering", "https://ajet.net/community/volunteering-charity/volunteer-in-japan", "http://foreignvolunteers.org/about-fvj/get-involved"], imageArray: ["Farming10a14a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "DisasterRelief7b14c.png"]},
    {city: "Moscow", Choices: ["http://www.oneworld365.org/company/fronteering/lake-baikal-conservation-project", "http://www.ifrc.org/en", "http://www.orphanoutreach.co/countries-we-serve/russia"], imageArray: ["Conservation2a4a11c15a.png", "MedicalAssistance15b19b27b33b34b.png", "Orphans15c25a33a.png"]},
    {city: "Dhaka", Choices: ["https://www.volunteerbangladesh.org/volunteer-in-dhaka", "http://unysab.org", "http://vbd.com.bd"], imageArray: ["Charitable3c12a16a21b23a29a32b34c35a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "YouthDevelopmemt5a8c16c20a26b28c.png"]},
    {city: "Cairo", Choices: ["http://www.savethechildren.org/site/c.8rKLIXMGIpI4E/b.6738069/k.B7D9/Egypt.htm", "http://www.ace-egypt.org.uk", "http://www.littlestars-luxor.org"], imageArray: ["ChildrensWelfare6b13b17a22b28a30a.png", "Aquisition2c5b34a17b.png", "ChildrensCharity7c17c.png"]},
    {city: "Los Angeles", Choices: ["https://foodforward.org", "https://lampcommunity.org", "https://www.opcc.net"], imageArray: ["EndHunger9a18a.png", "HousingHomeless1c18b.png", "WomensRights18c22a.png"]},
    {city: "Bangkok", Choices: ["http://thailand.operationsmile.org", "http://www.blind.or.th/en", "http://paperranger.org/en/home"], imageArray: ["ChildrensHealth2b6c8b19a30c.png", "MedicalAssistance15b19b27b33b34b.png", "AnimalRescue19c20c25b31a.png"]},
    {city: "Kolkata", Choices: ["http://www.bhumi.ngo", "http://www.smilengo.org", "http://vspca.org"], imageArray: ["YouthDevelopmemt5a8c16c20a26b28c.png", "ChristianVolunteer20b27a.png", "AnimalRescue19c20c25b31a.png"]},
    {city: "Buenos Aires", Choices: ["https://www.workingabroad.com/projects/argentina-volunteer", "https://www.ailolabuenosaires.com/en/volunteering", "https://www.volunteerhq.org/volunteer-in-argentina"], imageArray: ["TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "Charitable3c12a16a21b23a29a32b34c35a.png", "EmotionalSupport4c21c29b.png"]},
    {city: "Tehran", Choices: ["https://www.omidfoundation.com", "http://aiesec.ir/en/youth/volunteer-abroad", "http://www.helpx.net/hostlist.asp?host_region=956&network=9"], imageArray: ["WomensRights18c22a.png", "ChildrensWelfare6b13b17a22b28a30a.png", "CulturalAwareness3b11b22c.png"]},
    {city: "Istanbul", Choices: ["https://www.lovevolunteers.org/destinations/volunteer-turkey", "https://www.workaway.info/546376994479-en.html", "http://yabangee.com/volunteer"], imageArray: ["Charitable3c12a16a21b23a29a32b34c35a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "CommunityCenter23c32a35b.png"]},
    {city: "Lagos", Choices: ["http://www.wateraid.org/ng/get-involved/jobs-and-volunteering", "https://volunteerinnigeria.wordpress.com/volunteers", "https://www.vsointernational.org/fighting-poverty/where-we-fight-poverty/nigeria"], imageArray: ["WaterConservation24a.png", "Assistance12b24b32c.png", "EndingPoverty4b7a24c27c.png"]},
    {city: "Shenzhen", Choices: ["https://community.travelchinaguide.com/m.asp?u=ethniceast", "https://www.iwh.co.nz/volunteer-in-asia-pacific-regions/china/volunteer-in-china/volunteer-turtle-project-china", "https://www.i-to-i.com/tefl-courses/?utm_source=goabroad&utm_medium=oa&utm_campaign=goabroad_link_volunteerabroad_visitwebsite"], imageArray: ["Orphans15c25a33a.png", "AnimalRescue19c20c25b31a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png"]},
    {city: "Rio de Janeiro", Choices: ["https://caminhoslanguages.com/volunteer", "http://www.projectfavela.org", "http://umrio.org"], imageArray: ["TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "YouthDevelopmemt5a8c16c20a26b28c.png", "SupportOutreach9b10c26c31c.png"]},
    {city: "Kinshasa", Choices: ["http://www.handsatwork.org/drc", "http://media.ifrc.org/ifrc/where-we-work/africa/red-cross-democratic-republic-congo", "https://www.givingway.com"], imageArray: ["ChristianVolunteer20b27a.png", "MedicalAssistance15b19b27b33b34b.png", "EndingPoverty4b7a24c27c.png"]},
    {city: "Tianjin", Choices: ["https://www.volunteeringsolutions.com/china", "http://www.careerinchina.ca/teach.html", "http://www.tj.xinhuanet.com/web/ueafc/index.htm"], imageArray: ["ChildrensWelfare6b13b17a22b28a30a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "YouthDevelopmemt5a8c16c20a26b28c.png"]},
    {city: "Paris", Choices: ["http://www.benenova.fr", "http://www.soshelpline.org", "http://www.utopia56.com/en"], imageArray: ["Charitable3c12a16a21b23a29a32b34c35a.png", "EmotionalSupport4c21c29b.png", "HelpingRefugees29c.png"]},
    {city: "Lima", Choices: ["http://www.hogarcima.org", "http://www.aprendocontigo.org/en", "http://www.villalapazfoundation.org"], imageArray: ["ChildrensWelfare6b13b17a22b28a30a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "ChildrensHealth2b6c8b19a30c.png"]},
    {city: "Chengdu", Choices: ["www.goeco.org/area/volunteer-in-asia/china/giant-panda-centerm", "https://globalvolunteers.org/china", "https://www.studyabroad.com"], imageArray: ["AnimalRescue19c20c25b31a.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png", "SupportOutreach9b10c26c31c.png"]},
    {city: "London", Choices: ["https://volunteerteam.london.gov.uk/opportunities/11278", "https://www.handsonlondon.org.uk", "https://www.ncvo.org.uk/ncvo-volunteering"], imageArray: ["Conscientiousness12c13c32a.png", "Charitable3c12a16a21b23a29a32b34c35a.png", "Assistance12b24b32c.png"]},
    {city: "Nagoya", Choices: ["http://www.santaandfriendsnagoya.com/about/volunteers.php", "http://www.alzheimer.or.jp", "http://www.kikonet.org"], imageArray: ["Orphans15c25a33a.png", "MedicalAssistance15b19b27b33b34b.png", "GlobalWarming33c.png"]},
    {city: "Lahore", Choices: ["http://www.sos.org.pk/Person/InternationalVolunteerForm", "https://shaukatkhanum.org.pk/join-us/volunteering", "http://prcs.org.pk/youth-volunteer"], imageArray: ["Aquisition2c5b34a17b.png", "MedicalAssistance15b19b27b33b34b.png", "Charitable3c12a16a21b23a29a32b34c35a.png"]},
    {city: "Bangalore", Choices: ["http://www.handsatwork.org/drc", "http://media.ifrc.org/ifrc/where-we-work/africa/red-cross-democratic-republic-congo", "https://www.givingway.com"], imageArray: ["Charitable3c12a16a21b23a29a32b34c35a.png", "CommunityCenter23c32a35b.png", "TeachingEd1b6a8a10b13a14b16b21a23b25c26a28b30b31b35c.png"]},
    ];


function displayOrgSite(i) {
  //alert(randomOrg[0].Choices[i]);
  $('#orgSite').attr("src", randomOrg[0].Choices[i]);
  //$('#orgSite').html(randomOrg[0].Choices[i]);
}; // getFlights() 

  // the following function returns a list of three organizations each 
  // for one or more random cities
  function getRandomOrgs(volunteerOrgDestination, maxCities)
  {
    var maxIndex = maxCities || 1 ;
    var randomNum = Math.floor(Math.random()*(volunteerOrgDestination.length-1))+1;
    var result = [];
    for(var i=0; i<maxIndex; i++)
    {
      result.push(volunteerOrgDestination[randomNum]);
    };

    return result;
  }; // end function getRandomOrgs()
//selecting a random city to use to acquire the rest of the information
  function displayOrgInfo() {
    randomOrg = getRandomOrgs(volunteerOrgDestination, 1); // pick a randon City and three orgs in that city
    $("#randomCity").html(randomOrg[0].city);
    //storing that city in the sessionStorage
    sessionStorage.setItem("city", randomOrg[0].city);

    

   //adding the images to the UI
    document.getElementById("org1").src = "assets/images/" + randomOrg[0].imageArray[0];
    document.getElementById("org2").src = "assets/images/" + randomOrg[0].imageArray[1];
    document.getElementById("org3").src = "assets/images/" + randomOrg[0].imageArray[2];
    
  }; 

 function processSelect() { 
    //depending on what the user selects either go to the next page or not
    if (confirm("Please confirm your selection:   \n" + randomOrg[0].city   + "\n" + $("#datepicker").val() + "\n" +"Would you like to proceed to select your flights?" ) == true) {
        var date = $("#datepicker").val().trim();
        //store the date selected into the session storage
        sessionStorage.setItem("date", date);  
        //if clicked on okay move on to the next page.     
        window.location.href = "index3.html";
     
        //if clicked on cancel do nothing.
    } else {
    }

};

  $(document).ready(function() {
    displayOrgInfo();
  }); // document.ready()
