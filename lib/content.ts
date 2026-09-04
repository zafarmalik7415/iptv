/**
 * Marketing copy and structured site data. Kept in one place so pages, previews
 * and JSON-LD all read from the same source. Copy is written for UK readers
 * first. The phrases "IPTV subscription", "IPTV subscription UK" and "UK IPTV
 * subscription" appear only where they read naturally, never stuffed.
 */

import type { IconName } from "@/components/ui";

/* ------------------------------------------------------------------ stats --- */

export const stats: { value: string; label: string }[] = [
  { value: "20,000+", label: "Live channels and VOD titles" },
  { value: "4K UHD", label: "Top streaming quality" },
  { value: "99.9%", label: "Server uptime over the last 12 months" },
  { value: "Under 1s", label: "Typical channel change time" },
];

/* --------------------------------------------------------------- features --- */

export const features: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "bolt",
    title: "Smooth Playback In Peak Hours",
    description:
      "Load balanced UK servers and adaptive bitrate keep the picture stable in HD and 4K, including Saturday afternoon football and big fight nights.",
  },
  {
    icon: "devices",
    title: "Works On The Devices You Already Have",
    description:
      "One IPTV subscription covers Smart TV, Amazon Firestick, Android, iPhone, iPad, Apple TV, MAG boxes and computers.",
  },
  {
    icon: "grid",
    title: "20,000+ Channels And A Full VOD Library",
    description:
      "Live UK and international sport, films, series, news and kids channels, plus an on demand library that is refreshed every week.",
  },
  {
    icon: "calendar",
    title: "7 Day Guide With Catch Up",
    description:
      "A full electronic programme guide with catch up and recording in supported apps, so a missed match is easy to pick up later.",
  },
  {
    icon: "globe",
    title: "UK Line Up Plus The Rest Of The World",
    description:
      "Full UK channels alongside Ireland, Europe, the USA, Canada, the Middle East, Asia and Africa, all in one tidy list.",
  },
  {
    icon: "shield",
    title: "Private By Default",
    description:
      "Encrypted delivery, no record kept of what you watch, and your login sent straight to your inbox after payment.",
  },
];

/* ----------------------------------------------------------- how it works --- */

export const steps: { title: string; description: string }[] = [
  {
    title: "Choose Your Plan",
    description:
      "Pick the IPTV subscription that fits your household. Longer terms work out cheaper per month.",
  },
  {
    title: "Fill In The Short Form",
    description:
      "Add your details at checkout. It takes about a minute and there is no long sign up.",
  },
  {
    title: "Get Your Secure Payment Link",
    description:
      "We email you a private payment link so you can pay safely by card.",
  },
  {
    title: "Pay And Start Watching",
    description:
      "Your login and setup steps arrive by email within a few minutes of payment.",
  },
];

/* --------------------------------------------------- why-trusted feature set - */

export const trustFeatures: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "shield",
    title: "UK Based Servers",
    description:
      "Our streaming servers sit in the UK, so the distance your data travels is short. That means low latency and fewer drop outs, including at 8pm on a weeknight.",
  },
  {
    icon: "grid",
    title: "20,000+ Channels",
    description:
      "A large line up of live UK and world sport, entertainment, news and international channels, with quick switching between them.",
  },
  {
    icon: "sparkles",
    title: "HD And 4K Streams",
    description:
      "4K, Full HD and HD feeds with enough bandwidth behind them to hold picture quality when a lot of people are watching.",
  },
  {
    icon: "devices",
    title: "Every Screen In The House",
    description:
      "Firestick, Smart TV, Android, iPhone, iPad, Windows and Mac. One subscription covers the lot.",
  },
];

/* ------------------------------------------------ what's included (pillars) -- */

export const contentPillars: {
  icon: IconName;
  title: string;
  description: string;
}[] = [
  {
    icon: "globe",
    title: "20,000+ Live Channels",
    description:
      "Full UK channels plus Ireland, Europe, the USA, Canada and more than 100 other countries. Entertainment, news, kids and documentaries in one place.",
  },
  {
    icon: "trophy",
    title: "Live Sport And Event Nights",
    description:
      "Premier League, EFL, Champions League, F1, cricket, rugby, UFC, boxing, NFL and NBA, plus the dedicated channels we open for big pay per view events.",
  },
  {
    icon: "film",
    title: "Films And Box Sets On Demand",
    description:
      "A large on demand library that grows every week with new releases and complete series you can watch from the start.",
  },
  {
    icon: "tv",
    title: "HD, Full HD And 4K",
    description:
      "A clean picture on every feed, with anti freeze handling that keeps playback steady during busy periods.",
  },
];

