user_pref("app.update.enabled", false);                             // [boolean] whether to enable browser auto-updating
user_pref("app.update.auto", false);                                // [boolean] auto-install updates - app.update.enabled must be enabled
user_pref("app.update.disable_button.showUpdateHistory", false);    // [boolean] apparently enables showing update history, though it may not be implemented as of v37
user_pref("app.update.service.enabled", false);                     // [boolean] whether to enable the background service that installs updates - possibly Linux specific
user_pref("app.update.showInstalledUI", true);                      // [boolean] whether to display a notice after an update is applied
user_pref("app.update.silent", false);                              // [boolean] whether to show update prompt - Dependant upon app.update.enabled
user_pref("app.update.staging.enabled", false);                     // [boolean] presumably whether to allow background downloading of updates

user_pref("extensions.update.autoUpdateDefault", false);    // [boolean] whether to auto-install extension updates
user_pref("extensions.update.enabled", false);              // [boolean] whether to auto-check for extension updates
user_pref("extensions.blocklist.url", "");                  // [string] url from which to download list of blocked extensions

user_pref("media.gmp-gmpopenh264.enabled", false);              // [boolean] whether to enable the OpenH264 plugin - appears to be used only for Firefox Hello/WebRTC as of v37
user_pref("media.gmp-manager.url", "");                                             // [string] OpenH.264 plugin update URL - set to blank to disable update checking
user_pref("plugins.update.notifyUser", false);                                      // [boolean] whether to check for plugin updates - this may not cover the OpenH264 plugin

user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");  // [string] update URL for updating content in about:home page
user_pref("browser.startup.homepage_override.mstone", "ignore");      // [string] used to display browser update information - may want to uncomment this if using a proxy for anonymity
user_pref("browser.microsummary.updateGenerators", false);              // [boolean] whether to auto-update bookmark microsummaries
user_pref("browser.search.update", false);                              // [boolean] whether to auto-update search plugins - probably want to disable this if using custom edited search plugins in \searchplugins folder
user_pref("lightweightThemes.update.enabled", false);                   // [boolean] whether to auto-update Personas (themes)

user_pref("datareporting.healthreport.about.reportUrl", "");           // [string] URL to which the browser health report is sent
user_pref("datareporting.healthreport.about.reportUrlUnified", "");    // [string] about:healthreport URL
user_pref("datareporting.healthreport.documentServerURI", "");         // [string] URL of healthreport server
user_pref("datareporting.healthreport.service.enabled", false);        // [boolean] disable Mozilla health report service which collects various browser data and sends it home
user_pref("datareporting.healthreport.uploadEnabled", false);          // [boolean] disable uploading health reports to Mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false);        // [boolean] whether to enable data report submission
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);     // [boolean] whether to enable data report submission

user_pref("security.ssl.errorReporting.automatic", false);           // [boolean] whether to send SSL error reports without asking the user
user_pref("security.ssl.errorReporting.enabled", false);             // [boolean] whether to enable SSL error reporting
user_pref("security.ssl.errorReporting.url", "");                    // [string] URL to which SSL errors are reported

user_pref("toolkit.telemetry.archive.enabled", false);  // [boolean] whether local archiving of telemetry pings is enabled or not - depends on toolkit.telemetry.unified
user_pref("toolkit.telemetry.enabled", false);          // [boolean] disable pop-up asking for feedback since v8
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.unified", false);          // [boolean] controls unified behavior - if enabled will record basic data and will send additional pings
user_pref("toolkit.telemetry.unifiedIsOptIn", true);    // [boolean] makes telemetry opt-in even when "toolkit.telemetry.enabled" is true

user_pref("browser.search.geoip.url", "");           // [string] disable contacting Mozilla to set the default search engine
user_pref("geo.wifi.logging.enabled", false);

user_pref("media.peerconnection.enabled", false);                  // [boolean] whether to enable WebRTC - Real-Time Communications between peers for voice, video, file and desktop sharing, etc. - potential security/privacy risk - WebRTC can be controlled with HTTP UserAgaent cleaner
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.turn.disable", true);

user_pref("browser.eme.ui.enabled", false);
user_pref("media.gmp-eme-adobe.enabled", false);
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);

