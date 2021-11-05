/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-SmartTouch', 
			position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
			config:{ 
			  // None configuration options defined 
			}
		},
		/*
		{
		  //disabled:true,
		  module: 'MMM-CalendarExt',
		  position: "top_center",
		  config: {
			system: {
			  show: ["daily", "upcoming"],
			  locale: 'en',
			  redrawInterval:60000,
			},
			views: {
			  daily: {
				position:'bottom_bar',
				counts:7,
			  },
			  upcoming: {
				position:'top_left',
				limit:5
			  },
			},
			defaultCalendar: {
			  maxEntries:50,
			  maxDays:180,
			  interval: 1000*60*5,
			},
			calendars :[
			  {
				name: "deutschland",
				symbol: "calendar-o",
				styleName: "style1",
				url: "http://www.kayaposoft.com/enrico/ics/v1.0?country=deu&fromDate=01-01-2017&toDate=31-12-2017&region=Hesse"
			  },
			],
		  }
		},*/
        {
            module: 'MMM-Carousel',
            position: 'bottom_bar', // Required only for navigation controls
            config: {
				transitionInterval: 0,
                showPageIndicators: true,
                showPageControls: true,
                ignoreModules: ['alert', 'MMM-SmartTouch'],
                mode: 'slides',
                slides: {
                    main: ['calendar'],
                    "Slide 2": ['compliments'],
                    "Slide 3": ['clock']
                },
                keyBindings: { 
                    enabled: true,
                    map: {
                        NextSlide: "ArrowRight", 
                        PrevSlide: "ArrowLeft", 
                        Slide0:    "Home"
                    },
                    mode: "DEFAULT"
                }
            }
        },
        {
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
            module: 'MMM-KeyBindings',
            config: {
                enableKeyboard: true
            }
        }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