export const qualityBadges = [
  "HD",
  "Full HD",
  "4K Ultra HD",
  "Multi language VOD",
  "Anti freeze tech",
];

export const highlightStats: { value: string; label: string }[] = [
  { value: "20,000+", label: "Live channels" },
  { value: "Weekly", label: "New films and series added" },
  { value: "4K", label: "Ultra HD quality" },
];

/* ---------------------------------------------- on-demand poster showcase --- */

export interface OnDemandTitle {
  title: string;
  /** TMDB poster file (path after /t/p/<size>/). Artwork courtesy of themoviedb.org. */
  poster: string;
  genre: string;
  year: number;
  rating: number;
  kind: "Movie" | "Series";
}

/**
 * A sample of the weekly updated VOD library, used only for the homepage
 * showcase carousel. Poster images are loaded from the TMDB CDN
 * (image.tmdb.org). This product uses the TMDB API but is not endorsed
 * or certified by TMDB.
 */
export const onDemandTitles: OnDemandTitle[] = [
  { title: "Dune: Part Two", poster: "6izwz7rsy95ARzTR3poZ8H6c5pp.jpg", genre: "Sci-Fi", year: 2024, rating: 8.1, kind: "Movie" },
  { title: "Top Gun: Maverick", poster: "n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg", genre: "Action", year: 2022, rating: 8.2, kind: "Movie" },
  { title: "Oppenheimer", poster: "sJH8YKB7K0st8QM3K3GeGMb1shA.jpg", genre: "Drama", year: 2023, rating: 8.1, kind: "Movie" },
  { title: "Deadpool & Wolverine", poster: "8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", genre: "Action", year: 2024, rating: 7.6, kind: "Movie" },
  { title: "The Beekeeper", poster: "A7EByudX0eOzlkQ2FIbogzyazm2.jpg", genre: "Action", year: 2024, rating: 7.3, kind: "Movie" },
  { title: "MobLand", poster: "abeH7n5pcuQcwYcTxG6DTZvXLP1.jpg", genre: "Crime", year: 2025, rating: 8.0, kind: "Series" },
  { title: "Euphoria", poster: "ypmtwojDd751Peszi62DVLytqqC.jpg", genre: "Drama", year: 2019, rating: 8.3, kind: "Series" },
  { title: "The Walking Dead: Daryl Dixon", poster: "sP5QdW9FN18XWcA4ROz3MPAQBTx.jpg", genre: "Horror", year: 2023, rating: 8.2, kind: "Series" },
  { title: "Gods of the Deep", poster: "ea8609DKrceNJocKEUpDom6mHzx.jpg", genre: "Sci-Fi", year: 2023, rating: 6.4, kind: "Movie" },
  { title: "No Way Up", poster: "hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg", genre: "Thriller", year: 2024, rating: 6.2, kind: "Movie" },
  { title: "Godzilla x Kong: The New Empire", poster: "z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg", genre: "Action", year: 2024, rating: 7.2, kind: "Movie" },
  { title: "Gladiator II", poster: "2cxhvwyEwRlysAmRH4iodkvo0z5.jpg", genre: "Action", year: 2024, rating: 6.8, kind: "Movie" },
  { title: "The Batman", poster: "74xTEgt7R36Fpooo50r9T25onhq.jpg", genre: "Crime", year: 2022, rating: 7.7, kind: "Movie" },
  { title: "Inside Out 2", poster: "vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", genre: "Family", year: 2024, rating: 7.6, kind: "Movie" },
  { title: "Megamind vs. The Doom Syndicate", poster: "1N7terrMeZPwK5qq31MUD0HQ3IG.jpg", genre: "Family", year: 2024, rating: 6.0, kind: "Movie" },
];

/* ------------------------------------------------------- devices supported --- */

export const devices = [
  "iOS & Apple TV",
  "Android",
  "Android TV",
  "Samsung TV",
  "LG webOS",
  "Roku",
  "Chromecast",
  "Xbox",
  "Mac & PC",
  "IPTV Box",
  "MAG / Decoder",
  "Kodi",
];

/* --------------------------------------------------- installation guides ---- */

export interface InstallGuide {
  slug: string;
  /** Full device / platform name, used in the guide heading. */
  device: string;
  /** Shorter label for the switcher pill. Falls back to `device`. */
  short?: string;
  icon: IconName;
  /** Player app the steps use. */
  app: string;
  /** One-line note about the app / alternatives. */
  appNote: string;
  /** Rough time to complete, e.g. "5 min". */
  time: string;
  intro: string;
  steps: { title: string; detail: string }[];
  tips: string[];
}

