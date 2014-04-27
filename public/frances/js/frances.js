var frances = {};
var DOMcache = {};
var art = {
	"Knit Drawings": [
		{
			title: "Brown Paper 1",
			description: "This painting is brown, and also on paper. It's the first one.",
			dimensions: "11x22x33",
			year: "1974",
			img: "https://photos-1.dropbox.com/t/0/AAAfhJpvW5KswcVZD-m-1a8G0-17BZBE3CBSB1yO3jEnBA/12/25304506/jpeg/32x32/3/_/1/2/BrownPaper1.jpg/QyR1TiuXNOuuoHSo6kamtZ-SVcLv8wvpKFeUiHQsT88?_subject_uid=25304506"
		},
		{
			title: "Brown Paper 2",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AACnOxhY1wQZGWUXanxDp2Wdi4Lr0hqie-pOKr_uok3Qgw/12/25304506/jpeg/32x32/3/_/1/2/BrownPaper2.jpg/CwlhYqogvFABt5UTmRoTVDXMU5vfsWwOC9iertACvXE?_subject_uid=25304506"
		},
		{
			title: "Knit Drawing 1",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-4.dropbox.com/t/0/AAC7T0i31MlGBtfiQc-L2oYl9OAXRolUhmA-RP4R7WaGiA/12/25304506/jpeg/32x32/3/_/1/2/KnitDrawing1.jpg/GM8bG8jh6912CFrbyebhw3hA0TX78L5Y6ITy-j1hPI0?_subject_uid=25304506"
		},
		{
			title: "Knit Drawing 2",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-5.dropbox.com/t/0/AABI3GQv_CzmCe9DaggLAf0ScPt1dGQX9FBRBuBAz-ICEg/12/25304506/jpeg/32x32/3/_/1/2/KnitDrawing2.jpg/2YQ6xm-38OOAKeDQ1nlN0NaFQJYrZZhBoqxf85L1mM4?_subject_uid=25304506"
		},
		{
			title: "Knit Drawing 3",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-3.dropbox.com/t/0/AAAvbcrTdkCE6Y1WMm6tmnUVJFm_YciUnZLEHvAGWgE5TA/12/25304506/jpeg/32x32/3/_/1/2/KnitDrawing3.jpg/Qbj1rqQ-H67Uf7RjjyHr0KQqw5Kf8uzZWNcNUo867ss?_subject_uid=25304506"
		},
		{
			title: "Knit Drawing 4",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-6.dropbox.com/t/0/AAAaPSLkY-w8oAoLkEKXOmZykVM9HRhl95kl2U7bUV3P7g/12/25304506/jpeg/32x32/3/_/1/2/KnitDrawing4.jpg/ltcU2LAZs4lZ8C9WZfR4E5Xnx--w_otBW_eQtGZFNn0?_subject_uid=25304506"
		},
		{
			title: "Knit Drawing 5",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AADFgIpTtLl-BHjvaD_CCauDi5ndw1ovqYvKNHRg9CIXng/12/25304506/jpeg/32x32/3/_/1/2/KnitDrawing5.jpg/c__cb2mZgYMd9ZINc3ZYCJrAkf77brKP-I5wiUkwcBA?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 1",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-4.dropbox.com/t/0/AAD-1I1r6b4Nso7KsPl5lCOMjFwAET6i2_d8bdlOLJCM5w/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing1.jpg/XjfXOunZMlnQxMNJkkVbJH5qq4Z9pstFOtRlKOx9VTA?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 1 - Detail",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-5.dropbox.com/t/0/AABsJ_fsI3gQ1I6PzK_Zb2FjPVgYDib8w254-dxYO02h6w/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing1Detail.jpg/f0_SEr7NxuHntJnwW9mUga8qFIGpeiFptcJBjTj4YRo?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 1 - Installation",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AAB4iFSNoNHVxw4HSImUf6tywsVg4EdZaA18wnaAjNMnDg/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing1InstallationView.jpg/QwQEJoF__4JgzggEZ4W9AGe7Ohpwe_pTfQ-UWzkO30A?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 2",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-5.dropbox.com/t/0/AAA5mg4OnjiclzYG0dw26Um_kyxMia5EXlMK2I75tkFZZA/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing2.jpg/hhCgAILMxY5mIjX7YCrd-hxtaHl_OK4yYnpccNg8r8k?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 2 - Detail",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AABouxtjYf7hR6vFma1Mlq4TlqPX260FDqFDtisQ4bgY7A/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing2Detail.jpg/YWYyqykLJ_2No4iFXtfdHspeJnlBYWtUAk5MkoLgu7E?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 2 - Installation",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-4.dropbox.com/t/0/AACEUVnJ6KYeSGyI-Q10qD9QoRQp_zqaDcJjI3wP53o8Sg/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing2InstallationView.jpg/bI3plxSfE4Kl2zVt0m2jp0-6Qbwb2Cq0KmgPhhPaD0I?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 3",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AACIanqI-Wb3LW1W_SEPg50z-_9Lc7ix50Pqq_Ol7YZy7g/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing3.jpg/MjtPe7Mixb1tK9UB700eQ3uxhpp16F-FV67qfZK8kTM?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 3 - Detail 1",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-6.dropbox.com/t/0/AAADbHKMuIp2pPJB-aWgJ4mb0R0A6cKgGCllzxDH74JgQA/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing3Detail1.jpg/eNO2dYmEBAfIRs9UPIdpxsZW3z3xE8VpgBfW8KevC9c?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 3 - Detail 2",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-6.dropbox.com/t/0/AAAXqjl6fK6vP7tMd5i-r62cNR8MXQiPv5xlNEgoM0WcxQ/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing3Detail2.jpg/TuKSFgatA4zxuDO8tDneAwiA4umQpJk83jWSxzW-ifo?_subject_uid=25304506"
		},
		{
			title: "Wall Drawing 3 - Installation",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-4.dropbox.com/t/0/AADujkvzgA_-WmfNZ9rK1jnhElD3iZZox5YHOEuWHeuvyw/12/25304506/jpeg/32x32/3/_/1/2/WallDrawing3InstallationView.jpg/f4LfcdSmgHzyfo88IXWSiEVn1IsbCnmjclYrzDCK9U8?_subject_uid=25304506"
		}
	],
	"Surface": [
		{
			title: "Anabel",
			description: "A nice painting of my friend",
			dimensions: "20x36x72",
			year: "2013",
			img: "https://photos-2.dropbox.com/t/0/AAAxRMgtwCrzuvcVEyO-ALFsOG9gWXzg3to4kAF1nylD_A/12/25304506/jpeg/32x32/3/_/1/2/Anabel.jpg/s2kuJgTeqv8bp_RHDW5MoGDpvB0ymZ494OgbhQoLOzk"
		},
		{
			title: "Anne",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-2.dropbox.com/t/0/AADM6x7xU_WgzaE2loRlTQdDsQFczEFWmP6DbCbqJ7Jueg/12/25304506/jpeg/32x32/3/_/1/2/Anne.jpg/wYcf90rlFEgkHp3Ub6F2P03GyX-URXJFU1pZdXmhcfk"
		},
		{
			title: "Frances Anne",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-5.dropbox.com/t/0/AAAtJ0-L1zaGpU1Cc3j0pjWdAltSxLF4fW-VYWhnCUzYEg/12/25304506/jpeg/32x32/3/_/1/2/FrancesAnne.jpg/tTNWpZPzcP4EWyoNHTSAWPv6KjZ429XxyeIywvknCJg"
		},
		{
			title: "Grey Relic",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-2.dropbox.com/t/0/AABozqPELEfo6rs4jGJnVGWqjcQZ_yLkfiAaiNzFP2L3Yg/12/25304506/jpeg/32x32/3/_/1/2/GreyRelic.jpg/IeuOvQnj6r9dD65Jq0JCyjEzaagZKYnAyI-Xy_r4mxg"
		},
		{
			title: "Liberty Anne",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AAANByJFFyjQgAb7JSKalu-FVe9BPKePhQC3Ysoy9xRqhA/12/25304506/jpeg/32x32/3/_/1/2/LibertyAnne.jpg/ZvTirJ0pxSdigpRLd6sJ-RPRhECpx77pS6ggjS87NPM"
		},
		{
			title: "Peter",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-1.dropbox.com/t/0/AACe_yj1xumj-PWoCSwVMC3Xz4bNz72gInskBhRHi5KorA/12/25304506/jpeg/32x32/3/_/1/2/Peter.jpg/rDXncb4BGjj-nUNPfBoVW3BljYSMJ6anyfrPHK2onLM?_subject_uid=25304506"
		},
		{
			title: "Study for Anabel",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-6.dropbox.com/t/0/AAAGXh_KJ-knTSpaJQcd-lLDyAOw2daCg7JjJAwTuiMB9w/12/25304506/jpeg/32x32/3/_/1/2/StudyforAnabel.jpg/8LdElDjAKSW7NXjLIxHXb-B5YPcXyYU8oQiS5YSWkTY"
		},
		{
			title: "Study for Anne",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-6.dropbox.com/t/0/AAC9_1dNxjIXErKl9kiUK4gyOBP0fQ44motCR1dQF3ivfw/12/25304506/jpeg/32x32/3/_/1/2/StudyforAnne.jpg/I5KXedPPEHadHpN1e0LsmpLDDD8PkNjJ06cgUQLXyZk"
		},
		{
			title: "The Green Sweater",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-3.dropbox.com/t/0/AADhCDUPsGrA87T3PXrrCSHRfxrdWl2hHkkqVTHx4ZV6Vg/12/25304506/jpeg/32x32/3/_/1/2/TheGreenSweater.jpg/WsHPp6ZBD9lkz5yzt_wBq6XXGQpS-5OrBRz3qYXfIJs"
		},
		{
			title: "Untitled",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-5.dropbox.com/t/0/AACTFko9_-5I1rDNJdbSSC3NvMvAN9Og6_o00nTkYLK-cw/12/25304506/jpeg/32x32/3/_/1/2/Untitled.jpg/mGC6I8E7pSAOvsauo_UZJ9Xc-qaynDOs0RTyQuwP5y4"
		},
		{
			title: "Untitled",
			description: "",
			dimensions: "",
			year: "",
			img: "https://photos-2.dropbox.com/t/0/AADwgpWkunLHVcSjo55QGIqUTGyWuxnCgc_0Ypq6Z30AaQ/12/25304506/jpeg/32x32/3/_/1/2/Untitled(1).jpg/xcfwCJY7COtkxtnJYYM39Y13EjpugaMpF1FheXTWNGo"
		}
	],
	"Marfa Drawings": [
		{
			title: "New Marfa Drawing",
			description: "",
			dimensions: "",
			year: "",
			img: ""
		},

	],
	"Identification Documents": [
		{
			title: "New Identification Drawing",
			description: "",
			dimensions: "",
			year: "",
			img: ""
		},
		
	]
};
var heroImages = [art["Knit Drawings"][0], art["Knit Drawings"][1], art["Knit Drawings"][3], art["Knit Drawings"][6], art["Knit Drawings"][8]]

