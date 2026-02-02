/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

// Model Viewer Web Component Types
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        loading?: 'auto' | 'lazy' | 'eager';
        'animation-name'?: string;
        'auto-play'?: boolean | string;
        'environment-image'?: string;
        'skybox-image'?: string;
        poster?: string;
        reveal?: 'auto' | 'interaction';
        'shadow-intensity'?: number | string;
        'shadow-softness'?: number | string;
        'camera-orbit'?: string;
        'camera-target'?: string;
        'field-of-view'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'min-field-of-view'?: string;
        'max-field-of-view'?: string;
        exposure?: string;
        'ar-status'?: string;
        'ar-modes'?: string;
        'ar-scale'?: string;
        'ios-src'?: string;
        'quick-look-browsers'?: string;
        'xr-environment'?: boolean;
        suppressHydrationWarning?: boolean;
      };
    }
  }
}