/**
 * Step by step setup for every common platform. The activation details referred
 * to in the steps (Xtream Codes API , username, password, server URL , or an
 * M3U URL) are the credentials emailed to the customer after checkout.
 */
export const installGuides: InstallGuide[] = [
  {
    slug: "firestick",
    device: "Amazon Firestick / Fire TV",
    short: "Amazon Firestick",
    icon: "tv",
    app: "IPTV Smarters Pro",
    appNote: "Installed with the Downloader app. TiviMate works the same way if you prefer it.",
    time: "6 min",
    intro:
      "The Fire TV app store doesn't list IPTV players, so you sideload one with the free Downloader app. You only do this once.",
    steps: [
      {
        title: "Allow App Installs",
        detail:
          "From the Fire TV home screen open Settings → My Fire TV → Developer options and turn on “Install unknown apps” for Downloader. On newer sticks you may first need to open About and click the model name 7 times to reveal Developer options.",
      },
      {
        title: "Install Downloader",
        detail:
          "Back on the home screen, use the search icon to find “Downloader” (orange app icon), then select Get / Download to install it.",
      },
      {
        title: "Download IPTV Smarters",
        detail:
          "Open Downloader, type the address in the Browse box that our email gives you for the Smarters APK, press Go, then choose Install and Done. Delete the APK file when prompted to save space.",
      },
      {
        title: "Enter Your Login",
        detail:
          "Open IPTV Smarters Pro, choose “Login with Xtream Codes API”, and type any name plus the username, password and server URL from your activation email. Add the M3U URL instead if that's what you were sent.",
      },
      {
        title: "Let The Channels Load",
        detail:
          "The app downloads the channel list and 7 day guide. First load can take a minute or two. After that it opens straight to Live TV.",
      },
    ],
    tips: [
      "Buffering only on some channels? Switch the player’s decoder from Hardware to Software (or Hardware+) in settings.",
      "Use a 5 GHz WiFi network or an Ethernet adapter for live sport in 4K.",
      "Restart the Firestick once a week (Settings → My Fire TV → Restart) to keep playback smooth.",
    ],
  },
  {
    slug: "android-tv",
    device: "Android TV / Google TV / Box",
    short: "Android TV / Box",
    icon: "tv",
    app: "TiviMate or IPTV Smarters Pro",
    appNote: "Both are on the Google Play Store, no sideloading needed.",
    time: "4 min",
    intro:
      "Android powered TVs, Nvidia Shield, Chromecast with Google TV and most Android boxes install the player straight from Google Play.",
    steps: [
      {
        title: "Install The Player",
        detail:
          "Open the Play Store on your TV, search for “TiviMate” or “IPTV Smarters Pro” and install it. TiviMate has the nicer guide; Smarters is simpler to set up.",
      },
      {
        title: "Add Your Playlist",
        detail:
          "In TiviMate choose Add playlist → Xtream Codes and enter the username, password and server URL from your email. In Smarters choose “Login with Xtream Codes API” and do the same.",
      },
      {
        title: "Name The Playlist",
        detail:
          "Give it any name (e.g. “Main”). The app fetches your channels, groups and EPG automatically.",
      },
      {
        title: "Pick Your EPG (TiviMate)",
        detail:
          "TiviMate usually loads the guide from the Xtream login. If not, add the EPG URL from your email under Settings → EPG → EPG sources.",
      },
    ],
    tips: [
      "Set your favourite groups in the app so Live TV opens on the channels you actually watch.",
      "In TiviMate, Settings → Advanced → “User agent” can be left default unless support tells you otherwise.",
      "A wired connection removes almost all buffering on peak time football.",
    ],
  },
  {
    slug: "android-mobile",
    device: "Android Phone / Tablet",
    short: "Android Phone",
    icon: "phone",
    app: "IPTV Smarters Pro",
    appNote: "Free on the Google Play Store.",
    time: "3 min",
    intro: "Same player as Android TV, set up in a couple of taps.",
    steps: [
      {
        title: "Install IPTV Smarters Pro",
        detail: "Open the Play Store, search “IPTV Smarters Pro” and install it.",
      },
      {
        title: "Log In With Xtream Codes",
        detail:
          "Open the app, tap “Login with Xtream Codes API”, enter any name plus the username, password and server URL from your activation email.",
      },
      {
        title: "Start Watching",
        detail:
          "Tap Live TV, Movies or Series. Use the heart icon to add favourites and the search box to jump to a channel.",
      },
    ],
    tips: [
      "Turn on “Auto play channel on selection” in settings for a TV style feel.",
      "Casting to a TV works, but installing the player on the TV itself is far more reliable.",
    ],
  },
  {
    slug: "ios",
    device: "iPhone / iPad / Apple TV",
    short: "iPhone / iPad",
    icon: "phone",
    app: "IPTV Smarters Player / Smarters Player Lite",
    appNote: "Free on the App Store for iOS, iPadOS and tvOS.",
    time: "3 min",
    intro:
      "Apple devices install the player straight from the App Store. The tvOS version on Apple TV works identically.",
    steps: [
      {
        title: "Install The App",
        detail:
          "On the App Store search for “IPTV Smarters Player” (or “Smarters Player Lite” on Apple TV) and install it.",
      },
      {
        title: "Add Your Account",
        detail:
          "Open the app and choose “Login with Xtream Codes API”. Enter any name plus the username, password and server URL from your email.",
      },
      {
        title: "Allow Local Network (Apple TV)",
        detail:
          "If tvOS asks, allow the app to find devices on your local network so playback and the guide load correctly.",
      },
      {
        title: "Open Live TV",
        detail: "Channels and the 7 day guide load automatically. That's it.",
      },
    ],
    tips: [
      "If a stream will not start, delete the playlist and add it again. A mistyped server URL is the usual cause.",
      "On iPhone, lock the rotation to landscape for full screen viewing.",
    ],
  },
  {
    slug: "samsung",
    device: "Samsung Smart TV",
    icon: "tv",
    app: "Smart IPTV (SIPTV) or IBO Player Pro",
    appNote: "From Samsung Apps on Tizen TVs. SIPTV has a 7 day free trial, then a small one off fee paid to the app maker, not to us.",
    time: "7 min",
    intro:
      "Samsung (Tizen) TVs use a playlist app plus a web portal. You upload your M3U link once against the TV’s MAC address, then the app just plays it.",
    steps: [
      {
        title: "Install The App",
        detail:
          "On the TV open Samsung Apps, search for “Smart IPTV” (or “IBO Player Pro”) and install it.",
      },
      {
        title: "Note The MAC Address",
        detail:
          "Open the app. It shows a MAC address (00:1A:79:xx:xx:xx or similar) and an upload URL. For Smart IPTV that’s siptv.app/mylist. Note both down.",
      },
      {
        title: "Upload Your Playlist",
        detail:
          "On a phone or PC go to siptv.app/mylist, enter the TV’s MAC address, paste the M3U URL from your activation email, set the country, then click Add.",
      },
      {
        title: "Reload The App",
        detail:
          "Close the app completely on the TV and reopen it. Your channels and the 7 day guide load automatically.",
      },
      {
        title: "Activate If Prompted",
        detail:
          "After the trial, Smart IPTV asks for a one off activation on siptv.app/activation. This fee goes to the app developer, not to us. IBO Player Pro is an alternative if you’d rather not.",
      },
    ],
    tips: [
      "The playlist is tied to this TV’s MAC address, so a new TV needs the link uploaded again to its own MAC.",
      "Turn off Settings → General → Power & Energy Saving → Brightness Optimisation so the picture doesn’t dim during dark scenes.",
      "If a Tizen firmware update removes the app, just reinstall it. Your uploaded playlist stays on the MAC.",
    ],
  },
  {
    slug: "lg",
    device: "LG Smart TV",
    icon: "tv",
    app: "Smart IPTV (SIPTV) or IBO Player",
    appNote: "From the LG Content Store on webOS. Same small one off app fee as Samsung, paid to the app maker.",
    time: "7 min",
    intro:
      "LG (webOS) TVs work the same way as Samsung: a playlist app plus a single upload of your M3U link against the TV’s MAC address.",
    steps: [
      {
        title: "Install The App",
        detail:
          "Open the LG Content Store, search for “Smart IPTV” (or “IBO Player”) and install it.",
      },
      {
        title: "Note The MAC Address",
        detail:
          "Launch the app and note the MAC address and upload URL it shows (siptv.app/mylist for Smart IPTV).",
      },
      {
        title: "Upload Your Playlist",
        detail:
          "On a phone or PC open siptv.app/mylist, enter the MAC address, paste the M3U URL from your email, set the country, and click Add.",
      },
      {
        title: "Reload The App",
        detail:
          "Fully close and reopen the app on the TV. Channels and EPG load automatically.",
      },
    ],
    tips: [
      "webOS 3.0 and older may not have an IPTV app available. A cheap Firestick or Android box is the easy fix.",
      "Set Settings → Picture → Energy Saving to Off (or Minimum) to stop the panel dimming.",
      "Keep using the same TV. The playlist follows its MAC address, not your account.",
    ],
  },
  {
    slug: "windows",
    device: "Windows PC",
    icon: "laptop",
    app: "IPTV Smarters Pro for Windows (or VLC)",
    appNote: "Smarters gives you a full TV guide; VLC just plays the channel list with no EPG.",
    time: "4 min",
    intro:
      "Watch on a laptop or desktop with the Windows player, or quickly test your line in VLC.",
    steps: [
      {
        title: "Download The App",
        detail:
          "Use the IPTV Smarters Pro for Windows link in your welcome email and run the installer. If SmartScreen warns, click “More info → Run anyway”.",
      },
      {
        title: "Log In With Xtream Codes",
        detail:
          "Open Smarters, choose “Add New User → Login with Xtream Codes API”, and enter any name plus the username, password and server URL from your email.",
      },
      {
        title: "Or Use VLC To Test",
        detail:
          "In VLC choose Media → Open Network Stream, paste your M3U URL, then open View → Playlist to browse channels.",
      },
      {
        title: "Allow It Through The Firewall",
        detail:
          "If Windows Firewall pops up on first play, tick the box and click Allow access, then double click a channel to start.",
      },
    ],
    tips: [
      "A wired Ethernet connection removes almost all buffering on 4K and live sport.",
      "MyIPTV Player from the Microsoft Store is a solid free alternative that also supports EPG.",
      "Close other downloads or streams on the same connection while watching live.",
    ],
  },
  {
    slug: "mac",
    device: "Mac",
    icon: "laptop",
    app: "IPTV Smarters Pro for macOS (or VLC)",
    appNote: "Runs natively on both Apple silicon and Intel Macs.",
    time: "4 min",
    intro: "The macOS player sets up in a couple of minutes; VLC works for a quick check of your line.",
    steps: [
      {
        title: "Install The App",
        detail:
          "Open the .dmg from your welcome email and drag IPTV Smarters Pro into the Applications folder.",
      },
      {
        title: "Open It The First Time",
        detail:
          "If macOS blocks it, go to System Settings → Privacy & Security, scroll down and click “Open Anyway”, then confirm.",
      },
      {
        title: "Log In With Xtream Codes",
        detail:
          "Choose “Add New User → Login with Xtream Codes API” and enter any name plus the username, password and server URL from your email.",
      },
      {
        title: "Or Open The M3U In VLC",
        detail:
          "In VLC use File → Open Network, paste your M3U URL, then open the Playlist window to pick a channel. VLC has no guide.",
      },
    ],
    tips: [
      "If playback stutters, switch the player’s decoder to software in settings.",
      "Stop the Mac sleeping (System Settings → Lock Screen / Battery) if you leave a stream or recording running.",
      "AirPlay to an Apple TV works, but the tvOS app on the Apple TV itself is more stable.",
    ],
  },
  {
    slug: "formuler",
    device: "Formuler Box",
    icon: "box",
    app: "MyTVOnline (MOL2 / MOL3)",
    appNote: "Formuler Z8, Z10, Z11 and CC use the built in MyTVOnline app.",
    time: "5 min",
    intro:
      "Formuler boxes load your service through the built in MyTVOnline app, using either an Xtream Codes login or a portal URL.",
    steps: [
      {
        title: "Open MyTVOnline",
        detail:
          "From the home screen open MyTVOnline (MOL2 or MOL3), then go to its Playlist / Portal settings and choose Add.",
      },
      {
        title: "Choose The Login Type",
        detail:
          "Pick “Xtream Codes API” and enter the server URL, username and password from your email. If you were sent a Stalker portal instead, choose Portal and paste that URL (it ends in /c/).",
      },
      {
        title: "Name It And Save",
        detail:
          "Give the playlist any name and save. MyTVOnline downloads the channels, groups and EPG.",
      },
      {
        title: "Prefer Another App?",
        detail:
          "You can also install IPTV Smarters Pro or TiviMate from the Formuler app store and use the same Xtream Codes login.",
      },
    ],
    tips: [
      "Using a Stalker portal? Send support the box’s MAC address (Settings → System Info) so your line is bound to it.",
      "In MyTVOnline’s settings, set the decoder to hardware / “Auto” for smooth 4K playback.",
      "Wired LAN beats WiFi on these boxes for peak time sport.",
    ],
  },
  {
    slug: "mag",
    device: "MAG Box",
    icon: "box",
    app: "Built in portal (Stalker)",
    appNote: "For MAG 254, 322, 324, 424, 524 and similar set top boxes. These use a portal URL, not a username and password.",
    time: "5 min",
    intro:
      "A MAG box loads channels from a portal URL that is locked to the box’s MAC address. Tell support you use a MAG and give them the MAC so they can issue your portal.",
    steps: [
      {
        title: "Find Your MAC Address",
        detail:
          "On the box open the main menu. The MAC address (00:1A:79:xx:xx:xx) is shown on the system info screen. Send it to support if you haven’t already.",
      },
      {
        title: "Open Portal Settings",
        detail:
          "Go to Settings → System settings → Servers → Portals.",
      },
      {
        title: "Enter The Portal URL",
        detail:
          "In “Portal 1 URL” paste the portal address from your email (it ends in /c/ or /stalker_portal/c/). Give Portal 1 any name and leave Portal 2 blank.",
      },
      {
        title: "Save And Restart The Portal",
        detail:
          "Save, then go to System settings → Restart Portal (or reboot the box). On startup it loads the channel list and EPG.",
      },
    ],
    tips: [
      "“Portal not responding” almost always means the MAC you gave support doesn’t match the box, or the URL is missing its trailing slash.",
      "MAG boxes are more reliable on a wired LAN cable. WiFi needs the official MAG USB adapter.",
      "Newer Android based boxes can run IPTV Smarters or TiviMate instead, with the Xtream Codes login.",
    ],
  },
];

