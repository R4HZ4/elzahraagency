import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import type { ImageAsset } from '../data/siteContent';

interface OptimizedImageProps {
  asset: ImageAsset;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function OptimizedImage({
  asset,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
}: OptimizedImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt || 'El Zahra Agency visual'}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-primary/10 text-primary ${className}`}
      >
        <ShieldCheck className="h-10 w-10 opacity-60" aria-hidden="true" />
        <span className="mt-2 font-serif text-sm font-medium opacity-75">El Zahra Agency</span>
      </div>
    );
  }

  return (
    <picture className="block h-full w-full">
      <source
        type="image/webp"
        srcSet={`${asset.webpMd} 960w, ${asset.webp} 1920w`}
        sizes={sizes}
      />
      <img
        src={asset.jpg}
        alt={alt}
        width={asset.width}
        height={asset.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={className}
      />
    </picture>
  );
}
