import { css, injectGlobal } from "@emotion/css";
import { Colors } from "styles/colors";

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat';
    letter-spacing: 0.02em;
    color: ${Colors.default};
    line-height: 120%;
    letter-spacing: 0;
  }

  @font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Light.eot');
	src: local('assets/fonts/Montserrat Light'), local('assets/fonts/Montserrat-Light'),
		local('assets/fonts/Montserrat-Light.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Light.woff') format('woff'),
		local('assets/fonts/Montserrat-Light.ttf') format('truetype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-MediumItalic.eot');
	src: local('assets/fonts/Montserrat Medium Italic'), local('assets/fonts/Montserrat-MediumItalic'),
		local('assets/fonts/Montserrat-MediumItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-MediumItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-MediumItalic.ttf') format('truetype');
	font-weight: 500;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Thin.eot');
	src: local('assets/fonts/Montserrat Thin'), local('assets/fonts/Montserrat-Thin'),
		local('assets/fonts/Montserrat-Thin.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Thin.woff') format('woff'),
		local('assets/fonts/Montserrat-Thin.ttf') format('truetype');
	font-weight: 100;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-ExtraLightItalic.eot');
	src: local('assets/fonts/Montserrat ExtraLight Italic'), local('assets/fonts/Montserrat-ExtraLightItalic'),
		local('assets/fonts/Montserrat-ExtraLightItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-ExtraLightItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype');
	font-weight: 200;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-BoldItalic.eot');
	src: local('assets/fonts/Montserrat Bold Italic'), local('assets/fonts/Montserrat-BoldItalic'),
		local('assets/fonts/Montserrat-BoldItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-BoldItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-BoldItalic.ttf') format('truetype');
	font-weight: bold;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-SemiBold.eot');
	src: local('assets/fonts/Montserrat SemiBold'), local('assets/fonts/Montserrat-SemiBold'),
		local('assets/fonts/Montserrat-SemiBold.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-SemiBold.woff') format('woff'),
		local('assets/fonts/Montserrat-SemiBold.ttf') format('truetype');
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-ExtraLight.eot');
	src: local('assets/fonts/Montserrat ExtraLight'), local('assets/fonts/Montserrat-ExtraLight'),
		local('assets/fonts/Montserrat-ExtraLight.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-ExtraLight.woff') format('woff'),
		local('assets/fonts/Montserrat-ExtraLight.ttf') format('truetype');
	font-weight: 200;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-ExtraBoldItalic.eot');
	src: local('assets/fonts/Montserrat ExtraBold Italic'), local('assets/fonts/Montserrat-ExtraBoldItalic'),
		local('assets/fonts/Montserrat-ExtraBoldItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-ExtraBoldItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-ExtraBoldItalic.ttf') format('truetype');
	font-weight: 800;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Italic.eot');
	src: local('assets/fonts/Montserrat Italic'), local('assets/fonts/Montserrat-Italic'),
		local('assets/fonts/Montserrat-Italic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Italic.woff') format('woff'),
		local('assets/fonts/Montserrat-Italic.ttf') format('truetype');
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Bold.eot');
	src: local('assets/fonts/Montserrat Bold'), local('assets/fonts/Montserrat-Bold'),
		local('assets/fonts/Montserrat-Bold.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Bold.woff') format('woff'),
		local('assets/fonts/Montserrat-Bold.ttf') format('truetype');
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-LightItalic.eot');
	src: local('assets/fonts/Montserrat Light Italic'), local('assets/fonts/Montserrat-LightItalic'),
		local('assets/fonts/Montserrat-LightItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-LightItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-LightItalic.ttf') format('truetype');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-BlackItalic.eot');
	src: local('assets/fonts/Montserrat Black Italic'), local('assets/fonts/Montserrat-BlackItalic'),
		local('assets/fonts/Montserrat-BlackItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-BlackItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-BlackItalic.ttf') format('truetype');
	font-weight: 900;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-SemiBoldItalic.eot');
	src: local('assets/fonts/Montserrat SemiBold Italic'), local('assets/fonts/Montserrat-SemiBoldItalic'),
		local('assets/fonts/Montserrat-SemiBoldItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-SemiBoldItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-SemiBoldItalic.ttf') format('truetype');
	font-weight: 600;
	font-style: italic;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Regular.eot');
	src: local('assets/fonts/Montserrat Regular'), local('assets/fonts/Montserrat-Regular'),
		local('assets/fonts/Montserrat-Regular.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Regular.woff') format('woff'),
		local('assets/fonts/Montserrat-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Medium.eot');
	src: local('assets/fonts/Montserrat Medium'), local('assets/fonts/Montserrat-Medium'),
		local('assets/fonts/Montserrat-Medium.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Medium.woff') format('woff'),
		local('assets/fonts/Montserrat-Medium.ttf') format('truetype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-ExtraBold.eot');
	src: local('assets/fonts/Montserrat ExtraBold'), local('assets/fonts/Montserrat-ExtraBold'),
		local('assets/fonts/Montserrat-ExtraBold.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-ExtraBold.woff') format('woff'),
		local('assets/fonts/Montserrat-ExtraBold.ttf') format('truetype');
	font-weight: 800;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-Black.eot');
	src: local('assets/fonts/Montserrat Black'), local('assets/fonts/Montserrat-Black'),
		local('assets/fonts/Montserrat-Black.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-Black.woff') format('woff'),
		local('assets/fonts/Montserrat-Black.ttf') format('truetype');
	font-weight: 900;
	font-style: normal;
}

@font-face {
	font-family: 'Montserrat';
	src: local('assets/fonts/Montserrat-ThinItalic.eot');
	src: local('assets/fonts/Montserrat Thin Italic'), local('assets/fonts/Montserrat-ThinItalic'),
		local('assets/fonts/Montserrat-ThinItalic.eot?#iefix') format('embedded-opentype'),
		local('assets/fonts/Montserrat-ThinItalic.woff') format('woff'),
		local('assets/fonts/Montserrat-ThinItalic.ttf') format('truetype');
	font-weight: 100;
	font-style: italic;
}

`;