/* ---------------------------------------------------- honest comparison ----- */

export const comparisonRows: { label: string; us: string; them: string }[] = [
  { label: "Server location", us: "UK, in London and Manchester", them: "Overseas or not stated" },
  { label: "Speed", us: "Low latency for UK broadband", them: "Higher latency" },
  { label: "Stability", us: "99.9% uptime", them: "Regular outages" },
  { label: "Buffering", us: "Rare in normal conditions", them: "Common during live sport" },
  { label: "Stream quality", us: "True 4K and Full HD", them: "Heavily compressed HD" },
];

/* ------------------------------------------------------ the difference ------ */

export const differencePoints: { heading: string; body: string }[] = [
  {
    heading: "The Infrastructure Is The Point",
    body: "Rather than putting every customer on the same busy servers, we run a network that routes you to nearby UK capacity. The difference shows most in peak hours and during big live events, when a lot of other services start to struggle.",
  },
  {
    heading: "What You See Is What You Get",
    body: "We publish real channel lists and sensible expectations. No invented 30,000 channel counts and no promises we cannot keep. A steady stream matters more than a big number.",
  },
  {
    heading: "Support Is Part Of The Product",
    body: "If you need a hand setting up a device, tuning playback or sorting an issue, our UK support team stays with you. Plenty of providers go quiet after the sale. We do not.",
  },
  {
    heading: "Built For People Who Care How It Runs",
    body: "No inflated claims and no gimmicks. Just a UK IPTV subscription built on solid servers, honest information and support that answers.",
  },
];