var sizes = {
	small: "128x128",
	medium: "640x480",
	large: "1024x768"
};

frances.navigateTo = function(next) {
	var sections = document.getElementsByClassName('sectionWrapper');
	for (var i=0; i<sections.length; i++) {
		sections[i].classList.add('hidden');
	}
	(next === 'home') ?	document.body.classList.add('homePageOn') : document.body.classList.remove('homePageOn');
	document.getElementById(next).classList.remove('hidden');
};

DOMcache.currentHeroIndex = 1;
DOMcache.heroMask = document.getElementById('hero-mask');
DOMcache.hero = document.getElementById('hero-unit');

frances.rotateHeroImage = function() {
	var heroMask = DOMcache.heroMask;
	var image = heroImages[DOMcache.currentHeroIndex];
	var hero = DOMcache.hero.children;
	heroMask.style.opacity = 100;
	setTimeout(function(){
		console.log("Changing the image!");
		hero[1].src = image.img + "&size=640x480";
		hero[2].innerHTML = image.title;
		hero[3].innerHTML = image.description;
		hero[4].innerHTML = image.dimensions;
		hero[5].innerHTML = image.year;
		if (DOMcache.currentHeroIndex === heroImages.length-1) {
			DOMcache.currentHeroIndex = 0;
		} else {
			DOMcache.currentHeroIndex++;
		}
		hero[0].src = heroImages[DOMcache.currentHeroIndex].img + "&size=640x480";
		heroMask.style.opacity = 0;
	}, 500);
}

// Init Procedure
if (window.location.hash) frances.navigateTo(window.location.hash.slice(1));

document.getElementById('navbar').addEventListener('click', function(e){
	setTimeout(function(){
		if (window.location.hash) frances.navigateTo(window.location.hash.slice(1));
	},1);
});

// frances.rotateHeroImage();
setInterval(frances.rotateHeroImage, 10000);
