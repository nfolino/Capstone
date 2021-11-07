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
            module: 'MMM-Carousel',
            position: 'bottom_bar', // Required only for navigation controls
            config: {
				transitionInterval: 0,
                showPageIndicators: true,
                showPageControls: true,
                ignoreModules: ['alert', 'MMM-SmartTouch-mod', 'MMM-HideAll'],
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
			header: "Medicine Schedule",
			position: "top_left",
			config: {
				maximumEntries: 5,
				maximumNumberOfDays: 2,
				colored: false,
				coloredSymbolOnly: false,
				fetchInterval: 10000,
				fade: false,
				broadcastPastEvents: true,
				calendars: [
					{
						url: 'https://calendar.google.com/calendar/ical/rjbhnro39sv1krjh2d6s4i75ag%40group.calendar.google.com/public/basic.ics',
						symbol: 'pills',
					},
				],
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
        },
        /*
        {
			module: 'MMM-SmartTouch-mod', 
			position: 'top_center',    // This can be any of the regions.(bottom-center Recommended)
			config:{ 
			// None configuration options defined 
			} 
		},
		*/
		{
			module: 'MMM-HideAll',
			position: 'top_right',
			config: {
				symbolhide: "eye",
				symbolshow: "eye"
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