user_pref("beacon.enabled", false);                                // [boolean] whether to send additional analytics to web servers
user_pref("breakpad.reportURL", "");
user_pref("browser.selfsupport.url", "");                          // [string] disable Mozilla pop-up asking for feedback - introduced in v37
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("privacy.trackingprotection.enabled", false);             // [boolean] whether to enable tracking protection (see: browser.polaris.enabled) - not needed if using other means, such as uBlock - when enabled, a new icon in address bar will appear when a site is being blocked, allowing to disable per domain - note that enabling this allows the download of a list from Mozilla
user_pref("privacy.trackingprotection.pbmode.enabled", false);
user_pref("browser.trackingprotection.gethashURL", "");
user_pref("browser.trackingprotection.getupdateURL", "");
user_pref("browser.trackingprotection.updateURL", "");

user_pref("browser.safebrowsing.downloads.enabled", false);         // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.downloads.remote.enabled", false);  // [boolean] unknown, but since we're not using Google "Safe Browsing" feature, lets' make sure it's dead
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);                   // [boolean] whether to compare URLs against a blacklist or submit URLs to a third party to determine whether a site is legitimate
user_pref("browser.safebrowsing.malware.enabled", false);           // [boolean] whether to download data about malware and use it to screen downloads
user_pref("browser.safebrowsing.malware.reportURL", "");
user_pref("browser.safebrowsing.remoteLookups", false);             // [boolean] whether to consult a third-party provider to determine whether a site is safe - if false, it will fall back to the local urlclassifier2.sqlite file - dependent upon whether browser.safebrowsing.enabled is enabled
user_pref("browser.safebrowsing.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.reportErrorURL", "");
user_pref("browser.safebrowsing.reportGenericURL", "");
user_pref("browser.safebrowsing.reportMalwareErrorURL", "");
user_pref("browser.safebrowsing.reportMalwareURL", "");
user_pref("browser.safebrowsing.reportURL", "");
user_pref("browser.safebrowsing.gethashURL", "");
user_pref("browser.safebrowsing.updateURL", "");
user_pref("browser.safebrowsing.appRepURL", ""); 

user_pref("browser.safebrowsing.provider.google.appRepURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

user_pref("browser.search.suggest.enabled", false);     // [boolean] whether to enable search suggestions for search bar

user_pref("browser.casting.enabled", false);              // [boolean] whether to send HTML5 video to other devices on the network
user_pref("gfx.layerscope.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.dns.disablePrefetch", true);           // [boolean] disable nameserver lookups for sites not yet visited
user_pref("network.dns.disablePrefetchFromHTTPS", true);  // [boolean] disable nameserver lookups for secure sites not yet visited

user_pref("network.http.speculative-parallel-limit", 0);    // [integer] number of connections to make to a server for sites not yet visited (predictive) such as when typing in the search bar, hovering ove links, etc. - max number of current global half open sockets allowable when starting a new speculative connection
user_pref("network.predictor.enabled", false);              // [boolean] similar to network.prefetch-next, whether to prefetch resources for sites not yet visited (this was named "network.seer.enabled")
user_pref("network.seer.enabled", false);
user_pref("network.prefetch-next", false);                  // [boolean] disable prefetching pages not yet visited

user_pref("extensions.blocklist.enabled", false);                    // [boolean] whether to download list of black-listed extensions, vulnerable plugins, crash-prone graphic drivers
user_pref("extensions.getAddons.cache.enabled", false);              // [boolean] whether to check daily for extension metadata updates (description, ratings, etc.) when clicking the "more" link on the Add-ons panel - also seems to block remote icons for extensions in the Add-ons panel

user_pref("browser.newtab.url", "about:blank");                 // [string] "about:blank"=show a completely blank tab when opening new tabs
user_pref("browser.newtab.preload", false);                     // [boolean] whether to preload new tab content - dependent upon browser.newtab.url
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "data:text/plain,{}");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);                // [boolean] whether to display marketing junk on new tabs - dependent upon browser.newtab.url
user_pref("papapa.newtabpage.introShown", true);

user_pref("browser.urlbar.suggest.searches", false);
