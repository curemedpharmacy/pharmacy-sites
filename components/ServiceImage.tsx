"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";

type ServiceImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isVideo?: boolean;
  videoUrl?: string;
  videoThumbnail?: string;
  postId?: string;
};

export function ServiceImage({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  isVideo = false,
  videoUrl,
  videoThumbnail,
  postId
}: ServiceImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [showVideo, setShowVideo] = useState(false);
  const fallbackImage = "/images/curemed/services/pharmacist-consultation.webp";

  const handleError = () => {
    setImgSrc(fallbackImage);
  };

  // عرض الفيديو في iframe
  if (showVideo && videoUrl) {
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=0&width=600`;

    return (
      <div className="relative w-full h-full">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allowFullScreen
          allow="autoplay; encrypted-media"
          title={alt}
        />
        <button
          onClick={() => setShowVideo(false)}
          className="absolute top-2 right-2 rounded-full bg-black/70 p-1.5 text-white hover:bg-black/90 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    );
  }

  // تحديد ما إذا كانت الصورة خارجية
  const isExternalImage = src.startsWith('https://scontent') || 
    src.startsWith('https://external') ||
    src.startsWith('http');

  // إذا كان فيديو، نعرض صورة مصغرة مع زر تشغيل يفتح الفيديو في نافذة جديدة
  if (isVideo && videoThumbnail) {
    const videoLink = postId ? `https://www.facebook.com/curemed/posts/${postId}` : videoUrl || '#';

    return (
      <div className="relative w-full h-full cursor-pointer group">
        <Image
          src={videoThumbnail}
          alt={alt}
          width={width}
          height={height}
          className={`${className} group-hover:scale-105 transition-transform duration-500`}
          onError={handleError}
          unoptimized={isExternalImage}
          priority={false}
        />
        <a
          href={videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber text-paper shadow-lg transition-transform hover:scale-110">
            <Play className="h-8 w-8 fill-current ml-1" />
          </div>
        </a>
        <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs text-white flex items-center gap-1">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Watch on Facebook
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      unoptimized={isExternalImage}
      priority={false}
    />
  );
}