/* ----------------------------------------------------- announcement bar ----- */

export const announcement = {
  badge: "Limited time",
  text: "12 months plus 1 month free, now only",
  price: "£69",
  strike: "£99",
  save: "Save £30",
};

/* ------------------------------------------------------------- categories --- */

export interface ChannelCategory {
  slug: string;
  name: string;
  icon: IconName;
  count: string;
  blurb: string;
  examples: string[];
}

export const channelCategories: ChannelCategory[] = [
  {
    slug: "sports",
    name: "Sport",
    icon: "trophy",
    count: "3,400+",
    blurb:
      "UK and world sport in one group. Football, cricket, rugby, F1, darts, golf, tennis, NFL, NBA and the major fight nights.",
    examples: [
      "Sky Sports",
      "TNT Sports",
      "Premier Sports",
      "Sky Sports Cricket",
      "DAZN",
      "beIN Sports",
      "ESPN",
      "Viaplay Sports",
    ],
  },
  {
    slug: "movies",
    name: "Films And Series",
    icon: "film",
    count: "5,000+",
    blurb:
      "Film and box set channels plus a large on demand library that is refreshed every week.",
    examples: [
      "Sky Cinema",
      "TNT Sports Box Office",
      "Film4",
      "Paramount+",
      "MGM+",
      "Film and series VOD library",
    ],
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    icon: "tv",
    count: "4,200+",
    blurb: "The main UK channels along with reality, lifestyle and general entertainment.",
    examples: ["BBC One", "ITV1", "Channel 4", "Channel 5", "Sky Max", "Dave"],
  },
  {
    slug: "news",
    name: "News",
    icon: "globe",
    count: "900+",
    blurb: "Rolling UK and world news, day and night, in several languages.",
    examples: ["BBC News", "Sky News", "GB News", "CNN", "Al Jazeera", "CNBC"],
  },
  {
    slug: "kids",
    name: "Kids",
    icon: "sparkles",
    count: "600+",
    blurb: "Cartoons and family shows kept in one group that is easy to browse.",
    examples: ["CBeebies", "CBBC", "Cartoon Network", "Nickelodeon", "Disney Channel", "Boomerang"],
  },
  {
    slug: "documentary",
    name: "Documentary",
    icon: "compass",
    count: "700+",
    blurb: "Nature, science, history and true crime channels in HD.",
    examples: ["BBC Earth", "Discovery", "National Geographic", "Sky History", "Animal Planet", "PBS America"],
  },
  {
    slug: "international",
    name: "International",
    icon: "globe",
    count: "8,000+",
    blurb:
      "Country by country line ups for Ireland, the USA, Canada, the Middle East, Europe, Asia and Africa.",
    examples: ["Ireland", "USA", "Canada", "Arabic", "Germany", "France", "India", "Turkey"],
  },
  {
    slug: "ppv-events",
    name: "PPV And Events",
    icon: "bolt",
    count: "Live",
    blurb: "Extra channels that we open for the big boxing, UFC and wrestling nights.",
    examples: ["Boxing pay per view", "UFC pay per view", "WWE premium live events", "Big fight nights"],
  },
];

