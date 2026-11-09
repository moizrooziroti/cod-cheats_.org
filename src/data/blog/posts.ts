import type { BlogPostFull } from './types';
import { BUY_URLS } from '../../config/checkout';
import { EXTRA_WEBP, SITE_WEBP } from '../../config/siteMedia';
import { productPath } from '../../utils/path';

function cta(title: string, text: string, href: string) {
  return { type: 'cta' as const, title, text, href };
}

function p(text: string) {
  return { type: 'p' as const, text };
}

function h2(text: string) {
  return { type: 'h2' as const, text };
}

function h3(text: string) {
  return { type: 'h3' as const, text };
}

function ul(items: string[]) {
  return { type: 'ul' as const, items };
}

function fig(src: string, alt: string, caption?: string) {
  return { type: 'figure' as const, src, alt, caption };
}

/** Keyword-focused articles. Slugs stay stable so product and forum links keep working. */
export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Articles',
    title: 'How Call of Duty cheats work on PC — loader, ESP, aimbot (2026)',
    slug: 'how-call-of-duty-cheats-work',
    image: SITE_WEBP.levoAimbot,
    desc: 'What people mean by Call of Duty cheats in 2026: loaders, ESP, aimbot-style assist, wallhack-style visuals, and why listings change after patches.',
    date: 'Nov 7, 2026',
    readTime: '11 min read',
    featured: true,
    body: [
      h2('What Call of Duty cheats usually include'),
      fig(
        SITE_WEBP.cheatVisuals,
        'Call of Duty overlay-style visuals — editorial illustration',
        'Menus differ by seller. Treat screenshots as examples.',
      ),
      p(
        'If you landed on cod-cheats.org, you are probably comparing Call of Duty cheats before opening checkout. Sellers usually bundle three ideas: on-screen intel (ESP), crosshair help (aimbot or aim assist), and see-through outlines (wallhack or chams). A loader verifies your key and pulls the build that matches today’s listing.',
      ),
      p(
        'This page is a buyer’s map of those words. It is not a promise that any tool stays compatible, and it does not claim a detection status. Third-party software can break Call of Duty rules and can cost you the account.',
      ),
      h2('Loader, menu, and updates'),
      p(
        "After checkout you typically get a download or a portal login. The menu is where ESP colors, aimbot FOV, and wallhack line weight live. When the game's publisher ships a Call of Duty update, that build can stop working until the seller posts a new one. Read the listing update note before you play on patch day.",
      ),
      ul([
        'Keep the installer and the order email in one folder.',
        'Write down the build number the seller says is current.',
        'Change one setting at a time so you know what you edited.',
      ]),
      h2('ESP on Call of Duty'),
      p(
        'Call of Duty ESP is the label for boxes, names, distances, skeletons, or streak markers the normal HUD does not draw. Useful configs stay readable: fewer colors, a distance cap, and only the labels you actually miss. Compare that with [ESP vs aimbot vs wallhack](/articles/cod-esp-vs-aimbot-vs-wallhack/).',
      ),
      h2('Aimbot and aim assistance'),
      p(
        'A Call of Duty aimbot or aim-assist module limits how far from your crosshair it looks (FOV), how fast it moves (smoothing), and which bone it prefers. It does not remove ping, peek timing, or bad crosshair height. See [aimbot settings and missed shots](/articles/cod-aimbot-settings-and-overaim/).',
      ),
      h2('wallhack-style visuals'),
      p(
        'wallhack, chams, and glow are marketing names for seeing a silhouette through geometry. Thick lines read on dark sites and wash out on bright ones. [wallhack readability](/articles/cod-wallhack-config-readability/) covers that tradeoff.',
      ),
      h2('How this differs from Cloud DMA and a spoofer'),
      p(
        'Software cheats run on the same PC as the game. [Cloud DMA](/articles/what-is-cloud-dma-for-call-of-duty/) is a separate hardware path. An [HWID spoofer](/articles/what-is-an-hwid-spoofer-for-call-of-duty/) is about hardware identifiers, not ESP. Do not buy one product expecting the other.',
      ),
      cta(
        'Call of Duty cheats listing',
        'Open the cheats product, then use Buy for the checkout page.',
        productPath('call-of-duty-cheats'),
      ),
      h2('Before you pay'),
      p(
        'Run the [buying checklist](/articles/buying-call-of-duty-cheats-checklist/): what is included, how updates work, and what the refund text actually says.',
      ),
    ],
  },
  {
    tag: 'Articles',
    title: 'Call of Duty ESP vs aimbot vs wallhack guide: compare features',
    slug: 'cod-esp-vs-aimbot-vs-wallhack',
    image: SITE_WEBP.cheatMisc,
    desc: 'A plain split of Call of Duty ESP, aimbot, and wallhack so a product page is easier to read before checkout.',
    date: 'Nov 6, 2026',
    readTime: '9 min read',
    body: [
      h2('Why the labels overlap'),
      fig(EXTRA_WEBP.r5, 'Call of Duty intel overlay — illustrative'),
      p(
        'Listings often say “ESP wallhack aimbot” in one line. Those are different jobs. ESP answers where someone or a streak is. Aimbot changes how the crosshair travels. wallhack changes how you see through cover.',
      ),
      h2('Call of Duty ESP'),
      p(
        'Player boxes, health, distance, operator name, and killstreak highlights. It is still a flat overlay. It does not aim for you and it does not replace sound.',
      ),
      h3('When ESP is the main feature'),
      p(
        'Players who want information and already aim themselves look for ESP-only or visuals-first menus. Start with [ESP customization](/articles/cod-esp-customization-tips/) if the screen gets noisy.',
      ),
      h2('Call of Duty aimbot'),
      p(
        'Smoothing, FOV, bone priority, sometimes a second aim key. The module still starts from where you are already looking. Wide FOV feels sticky; narrow FOV needs better crosshair placement.',
      ),
      h2('Call of Duty wallhack'),
      p(
        'Outlines or filled shapes through walls. Pair with [line weight tips](/articles/cod-wallhack-config-readability/). A bundle that includes all three is a price package, not proof you need every toggle — see [how to choose](/articles/how-to-choose-call-of-duty-cheats/).',
      ),
      cta('Cheats product', 'Feature names on our page match the checkout listing.', productPath('call-of-duty-cheats')),
    ],
  },
  {
    tag: 'Articles',
    title: 'Best Call of Duty Buy Guide: Choose Cheats in 2026 (ESP, Aimbot, or DMA)',
    slug: 'how-to-choose-call-of-duty-cheats',
    image: SITE_WEBP.levoMisc,
    desc: 'Pick a Call of Duty cheat by role and hardware: software ESP and aimbot versus Cloud DMA, without hype counters.',
    date: 'Nov 5, 2026',
    readTime: '8 min read',
    body: [
      h2('Start with the round you play'),
      fig(EXTRA_WEBP.r3, 'Call of Duty tactical context — illustrative'),
      p(
        'Entry players often look at aimbot feel. OBJ and support players often care more about perk and streak ESP plus wallhack readability. There is no universal best Call of Duty cheat.',
      ),
      h2('Software cheat or Cloud DMA'),
      p(
        'A software loader is the usual path for ESP and aimbot. Cloud DMA is extra hardware and cabling. Read [software vs DMA](/articles/software-cheats-vs-cloud-dma-tradeoffs/) and [FPS load](/articles/call-of-duty-cheat-performance-and-pc-load/) before you spend on a second PC.',
      ),
      h2('Questions for the listing'),
      ul([
        'Which Call of Duty build is supported right now?',
        'Does the key cover one PC?',
        'Where do updates show up after a patch?',
        'What does the refund line actually allow?',
      ]),
      p(
        'Keep the HUD small. [ESP tips](/articles/cod-esp-customization-tips/) are the practical version of that advice.',
      ),
      cta('Product hub', 'Four offers: Call of Duty cheats, spoofer, skin changer, Cloud DMA.', '/products/'),
    ],
  },
  {
    tag: 'Setup',
    title: 'Call of Duty Cheat Settings Explained: FOV, Smoothing, and Bones',
    slug: 'call-of-duty-cheat-settings-explained',
    image: SITE_WEBP.cheatAimbot,
    desc: 'What FOV, smoothing, bone priority, and ESP distance usually mean in a Call of Duty cheat menu.',
    date: 'Nov 4, 2026',
    readTime: '8 min read',
    body: [
      h2('Aimbot FOV'),
      fig(EXTRA_WEBP.r4, 'Aim menu context — illustrative'),
      p(
        'FOV is how far from the center of the screen the aimbot will consider a target. A wide cone grabs more people and feels busy in close fights. A narrow cone only helps when your crosshair is already close.',
      ),
      h2('Smoothing'),
      p(
        'Smoothing spreads the mouse movement across frames. Low values feel sharp. High values feel late on fast swings. Test one gun for a few rounds before you copy a screenshot from someone else.',
      ),
      h2('Bone priority'),
      p(
        'Head versus chest is a hitbox choice, not a ranked guarantee. Some menus let you change priority by distance. The checkout page is the source for which options exist.',
      ),
      h2('ESP distance'),
      p(
        'A distance cap hides far labels so close threats stay readable. If you keep raising it, you are probably missing audio, not “range.”',
      ),
      p('Change one slider per session and write the number down.'),
      cta('Cheats checkout', 'Confirm the menu matches this vocabulary on the listing.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Setup',
    title: 'What Is an HWID Spoofer for Call of Duty?',
    slug: 'what-is-an-hwid-spoofer-for-call-of-duty',
    image: SITE_WEBP.levoVisuals,
    desc: 'HWID spoofer meaning for Call of Duty: hardware identifiers, what a listing can and cannot promise, and how it differs from account appeals.',
    date: 'Nov 3, 2026',
    readTime: '7 min read',
    body: [
      h2('Hardware identifiers'),
      fig(EXTRA_WEBP.r9, 'PC hardware context — illustrative'),
      p(
        'A PC exposes stable IDs from the board, disks, and network adapters. Call of Duty and its anti-cheat can use hardware bans as one sanction. An HWID spoofer is software that tries to present different identifiers where that product says it does. Scope is on the checkout page, not in a forum rumor.',
      ),
      h2('Not an appeal and not an ESP'),
      p(
        "A spoofer does not draw ESP and it does not decide whether the game's publisher restores an account. For HWID scope, read the spoofer product page and checkout listing. We do not claim any bypass result.",
      ),
      h2('Read the listing first'),
      ul([
        'Which Windows versions are listed.',
        'Whether a reboot is required.',
        'Whether the tool is meant to run before the game client.',
      ]),
      cta('Spoofer product', 'Open the HWID spoofer checkout from the product page.', BUY_URLS.spoofer),
    ],
  },
  {
    tag: 'Features',
    title: 'Call of Duty Skin Changer: What It Changes (and What It Does Not)',
    slug: 'call-of-duty-skin-changer-explained',
    image: SITE_WEBP.cheatMisc,
    desc: 'Call of Duty skin changer tools in plain language: camos, operators, and cosmetic-only scope — not ESP or aimbot.',
    date: 'Nov 2, 2026',
    readTime: '7 min read',
    body: [
      h2('Cosmetic-only scope'),
      fig(EXTRA_WEBP.r6, 'Call of Duty loadout cosmetics — illustrative'),
      p(
        'A skin changer focuses on how guns and operators look on your screen or in your menu. It is a different buy from the main Call of Duty cheats bundle that lists ESP, aim assistance, and radar.',
      ),
      h2('Check the listing before you assume camos'),
      ul([
        'Which weapon slots the tool touches.',
        'Whether operators or blueprints are included.',
        'If changes are client-side only or synced in a way the listing describes.',
      ]),
      p(
        'Third-party cosmetics can still break game rules. Outcomes are your risk — we do not promise account status.',
      ),
      cta('Skin changer product', 'Open the skin changer checkout from the product page.', BUY_URLS.skinChanger),
    ],
  },
  {
    tag: 'Features',
    title: 'What Is Cloud DMA for Call of Duty?',
    slug: 'what-is-cloud-dma-for-call-of-duty',
    image: SITE_WEBP.cheatVisuals,
    desc: 'Cloud DMA for Call of Duty in plain language: a second-PC memory read path, not the same thing as an on-PC ESP loader.',
    date: 'Nov 1, 2026',
    readTime: '8 min read',
    body: [
      h2('DMA in one paragraph'),
      fig(EXTRA_WEBP.r7, 'External hardware path — illustrative'),
      p(
        'DMA hardware reads memory from a path outside the game PC’s normal cheat loader. Cloud DMA adds a remote or hosted piece, depending on the seller. People compare it with Call of Duty ESP because both can show positions — the setup cost is not the same.',
      ),
      h2('What you should confirm on the listing'),
      ul([
        'Which firmware or bridge the page requires.',
        'Whether a second computer is mandatory.',
        'What the seller says about latency and region.',
      ]),
      p(
        'Next: [software cheats vs Cloud DMA](/articles/software-cheats-vs-cloud-dma-tradeoffs/).',
      ),
      cta('Cloud DMA', 'Hardware notes live on the checkout page.', BUY_URLS.cloudDma),
    ],
  },
  {
    tag: 'Articles',
    title: 'Cheats checklist 2026: buy Call of Duty safely on partner checkout',
    slug: 'buying-call-of-duty-cheats-checklist',
    image: EXTRA_WEBP.r5,
    desc: 'A short checklist for buying Call of Duty cheats: included features, update policy, checkout domain, and account risk.',
    date: 'Oct 30, 2026',
    readTime: '7 min read',
    body: [
      h2('Checkout and delivery'),
      fig(SITE_WEBP.levoMisc, 'Product comparison context — illustrative'),
      ul([
        'The page is HTTPS and the domain matches the link you meant to open.',
        'You can see price, term length, and how the key arrives.',
        'You saved the refund paragraph before paying.',
      ]),
      h2('Feature scope'),
      ul([
        'ESP, aimbot, and wallhack are listed separately if they are separate.',
        'One PC or more is stated, not guessed.',
        'Supported game version is written down.',
      ]),
      h2('Risk'),
      p(
        'Call of Duty can restrict accounts that use third-party tools. Budget that before you buy. Start from the [four-card product hub](/products/) and open one listing at a time.',
      ),
      h2('After delivery'),
      p(
        'Save the installer path, the license email, and a screenshot of the refund paragraph the day you pay. If a patch breaks the build, you will know which version you purchased without guessing from a forum thread.',
      ),
      p(
        'Compare vendor language with [how Call of Duty loaders work](/articles/how-call-of-duty-cheats-work/) and [software vs Cloud DMA tradeoffs](/articles/software-cheats-vs-cloud-dma-tradeoffs/) so you are not buying the wrong card.',
      ),
      cta('Products', 'Call of Duty cheats, spoofer, skin changer, and Cloud DMA.', '/products/'),
    ],
  },
  {
    tag: 'Setup',
    title: 'Call of Duty ESP Setup: Cleaner Overlays for Call of Duty',
    slug: 'cod-esp-customization-tips',
    image: EXTRA_WEBP.r9,
    desc: 'Call of Duty ESP tips: fewer colors, distance limits, and which labels to turn off when Call of Duty already gives you the sound cue.',
    date: 'Oct 28, 2026',
    readTime: '6 min read',
    body: [
      h2('Three colors is enough'),
      fig(SITE_WEBP.cheatVisuals, 'ESP layer — editorial'),
      p(
        'Ally, threat, and streak. Everything else can stay neutral. A Call of Duty ESP full of neon is harder to read in a gunfight than a quiet one.',
      ),
      h2('Distance and opacity'),
      p(
        'Fade labels past the range you can actually fight. Lower opacity on skeletons if boxes already show the angle.',
      ),
      h2('Sound still matters'),
      p(
        'If you hear the rotate, you do not need a second ESP line for the same event. Vocabulary for the rest of the menu is in [ESP vs aimbot vs wallhack](/articles/cod-esp-vs-aimbot-vs-wallhack/).',
      ),
      cta('Cheats listing', 'ESP options depend on the current build.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Setup',
    title: 'Call of Duty aimbot settings 2026: FOV, smoothing, ping & missed shots',
    slug: 'cod-aimbot-settings-and-overaim',
    image: EXTRA_WEBP.r3,
    desc: 'Call of Duty aimbot settings and missed shots: ping, crosshair height, FOV, and smoothing — not a magic slider.',
    date: 'Oct 26, 2026',
    readTime: '7 min read',
    body: [
      h2('The server still decides the hit'),
      fig(EXTRA_WEBP.r8, 'Crosshair context — illustrative'),
      p(
        'An Call of Duty aimbot moves your crosshair on your PC. The server validates the shot with your ping and the other player’s movement. Test on a stable connection before you blame FOV.',
      ),
      h2('Over-aim'),
      p(
        'Very low smoothing plus a panic flick overshoots. Slow the slider or slow your hand, then retest the same angle.',
      ),
      h2('Crosshair height'),
      p(
        'If you hold the floor, the aimbot spends the fight correcting you. Head-level habits matter even with aim assistance on. Settings names are in [FOV and smoothing](/articles/call-of-duty-cheat-settings-explained/).',
      ),
      h2('When to lower FOV first'),
      p(
        'If the crosshair snaps past the target and comes back, shrink FOV before you crank smoothing. Test on a private match at your normal Call of Duty sensitivity so the aimbot settings match muscle memory.',
      ),
      p(
        'Heavy packet loss makes every profile feel late. Fix routing or wait for a stable session before you rewrite the whole menu — otherwise you chase noise.',
      ),
      cta('Aim features on the listing', 'Exact toggles are on checkout.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Setup',
    title: 'Call of Duty wallhack Settings: Lines You Can Read on Site',
    slug: 'cod-wallhack-config-readability',
    image: EXTRA_WEBP.r7,
    desc: 'Call of Duty wallhack readability: thin versus thick outlines, lighting, and vertical sites.',
    date: 'Oct 24, 2026',
    readTime: '6 min read',
    body: [
      h2('Lighting changes the same preset'),
      fig(EXTRA_WEBP.r5, 'Visibility cue — illustrative'),
      p(
        'Bright bombsites hide thin wallhack lines. Dark rooms hide thick ones in the clutter. Keep two profiles if the menu allows it.',
      ),
      h2('Stairs and vertical plays'),
      p(
        'A flat outline does not tell you which floor someone is on. Check that your color or thickness still separates up from down on maps you queue.',
      ),
      cta('Open Call of Duty wallhack listing', 'wallhack options follow the seller’s menu.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Features',
    title: 'Software Cheats vs Cloud DMA for Call of Duty',
    slug: 'software-cheats-vs-cloud-dma-tradeoffs',
    image: EXTRA_WEBP.r8,
    desc: 'Call of Duty software cheats versus Cloud DMA: install simplicity, hardware cost, and what each listing is actually selling.',
    date: 'Oct 22, 2026',
    readTime: '8 min read',
    body: [
      h2('Software path'),
      fig(SITE_WEBP.levoVisuals, 'Overlay versus hardware — illustrative'),
      p(
        'A normal Call of Duty cheat is a loader on the gaming PC: ESP, aimbot, wallhack, config saves. Setup is shorter. It shares CPU and GPU time with the game — see [performance](/articles/call-of-duty-cheat-performance-and-pc-load/).',
      ),
      h2('Cloud DMA path'),
      p(
        'DMA adds a bridge, often a second machine, and more steps when Call of Duty updates. The [Cloud DMA explainer](/articles/what-is-cloud-dma-for-call-of-duty/) lists what to verify. It is not automatically “better” for a weekend player.',
      ),
      h2('How to decide'),
      p(
        'If you want ESP and aimbot with one install, start with the software cheats page. If you already own DMA gear and the listing matches it, read that page instead. Do not pay for both until you know which problem you have.',
      ),
      cta('Cloud DMA listing', 'Confirm hardware requirements before checkout.', BUY_URLS.cloudDma),
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Call of Duty Cheat Not Working After a Patch? Basic Checks',
    slug: 'call-of-duty-cheat-troubleshooting-basics',
    image: EXTRA_WEBP.r6,
    desc: 'Call of Duty cheat troubleshooting: game updates, fullscreen mode, admin rights, and waiting for the seller’s new build.',
    date: 'Oct 20, 2026',
    readTime: '6 min read',
    body: [
      h2('Patch day'),
      fig(SITE_WEBP.levoVisuals, 'PC troubleshooting — illustrative'),
      p(
        'Most “Call of Duty cheat not working” reports start right after a Call of Duty update. The old loader is often the wrong build. Wait for the seller’s note instead of reinstalling Windows first.',
      ),
      h2('Display mode and permissions'),
      p(
        'Overlays attach differently in fullscreen and borderless. If the menu injects only when both the game and the loader are elevated, match what the documentation says — do not guess a mix.',
      ),
      h2('What to send support'),
      ul([
        'Windows version.',
        'Game build if you can see it.',
        'Loader version from the menu.',
        'One sentence on what you expected versus what happened.',
      ]),
      cta('See cheats compatibility page', 'Compatibility notes are on the listing.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Troubleshooting',
    title: 'Call of Duty Cheat FPS Drop: Performance and PC Load',
    slug: 'call-of-duty-cheat-performance-and-pc-load',
    image: EXTRA_WEBP.r4,
    desc: 'Call of Duty cheat FPS: measure a vanilla baseline, then ESP and aimbot one module at a time.',
    date: 'Oct 18, 2026',
    readTime: '6 min read',
    body: [
      h2('Baseline first'),
      fig(SITE_WEBP.cheatMisc, 'Performance context — illustrative'),
      p(
        'Log Call of Duty FPS with the cheat closed. Then enable ESP only. Then aimbot. A drop you cannot measure is a guess.',
      ),
      h2('Streaming and overlays'),
      p(
        'Capture software and a second overlay often cost more frame time than a simple box ESP. Turn extras off before you blame the cheat menu.',
      ),
      h2('Heat'),
      p(
        'Thermal throttle feels like random aim drift. If clocks fall when the GPU is hot, fix cooling before you retune smoothing. Broader context is in [software vs DMA](/articles/software-cheats-vs-cloud-dma-tradeoffs/).',
      ),
      cta('Software cheats', 'Feature list on the product page.', BUY_URLS.cheats),
    ],
  },
  {
    tag: 'Articles',
    title: 'Call of Duty Cheat Glossary: ESP, Aimbot, HWID, DMA',
    slug: 'call-of-duty-cheat-vocabulary',
    image: EXTRA_WEBP.r5,
    desc: 'Short definitions for Call of Duty cheat terms shoppers reuse: ESP, aimbot, wallhack, loader, HWID spoofer, and Cloud DMA.',
    date: 'Oct 16, 2026',
    readTime: '6 min read',
    body: [
      h2('Terms that show up on listings'),
      fig(SITE_WEBP.levoAimbot, 'Aim assist context — illustrative'),
      ul([
        'ESP — extra on-screen info (boxes, names, streaks).',
        'Aimbot / aim assist — crosshair help inside an FOV cone.',
        'wallhack / chams — visibility through cover.',
        'Loader — the app that checks your key and starts the build.',
        'HWID spoofer — identifier tooling; not ESP.',
        'Cloud DMA — off-PC memory read path with its own hardware list.',
      ]),
      h2('Use the same words in forums'),
      p(
        'Threads stay readable when everyone means the same feature. Start with [how Call of Duty cheats work](/articles/how-call-of-duty-cheats-work/) and [ESP vs aimbot vs wallhack](/articles/cod-esp-vs-aimbot-vs-wallhack/).',
      ),
      cta('All articles', 'Browse the rest of the guides.', '/articles/'),
    ],
  },
];
