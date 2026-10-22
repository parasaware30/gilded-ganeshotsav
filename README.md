invitation Link :-  https://cozy-swan-67c8dd.netlify.app

# Gilded Ganeshotsav

Create a premium, cinematic, highly interactive Ganpati Invitation Website inspired by a luxury digital wedding/invitation experience.

Overall Design

Theme: Traditional Maharashtrian Ganpati + modern luxury

Color palette:

Deep emerald green

Midnight navy

Black

Metallic gold

Warm cream/white

Premium, elegant, devotional and cinematic visual language.

The website must feel like a professionally designed digital invitation, NOT a normal business website.

Use Marathi typography wherever appropriate.

Use subtle gold borders, ornaments, particles, glow and traditional Indian decorative motifs.

Opening Animation

Create a full-screen cinematic intro.

Start with a completely dark screen.

Slowly reveal a deep green/navy background.

Add very subtle glowing particles.

Display a small circular/golden Ganpati-inspired emblem in the center.

The emblem should slowly scale up.

Add thin golden vertical/light lines behind it.

Use smooth cinematic easing.

Transition into the main invitation using a 3D perspective/zoom animation.

The transition should feel similar to opening a premium digital invitation.

Hero Section

Create a vertically oriented invitation card centered on the screen.

The card should:

Have rounded corners.

Use a deep green/navy gradient.

Have a thin metallic-gold border.

Contain elegant Marathi typography.

Include a Ganpati illustration/photo in the center.

Add subtle golden ornamental patterns around the Ganpati.

Use soft glow behind important elements.

Example Marathi heading:

"बाप्पांच्या आगमनाचा आनंद..."

Then display:

"श्री गणेशाय नमः"

and invitation information below.

3D Card Animation

The invitation card should NOT simply appear flat.

Implement:

Perspective transform

Slight X/Y rotation

Smooth floating movement

Parallax effect

Slow camera-like zoom

Depth shadows

Subtle tilt following mouse movement on desktop

Touch-based movement on mobile

The card should look like it is floating in a dark cinematic environment.

Scroll Experience

Scrolling should reveal each section with cinematic transitions.

Use:

GSAP ScrollTrigger

Fade-in

Scale animation

Blur-to-sharp transitions

Parallax

3D rotation

Mask reveals

Gold particle effects

Do not use basic scrolling animations.

Invitation Details Section

Create a premium section containing:

"गणपती बाप्पा मोरया!"

Then show:

Ganpati arrival date

Time

Location

Family name

Invitation message

Puja information

Use elegant Marathi typography and gold accents.

Family / Host Section

Create a section where the host/family photograph is revealed through an animated card.

Animation:

Photo card enters from the side.

Card rotates slightly in 3D.

Image becomes sharp from a blurred state.

Gold frame appears around the image.

Host name fades in underneath.

Example:

"सप्रेम आमंत्रण"

"[HOST NAME]"

Photo Reveal

Create a premium photo reveal animation.

The photograph should:

Start blurred

Slowly become sharp

Scale from 0.9 → 1

Have a soft gold glow

Use rounded corners

Have a thin golden border

Do NOT make it look like a normal gallery.

Event Timeline

Create a cinematic vertical timeline.

Example:

गणपती आगमन
↓
स्थापना
↓
महाप्रसाद
↓
आरती
↓
विसर्जन

Each timeline item should animate individually when entering the viewport.

Use gold connecting lines and glowing dots.

Location Section

Create a premium location section with:

Venue name

Full address

Google Maps button

Animated location icon

Gold glowing border

The button should have a smooth hover animation.

Countdown

Add a live countdown timer:

Days : Hours : Minutes : Seconds

Design it as luxury digital typography with gold numbers on a dark background.

Music

Add optional background devotional music.

Requirements:

Music starts only after user interaction if browser autoplay restrictions apply.

Add a floating music control.

Animated rotating music icon while playing.

Smooth fade-in/out.

Remember the user's music preference during the session.

Floating Effects

Add subtle:

Golden particles

Dust particles

Light rays

Glow

Floating bokeh

Very subtle Ganpati-themed decorative elements

Do NOT overload the page with particles.

Typography

Use a combination of:

Elegant Marathi/Devanagari display font

Modern clean sans-serif font for secondary information

Headings should feel traditional.
Body text should remain highly readable.

Navigation

Do not use a traditional navbar.

Instead create a minimal floating navigation control containing icons for:

Home
Invitation
Events
Gallery
Location

The navigation should be subtle and disappear/reappear based on scrolling.

Gallery

Create a cinematic photo gallery.

Use:

Masonry/grid layout

Hover zoom

Lightbox

Smooth image transitions

Gold borders

Scroll-triggered reveal

On mobile, optimize the gallery for vertical scrolling.

Final Section

End the experience with a cinematic outro.

Fade everything into black.

Then reveal a golden circular logo.

Below it show:

"Ganpati Bappa Morya"

and the creator/social media handle.

The logo should slowly glow and scale.

Then fade everything to black.

Technical Requirements

Frontend:

React.js

Vite

Tailwind CSS

GSAP

GSAP ScrollTrigger

Framer Motion where appropriate

Three.js only where it genuinely improves the experience

Lucide React icons

Backend:

Node.js

Express.js

MongoDB Atlas

JWT authentication

Storage:

Cloudinary for images/videos

Deployment:

Frontend: Netlify or Vercel

Backend: Render

Performance

The website must be highly optimized.

Implement:

Lazy loading

Image compression

WebP/AVIF images

Responsive images

Code splitting

Lazy-loaded animations

GPU-friendly transforms

Avoid unnecessary Three.js usage

Avoid animation on every DOM element simultaneously

Target:

Smooth 60 FPS animations on modern devices.

Fast mobile loading.

Lighthouse performance optimization.

Responsive Design

The website must work perfectly on:

Mobile 360px

Mobile 390px

Mobile 430px

Tablet

Laptop

Desktop

Large desktop

The mobile experience is the priority.

Do not simply shrink the desktop design. Create responsive layouts and animation behavior specifically for mobile.

Important Visual Rule

The final result should look like a premium cinematic digital Ganpati invitation, combining:

Traditional Maharashtrian aesthetics
+
Luxury gold design
+
3D perspective
+
Smooth cinematic animation
+
Modern interactive web technology.

Avoid:

Generic templates

Excessive cards

Plain Bootstrap-style layouts

Basic fade-in animations

Excessive colors

Cheap-looking gradients

Cluttered UI

The final website should feel like a high-end ₹20,000–₹50,000 custom invitation website, not an ordinary HTML invitation page.

Content

Make all invitation information editable from a central configuration/data object so the same website can easily be reused for different families/events.

Create reusable components for:

Intro

Hero

Invitation

Family

Event Timeline

Countdown

Gallery

Location

Music

Outro

Keep the architecture clean, modular and production-ready.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bff4ca70-0632-40fd-969a-8adab017daee).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