/* -------------------------------------------------------------- pricing ----- */

export type BillingKey = "monthly" | "quarterly" | "yearly";

export const billingOptions: {
  key: BillingKey;
  label: string;
  months: number;
  discount: number; // fraction off the monthly price
  note?: string;
}[] = [
  { key: "monthly", label: "Monthly", months: 1, discount: 0 },
  { key: "quarterly", label: "Quarterly", months: 3, discount: 0.15, note: "Save 15%" },
  { key: "yearly", label: "Yearly", months: 12, discount: 0.4, note: "Save 40%" },
];

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number; // GBP, the reference monthly price
  connections: number;
  featured?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "One screen, everything included.",
    monthlyPrice: 9.99,
    connections: 1,
    features: [
      "1 device at a time",
      "20,000+ live channels and VOD",
      "Full HD where the broadcast allows",
      "7 day guide and catch up",
      "Works with all the main apps",
      "Email support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "The right fit for most homes.",
    monthlyPrice: 13.99,
    connections: 2,
    featured: true,
    features: [
      "2 devices at the same time",
      "20,000+ live channels and VOD",
      "4K and UHD where the broadcast allows",
      "7 day guide, catch up and recording",
      "Priority servers for peak hours",
      "Priority live chat support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Larger households and busy sport weekends.",
    monthlyPrice: 19.99,
    connections: 4,
    features: [
      "4 devices at the same time",
      "20,000+ live channels and VOD",
      "4K and UHD where the broadcast allows",
      "7 day guide, catch up and recording",
      "Extra channels for pay per view nights",
      "24/7 priority support",
    ],
  },
];

