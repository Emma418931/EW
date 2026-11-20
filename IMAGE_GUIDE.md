# Erlauftalerhof – Website and image replacement guide

Static, multi-page German-language website for the Erlauftalerhof. No build step or external JavaScript libraries are required. Open `index.html` directly or serve the repository directory with any static file server. Fonts and sample photography load from third-party services when the preview has internet access.

## Pages
- `index.html` – home
- `zimmer.html` – room categories and room inquiry
- `restaurant.html` – restaurant and table inquiry
- `aktivitaeten.html` – activities
- `region.html` – region and surroundings
- `kontakt.html` – contact, inquiry and directions
- `impressum.html` – legal notice template with clearly marked missing information
- `datenschutz.html` – privacy notice template; must be adapted before launch

## Images and replacement
All photo URLs are centralized in the `PHOTO_LIBRARY` object near the top of `site.js`. The keys (for example `hotel-aussenansicht`, `zimmer-doppelzimmer`, `restaurant-speisen`, `wandern`) are used in each HTML page as `data-photo` values. To use the photographer's images, add approved image files under `assets/images/`, replace the corresponding URL in `PHOTO_LIBRARY` with a relative path such as `assets/images/zimmer-doppelzimmer.jpg`, and keep the same key. Layout and image ratios remain unchanged. For privacy and dependable local preview, download and serve licensed final images locally rather than relying on remote image URLs.

Every sample image is explicitly identified in its alt text or nearby caption as an illustrative image, not a photograph of the Erlauftalerhof. The sources are Unsplash CDN image pages (IDs/URLs listed below). Unsplash's license generally permits free use, including commercial use, subject to its license terms; check the current terms and image-specific restrictions before publication. Remote URLs may fail offline, be changed by the provider, or show a different crop, so verify all images in the target browser and replace with locally stored, permission-cleared photos before launch. The site uses `images.unsplash.com` rather than a gray placeholder; sample images require an internet connection to load.

## Photographer shot list (image keys)
| Key | Photograph to capture for the real site |
| --- | --- |
| `hotel-aussenansicht` | Inviting exterior of the Erlauftalerhof with the actual building and surrounding green landscape; wide horizontal hero framing. |
| `zimmer-doppelzimmer` | Each representative double room, including a wide view showing bed, furnishings and natural light. |
| `zimmer-einzelzimmer` | Actual single room, wide view and detail of the sleeping area. |
| `zimmer-familienzimmer` | Family room showing double bed and sofa bed, composed to communicate sleeping arrangement accurately. |
| `restaurant-innenbereich` | Restaurant interior, one wide room view and a welcoming table setting. |
| `restaurant-speisen` | Actual dishes served, photographed only after the current menu is confirmed. |
| `fruehstueck` | Real breakfast selection and a breakfast table in the actual service area. |
| `terrasse` | Actual terrace and seating, only if the restaurant has a guest terrace. |
| `garten` | Garden and outdoor seating at the property. |
| `pool` | The actual seasonal outdoor pool and its setting, only if available to guests; avoid implying spa facilities. |
| `erlauftal-natur` | Local Erlauftal landscape in the vicinity, with location verified and a horizontal wide view. |
| `erlauftal-fluss` | Erlauf access or a nearby river view, only if the location is verified and access claims are confirmed. |
| `wandern` | Local hiking scene or verified trail scenery; secure consent for identifiable people. |
| `radfahren` | Cycling / mountain biking in the actual region; avoid implying a specific route unless verified. |
| `motorradfahren` | Motorcyclist on a locally verified scenic road; permissions and safe photography setup required. |

## Forms and operation
Forms validate required fields and prepare an email using the visitor's default email program. They do **not** submit data to a server. A live website needs a secure form endpoint or configured email service, anti-spam measures, retention policy, privacy notice and tested delivery. Contact details are the supplied business details.

## Verify before publication
- Confirm room category and whether the known 24 m² Deluxe room is offered, plus all actual room amenities and capacity.
- Confirm seasonal pool, garden, Erlauf access, Wi-Fi, breakfast, dogs, terrace, restaurant offerings and opening hours.
- Add actual legal entity, company registration, UID, responsible person, authority / professional details and date; have legal pages checked for Austrian requirements.
- Adapt privacy text to the real host, server logs, email processing, retention and any services added.
- Check current regional attractions, routes and travel details instead of publishing unverified distance or route claims.
- Check image and font network requests. Google Fonts and Unsplash currently use external requests; consider self-hosting approved font and photo files and update privacy disclosures.

## Credits / sample image URLs
All sample photographs are remote Unsplash image-CDN URLs. Source IDs map to the photo keys in `site.js`; look up each exact URL on Unsplash to verify the photographer and current license. Example sources: `photo-1510798831971-661eb04b3739`, `photo-1611892440504-42a792e24d32`, `photo-1616594039964-ae9021a400a0`, `photo-1616486338812-3dadae4b4ace`, `photo-1414235077428-338989a2e8c0`, `photo-1547592180-85f173990554`, `photo-1533089860892-a7c6f0a88666`, `photo-1600210492486-724fe5c67fb0`, `photo-1500382017468-9049fed747ef`, `photo-1576013551627-0cc20b96c2a7`, `photo-1470770841072-f978cf4d019e`, `photo-1437482078695-73f5ca6c96e2`, `photo-1551632811-561732d1e306`, `photo-1544191696-15693072a129`, `photo-1558981806-ec527fa84c39`.
