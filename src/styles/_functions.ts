// @use "sass:math";
// @import "./_variables.scss";

// @mixin mobile {
//   @media (max-width: #{$mobile-breakpoint}) {
//     @content;
//   }
// }

// @mixin desktop {
//   @media (min-width: #{$mobile-breakpoint}) {
//     @content;
//   }
// }

// @function pxClamp($mobile, $size, $max) {
//   @return clamp(#{$mobile}px, calc(#{$size} / 1440 * 100vw), #{$max}px);
// }

// @function mobilePxClamp($min, $size, $max) {
//   @return clamp(#{$min}px, calc(#{$size} / 375 * 100vw), #{$max}px);
// }

// // Breakpoint
// @mixin mobile {
//   @media (max-width: #{$mobile-breakpoint}) {
//     @content;
//   }
// }

// @mixin desktop {
//   @media (min-width: #{$mobile-breakpoint}) {
//     @content;
//   }
// }

// @function mobile-vw($pixels, $base-vw: $mobile-width) {
//   @return math.div($pixels * 100vw, $base-vw);
// }

// @function mobile-vh($pixels, $base-vh: $mobile-height) {
//   @return math.div($pixels * 100vh, $base-vh);
// }

// @function desktop-vw($pixels, $base-vw: $desktop-width) {
//   @return math.div($pixels * 100vw, $base-vw);
// }

// @function desktop-vh($pixels, $base-vh: $desktop-height) {
//   @return math.div($pixels * 100vh, $base-vh);
// }

// @function columns($columns) {
//   @return calc(
//     (#{$columns} * var(--layout-column-width)) + ((#{$columns} - 1) * var(--layout-columns-gap))
//   );
// }

// @mixin hover {
//   @media (hover: hover) {
//     @content;
//   }
// }

// @mixin reduced-motion {
//   @media (prefers-reduced-motion: reduce) {
//     @content;
//   }
// }