/** Monthly equivalent price for a plan on a given billing cycle. */
export function priceForCycle(monthlyPrice: number, discount: number): number {
  return Math.round(monthlyPrice * (1 - discount) * 100) / 100;
}

/** Total charged up front for a billing cycle. */
export function totalForCycle(
  monthlyPrice: number,
  discount: number,
  months: number,
): number {
  return Math.round(priceForCycle(monthlyPrice, discount) * months * 100) / 100;
}

export function formatGbp(value: number): string {
  return `£${value.toFixed(2)}`;
}

/* ------------------------------------------- duration plans (home pricing) -- */

export interface DurationPlan {
  id: string;
  /** Shown as the card heading, e.g. "3 months". */
  label: string;
  months: number;
  /** One off price in GBP for the whole term. */
  price: number;
  featured?: boolean;
  badge?: string;
}

/**
 * Simple pay once, per term pricing used on the home page. Buying goes through
 * WhatsApp, so there is no checkout to wire up.
 */
export const durationPlans: DurationPlan[] = [
  { id: "1-month", label: "1 Month", months: 1, price: 20 },
  { id: "3-months", label: "3 Months", months: 3, price: 35 },
  {
    id: "6-months",
    label: "6 Months",
    months: 6,
    price: 55,
    featured: true,
    badge: "Most popular",
  },
  { id: "12-months", label: "12 Months", months: 12, price: 70 },
];

/** Feature list every duration plan includes. */
export const planFeatures = [
  "20,000+ channels",
  "4K Ultra HD",
  "Anti freeze",
  "All devices",
  "EPG included",
  "24/7 support",
];

/** Prefilled WhatsApp link for a specific plan. */
export function whatsappPlanLink(label: string, price: number): string {
  const message = `Hi, I would like the ${label} IPTV subscription for £${price}. Please send the payment details.`;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------------------------------------------ faqs ---- */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What is an IPTV subscription?",
    answer:
      "An IPTV subscription is a login that streams live TV channels and on demand films and series over your broadband, instead of through a satellite dish or a cable box. You enter the login once into a compatible app and the channel list and TV guide load on their own.",
  },
  {
    question: "Does it work on UK broadband?",
    answer:
      "Yes. It runs fine on the usual UK providers, including BT, Sky, Virgin Media, EE, TalkTalk, Vodafone and Plusnet. As a rough guide you want about 15 Mbps per stream for Full HD and 25 Mbps or more for 4K. A wired connection or 5 GHz WiFi gives the steadiest picture during live sport.",
  },
  {
    question: "Which devices can I use?",
    answer:
      "Any device that runs a standard IPTV player. That covers the Amazon Firestick and Fire TV, Android phones, tablets and boxes, Apple TV, iPhone and iPad, Samsung and LG Smart TVs, Android TV, Windows and Mac computers, and MAG boxes. Common apps are IPTV Smarters Pro and TiviMate. Our setup guide has step by step instructions for each one.",
  },
  {
    question: "How many devices can watch at once?",
    answer:
      "It depends on your plan. Starter allows 1 stream at a time, Standard allows 2 and Premium allows 4. You can install the subscription on as many devices as you like. The limit is only on how many play at the same time.",
  },
  {
    question: "How soon can I watch after paying?",
    answer:
      "Activation is automatic. Your login is emailed to you within a few minutes of payment, and usually within seconds. If it has not arrived, check your spam folder and then message support.",
  },
  {
    question: "Is there a trial or a refund?",
    answer:
      "New customers can ask for a short paid trial before taking a longer plan. Every subscription is also covered by a 7 day money back guarantee if the service will not work on your setup and our team cannot fix it with you.",
  },
  {
    question: "Do I get a TV guide and catch up?",
    answer:
      "Yes. A 7 day electronic programme guide is included. Supported apps add catch up and recording, so you can rewind or watch a programme after it has aired.",
  },
  {
    question: "Do I need a VPN?",
    answer:
      "A VPN is not needed for the service to work. Some people use one for general privacy on their home network. If you do, pick a UK or nearby server so your streaming speed stays high.",
  },
  {
    question: "Who is responsible for viewing rights?",
    answer:
      "We sell access to a streaming service. You are responsible for holding any TV licence or rights needed to watch particular content where you live. If you are not sure, check your local rules before you subscribe.",
  },
];

/* --------------------------------------------------------- testimonials ---- */

export const testimonials: {
  quote: string;
  name: string;
  detail: string;
}[] = [
  {
    quote:
      "Moved over from cable for the football and I am glad I did. Saturday 3pm games run in HD and I have only seen it buffer once or twice all season.",
    name: "Daniel R.",
    detail: "Manchester",
  },
  {
    quote:
      "Setup on my Firestick took about five minutes with their guide. The TV guide is accurate and the film library is bigger than I expected.",
    name: "Priya S.",
    detail: "Leeds",
  },
  {
    quote:
      "We have four TVs at home and the Premium plan handles all of them at the same time. I had a setup question and chat came back within a few minutes.",
    name: "Mark V.",
    detail: "Bristol",
  },
];

/* -------------------------------------------------------- contact + nav ---- */

export const contact = {
  email: "support@example.com",
  chatHours: "Live chat, 24 hours a day",
  responseTime: "First reply usually within 15 minutes",
  telegram: "@iptvwebsite_support",
  /** WhatsApp shown as it reads to a person. */
  whatsappDisplay: "+44 7362 244111",
  /** Digits only, international format, for wa.me links. */
  whatsappNumber: "447362244111",
  /** Prefilled first message when someone taps the WhatsApp button. */
  whatsappMessage: "Hi, I have a question about your IPTV subscription.",
};

/** Ready to use wa.me link with the prefilled message. */
export const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;

export const navLinks: { href: string; label: string }[] = [
  { href: "/pricing", label: "Pricing" },
  { href: "/channels", label: "Channels" },
  { href: "/installation-guide", label: "Setup Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
